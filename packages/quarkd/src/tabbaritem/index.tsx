import QuarkElement, { customElement } from "quarkc";
import style from "./style.css";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Props {}

@customElement({ tag: "quark-tabbar-item", style })
class QuarkTabbarItem extends QuarkElement {
  render() {
    return <slot></slot>;
  }
}

export default QuarkTabbarItem;
