import {
  property,
  customElement,
  createRef,
  QuarkElement,
  state,
} from "quarkc";
import "../dropdownitem";
import { slotAssignedElements } from "../../utils/public";

import style from "./style.css";

export interface Props {
  zIndex?: number;
  overlay?: boolean;
  activeColor?: string;
  direction?: "up" | "down";
}

@customElement({
  tag: "quark-dropdown-menu",
  style,
})
class QuarkDropdownMenu extends QuarkElement {
  @property({ type: Number, attribute: "z-index" })
  zIndex = 10;

  @property({ type: String, attribute: "active-color" })
  activeColor = "#08f";

  @property({ type: String })
  direction = "down";

  @property({ type: Boolean })
  overlay = true;

  root: any = createRef();
  rootSlotRef: any = createRef();
  childrenItems = [];

  componentDidMount() {}

  componentWillUnmount() {}

  @state()
  dropdownList = [
    {
      title: "title1",
      options: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品1", value: 11 },
      ],
      showPopup: false,
    },
    {
      value: 1,
      options: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品1", value: 11 },
      ],
      showPopup: false,
    },
    {
      options: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品1", value: 11 },
      ],
      showPopup: false,
    },
  ];

  setDropdownItem = (dropdownList) => {
    this.dropdownList = dropdownList;
  };

  onSlotChange = () => {
    if (this.rootSlotRef.current) {
      const allItems = slotAssignedElements(
        this.rootSlotRef.current?.assignedNodes()
      ).filter((item) => item.tagName === "QUARK-DROPDOWN-ITEM");
      this.childrenItems = allItems;
      allItems.forEach((item) => {
        item.setActiveColor(this.activeColor);
        item.setDirection(this.direction);
        item.setZIndex(this.zIndex);
      });
    }
  };

  // getTitle = (item) => {
  //   if (item.title) {
  //     return item.title;
  //   }
  //   const match = item.options.find((option) => {
  //     return option.value == item.value;
  //   });
  //   return match ? match.text : "请选择";
  // };

  // toggleItem = (active) => {
  //   this.dropdownList.forEach((item, index) => {
  //     if (index === active) {
  //       item.showPopup = !item.showPopup;
  //       this.titleCSS(item);
  //     } else if (item.showPopup) {
  //       item.showPopup = false;
  //       this.titleCSS(item);
  //     }
  //   });
  //   console.log(active, this.dropdownList);
  // };

  // titleCSS = (item) => {
  //   const style: any = {};

  //   if (item.showPopup) {
  //     style.color = item.activeColor;
  //   }

  //   const classObj = {
  //     title: true,
  //     "title--down": item.showPopup === (this.direction === "down"),
  //     "title--active": item.showPopup,
  //   };

  //   const classStr = Object.keys(classObj)
  //     .map((key) => classObj[key] && "quark-dropdown-menu__" + key)
  //     .join(" ");

  //   console.log("titleCSS", classStr);
  //   return {
  //     class: classStr,
  //     style,
  //   };
  // };

  // renderOption = (item, active) => {
  //   const optionCSS = (item) => {
  //     const classList = [];
  //     const style: any = {};

  //     if (item.value == active.value) {
  //       classList.push("quark-dropdown-item__option--active");
  //       style.color = this.activeColor || "#08f";
  //     }

  //     return {
  //       style,
  //       class: classList.join(" "),
  //     };
  //   };

  //   const onClick = () => {
  //     // this.toggle();
  //     if (active.value == item.value) {
  //       return;
  //     }
  //     active.value = item.value;
  //     this.$emit("change", {
  //       detail: {
  //         value: active.value,
  //       },
  //     });
  //   };

  //   return (
  //     <quark-cell onClick={onClick}>
  //       <div
  //         slot="title"
  //         class={optionCSS(item).class}
  //         style={optionCSS(item).style}
  //       >
  //         {item.text}
  //       </div>
  //       {item.value == active.value && (
  //         <quark-icon-success size="18" color={this.activeColor} />
  //       )}
  //     </quark-cell>
  //   );
  // };

  render() {
    // const contentCSS = () => {
    //   const contentStyle: any = {
    //     zIndex: this.zIndex + 1,
    //   };

    //   const maskStyle: any = {
    //     zIndex: this.zIndex,
    //     animationDuration: "0.2s",
    //   };

    //   if (!this.root.current) {
    //     return {
    //       wrapperStyle: {},
    //       contentStyle,
    //       maskStyle,
    //     };
    //   }

    //   const { bottom, top } = this.root.current.getBoundingClientRect();

    //   const offset = window.innerHeight - bottom;

    //   const wrapperStyle: any = {};

    //   if (this.direction === "up") {
    //     contentStyle.bottom = 0;
    //     wrapperStyle.bottom = window.innerHeight - top + "px";
    //     wrapperStyle.height = top + "px";
    //   } else if (this.direction === "down") {
    //     contentStyle.top = 0;
    //     wrapperStyle.top = bottom + "px";
    //     wrapperStyle.height = offset + "px";
    //   }

    //   return {
    //     wrapperStyle,
    //     contentStyle,
    //     maskStyle,
    //   };
    // };

    return (
      <div class="quark-dropdown-menu">
        <div class="quark-dropdown-menu__bar" ref={this.root}>
          {/* {this.dropdownList.map((item, index) => (
            <div class="quark-dropdown-menu__item">
              <span
                class={this.titleCSS(item).class}
                style={this.titleCSS(item).style}
                onClick={() => this.toggleItem(index)}
              >
                {this.getTitle(item)}
              </span>
            </div>
          ))}
          {this.dropdownList.map((item) => (
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
                    {item.options.map((option) =>
                      this.renderOption(option, item)
                    )}
                  </quark-cell-group>
                </slot>
              </div>
              <div
                class="quark-dropdown-item__content--mask"
                style={contentCSS().maskStyle}
              />
            </div>
          ))} */}

          <slot ref={this.rootSlotRef} onslotchange={this.onSlotChange}></slot>
        </div>
      </div>
    );
  }
}
export default QuarkDropdownMenu;
