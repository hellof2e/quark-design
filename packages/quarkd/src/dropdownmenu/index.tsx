import { property, customElement, createRef, QuarkElement } from "quarkc";
import "../dropdownitem";
import { slotAssignedElements } from "../../utils/public";

import style from "./style.css";

export type Direction = "down" | "up";

export interface IDropdownMenuProps {
  zIndex?: number;
  hideOverlay?: boolean;
  activeColor?: string;
  direction?: Direction;
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
  direction: Direction = "down";

  @property({ type: Boolean, attribute: "hide-overlay" })
  hideOverlay = false;

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
        });
      });
    }
  };

  render() {
    return (
      <div class="quark-dropdown-menu">
        <div class="quark-dropdown-menu__bar" ref={this.root}>
          <slot ref={this.rootSlotRef} onslotchange={this.onSlotChange}></slot>
        </div>
      </div>
    );
  }
}
export default QuarkDropdownMenu;
