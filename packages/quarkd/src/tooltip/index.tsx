import { property, customElement, createRef, QuarkElement } from "quarkc";
import "@quarkd/icons/lib/close";
import style from "./style.css";
export interface Props {
  open: boolean;
  placement?:
    | "top"
    | "topleft"
    | "topright"
    | "left"
    | "lefttop"
    | "leftbottom"
    | "right"
    | "righttop"
    | "rightbottom"
    | "bottom"
    | "bottomleft"
    | "bottomright";
  zindex?: number;
  tips: string;
  closeable?: boolean;
  autoclose?: boolean;
  opentime?: number;
  scrollhidden?: boolean;
}
export interface CustomEvent {
  close: () => void;
}
@customElement({ tag: "quark-tooltip", style })
class QuarkTooltip extends QuarkElement {
  constructor() {
    super();
  }

  @property()
  placement = "bottom";

  @property()
  tips = "";

  @property({
    type: Boolean,
  })
  open = false;

  @property({
    type: Boolean,
  })
  closeable = false;

  @property({
    type: Boolean,
  })
  autoclose = false;

  @property()
  opentime = 3000;

  @property({
    type: Boolean,
  })
  scrollhidden = false;

  @property()
  zindex = "999";

  @property()
  size = "";

  timer?: number = undefined;

  tipsRef: any = createRef();

  componentDidMount() {
    if (this.zindex) {
      this.style.zIndex = this.zindex;
    }

    if (this.scrollhidden) {
      window.addEventListener("scroll", this.windowScrollListener);
    }

    document.addEventListener("click", (e) => {
      if (!e.composedPath().includes(this) && this.open) {
        // 打开状态，并且外界点击
        this.closeEmit();
      }
    });

    this.addTimer();
  }

  shouldComponentUpdate(
    propName: string,
    oldValue: string | boolean,
    newValue: string | boolean
  ): boolean {
    if (propName === "open" && this.tipsRef && this.tipsRef.current) {
      const { current } = this.tipsRef;
      // 设置退出过渡动画
      if (newValue) {
        // 由关闭到打开
        current.classList.remove("quark-tooltip-leave");
        this.addTimer();
      } else if (oldValue && !newValue) {
        // 由打开到关闭
        current.classList.add("quark-tooltip-leave");
        this.clearTimer();
      }
    }
    return true;
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.windowScrollListener);
    this.clearTimer();
  }

  windowScrollListener = () => {
    if (this.open) {
      this.closeEmit();
    }
  };

  addTimer = () => {
    if (!this.open) {
      return;
    }
    if (this.autoclose) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.closeEmit();
      }, this.opentime);
    }
  };

  clearTimer = () => {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  };

  addRemoveAnimation = () => {
    if (this.tipsRef && this.tipsRef.current) {
      const { current } = this.tipsRef;
      current.classList.add("quark-tooltip-leave");
    }
  };

  closeEmit = () => {
    this.addRemoveAnimation();
    this.open = false;
    this.$emit("close");
  };

  handleTipsClick = (ev: PointerEvent) => {
    ev.stopPropagation();
    if (!this.closeable) {
      return;
    }
    this.closeEmit();
  };

  renderCloseIcon = () => {
    if (!this.closeable) {
      return null;
    }
    return <quark-icon-close style={{ opacity: 0.7, marginLeft: 9 }} />;
  };

  renderTips = () => {
    if (
      this.placement === "top" ||
      this.placement === "topleft" ||
      this.placement === "topright" ||
      this.placement === "left" ||
      this.placement === "lefttop" ||
      this.placement === "leftbottom"
    ) {
      return (
        <div
          class="quark-tooltip-tips"
          ref={this.tipsRef}
          onClick={this.handleTipsClick}
        >
          <div class="quark-tooltip-content">
            <div>{this.tips}</div>
            {this.renderCloseIcon()}
          </div>
          <div class="quark-tooltip-triangle" />
        </div>
      );
    }
    return (
      <div
        class="quark-tooltip-tips"
        ref={this.tipsRef}
        onClick={this.handleTipsClick}
      >
        <div class="quark-tooltip-triangle" />
        <div class="quark-tooltip-content">
          <div>{this.tips}</div>
          {this.renderCloseIcon()}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div class="quark-tooltip">
        <slot></slot>
        {this.renderTips()}
      </div>
    );
  }
}

export default QuarkTooltip;
