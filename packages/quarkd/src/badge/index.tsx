import { classNames } from "../../utils/index";
import {
  customElement,
  property,
  state,
  createRef,
  QuarkElement,
} from "quarkc";
import style from "./style.css";
export interface Props {
  type?: "dot" | "round" | "label";
  content?: string;
  size?: "normal" | "big";
  border?: boolean;
  max?: number;
}
@customElement({
  tag: "quark-badge",
  style,
})
class QuarkBadge extends QuarkElement {
  @property()
  type = "round";

  @property()
  content = "";

  @property()
  size = "normal";

  @property({
    type: Boolean,
  })
  border = false;

  @property()
  max = "99";

  @state()
  classNames = "";

  slotRef: any = createRef();

  componentDidMount(): void {
    this.dealClass();
  }

  componentDidUpdate(propName: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this.dealClass();
    }
  }

  dealClass = () => {
    this.classNames = classNames("quark-badge-dealclass", {
      "quark-badge-fixed": this.slotRef.current?.assignedNodes().length,
      "quark-badge-hide":
        this.type !== "dot" &&
        (this.content === null || this.content === undefined || !this.content),
    });
  };

  renderContent = () => {
    if (
      /\d/g.test(this.content) &&
      /\d/g.test(this.max) &&
      Number(this.content) > Number(this.max)
    ) {
      return "...";
    }
    return this.content;
  };

  render() {
    return (
      <div class="quark-badge">
        <div class={this.classNames}>{this.renderContent()}</div>
        <slot ref={this.slotRef} onslotchange={this.dealClass}></slot>
      </div>
    );
  }
}

export default QuarkBadge;
