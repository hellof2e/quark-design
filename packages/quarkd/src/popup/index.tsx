import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import {
  property,
  customElement,
  Fragment,
  createRef,
  QuarkElement,
} from "quarkc";
import "@quarkd/icons/lib/close";
import style from "./style.css";
export interface Props {
  position?: "top" | "bottom" | "left" | "right";
  round?: boolean;
  open: boolean;
  closeable?: boolean;
  forbidmaskclick?: boolean;
  safearea?: boolean;
  zindex?: number;
}
export interface CustomEvent {
  clickoverlay: () => void;
  close: () => void;
  closed: () => void;
  opened: () => void;
}
@customElement({
  tag: "quark-popup",
  style,
})
class QuarkPopup extends QuarkElement {
  constructor() {
    super();
  }

  @property({
    type: Boolean,
  })
  open = false;

  @property({
    type: Boolean,
  })
  forbidmaskclick = false;

  @property({
    type: Boolean,
  })
  safearea = false;

  @property({
    type: Boolean,
  })
  round = false;

  @property({
    type: Boolean,
  })
  closeable = false;

  @property()
  position = "bottom";

  @property()
  zindex: number | string | undefined = undefined;

  wrap: any = createRef();

  componentDidMount() {
    if (this.zindex) {
      this.style.zIndex = `${this.zindex}`;
    }
  }

  shouldComponentUpdate(
    propName: string,
    oldValue: string | boolean,
    newValue: string | boolean
  ): boolean {
    if (propName === "open" && this.wrap && this.wrap.current) {
      const { current } = this.wrap;
      // 设置退出过渡动画
      if (newValue) {
        // 由关闭到打开
        current.classList.remove("leave");
      } else if (oldValue && !newValue) {
        // 由打开到关闭
        current.classList.add("leave");
      }
    }
    return true;
  }

  componentDidUpdate(propName: string, oldValue: string, newValue: string) {
    if (propName === "open" && this.wrap && this.wrap.current) {
      const { current } = this.wrap;
      if (newValue) {
        disableBodyScroll(current);
        this.dispatchEvent(new CustomEvent("opened"));
      } else {
        enableBodyScroll(current);
        this.dispatchEvent(new CustomEvent("closed"));
      }
    }
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  dispatchClose() {
    // this.open = false;
    // 标签调用触发
    this.dispatchEvent(new CustomEvent("close"));
  }

  handleCloseBtnClick = () => {
    this.dispatchClose();
  };

  handleClick = () => {
    this.dispatchEvent(new CustomEvent("clickoverlay"));
    if (this.forbidmaskclick) {
      return;
    }
    this.dispatchClose();
  };

  render() {
    return (
      <Fragment>
        <div class="quark-popup" ref={this.wrap}>
          {this.closeable && this.position === "bottom" && (
            <button
              class="quark-popup-close-btn"
              onClick={this.handleCloseBtnClick}
            >
              <quark-icon-close size="24" />
            </button>
          )}
          <slot></slot>
        </div>
        <div class="quark-popup-mask" onClick={this.handleClick} />
      </Fragment>
    );
  }
}

export default QuarkPopup;
