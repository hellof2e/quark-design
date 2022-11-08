import QuarkElement, { property, customElement, createRef } from "@quarkd/core";
import { slotAssignedElements } from "../../utils/public";
import style from "./style.css";
import groupCss from "./group.css";
export interface Props {
  direction?: "horzontal" | "vertical";
}
export interface ItemProps {
  title: string;
  status: "done" | "doing" | "todo";
  content?: string;
  order?: string;
}
@customElement({ tag: "quark-step", style })
class QuarkStep extends QuarkElement {
  @property()
  order = "";

  @property()
  status = "";

  @property()
  title = "";

  @property()
  content = "";

  containerRef: any = createRef();

  setDirection(direction: string) {
    const { current } = this.containerRef;
    if (current) {
      if (direction === "vertical") {
        current.classList.remove("quark-step-horizontal");
      } else {
        current.classList.add("quark-step-horizontal");
      }
    }
  }

  render() {
    return (
      <div class="quark-step quark-step-horizontal" ref={this.containerRef}>
        <div class="quark-step">
          <div class="quark-step-head">
            <div class="quark-step-icon is-text">
              <div class="quark-step-inner">
                <slot name="order">{this.order}</slot>
              </div>
            </div>
          </div>
          <div class="quark-step-main">
            <div class="quark-step-title">
              <slot name="title">{this.title}</slot>
            </div>
            <div class="quark-step-content">
              <slot name="content">{this.content}</slot>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuarkStep;

@customElement({ tag: "quark-steps", style: groupCss })
class QuarkSteps extends QuarkElement {
  @property()
  direction = "";

  slotRef = createRef();

  handleSlotChange = () => {
    const { current } = this.slotRef;
    if (current) {
      const nodes = slotAssignedElements(current.assignedNodes());
      nodes.forEach((item: any) => {
        item.setDirection(this.direction || "horizontal");
      });
    }
  };

  render() {
    return (
      <div
        id="step-container"
        class={
          this.direction === "vertical"
            ? "quark-vertical"
            : "quark-steps quark-steps-horizontal"
        }
      >
        <slot onslotchange={this.handleSlotChange} ref={this.slotRef}></slot>
      </div>
    );
  }
}
export { QuarkSteps };
