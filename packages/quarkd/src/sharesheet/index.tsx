import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { property, customElement, createRef, QuarkElement } from "quarkc";
import Locale from "../locale";
import style from "./style.css";
interface Option {
  name: string;
  icon: string;
}

export interface Props {
  options: Option[];
  titleColor?: string;
  titleFontSize?: number;
  cancelColor?: string;
  cancelFontSize?: number;
  select: (index: number, action: Option) => void;
  cancel?: () => void;
  close?: () => void;
  zIndex?: number;
}
@customElement({
  tag: "quark-sharesheet",
  style,
})
class QuarkShareSheet extends QuarkElement {
  @property({
    type: Boolean,
  })
  open = false;

  wrap: any = createRef();

  options: Option[] = [];

  titleColor?: string = undefined;

  titleFontSize?: number = undefined;

  cancelColor?: string = undefined;

  cancelFontSize?: number = undefined;

  zIndex = 999;

  select: (index: number, action: Option) => void = () => {};

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

  handleTransitionend(ev: TransitionEvent) {
    if (ev.propertyName === "opacity" && !this.open) {
      document.body.removeChild(this);
    }
  }

  handleActionClick = (index: number, action: Option) => {
    this.handleClick();
    if (this.select && typeof this.select === "function") {
      this.select(index, action);
    }
  };

  handleContainerClick(ev: PointerEvent) {
    ev.stopPropagation();
  }

  handleCancelClick = () => {
    this.handleClick();
    if (this.cancel && typeof this.cancel === "function") {
      this.cancel();
    }
  };

  renderOptions = () => {
    const itemMargin = this.getMargin();
    if (!this.options || this.options.length <= 0) {
      return null;
    }
    const itemLength = this.options.length;
    const actions = this.options.map((option: Option, index: number) => {
      return (
        <div
          class="quark-sharesheet-item"
          part="item"
          style={{
            marginLeft: itemMargin,
            marginTop: itemLength > 4 && index > 3 ? 8 : undefined,
          }}
          onClick={() => {
            this.handleActionClick(index, option);
          }}
        >
          <img
            src={option.icon}
            class="quark-sharesheet-item-icon"
            part="icon"
          />
          <div class="quark-sharesheet-item-text" part="text">
            {option.name}
          </div>
        </div>
      );
    });
    return actions;
  };

  getMargin = () => {
    const itemWidth = 60;
    let itemMargin = 16;
    const width = document.body.clientWidth;
    // 每行最多显示4个
    if (this.options.length <= 4) {
      itemMargin =
        (width - this.options.length * itemWidth) / (this.options.length + 1);
    } else {
      itemMargin = (width - 4 * itemWidth) / (4 + 1);
    }

    return itemMargin;
  };

  render() {
    // 计算 margin
    return (
      <div
        class="quark-sharesheet"
        ref={this.wrap}
        onClick={this.handleContainerClick}
        part="root"
      >
        <div
          class="quark-sharesheet-title"
          part="title"
          style={{
            color: this.titleColor ? this.titleColor : undefined,
            fontSize: this.titleFontSize ? this.titleFontSize : undefined,
          }}
        >
          {Locale.current.actionSheet.shareTitle}
        </div>
        <div class="quark-sharesheet-action" part="action">
          {this.renderOptions()}
        </div>
        <div class="quark-sharesheet-cancel" part="cancel">
          <div class="quark-sharesheet-cancel-gap" part="gap"></div>
          <div
            class="quark-sharesheet-cancel-text"
            part="cancel-text"
            style={{
              color: this.cancelColor ? this.cancelColor : undefined,
              fontSize: this.cancelFontSize ? this.cancelFontSize : undefined,
            }}
            onClick={this.handleCancelClick}
          >
            {Locale.current.cancel}
          </div>
        </div>
      </div>
    );
  }
}

// // 函数调用
export default function (params: Props): QuarkShareSheet {
  const shareSheet = document.createElement(
    "quark-sharesheet"
  ) as QuarkShareSheet;
  const {
    options,
    titleColor,
    titleFontSize,
    cancelColor,
    cancelFontSize,
    select,
    cancel,
    close,
    zIndex,
  } = params;
  shareSheet.options = options;
  shareSheet.titleColor = titleColor;
  shareSheet.titleFontSize = titleFontSize;
  shareSheet.cancelColor = cancelColor;
  shareSheet.cancelFontSize = cancelFontSize;
  shareSheet.select = select;
  shareSheet.cancel = cancel;
  shareSheet.close = close;
  shareSheet.zIndex = zIndex;
  document.body.appendChild(shareSheet);
  setTimeout(() => {
    shareSheet.open = true;
  }, 10);

  return shareSheet;
}
