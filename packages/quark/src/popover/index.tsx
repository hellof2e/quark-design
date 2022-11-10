import QuarkElement, {
  property,
  state,
  customElement,
  createRef,
} from "@quarkd/core";
import style from "./style.css";
import { classNames } from "../../utils/index";

export interface PopoverAction {
  text: string;
  icon?: string;
  disabled?: boolean;
}
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
  theme?: "light" | "dark";
  scroolhidden?: boolean;
}
export interface CustomEvent {
  close: () => void;
  select: (e: { detail: { action: PopoverAction; index: number } }) => void;
}
@customElement({
  tag: "quark-popover",
  style,
})
class QuarkPopover extends QuarkElement {
  constructor() {
    super();
  }

  @property()
  placement = "bottom";

  @property()
  theme = "dark";

  @state()
  actions: PopoverAction[] = [];

  @property({
    type: Boolean,
  })
  open = false;

  @property({
    type: Boolean,
  })
  scroolhidden = false;

  @property()
  zindex = "999";

  tipsRef: any = createRef();

  componentDidMount() {
    if (this.zindex) {
      this.style.zIndex = this.zindex;
    }

    if (this.scroolhidden) {
      window.addEventListener("scroll", this.windowScrollListener);
    }

    document.addEventListener("click", (e) => {
      if (!e.composedPath().includes(this) && this.open) {
        // 打开状态，并且外界点击
        this.closeEmit();
      }
    });
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
        current.classList.remove("quark-popover-leave");
      } else if (oldValue && !newValue) {
        // 由打开到关闭
        current.classList.add("quark-popover-leave");
      }
    }
    return true;
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.windowScrollListener);
  }

  windowScrollListener = () => {
    if (this.open) {
      this.closeEmit();
    }
  };

  addRemoveAnnimation = () => {
    if (this.tipsRef && this.tipsRef.current) {
      const { current } = this.tipsRef;
      current.classList.add("quark-popover-leave");
    }
  };

  setActions = (actions: PopoverAction[]) => {
    if (!actions || actions.length <= 0) return;
    this.actions = actions;
  };

  closeEmit = () => {
    this.addRemoveAnnimation();
    this.open = false;
    this.$emit("close");
  };

  handleActionClick = (ev: any, index: number) => {
    ev.stopPropagation();
    this.$emit("select", {
      detail: {
        action: this.actions[index],
        index: index,
      },
    });
  };

  renderIcon = (icon?: string) => {
    if (icon && icon.includes("http")) {
      return (
        <img
          src={icon}
          style={{ marginRight: 10 }}
          class="quark-popover-icon"
        />
      );
    }
    return null;
  };

  renderActions = () => {
    if (
      this.placement === "top" ||
      this.placement === "topleft" ||
      this.placement === "topright" ||
      this.placement === "left" ||
      this.placement === "lefttop" ||
      this.placement === "leftbottom"
    ) {
      return (
        <div class="quark-popover-tips" ref={this.tipsRef}>
          <div class="quark-popover-content">
            <slot name="content">
              {this.actions.map((action: PopoverAction, index: number) => {
                const actionClass = classNames(
                  "quark-popover-action-container",
                  {
                    "quark-action-container-disable":
                      action.disabled && action.disabled === true,
                  }
                );
                return (
                  <div
                    class={actionClass}
                    onClick={(e) => {
                      this.handleActionClick(e, index);
                    }}
                  >
                    {this.renderIcon(action.icon)}
                    <div>{action.text}</div>
                  </div>
                );
              })}
            </slot>
          </div>
          <div class="quark-popover-triangle" />
        </div>
      );
    }
    return (
      <div class="quark-popover-tips" ref={this.tipsRef}>
        <div class="quark-popover-triangle" />
        <div class="quark-popover-content">
          <slot name="content">
            {this.actions.map((action: PopoverAction, index: number) => {
              const actionClass = classNames("quark-popover-action-container", {
                "quark-action-container-disable":
                  action.disabled && action.disabled === true,
              });
              return (
                <div
                  class={actionClass}
                  onClick={(e) => {
                    this.handleActionClick(e, index);
                  }}
                >
                  {this.renderIcon(action.icon)}
                  <div>{action.text}</div>
                </div>
              );
            })}
          </slot>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div class="quark-popover">
        <slot></slot>
        {this.renderActions()}
      </div>
    );
  }
}

export default QuarkPopover;
