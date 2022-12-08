import QuarkElement, { property, customElement, createRef } from "@quarkd/core";
import "@quarkd/icons/lib/arrow-down";
import style from "./style.css";

@customElement({
  tag: "quark-collapse",
  style,
})
class Collapse extends QuarkElement {
  constructor() {
    super();
  }

  @property({
    type: Boolean,
  })
  open = false;

  title = "";

  componentDidMount() {
    if (this.open) {
      const el = this.shadowRoot?.querySelector("details");
      el.open = true;
    }
  }

  render() {
    return (
      <details>
        <summary>
          <slot name="title">{this.title}</slot>
          <slot name="icon">
            <quark-icon-arrow-down class="collapse-icon" size="16" />
          </slot>
          <div className="line"></div>
        </summary>

        <div class="expander-content">
          <slot></slot>
        </div>
      </details>
    );
  }
}

export default Collapse;
