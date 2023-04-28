import QuarkElement, { property, customElement } from "quarkc";
import style from "./style.css";

@customElement({ tag: "quark-tabbar-item", style })
class QuarkTabbarItem extends QuarkElement {
  @property({
    type: Boolean,
  })
  active = false;

  @property()
  inactivecolor: string;

  @property()
  activecolor: string;

  render() {
    return (
      <div
        class="quark-tabbar-item"
        style={{ color: this.active && this.activecolor }}
      >
        <slot></slot>
      </div>
    );
  }
}

export default QuarkTabbarItem;
