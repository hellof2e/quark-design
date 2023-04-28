import QuarkElement, { customElement } from "quarkc";
import style from "./style.css";

@customElement({ tag: "quark-tabbar-item", style })
class QuarkTabbarItem extends QuarkElement {
  render() {
    return <slot></slot>;
  }
}

export default QuarkTabbarItem;
