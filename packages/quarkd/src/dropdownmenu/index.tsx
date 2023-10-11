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
  zindex?: number;
}

@customElement({
  tag: "quark-dropdown-menu",
  style,
})
class QuarkDropdownMenu extends QuarkElement {
  root: any = createRef();

  rootSlotRef: any = createRef();

  @property({ type: Number, attribute: "z-index" })
  zIndex = 10;

  @property({ type: String, attribute: "active-color" })
  activeColor = "#08f";

  @state()
  childrenItems = [];

  @state()
  titleClass = "";

  componentDidMount() {
    const rootSlotRefNodes = slotAssignedElements(
      this.rootSlotRef.current?.assignedNodes()
    );
    // 获取swipe-cell 内部dom 用于判断点击位置
    const targetNodes = [...rootSlotRefNodes, this.root.current];
    // document.addEventListener(
    //   "touchstart",
    //   (e) => {
    //     console.log("target", e.target);
    //     const isClickAway = targetNodes.every((item) => {
    //       return item && !item.contains(e.target);
    //     });

    //     console.log("isClickAway1", isClickAway);
    //     if (isClickAway) {
    //       rootSlotRefNodes.forEach((item) => {
    //         console.log(1111, item);
    //         item.toggle(false);
    //       });
    //       // console.log("isClickAway", e.target);
    //       // this.onClick("outside");
    //     }
    //   },
    //   {
    //     capture: false,
    //     passive: false,
    //   }
    // );
  }

  componentWillUnmount() {}

  // shouldComponentUpdate(
  //   propName: string,
  //   oldValue: string | boolean,
  //   newValue: string | boolean
  // ): boolean {
  //   console.log(11111, propName, oldValue, newValue);

  //   return true;
  // }

  onSlotChange = () => {
    if (this.rootSlotRef.current) {
      const allItems = slotAssignedElements(
        this.rootSlotRef.current?.assignedNodes()
      ).filter((item) => item.tagName === "QUARK-DROPDOWN-ITEM");
      this.childrenItems = allItems;
    }
  };

  // titleCSS = (item) => {
  //   const classList = ["quark-dropdown-menu__title"];
  //   const style = {};
  //   if (item.showPopup) {
  //     classList.push(
  //       "quark-dropdown-menu__title--down quark-dropdown-menu__title--active"
  //     );
  //     style.color = this.activeColor;
  //   }

  //   return {
  //     class: classList.join(" "),
  //     style,
  //   };
  // };

  // toggleItem = (active: number) => {
  //   this.childrenItems.forEach((item, index) => {
  //     if (index === active) {
  //       item.toggle();
  //     } else if (item.showPopup) {
  //       item.toggle(false);
  //     }
  //   });
  // };

  // renderTitle = () => {
  //   return this.childrenItems.map((item, index) => (
  //     <div class="quark-dropdown-menu__item">
  //       <div
  //         class={this.titleCSS(item).class}
  //         style={this.titleCSS(item).style}
  //         onClick={() => {
  //           this.toggleItem(index);
  //         }}
  //       >
  //         {item.getTitle()}
  //       </div>
  //     </div>
  //   ));
  // };

  render() {
    return (
      <div class="quark-dropdown-menu">
        <div class="quark-dropdown-menu__bar" ref={this.root}>
          {/* {this.renderTitle()} */}
          <slot ref={this.rootSlotRef} onslotchange={this.onSlotChange}></slot>
        </div>
      </div>
    );
  }
}
export default QuarkDropdownMenu;
