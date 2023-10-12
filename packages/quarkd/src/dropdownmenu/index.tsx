import { property, customElement, createRef, QuarkElement } from "quarkc";
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
