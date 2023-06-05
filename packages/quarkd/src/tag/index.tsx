import { property, customElement, createRef, QuarkElement } from "quarkc";

import style from "./style.css";
export interface Props {
  type?: "primary" | "success" | "danger" | "warning";
  size?: "small" | "large";
  round?: boolean;
  plain?: boolean;
  light?: boolean;
  color?: string;
  textcolor?: string;
}
@customElement({ tag: "quark-tag", style })
class QuarkTag extends QuarkElement {
  constructor() {
    super();
  }

  @property()
  type = "";

  @property()
  color = "";

  @property()
  textcolor = "";

  @property()
  size = "";

  @property({
    type: Boolean,
  })
  plain = false;

  @property({
    type: Boolean,
  })
  round = false;

  @property({
    type: Boolean,
  })
  light = false;

  wrap: any = createRef();

  render() {
    return (
      <span
        class="quark-tag"
        style={{ background: this.color, color: this.textcolor }}
      >
        <slot></slot>
      </span>
    );
  }
}

export default QuarkTag;
