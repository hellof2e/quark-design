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
import { IDropdownMenuProps } from "../dropdownmenu";
import { slotAssignedElements } from "../../utils/public";

export type DropdownItemProps = {
  value?: string;
  title?: string;
  disabled?: boolean;
};

export type DropdownItemOption = {
  text: string;
  value: string;
};

export interface CustomEvent {
  change: (e: { detail: { value: string } }) => void;
  open: () => void;
  close: () => void;
}

@customElement({
  tag: "quark-dropdown-item",
  style,
})
class QuarkDropdownItem extends QuarkElement {
  @property({ type: String })
  value = "";

  @property({ type: String })
  title = "";

  @property({ type: Boolean })
  disabled = false;

  root: any = createRef();
  titleRef: any = createRef();

  @state()
  props: IDropdownMenuProps = {
    activeColor: "#08f",
    zIndex: 10,
    hideOverlay: true,
    direction: "down",
    swipeThreshold: 0,
  };

  @state()
  showPopup = false;

  @state()
  currentValue = "";

  @state()
  options: DropdownItemOption[] = [];

  @state()
  selfNodes = [];

  contentSlotRef: any = createRef();

  // 监听点击组件外部
  clickAway = (e) => {
    if (this.disabled) return;
    const target =
      e.target.tagName === "QUARK-DROPDOWN-ITEM"
        ? e.target.root.current
        : e.target;
    const isClickAway = this.selfNodes.every((item) => {
      return item && !item.contains(target);
    });
    if (isClickAway) {
      this.toggle(false);
    }
  };

  componentDidMount() {
    this.currentValue = this.value;
    this.selfNodes = [this.root.current, this.titleRef.current];
    document.addEventListener("click", this.clickAway, {
      capture: false,
      passive: false,
    });
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
    document.removeEventListener("click", this.clickAway);
  }

  setOptions = (options: DropdownItemOption[]) => {
    this.options = options;
  };

  setProps = (props) => {
    this.props = props;
    const { swipeThreshold } = this.props;
    const minWidth =
      typeof swipeThreshold === "number" && swipeThreshold !== 0
        ? `${100 / swipeThreshold}%`
        : "0";
    this.style.minWidth = minWidth;
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
        style.color = this.props.activeColor || "#08f";
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
          <quark-icon-success size="18" color={this.props.activeColor} />
        )}
      </quark-cell>
    );
  };

  toggle = (show = !this.showPopup) => {
    if (this.disabled) return;

    if (show === this.showPopup) {
      return;
    }
    this.showPopup = show;
    if (show) {
      this.$emit("open");
      disableBodyScroll(this.root.current);
    } else {
      this.$emit("close");
      enableBodyScroll(this.root.current);
    }
  };

  onContentSlotChange = () => {
    if (this.contentSlotRef.current) {
      const allItems = slotAssignedElements(
        this.contentSlotRef.current?.assignedNodes()
      );
      this.selfNodes = this.selfNodes.concat(allItems);
    }
  };

  titleCSS = () => {
    const style: any = {};

    if (this.showPopup) {
      style.color = this.props.activeColor;
    }

    const classObj = {
      title: true,
      "title--down": this.showPopup === (this.props.direction === "down"),
      "title--active": this.showPopup,
      "title--disabled": this.disabled,
    };

    const classStr = Object.keys(classObj)
      .map((key) => {
        if (classObj[key]) return "quark-dropdown-menu__" + key;
      })
      .join(" ");

    return {
      class: classStr,
      style,
    };
  };

  contentCSS = () => {
    const { zIndex, direction } = this.props;
    const contentStyle: any = {
      zIndex: zIndex + 1,
    };

    const wrapperStyle: any = {
      zIndex: zIndex,
    };

    const maskStyle: any = {
      zIndex: zIndex,
      opacity: this.showPopup ? 1 : 0,
      visibility: this.showPopup ? "visible" : "hidden",
    };

    if (!this.root.current) {
      return {
        wrapperStyle,
        contentStyle,
      };
    }

    const { bottom, top } = this.root.current.getBoundingClientRect();

    const offset = window.innerHeight - bottom;

    if (direction === "up") {
      contentStyle.bottom = 0;
      wrapperStyle.bottom = window.innerHeight - top + "px";
      wrapperStyle.height = top + "px";
    } else if (direction === "down") {
      contentStyle.top = 0;
      wrapperStyle.top = bottom + "px";
      wrapperStyle.height = offset + "px";
    }

    if (this.showPopup) {
      wrapperStyle.visibility = "visible";
      wrapperStyle.opacity = 1;
      contentStyle.maxHeight = "80%";
    } else {
      wrapperStyle.visibility = "hidden";
      wrapperStyle.opacity = 0;
      contentStyle.maxHeight = 0;
    }

    return {
      wrapperStyle,
      contentStyle,
      maskStyle,
    };
  };

  render() {
    return (
      <div class="quark-dropdown-item" ref={this.root}>
        <div
          ref={this.titleRef}
          class={this.titleCSS().class}
          style={this.titleCSS().style}
          onClick={this.onTitleClick}
        >
          {this.renderTitle()}
        </div>
        <div
          class="quark-dropdown-item__content--wrapper"
          style={this.contentCSS().wrapperStyle}
        >
          <div
            class="quark-dropdown-item__content"
            style={this.contentCSS().contentStyle}
          >
            <div class="quark-dropdown-item__content--inner">
              <slot
                ref={this.contentSlotRef}
                onslotchange={this.onContentSlotChange}
              >
                <quark-cell-group>
                  {this.options.map(this.renderOption)}
                </quark-cell-group>
              </slot>
            </div>
          </div>
          {!this.props.hideOverlay && (
            <div
              class="quark-dropdown-item__content--mask"
              style={this.contentCSS().maskStyle}
              onClick={() => this.toggle(false)}
            />
          )}
        </div>
      </div>
    );
  }
}
export default QuarkDropdownItem;
