import { h, render, VNode, Fragment } from "preact";
import { PropertyDeclaration, converterFunction } from "./models";
import DblKeyMap from "./dblKeyMap";
import { EventController, EventHandler } from "./eventController";
import delay from "./delay";

export { createRef } from "preact";

export { Fragment };

const isEmpty = (val: unknown) => !(val || val === false || val === 0);

const defaultConverter: converterFunction = (value, type?) => {
  let newValue = value;
  switch (type) {
    case Number:
      newValue = isEmpty(value) ? value : Number(value);
      break;
    case Boolean:
      newValue = !([null, "false", false, undefined].indexOf(value) > -1);
      break;
  }
  return newValue;
};

const defaultPropertyDeclaration: PropertyDeclaration = {
  observed: true,
  type: String,
  converter: defaultConverter,
};

export const property = (options: PropertyDeclaration = {}) => {
  return (target: unknown, name: string) => {
    return (target.constructor as typeof QuarkElement).createProperty(
      name,
      options
    );
  };
};

export const state = () => {
  return (target: unknown, name: string) => {
    return (target.constructor as typeof QuarkElement).createState(name);
  };
};

const ElementProperties: DblKeyMap<
  typeof QuarkElement,
  string,
  PropertyDeclaration
> = new DblKeyMap();

const Descriptors: DblKeyMap<
  typeof QuarkElement,
  string,
  (defaultValue?: any) => PropertyDescriptor
> = new DblKeyMap();

export function customElement(
  params: string | { tag: string; style?: string }
) {
  const { tag, style = "" } =
    typeof params === "string" ? { tag: params } : params;

  return (target: typeof QuarkElement) => {
    class NewQuarkElement extends target {
      static get observedAttributes() {
        const attributes: string[] = [];
        ElementProperties.forEach((elOption, constructor, elName) => {
          if (constructor === target && elOption.observed) {
            attributes.push(elName);
          }
        });
        return attributes;
      }

      static isBooleanProperty(propertyName: string) {
        let isBoolean = false;
        ElementProperties.forEach((elOption, constructor, elName) => {
          if (
            constructor === target &&
            elOption.type === Boolean &&
            propertyName === elName
          ) {
            isBoolean = true;
            return isBoolean;
          }
        });
        return isBoolean;
      }

      constructor() {
        super();

        if (style) {
          this.getStyles = () => style;
        }

        const shadowRoot = this.attachShadow({ mode: "open" });

        if (shadowRoot) {
          if (typeof this.getStyles === "function") {
            const styleEl = document.createElement("style");
            styleEl.innerHTML = this.getStyles();
            shadowRoot.append(styleEl);
          }
        }

        /**
         * 重写类的属性描述符，并重写属性初始值。
         * 注：由于子类的属性初始化晚于当前基类的构造函数，同名属性会导致属性描述符被覆盖，所以必须放在基类构造函数之后执行
         */
        Descriptors.forEach((descriptorCreator, constructor, propertyName) => {
          if (constructor === target) {
            Object.defineProperty(
              this,
              propertyName,
              descriptorCreator((this as any)[propertyName])
            );
          }
        });
      }
    }

    if (!customElements.get(tag)) {
      customElements.define(tag, NewQuarkElement);
    }
  };
}

export default class QuarkElement extends HTMLElement {
  static h = h;

  protected static getPropertyDescriptor(
    name: string,
    options: PropertyDeclaration
  ): (defaultValue?: any) => PropertyDescriptor {
    return (defaultValue?: any) => {
      return {
        get(this: QuarkElement): any {
          let val = this.getAttribute(name);

          if (!isEmpty(defaultValue)) {
            // 判断val是否为空值
            // const isEmpty = () => !(val || val === false || val === 0)
            // 当类型为非Boolean时，通过isEmpty方法判断val是否为空值
            // 当类型为Boolean时，在isEmpty判断之外，额外认定空字符串不为空值
            //
            // 条件表达式推导过程
            // 由：(options.type !== Boolean && isEmpty(val)) || (options.type === Boolean && isEmpty(val) && val !== '')
            // 变形为：isEmpty(val) && (options.type !== Boolean || (options.type === Boolean && val !== ''))
            // 其中options.type === Boolean显然恒等于true：isEmpty(val) && (options.type !== Boolean || (true && val !== ''))
            // 得出：isEmpty(val) && (options.type !== Boolean || val !== '')
            if (isEmpty(val) && (options.type !== Boolean || val !== "")) {
              return defaultValue;
            }
          }
          if (typeof options.converter === "function") {
            val = options.converter(val, options.type) as string;
          }
          return val;
        },
        set(this: QuarkElement, value: string | boolean | null) {
          let val = value as string;
          if (typeof options.converter === "function") {
            val = options.converter(value, options.type) as string;
          }

          if (val) {
            if (typeof val === "boolean") {
              this.setAttribute(name, "");
            } else {
              this.setAttribute(name, val);
            }
          } else {
            this.removeAttribute(name);
          }
        },
        configurable: true,
        enumerable: true,
      };
    };
  }

  protected static getStateDescriptor(): () => PropertyDescriptor {
    return (defaultValue?: any) => {
      let _value = defaultValue;
      return {
        get(this: QuarkElement): any {
          return _value;
        },
        set(this: QuarkElement, value: string | boolean | null) {
          _value = value;
          this._render();
        },
        configurable: true,
        enumerable: true,
      };
    };
  }

  static createProperty(name: string, options: PropertyDeclaration) {
    const newOpt = Object.assign({}, defaultPropertyDeclaration, options);
    ElementProperties.set(this, name, newOpt);
    Descriptors.set(this, name, this.getPropertyDescriptor(name, newOpt));
  }

  static createState(name: string) {
    Descriptors.set(this, name, this.getStateDescriptor());
  }

  getStyles(): string {
    return "";
  }

  private eventController: EventController = new EventController();
  private lastRootVNode?: VNode;

  private rootPatch = (newRootVNode: any) => {
    if (this.shadowRoot) {
      render(newRootVNode, this.shadowRoot);
    }
  };

  /**
   * 延迟patch，用于优化减少patch次数
   * 存在一些不可预知的问题，暂时不用
   */
  private delayPatch = delay(this.rootPatch);

  private getRootEl() {
    return [].slice.call(this.shadowRoot?.children || []).slice(1);
  }

  private _render() {
    const newRootVNode: VNode = this.render();
    if (newRootVNode) {
      this.rootPatch(newRootVNode);
    }
  }

  private _updateProperty() {
    (this.constructor as any).observedAttributes.forEach(
      (propertyName: string) => {
        (this as any)[propertyName] = (this as any)[propertyName];
      }
    );
  }

  private _updateBooleanProperty(propertyName: string) {
    // 判断是否是 boolean
    if ((this.constructor as any).isBooleanProperty(propertyName)) {
      // 针对 false 场景走一次 set， true 不需要重新走 set
      if (!(this as any)[propertyName]) {
        (this as any)[propertyName] = (this as any)[propertyName];
      }
    }
  }

  $on = (eventName: string, eventHandler: EventHandler, el?: Element) => {
    return this.eventController.bindListener(
      el || this,
      eventName,
      eventHandler
    );
  };

  $emit<T>(eventName: string, customEventInit?: CustomEventInit<T>) {
    return this.dispatchEvent(
      new CustomEvent(
        eventName,
        Object.assign({ bubbles: true }, customEventInit)
      )
    );
  }

  /**
   * 此时组件 dom 已插入到页面中，等同于 connectedCallback() { super.connectedCallback(); }
   */
  componentDidMount() {}

  /**
   * disconnectedCallback 触发时、dom 移除前执行，等同于 disconnectedCallback() { super.disconnectedCallback(); }
   */
  componentWillUnmount() {}

  /**
   * 控制当前属性变化是否导致组件渲染
   * @param propName 属性名
   * @param oldValue 属性旧值
   * @param newValue 属性新值
   * @returns boolean
   */
  shouldComponentUpdate(propName: string, oldValue: string, newValue: string) {
    return oldValue !== newValue;
  }

  componentDidUpdate(propName: string, oldValue: string, newValue: string) {}

  /**
   * 组件的render方法，
   * 自动执行this.shadowRoot.innerHTML = this.render()
   * @returns VNode
   */
  render() {
    return "" as any;
  }

  connectedCallback() {
    this._updateProperty();

    /**
     * 初始值重写后首次渲染
     */
    this._render();

    if (typeof this.componentDidMount === "function") {
      this.componentDidMount();
    }
  }

  attributeChangedCallback(name: string, oldValue: string, value: string) {
    // 因为 React 的属性变更并不会触发 set，此时如果 boolean 值变更，这里的 value 会是字符串，组件内部通过 get 操作可以获取到正确的类型
    const newValue = this[name] || value;
    if (typeof this.shouldComponentUpdate === "function") {
      if (!this.shouldComponentUpdate(name, oldValue, newValue)) {
        return;
      }
    }
    this._render();

    if (typeof this.componentDidUpdate === "function") {
      this.componentDidUpdate(name, oldValue, newValue);
    }

    // 因为 React的属性变更并不会触发set，此时如果boolean值变更，这里的value会是字符串，组件内部通过get操作可以正常判断类型，但css里面有根据boolean属性设置样式的将会出现问题
    if (value !== oldValue) {
      // boolean 重走set
      this._updateBooleanProperty(name);
    }
  }

  disconnectedCallback() {
    if (typeof this.componentWillUnmount === "function") {
      this.componentWillUnmount();
    }

    this.eventController.removeAllListener();
    this.rootPatch(null);
  }
}
