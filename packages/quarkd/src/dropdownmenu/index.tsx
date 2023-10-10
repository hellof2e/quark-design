import { property, customElement, createRef, QuarkElement } from "quarkc";
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

  childrenItems = [];

  componentDidMount() {}

  componentWillUnmount() {}

  onSlotChange = () => {
    if (this.rootSlotRef.current) {
      const allItems = slotAssignedElements(
        this.rootSlotRef.current?.assignedNodes()
      ).filter((item) => item.tagName === "QUARK-DROPDOWN-ITEM");
      this.childrenItems = allItems;
      console.log("childrenItems", this.childrenItems);
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
