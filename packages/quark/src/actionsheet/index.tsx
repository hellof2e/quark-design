import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import QuarkElement, { property, customElement, createRef } from "@quarkd/core";

import style from "./style.css";

type Action = {
  name: string;
  color?: string;
  fontSize?: number;
};

type ActionParams = {
  title?: string;
  actions: Action[];
  cancelText?: string;
  titleColor?: string;
  titleFontSize?: number;
  cancelTextColor?: string;
  cancelTextFontSize?: number;
  select: (index: number, action: Action) => void;
  cancel?: () => void;
  close?: () => void;
  zIndex?: number;
};
@customElement({
  tag: "quark-actionsheet",
  style,
})
class QuarkActionSheet extends QuarkElement {
  constructor() {
    super();
  }

  @property({
    type: Boolean,
  })
  open = false;

  wrap: any = createRef();

  titl: string | undefined = undefined;

  actions: Action[] = [];

  cancelText: string | undefined = undefined;

  titleColor: string | undefined = undefined;

  titleFontSize: number | undefined = undefined;

  cancelTextColor: string | undefined = undefined;

  cancelTextFontSize: number | undefined = undefined;

  zIndex = 999;

  select: (index: number, action: Action) => void = () => {};

  cancel: () => void = () => {};

  close: () => void = () => {};

  componentDidMount() {
    if (this.zIndex) {
      this.style.zIndex = `${this.zIndex}`;
    }
    this.addEventListener("transitionend", this.handleTransitionend);
    this.addEventListener("click", this.handleHostClick);
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
        current.classList.remove("quark-actionsheet-leave");
      } else if (oldValue && !newValue) {
        // 由打开到关闭
        current.classList.add("quark-actionsheet-leave");
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
    }
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
    this.removeEventListener("transitionend", this.handleTransitionend);
    this.removeEventListener("click", this.handleHostClick);
  }

  handleHostClick() {
    this.handleClick();
    if (this.close && typeof this.close === "function") {
      this.close();
    }
  }

  handleClick = () => {
    this.open = false;
  };

  handleTransitionend(ev: any) {
    if (ev.propertyName === "opacity" && !this.open) {
      document.body.removeChild(this);
    }
  }

  handleActionClick = (index: number, action: Action) => {
    this.handleClick();
    if (this.select && typeof this.select === "function") {
      this.select(index, action);
    }
  };

  handleContainerClick(ev: any) {
    ev.stopPropagation();
  }

  handleCancelClick = () => {
    this.handleClick();
    if (this.cancel && typeof this.cancel === "function") {
      this.cancel();
    }
  };

  renderActions = () => {
    if (!this.actions || this.actions.length <= 0) {
      return null;
    }
    const actions = this.actions.map((action: Action, index: number) => {
      return (
        <div
          class="quark-actionsheet-actions"
          style={{
            color: action.color ? action.color : undefined,
            fontSize: action.fontSize ? `${action.fontSize}px` : undefined,
          }}
          onClick={() => {
            this.handleActionClick(index, action);
          }}
        >
          {action.name}
        </div>
      );
    });
    return actions;
  };

  render() {
    return (
      <div
        class="quark-actionsheet"
        ref={this.wrap}
        onClick={this.handleContainerClick}
      >
        {this.titl && (
          <div
            class="quark-actionsheet-title"
            style={{
              color: this.titleColor ? this.titleColor : undefined,
              fontSize: this.titleFontSize ? this.titleFontSize : undefined,
            }}
          >
            {this.titl}
          </div>
        )}
        <div class="quark-actionsheet-action">{this.renderActions()}</div>
        {this.cancelText && (
          <div class="quark-actionsheet-cancel">
            <div class="quark-actionsheet-cancel-gap"></div>
            <div
              class="quark-actionsheet-cancel-text"
              style={{
                color: this.cancelTextColor ? this.cancelTextColor : undefined,
                fontSize: this.cancelTextFontSize
                  ? this.cancelTextFontSize
                  : undefined,
              }}
              onClick={this.handleCancelClick}
            >
              {this.cancelText}
            </div>
          </div>
        )}
      </div>
    );
  }
}

// // 函数调用
export default function (params: ActionParams): QuarkActionSheet {
  const actionSheet = document.createElement(
    "quark-actionsheet"
  ) as QuarkActionSheet;
  const {
    title,
    actions,
    cancelText,
    titleColor,
    titleFontSize,
    cancelTextColor,
    cancelTextFontSize,
    select,
    cancel,
    close,
    zIndex,
  } = params;
  actionSheet.titl = title;
  actionSheet.actions = actions;
  actionSheet.cancelText = cancelText;
  actionSheet.titleColor = titleColor;
  actionSheet.titleFontSize = titleFontSize;
  actionSheet.cancelTextColor = cancelTextColor;
  actionSheet.cancelTextFontSize = cancelTextFontSize;
  actionSheet.select = select;
  actionSheet.cancel = cancel;
  actionSheet.close = close;
  actionSheet.zIndex = zIndex;
  document.body.appendChild(actionSheet);
  setTimeout(() => {
    actionSheet.open = true;
  }, 10);

  return actionSheet;
}
