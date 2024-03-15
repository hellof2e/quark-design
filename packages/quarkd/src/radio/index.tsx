import { classNames } from "../../utils/index";
import {
  customElement,
  property,
  state,
  createRef,
  QuarkElement,
} from "quarkc";
import { slotAssignedElements } from "../../utils/public";
import style from "./style.css";
export interface Props {
  shape?: "round" | "square";
  size?: "normal" | "big";
  disabled?: boolean;
}
export interface GroupProps {
  value?: string;
}
export interface GroupCustomEvent {
  change: (e: { detail: { value: string } }) => void;
}
@customElement({
  tag: "quark-radio",
  style,
})
class QuarkRadio extends QuarkElement {
  @property()
  radiohost = true;

  @property()
  shape = "round";

  @property()
  size = "normal";

  @property()
  name = "";

  @property({
    type: Boolean,
  })
  checked = false;

  @property({
    type: Boolean,
  })
  disabled = false;

  @state()
  classNames = "";

  slotRef: any = createRef();

  componentDidMount(): void {
    this.dealClass();
  }

  componentDidUpdate(
    propName: string,
    oldValue: string,
    newValue: string
  ): void {
    if (oldValue !== newValue) {
      this.dealClass();
    }
  }

  dealClass = () => {
    const assignedNodes = this.slotRef.current?.assignedNodes();
    const nodes = slotAssignedElements(assignedNodes);
    this.classNames = classNames({
      hide: !nodes.length,
    });
  };

  handleCheck = () => {
    if (this.disabled || this.checked) {
      return;
    }
    this.checked = !this.checked;
    this.$emit("change", {
      detail: {
        value: this.checked,
      },
    });
  };

  render() {
    return (
      <div class="quark-radio" onClick={this.handleCheck}>
        <span class="quark-radio-container" part="container">
          <img
            class="quark-radio-icon"
            part="icon"
            src="https://m.hellobike.com/resource/quark/images/Kr6fLjveFHjjvVXIfDwye.png"
          />
        </span>
        <label class={this.classNames} part="label">
          <slot ref={this.slotRef} onslotchange={this.dealClass}></slot>
        </label>
      </div>
    );
  }
}

export default QuarkRadio;

@customElement({
  tag: "quark-radio-group",
  style,
})
class QuarkRadioGroup extends QuarkElement {
  @property()
  radiogrouphost = true;

  @property()
  value = "";

  slotRef: any = createRef();

  componentDidMount(): void {
    this.$on("change", this.eventListener);
  }

  shouldComponentUpdate(
    propName: string,
    oldValue: string,
    newValue: string
  ): boolean {
    if (propName === "value" && oldValue !== newValue) {
      this.init();
    }
    return true;
  }

  init() {
    const assignedNodes = this.slotRef.current?.assignedNodes();
    const nodes = slotAssignedElements(assignedNodes);
    if (nodes?.length) {
      nodes.forEach((item: any) => {
        if (this.value === item.name) {
          item.checked = true;
        } else {
          item.checked = false;
        }
      });
    }
  }

  handleSlotChange = () => {
    this.init();
  };

  eventListener = (ev: any) => {
    if (ev.target === this) {
      return;
    }
    this.$emit("change", {
      detail: { value: ev.target.name },
    });
    ev.stopPropagation();
  };

  render() {
    return (
      <div class="quark-radio-group-wrapper" part="wrapper">
        <slot onslotchange={this.handleSlotChange} ref={this.slotRef}></slot>
      </div>
    );
  }
}

export { QuarkRadioGroup };
