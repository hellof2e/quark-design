import { classNames } from "../../utils/index";
import QuarkElement, {
  customElement,
  property,
  state,
  createRef,
} from "quarkc";
import { slotAssignedElements } from "../../utils/public";
import { checkFalse } from "../../utils/public";
import style from "./style.css";
export interface Props {
  shape?: "round" | "square";
  size?: "normal" | "big";
  disabled?: boolean;
  checked?: boolean;
}
export interface CustomEvent {
  change: (e: { detail: { value: string } }) => void;
}

export interface GroupProps {
  value?: string;
}
export interface GroupCustomEvent {
  change: (e: { detail: { value: string[] } }) => void;
}
@customElement({
  tag: "quark-checkbox",
  style,
})
class QuarkCheckbox extends QuarkElement {
  @property()
  shape = "round";

  @property()
  size = "normal";

  @property()
  name = "";

  @property({
    type: Boolean,
  })
  value = false;

  @property({
    type: Boolean,
  })
  disabled = false;

  @property({
    type: Boolean,
  })
  checked = false;

  @state()
  classNames = "";

  slotRef: any = createRef();

  componentDidUpdate(): void {
    if (this.value !== this.checked) {
      this.value = this.checked;
    }
  }

  handleCheck = () => {
    if (this.disabled) {
      return;
    }
    this.$emit("change", {
      detail: {
        value: !this.checked,
      },
    });
  };

  render() {
    return (
      <div class="quark-checkbox-container" onClick={this.handleCheck}>
        <span class="quark-checkbox">
          <input type="checkbox" />
          <span class="quark-checkbox-show"></span>
          <img
            class="quark-checkbox-icon"
            src="https://m.hellobike.com/resource/quark/images/Kr6fLjveFHjjvVXIfDwye.png"
          />
          <span class="quark-checkbox-disabled"></span>
        </span>
        <label for="checkbox" class={this.classNames}>
          <slot ref={this.slotRef}></slot>
        </label>
      </div>
    );
  }
}

export default QuarkCheckbox;

@customElement({
  tag: "quark-checkbox-group",
  style,
})
class QuarkCheckboxGroup extends QuarkElement {
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
    const value = this.value ? this.value.split(",") : [];
    if (nodes?.length) {
      nodes.forEach((item: any) => {
        if (value.includes(item.name)) {
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
    const value = this.value ? this.value.split(",") : [];
    if (!checkFalse(ev.detail.value)) {
      value.push(ev.target.name);
    } else {
      value.splice(
        value.findIndex((name) => name === ev.target.name),
        1
      );
    }
    this.$emit("change", {
      detail: { value },
    });
    ev.stopPropagation();
  };

  render() {
    return (
      <div class="quark-checkbox-group-wrapper">
        <slot onslotchange={this.handleSlotChange} ref={this.slotRef}></slot>
      </div>
    );
  }
}

export { QuarkCheckboxGroup };
