import { property, customElement, createRef, QuarkElement } from "quarkc";
import "../dropdownitem";
import { slotAssignedElements } from "../../utils/public";

import style from "./style.css";

export type DropdownMenuDirection = "down" | "up";

export interface IDropdownMenuProps {
  zIndex?: number;
  hideOverlay?: boolean;
  activeColor?: string;
  direction?: DropdownMenuDirection;
  swipeThreshold?: number;
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
  direction: DropdownMenuDirection = "down";

  @property({ type: Boolean, attribute: "hide-overlay" })
  hideOverlay = false;

  @property({ type: Number, attribute: "swipe-threshold" })
  swipeThreshold = 0;

  root: any = createRef();
  rootSlotRef: any = createRef();

  onSlotChange = () => {
    if (this.rootSlotRef.current) {
      const allItems = slotAssignedElements(
        this.rootSlotRef.current?.assignedNodes()
      ).filter((item) => item.tagName === "QUARK-DROPDOWN-ITEM");
      allItems.forEach((item) => {
        item.setProps({
          activeColor: this.activeColor,
          zIndex: this.zIndex,
          hideOverlay: this.hideOverlay,
          direction: this.direction,
          swipeThreshold: this.swipeThreshold,
        });
      });
    }
  };

  render() {
    return (
      <div class="quark-dropdown-menu">
        <div class="quark-dropdown-menu__bar">
          <div class="quark-dropdown-menu__bar-inner">
            <div class="quark-dropdown-menu__bar-content" ref={this.root}>
              <slot
                ref={this.rootSlotRef}
                onslotchange={this.onSlotChange}
              ></slot>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default QuarkDropdownMenu;
