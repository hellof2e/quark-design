import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import {
  property,
  state,
  customElement,
  Fragment,
  createRef,
  QuarkElement,
} from "quarkc";
import "@quarkd/icons/lib/close";
import style from "./style.css";
import { classNames } from "../../utils/index";
export interface Props {
  position?: "top" | "bottom" | "left" | "right";
  round?: boolean;
  open: boolean;
  closeable?: boolean;
  safearea?: boolean;
  zindex?: number;
}
export interface CustomEvent {
  close: () => void;
}
@customElement({
  tag: "quark-popupextra",
  style,
})
class QuarkPopupExtra extends QuarkElement {
  @property({
    type: Boolean,
  })
  open = false;

  @property({
    type: Boolean,
  })
  safearea = false;

  @property({
    type: Boolean,
  })
  hideclose = false;

  @property()
  title: string;

  @property()
  subtitle: string;

  @property()
  zindex?: number | string = undefined;

  @state()
  contentClassNames = "";

  wrap: any = createRef();

  componentDidMount() {
    if (this.zindex) {
      this.style.zIndex = `${this.zindex}`;
    }
    this.dealClass();
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
      } else {
        enableBodyScroll(current);
      }
      this.dealClass();
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

  dealClass() {
    const { current } = this.wrap;

    this.contentClassNames = classNames("quark-popup-extra-body", {
      // 不触顶时，展示顶部细线
      "quark-popup-extra-body-with-topline": current?.scrollTop > 1,
      // 不触底时，展示底部细线
      "quark-popup-extra-body-with-bottonline":
        current?.scrollHeight > current?.scrollTop + current?.clientHeight + 1,
    });
  }

  handleCloseBtnClick = () => {
    this.dispatchClose();
  };

  handleClick = () => {
    this.dispatchClose();
  };

  handleContentScroll = () => {
    this.dealClass();
  };

  render() {
    return (
      <Fragment>
        <div class="quark-popup-extra" part="popup-extra">
          <button
            class="quark-popup-extra-close-btn"
            part="close-btn"
            onClick={this.handleCloseBtnClick}
          >
            <quark-icon-close size="24" part="close-btn-icon" />
          </button>
          <header
            className={
              this.title || this.subtitle ? "quark-popup-extra-header" : ""
            }
            part="header"
          >
            <slot name="title">
              <div className="quark-popup-extra-toper">
                <div className="quark-popup-extra-title" part="title">
                  {this.title}
                </div>
              </div>
              {this.subtitle && (
                <div className="quark-popup-extra-subtitle" part="subtitle">
                  {this.subtitle}
                </div>
              )}
            </slot>
          </header>
          <div
            className={this.contentClassNames}
            ref={this.wrap}
            part="content"
            onScroll={this.handleContentScroll}
          >
            <slot></slot>
          </div>
          <slot name="footer"></slot>
        </div>
        <div
          class="quark-popup-extra-mask"
          onClick={this.handleClick}
          part="mask"
        />
      </Fragment>
    );
  }
}

export default QuarkPopupExtra;
