import "@quarkd/icons/lib/whitesuccess-o";
import "@quarkd/icons/lib/whiteerror-o";
import "@quarkd/icons/lib/whitewarning-o";
import { clearAllBodyScrollLocks } from "body-scroll-lock";

import {
  Fragment,
  property,
  customElement,
  createRef,
  QuarkElement,
} from "quarkc";
import style from "./style.css";
import "../overlay";
import "../loading";

let toast = null;
@customElement({ tag: "quark-toast", style })
class QuarkToast extends QuarkElement {
  @property()
  type = "";

  @property()
  icon = "";

  @property()
  position: Position = "middle";

  @property({ type: Boolean })
  show = false;

  @property()
  content: any = "";

  dRemove = false;

  timer: any = "";

  iconSize = 40;

  iconColor = "#ffffff";

  zIndex = 9999;

  loadingIconDirection: "horizontal" | "vertical" = "vertical";

  iconRef: any = createRef();

  toastRef: any = createRef();

  static allowMultiple = false;

  componentDidMount(): void {
    this.dRemove = false;
    const el = this.toastRef.current;
    if (el) {
      el.addEventListener("transitionend", function () {
        document.body.removeChild(el);
      });
    }
  }

  // 删除 toast dom
  transitionendChange = () => {
    if (!this.show && this.dRemove) {
      document.body.removeChild(this);
    }
  };

  shouldComponentUpdate(
    propName: string,
    oldValue: string | boolean,
    newValue: string | boolean
  ): boolean {
    if (propName === "show") {
      if (this.toastRef && this.toastRef.current) {
        const { current } = this.toastRef;
        // 设置退出过渡动画
        if (newValue) {
          // 由关闭到打开
          current.classList.remove("quark-toast-leave");
        } else {
          current.classList.add("quark-toast-leave");
        }
      }
    }
    return true;
  }

  hide = () => {
    this.show = false;
    if (this.type === "loading") clearAllBodyScrollLocks();
  };

  renderIcon = () => {
    if (this.type === "success") {
      return (
        <quark-icon-whitesuccess-o
          color={this.iconColor}
          size={this.iconSize}
          ref={this.iconRef}
        />
      );
    } else if (this.type === "failure") {
      return (
        <quark-icon-whiteerror-o
          color={this.iconColor}
          size={this.iconSize}
          ref={this.iconRef}
        />
      );
    } else if (this.type === "warning") {
      return (
        <quark-icon-whitewarning-o
          color={this.iconColor}
          size={this.iconSize}
          ref={this.iconRef}
        />
      );
    }
    return null;
  };
  renderLoading = () => {
    return (
      <quark-overlay open={this.show} zIndex={this.zIndex}>
        <div
          class={`quark-toast quark-toast--${this.loadingIconDirection}`}
          ref={this.toastRef}
        >
          {this.type !== "text" && this.renderIcon()}
          <quark-loading
            class="loading"
            size={this.iconSize}
            color="#ffffff"
            type="circular"
            vertical
          ></quark-loading>
          <slot>{this.content}</slot>
        </div>
      </quark-overlay>
    );
  };
  renderOther = () => (
    <div
      class="quark-toast"
      ref={this.toastRef}
      style={{ zIndex: this.zIndex }}
    >
      {this.type !== "text" && this.renderIcon()}
      <slot>{this.content}</slot>
    </div>
  );
  render() {
    return (
      <Fragment>
        {this.type === "loading" ? this.renderLoading() : this.renderOther()}
      </Fragment>
    );
  }
}

interface TOptions {
  msg: string;
  duration?: number;
  type: string;
  close?: any;
  show?: boolean;
  size?: number;
  zIndex?: number;
  position?: Position;
}
type Position = "top" | "middle" | "bottom";

type ToastParams = {
  duration?: number;
  close?: () => void;
  size?: number;
  position?: Position;
  zIndex?: number;
};

const defaultOptions = {
  msg: "",
  duration: 2000,
  type: "text",
  close: null,
};

const mountToast = (opts: TOptions) => {
  const {
    type,
    msg,
    duration = 2000,
    close,
    size = 40,
    zIndex = 9999,
    position = "middle",
    loadingIconDirection = "vertical",
  } = { ...defaultOptions, ...opts };
  let mountToast = null;
  if (QuarkToast.allowMultiple) {
    mountToast = document.createElement("quark-toast");
  } else {
    if (!toast) {
      toast = document.createElement("quark-toast");
    }
    mountToast = toast;
  }
  if (mountToast.timer) clearTimeout(mountToast.timer);
  mountToast.type = type;
  mountToast.content = msg;
  mountToast.iconSize = size;
  mountToast.zIndex = zIndex;
  mountToast.position = position;
  mountToast.loadingIconDirection = loadingIconDirection;
  document.body.appendChild(mountToast);
  setTimeout(() => {
    mountToast.show = true;
  });
  mountToast.dRemove = true;

  if (duration !== 0) {
    mountToast.timer = setTimeout(() => {
      // TODO：关闭的回调函数。怎么调用比较合适？
      mountToast.show = false;
      if (close) close();
    }, duration);
  }
  // eslint-disable-next-line consistent-return
  return mountToast;
};

const errorMsg = (msg: string) => {
  if (!msg) {
    console.warn("[Quark Toast]: msg cannot empty");
  }
};
export { QuarkToast };

export default {
  text: function (msg = "", opts: ToastParams = {}): QuarkToast {
    errorMsg(msg);
    return mountToast({ ...opts, type: "text", msg });
  },

  success: function (msg = "", opts: ToastParams = {}): QuarkToast {
    errorMsg(msg);
    return mountToast({ ...opts, type: "success", msg });
  },

  error: function (msg = "", opts: ToastParams = {}): QuarkToast {
    errorMsg(msg);
    return mountToast({ ...opts, type: "failure", msg });
  },

  warning: function (msg = "", opts: ToastParams = {}): QuarkToast {
    errorMsg(msg);
    return mountToast({ ...opts, type: "warning", msg });
  },

  loading: function (
    msg = "",
    opts: ToastParams & {
      loadingIconDirection?: "horizontal" | "vertical";
    } = {}
  ): QuarkToast {
    errorMsg(msg);
    return mountToast({
      size: opts.loadingIconDirection === "horizontal" ? 16 : 40,
      ...opts,
      type: "loading",
      msg,
    });
  },

  hide: function () {
    console.log(toast, "toast");
    if (toast) toast.hide();
  },

  allowMultiple: function (): void {
    QuarkToast.allowMultiple = true;
  },
};
