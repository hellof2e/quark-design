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
    { text: "新款商品", value: "1" },
    { text: "活动商品", value: 2 },
  ];

  componentDidMount() {}

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  renderTitle() {
    if (this.title) {
      return this.title;
    }
    const match = this.options.find((item) => item.value === this.value);
    return match ? match.text : "请选择";
  }

  titleCSS = () => {
    const classList = ["quark-dropdown-item__title"];
    const style = {};
    if (this.showPopup) {
      classList.push("quark-dropdown-item-down quark-dropdown-item--active");
      style.color = this.activeColor;
    }
    return {
      class: classList.join(" "),
      style,
    };
  };

  onTitleClick = () => {
    this.showPopup = !this.showPopup;
    if (this.showPopup) {
      disableBodyScroll(this.root.current);
    } else {
      enableBodyScroll(this.root.current);
    }
  };

  onOptionItemClick = () => {
    this.showPopup = false;
  };

  renderOption = (item) => {
    return (
      <quark-cell title={item.text} onClick={this.onOptionItemClick}>
        <quark-icon-success size="26" />
      </quark-cell>
    );
  };

  style1 = () => {
    console.log("style1");
    return {
      top: `${this.root.current.offsetTop + 48}px`,
      "animation-duration": "0.2s",
    };
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
          <div class="quark-dropdown-content" style={this.style1()}>
            <slot>
              <div style="position: relative;z-index: 11">
                <quark-cell-group>
                  {this.options.map(this.renderOption)}
                </quark-cell-group>
              </div>
            </slot>
            <div class="mask"></div>
          </div>
        )}
      </div>
    );
  }
}
export default QuarkDropdownItem;
