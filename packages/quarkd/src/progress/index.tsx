import { Fragment, property, customElement, QuarkElement } from "quarkc";

import style from "./style.css";
export interface Props {
  value: number;
  color?: string;
  showtext?: boolean;
}
@customElement({
  tag: "quark-progress",
  style,
})
class QuarkProgress extends QuarkElement {
  @property()
  color = "linear-gradient(90deg, #FFC91C 0%, #FB990F 100%)";

  @property()
  value = "";

  @property({ type: Boolean })
  showtext = false;

  render() {
    return (
      <Fragment>
        <div class="wrap" part="root">
          <div
            class="progress active"
            part="progress"
            style={{ background: this.color, width: `${this.value}%` }}
          ></div>
        </div>
        <slot name="percent">
          {this.showtext && (
            <span class="value" part="value">
              {this.value}%
            </span>
          )}
        </slot>
      </Fragment>
    );
  }
}

export default QuarkProgress;
