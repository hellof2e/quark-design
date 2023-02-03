import QuarkElement, { property, createRef, customElement } from "quarkc";
import "@quarkd/icons/lib/notify";
import "@quarkd/icons/lib/arrow-right";
import style from "./style.css";
export interface Props {
  text?: string;
  multiple?: boolean;
  closehide?: boolean;
  right?: string;
  safearea?: boolean;
  iconsize?: string;
}
export interface CustomEvent {
  rightclick?: () => void;
}
@customElement({
  tag: "quark-noticebar",
  style,
})
class QuarkNoticebar extends QuarkElement {
  @property()
  text = "";

  @property()
  bgcolor = "";

  @property()
  color = "";

  @property({ type: Boolean })
  lefthide = false;

  @property({ type: Boolean })
  righthide = false;

  @property()
  multiple = 1;

  rightSlotRef = createRef();

  handleRightClick = () => {
    this.$emit("rightclick");
  };

  handleRightSlotChange = () => {
    const { current } = this.rightSlotRef;
    if (current) {
      const hasChild = current.assignedNodes().length;
      current.style.paddingRight = hasChild ? "0px" : "11px";
    }
  };

  render() {
    return (
      <div style={{ backgroundColor: this.bgcolor, color: this.color }}>
        <slot name="left" class="quark-noticebar-left">
          {!this.lefthide && <quark-icon-notify size="15" />}
        </slot>
        <slot name="text">
          <span
            class="quark-noticebar-text"
            style={{ WebkitLineClamp: this.multiple }}
          >
            {this.text}
          </span>
        </slot>
        <slot
          name="right"
          class="quark-noticebar-right"
          ref={this.rightSlotRef}
          onslotchange={this.handleRightSlotChange}
        >
          {!this.righthide && (
            <quark-icon-arrow-right size="15" onClick={this.handleRightClick} />
          )}
        </slot>
      </div>
    );
  }
}

export default QuarkNoticebar;
