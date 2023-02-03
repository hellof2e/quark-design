# Quark Core

Quark Core 是一个优化 web components 开发体验的轻量级框架。部分实现思路参考[Lit](https://lit.dev/docs/getting-started/)。

## 使用

```tsx
import QuarkElement, {
  Fragment,
  property,
  state,
  createRef,
  customElement,
} from "quarkc";
import style from "./style.css";

@customElement({ tag: "quark-noticebar", style })
class QuarkNoticebar extends QuarkElement {
  @property()
  title: string = "";

  @property({ type: Boolean })
  righthide: boolean = false;

  @state()
  count: number = 1;

  rightSlotRef = createRef();

  handleRightClick = () => {
    this.$emit("rightclick");

    // 演示state装饰器
    this.count += 1;
  };

  handleRightSlotChange = () => {
    const { current } = this.rightSlotRef;
    if (current) {
      const hasChild = current.assignedNodes().length;
      current.style.paddingRight = hasChild ? "0px" : "11px";
    }
  };

  render() {
    return (
      <Fragment>
        <span>{this.title}</span>
        <span>{this.count}</span>
        <slot
          name="right"
          ref={this.rightSlotRef}
          onslotchange={this.handleRightSlotChange}
        >
          {!this.righthide && (
            <quark-icon
              name="right"
              size="15"
              onClick={this.handleRightClick}
            />
          )}
        </slot>
      </Fragment>
    );
  }
}

export default QuarkNoticebar;
```

## API

1. 装饰器：customElement(componentName: string) - 封装了 customElements.define 能力；
1. 装饰器：property(options: Options)
   - observed
     - 类型：boolean
     - 默认值：true
     - 说明：标记当前属性是否接收外部的参数变化，会自动加入到 observedAttributes 数组中。
   - type
     - 值：Boolean | Number | String
     - 默认值：String
     - 说明：标记当前属性的类型，主要用于 Boolean 以及 Number 类型值的转换处理。
   - converter
     - 声明：(val: any, type?: typeof Boolean | typeof Number | typeof String) => any
     - 说明：从外部获取到属性时的值转换方法。
1. 实例方法：render
   - 声明：() => string
   - 说明：返回的字符串用于赋值给 shadowRoot.innerHTML，触发时机为 QuarkElement 基类的 connectedCallback 执行时。
1. 生命周期方法：componentDidMount
   - 声明：() => void
   - 说明：connectedCallback 触发时执行，此时组件 dom 已渲染完毕。相当于 connectedCallback() { super.connectedCallback(); }
1. 生命周期方法：shouldComponentUpdate
   - 声明：(propName: string, oldValue, newValue) => boolean
   - 说明：attributeChangedCallback 触发时执行，用于控制当前属性变化是否导致组件更新渲染
1. 生命周期方法：componentDidUpdate
   - 声明：(propName: string, oldValue, newValue) => void
   - 说明：attributeChangedCallback 触发,render 执行后触发，此时可拿到更新后的 dom 做相关操作
1. 生命周期方法：componentWillUnmount
   - 声明：() => void
   - 说明：disconnectedCallback 触发时、dom 移除前执行，等同于 disconnectedCallback() { super.disconnectedCallback(); }
1. 实例方法：$on
   - 声明：(eventName: string, eventHandler: EventHandler, el?: Element) => void
   - 说明：支持为指定元素增加事件监听，并会在组件销毁时自动移除
1. 实例方法：$emit
   - 声明：<T>(eventName: string, customEventInit: CustomEventInit<T>) => void
   - 说明：在当前组件中抛出自定义事件，相当于 this.dispatchEvent(new CustomEvent(eventName, customEventInit))。

## 其他说明

1. 无需再实现 static get observedAttributes() {}
1. 所有属性都建议增加默认值。
1. 无需再手动执行 this.attachShadow({ mode: 'open' })。
1. 旧的 upgradeProperty 方法能力已内置，代码中可以省略。
1. Fragment 的使用不是必须的，当你的 render 需要返回标签数组时使用，相当于 react 的<></>
1. event 需要全小写，例如 ontouchstart、ontouchend、onclick
