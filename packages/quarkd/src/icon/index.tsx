import { customElement, QuarkElement } from "quarkc";
import style from "./style.css";

@customElement({
  tag: "quark-icon",
  style,
})
class QuarkIcon extends QuarkElement {
  render() {
    return (
      <svg
        class="quark-icon-svg"
        aria-hidden="true"
        viewBox="0 0 1024 1024"
      ></svg>
    );
  }
}

export default QuarkIcon;
