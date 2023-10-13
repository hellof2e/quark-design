import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import {
  property,
  customElement,
  createRef,
  QuarkElement,
  state,
} from "quarkc";
import style from "./style.css";
import "../popup";
import "../cell";
import "../../../quark-icons/lib/success";

type Direction = "down" | "up";

export interface Props {
  title?: string;
  zIndex?: number;
}

export interface DropdownItemOption {
  text: string;
  value: number | string | boolean;
  icon?: string;
}

@customElement({
  tag: "quark-dropdown-item",
  style,
})
class QuarkDropdownItem extends QuarkElement {
  @property()
  value = "";

  @property({ type: String })
  title = "";

  @property({ type: Boolean })
  disabled: false;

  activeColor = "#08f";

  root: any = createRef();
  titleRef: any = createRef();

  zIndex = 10;

  @state()
  showPopup = false;

  @state()
  currentValue = "";

  @state()
  direction: Direction = "down";

  @state()
  options: DropdownItemOption[] = [
    { text: "全部商品", value: 0 },
    { text: "新款商品", value: 1 },
    { text: "活动商品1", value: 11 },
    { text: "活动商品2", value: 12 },
    { text: "活动商品3", value: 13 },
    { text: "活动商品4", value: 14 },
    { text: "活动商品5", value: 15 },
    { text: "活动商品6", value: 16 },
    { text: "活动商品7", value: 17 },
    { text: "活动商品8", value: 18 },
    { text: "活动商品9", value: 19 },
    { text: "活动商品10", value: 20 },
    { text: "活动商品11", value: 21 },
  ];

  // 监听点击组件外部
  clickAway = (e) => {
    const targetNodes = [this.root.current, this.titleRef.current];
    const target =
      e.target.tagName === "QUARK-DROPDOWN-ITEM"
        ? e.target.root.current
        : e.target;
    const isClickAway = targetNodes.every((item) => {
      return item && !item.contains(target);
    });
    if (isClickAway) {
      this.toggle(false);
    }
  };

  componentDidMount() {
    this.currentValue = this.value;
    document.addEventListener("click", this.clickAway, {
      capture: false,
      passive: false,
    });
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
    document.removeEventListener("click", this.clickAway);
  }

  setActiveColor = (color) => {
    this.activeColor = color;
  };

  setZIndex = (zIndex) => {
    this.zIndex = zIndex;
  };

  setOption = (option: DropdownItemOption[]) => {
    this.options = option;
  };

  setDirection = (direction: Direction) => {
    this.direction = direction;
  };

  renderTitle() {
    if (this.title) {
      return this.title;
    }

    const match = this.options.find((item) => {
      return item.value == this.currentValue;
    });
    return match ? match.text : "请选择";
  }

  onTitleClick = () => {
    this.toggle();
    if (this.showPopup) {
      disableBodyScroll(this.root.current);
    } else {
      enableBodyScroll(this.root.current);
    }
  };

  renderOption = (item) => {
    const optionCSS = (item) => {
      const classList = [];
      const style: any = {};

      if (item.value == this.currentValue) {
        classList.push("quark-dropdown-item__option--active");
        style.color = this.activeColor || "#08f";
      }

      return {
        style,
        class: classList.join(" "),
      };
    };

    const onClick = () => {
      this.toggle();
      if (this.currentValue == item.value) {
        return;
      }
      this.currentValue = item.value;
      this.$emit("change", {
        detail: {
          value: this.currentValue,
        },
      });
    };

    return (
      <quark-cell onClick={onClick}>
        <div
          slot="title"
          class={optionCSS(item).class}
          style={optionCSS(item).style}
        >
          {item.text}
        </div>
        {item.value == this.currentValue && (
          <quark-icon-success size="18" color={this.activeColor} />
        )}
      </quark-cell>
    );
  };

  toggle = (show = !this.showPopup) => {
    if (show === this.showPopup) {
      return;
    }
    this.showPopup = show;
    if (show) {
      this.$emit("open");
    } else {
      this.$emit("close");
    }
  };

  render() {
    const titleCSS = () => {
      const style: any = {};

      if (this.showPopup) {
        style.color = this.activeColor;
      }

      const classObj = {
        title: true,
        "title--down": this.showPopup === (this.direction === "down"),
        "title--active": this.showPopup,
      };

      const classStr = Object.keys(classObj)
        .map((key) => classObj[key] && "quark-dropdown-menu__" + key)
        .join(" ");

      return {
        class: classStr,
        style,
      };
    };

    const contentCSS = () => {
      const contentStyle: any = {
        zIndex: this.zIndex + 1,
      };

      const maskStyle: any = {
        zIndex: this.zIndex,
        animationDuration: "0.2s",
      };

      if (!this.root.current) {
        return {
          wrapperStyle: {},
          contentStyle,
          maskStyle,
        };
      }

      const { bottom, top } = this.root.current.getBoundingClientRect();

      const offset = window.innerHeight - bottom;

      const wrapperStyle: any = {};

      if (this.direction === "up") {
        contentStyle.bottom = 0;
        wrapperStyle.bottom = window.innerHeight - top + "px";
        wrapperStyle.height = top + "px";
      } else if (this.direction === "down") {
        contentStyle.top = 0;
        wrapperStyle.top = bottom + "px";
        wrapperStyle.height = offset + "px";
      }

      return {
        wrapperStyle,
        contentStyle,
        maskStyle,
      };
    };

    return (
      <div class="quark-dropdown-item" ref={this.root}>
        <div
          ref={this.titleRef}
          class={titleCSS().class}
          style={titleCSS().style}
          onClick={this.onTitleClick}
        >
          {this.renderTitle()}
        </div>
        {this.showPopup && (
          <div
            class="quark-dropdown-item__content--wrapper"
            style={contentCSS().wrapperStyle}
          >
            <div
              class="quark-dropdown-item__content"
              style={contentCSS().contentStyle}
            >
              <slot>
                <quark-cell-group>
                  {this.options.map(this.renderOption)}
                </quark-cell-group>
              </slot>
            </div>
            <div
              class="quark-dropdown-item__content--mask"
              style={contentCSS().maskStyle}
              onClick={() => this.toggle(false)}
            />
          </div>
        )}
      </div>
    );
  }
}
export default QuarkDropdownItem;
