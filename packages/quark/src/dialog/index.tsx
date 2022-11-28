import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import QuarkElement, {
  Fragment,
  property,
  customElement,
  createRef,
} from "@quarkd/core";
import "../button";
import "@quarkd/icons/lib/close";
import style from "./style.css";
import "../overlay";
import Locale from "../locale";

interface DialogParams {
  title?: string;
  content?: string;
  oktext?: string;
  canceltext?: string;
  zindex?: number;
  autoclose?: boolean;
  notitle?: boolean;
  nofooter?: boolean;
  type?: "modal" | "confirm";
  hideclose?: boolean;
  maskclosable?: boolean;
  btnvertical?: boolean;
}
export interface Props extends DialogParams {
  open: boolean;
}
export interface CustomEvent {
  confirm: () => void;
  cancel: () => void;
  close: () => void;
}

@customElement({
  tag: "quark-dialog",
  style,
})
class QuarkDialog extends QuarkElement {
  @property()
  zindex = "999";

  @property()
  title = "";

  @property({ type: Boolean })
  notitle = false;

  @property()
  content: string | HTMLElement = "";

  @property()
  oktext: string = Locale.current.confirm;

  @property()
  canceltext: string = Locale.current.cancel;

  @property()
  type = "modal";

  @property({ type: Boolean })
  open = false;

  @property({ type: Boolean })
  autoclose = true;

  @property({ type: Boolean })
  nofooter = false;

  @property({ type: Boolean })
  hideclose = false;

  @property({ type: Boolean })
  maskclosable = false;

  @property({ type: Boolean })
  btnvertical = false;

  btnActive: any = null;

  dRemove = false;

  close: any = null;

  cancel: any = null;

  confirm: any = null;

  hasChangeBodyStyle = false;

  bodyRef: any = createRef();

  componentDidMount(): void {
    if (this.zindex) {
      this.style.zIndex = `${this.zindex}`;
    }
    if (this.shadowRoot)
      this.shadowRoot.addEventListener(
        "transitionend",
        this.transitionendChange
      );
  }

  componentWillUnmount(): void {
    clearAllBodyScrollLocks();
  }

  shouldComponentUpdate(propName: string, oldValue: string, newValue: string) {
    if (propName === "open" && newValue !== oldValue && this.bodyRef.current) {
      const { current } = this.bodyRef;
      if (!newValue) {
        enableBodyScroll(current);
        current.classList.remove("quark-dialog-enter");
        current.classList.add("quark-dialog-leave");
        this.btnActive = document.activeElement;
      } else {
        disableBodyScroll(current);
        current.classList.remove("quark-dialog-leave");
        current.classList.add("quark-dialog-enter");
      }
    }
    return true;
  }

  componentDidUpdate(propName: string, oldValue: string, newValue: string) {
    if (propName === "open" && newValue !== oldValue && this.bodyRef.current) {
      const { current } = this.bodyRef;
      if (!newValue) {
        enableBodyScroll(current);
      } else {
        disableBodyScroll(current);
      }
    }
  }

  closeIconClick = () => {
    this.$emit("close");
    if (this.close) this.close();
    this.hide();
  };

  cancelClick = () => {
    this.$emit("cancel");
    if (this.cancel) this.cancel();
    this.hide();
  };

  okClick = () => {
    this.$emit("confirm");
    if (this.confirm) this.confirm();
    this.hide();
  };

  hide() {
    if (this.autoclose) this.open = false;
  }

  slotChangeEvent = () => {
    const node = this.shadowRoot?.querySelector(".quark-dialog-body slot");
  };

  transitionendChange = () => {
    if (!this.open && this.dRemove) {
      document.body.removeChild(this);
      // 创建自定义对象 onclose
      this.$emit("close");
      if (this.btnActive) this.btnActive.focus();
    }
  };

  // 渲染上下按钮
  renderBtnVertical = () => {
    const footerClass = this.btnvertical
      ? "quark-dialog-footer quark-dialog-vertical"
      : "quark-dialog-footer";
    return (
      <div class={footerClass}>
        <quark-button type="primary" onClick={this.okClick}>
          {this.oktext}
        </quark-button>

        <quark-button
          class="quark-dialog-cancel-btn"
          onClick={this.cancelClick}
        >
          {this.canceltext}
        </quark-button>
      </div>
    );
  };

  handleClickMask = () => {
    if (this.maskclosable) {
      this.$emit("close");
      this.hide();
    }
  };

  render() {
    const footerClass = this.btnvertical
      ? "quark-dialog-footer quark-dialog-vertical"
      : "quark-dialog-footer";
    return (
      <Fragment>
        <div class="quark-dialog" ref={this.bodyRef}>
          {!this.hideclose && (
            <slot name="close">
              <div class="quark-dialog-close-btn">
                <div onClick={this.closeIconClick}>
                  <svg
                    width="16px"
                    height="16px"
                    viewBox="0 0 16 16"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <title>切片</title>
                    <g
                      id="弹窗验收"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="弹窗更新"
                        transform="translate(-641.000000, -346.000000)"
                        fill="#BCC4CC"
                        fill-rule="nonzero"
                      >
                        <g
                          id="编组"
                          transform="translate(350.000000, 334.000000)"
                        >
                          <g
                            id="图形类/01_图标/16x16/03_关闭_black备份-2"
                            transform="translate(291.000000, 12.000000)"
                          >
                            <path
                              d="M2.28033009,1.21966991 L7.937,6.876 L13.5940386,1.21966991 C13.8869318,0.926776695 14.3618055,0.926776695 14.6546988,1.21966991 C14.947592,1.51256313 14.947592,1.98743687 14.6546988,2.28033009 L8.997,7.937 L14.6546988,13.5940386 C14.947592,13.8869318 14.947592,14.3618055 14.6546988,14.6546988 C14.3618055,14.947592 13.8869318,14.947592 13.5940386,14.6546988 L7.937,8.997 L2.28033009,14.6546988 C1.98743687,14.947592 1.51256313,14.947592 1.21966991,14.6546988 C0.926776695,14.3618055 0.926776695,13.8869318 1.21966991,13.5940386 L6.876,7.937 L1.21966991,2.28033009 C0.926776695,1.98743687 0.926776695,1.51256313 1.21966991,1.21966991 C1.51256313,0.926776695 1.98743687,0.926776695 2.28033009,1.21966991 Z"
                              id="形状结合"
                              transform="translate(7.937184, 7.937184) rotate(-360.000000) translate(-7.937184, -7.937184) "
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>

                {/* <quark-icon-close
                  class="quark-dialog-close-btn"
                  size="16"
                  onClick={this.closeIconClick}
                /> */}
              </div>
            </slot>
          )}

          <div class="quark-dialog-content">
            {!this.notitle && (
              <slot name="title">
                <p class="quark-dialog-title">{this.title}</p>
              </slot>
            )}
            <slot onslotchange={this.slotChangeEvent}>
              {this.content && (
                <div
                  class="quark-dialog-body-wrap"
                  style={{
                    marginBottom: this.content ? 20 : 0,
                  }}
                >
                  <div class="quark-dialog-body">{this.content}</div>
                </div>
              )}
            </slot>
            {!this.nofooter && (
              <slot name="footer">
                {this.btnvertical ? (
                  this.renderBtnVertical()
                ) : (
                  <div class={footerClass}>
                    <quark-button
                      class="quark-dialog-cancel-btn"
                      style={{
                        display: this.type === "confirm" ? "none" : "flex",
                      }}
                      onClick={this.cancelClick}
                    >
                      {this.canceltext}
                    </quark-button>
                    <quark-button type="primary" onClick={this.okClick}>
                      {this.oktext}
                    </quark-button>
                  </div>
                )}
              </slot>
            )}
          </div>
        </div>
        <div class="quark-dialog-mask" onClick={this.handleClickMask} />
      </Fragment>
    );
  }
}

// 函数调用
export default function Dialog(
  params: DialogParams & CustomEvent
): QuarkDialog {
  const dialog: any = document.createElement("quark-dialog");
  const {
    title = "",
    content = "",
    oktext = Locale.current.confirm,
    canceltext = Locale.current.cancel,
    confirm,
    cancel,
    close,
    zindex,
    autoclose = true,
    nofooter = false,
    type = "",
    hideclose = false,
    maskclosable = false,
    btnvertical = false,
  } = params;
  dialog.dRemove = true;
  dialog.title = title;
  dialog.innerHTML = content;
  dialog.content = content;
  dialog.oktext = oktext;
  dialog.canceltext = canceltext;
  dialog.cancel = cancel;
  dialog.confirm = confirm;
  dialog.close = close;
  dialog.autoclose = autoclose;
  dialog.nofooter = nofooter;
  dialog.zindex = zindex;
  dialog.type = type;
  dialog.hideclose = hideclose;
  dialog.maskclosable = maskclosable;
  dialog.btnvertical = btnvertical;
  document.body.appendChild(dialog);
  setTimeout(() => {
    dialog.open = true;
  });
  return dialog;
}
export { QuarkDialog };
