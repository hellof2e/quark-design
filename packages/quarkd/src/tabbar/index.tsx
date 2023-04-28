import QuarkElement, { property, createRef, customElement } from "quarkc";
import { slotAssignedElements } from "../../utils/public";
import "../tabbaritem";
import style from "./style.css";
export interface Props {
  fixed?: boolean;
  active?: string;
}
export interface CustomEvent {
  change: (e: { detail: { value: string } }) => void;
}
@customElement({ tag: "quark-tabbar", style })
class QuarkTabbar extends QuarkElement {
  @property({
    type: Boolean,
  })
  fixed = false;

  @property()
  active = "0";

  slotRef: any = createRef();

  shouldComponentUpdate(
    propName: string,
    oldValue: string,
    newValue: string
  ): boolean {
    if (propName === "active" && oldValue !== newValue) {
      const assignedNodes = this.slotRef.current?.assignedNodes();
      const elements = slotAssignedElements(assignedNodes);

      elements.forEach((item) => {
        if (item.getAttribute("index") === newValue) {
          item.setAttribute("active", "");
        } else {
          item.removeAttribute("active");
        }
      });
    }
    return true;
  }

  slotchange = () => {
    const assignedNodes = this.slotRef.current?.assignedNodes();
    const elements = slotAssignedElements(assignedNodes);

    elements.forEach((item, index) => {
      if (item.getAttribute("index") === null) {
        item.setAttribute("index", String(index));
      }

      item.addEventListener("click", this.eventListener);
      if (item.getAttribute("index") === this.active) {
        item.setAttribute("active", "");
      }
    });
  };

  eventListener = (e: any) => {
    this.active = e.currentTarget.getAttribute("index");

    this.$emit("change", {
      detail: { value: e.currentTarget.getAttribute("index") },
    });
  };

  render() {
    return (
      <div class="quark-tabbar">
        <slot ref={this.slotRef} onslotchange={this.slotchange}></slot>
      </div>
    );
  }
}

export default QuarkTabbar;
