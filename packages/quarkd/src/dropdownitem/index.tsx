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
import "../icon";

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

  @state()
  currentValue = "";

  @property({
    type: String,
    attribute: "active-color",
  })
  activeColor = "#08f";

  root: any = createRef();

  title: string | undefined = undefined;

  zIndex = 10;

  @state()
  showPopup = false;

  options: DropdownItemOption[] = [
    { text: "全部商品", value: 0 },
    { text: "新款商品", value: 1 },
    { text: "活动商品", value: 2 },
  ];

  componentDidMount() {
    this.currentValue = this.value;
    // document.addEventListener("click", (e) => {
    //   console.log(this.root.current);
    //   console.log("target", e.target);
    //   console.log(this.root.current.contains(e.target));
    // });
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  renderTitle() {
    if (this.title) {
      return this.title;
    }

    const match = this.options.find((item) => {
      return item.value == this.currentValue;
    });
    return match ? match.text : "请选择";
  }

  getTitle() {
    if (this.title) {
      return this.title;
    }

    const match = this.options.find((item) => {
      return item.value == this.currentValue;
    });
    return match ? match.text : "请选择";
  }

  titleCSS = () => {
    const classList = ["quark-dropdown-menu__title"];
    const style: any = {};
    if (this.showPopup) {
      classList.push(
        "quark-dropdown-menu__title--down quark-dropdown-menu__title--active"
      );
      style.color = this.activeColor;
    }
    return {
      class: classList.join(" "),
      style,
    };
  };

  onTitleClick = () => {
    this.toggle();
    if (this.showPopup) {
      disableBodyScroll(this.root.current);
    } else {
      enableBodyScroll(this.root.current);
    }
  };

  onOptionClick = (item) => {
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

  renderOption = (item) => {
    return (
      <quark-cell
        onClick={() => {
          this.onOptionClick(item);
        }}
      >
        <div
          slot="title"
          class={
            item.value == this.currentValue
              ? "quark-dropdown-item__option--active"
              : ""
          }
        >
          {item.text}
        </div>
        <quark-icon-success size="26" />
      </quark-cell>
    );
  };

  style1 = () => {
    return {
      top: `${this.root.current.offsetTop + 48}px`,
      "animation-duration": "0.2s",
    };
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
    return (
      <div class="quark-dropdown-item" ref={this.root}>
        <div
          class={this.titleCSS().class}
          style={this.titleCSS().style}
          onClick={this.onTitleClick}
        >
          {this.renderTitle()}
        </div>

        {this.showPopup && (
          <div class="quark-dropdown-item__content" style={this.style1()}>
            <div style="position: relative; z-index: 11">
              <slot>
                <quark-cell-group>
                  {this.options.map(this.renderOption)}
                </quark-cell-group>
              </slot>
            </div>
            <div class="mask"></div>
          </div>
        )}
      </div>
    );
  }
}
export default QuarkDropdownItem;
