import QuarkElement, { property, customElement, createRef } from "@quarkd/core";

import style from "./style.css";
export interface Props {
  type?: "primary" | "success" | "danger" | "warning";
  size?: "small" | "large";
  round?: boolean;
  plain?: boolean;
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
