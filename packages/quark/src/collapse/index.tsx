import QuarkElement, { property, createRef, customElement } from "@quarkd/core";
import "@quarkd/icons/lib/arrow-down";
import style from "./style.css";

export interface Props {
  open?: boolean;
  title: string;
}

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

  detailsEl: any = createRef();

  componentDidMount() {
    if (this.open) {
      const { current } = this.detailsEl;
      current.open = true;
    }
  }

  shouldComponentUpdate(
    propName: string,
    oldValue: string | boolean,
    newValue: string | boolean
  ): boolean {
    if (propName === "open" && oldValue !== newValue) {
      const { current } = this.detailsEl;
      current.open = newValue;
    }
    return true;
  }

  render() {
    return (
      <details ref={this.detailsEl}>
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
