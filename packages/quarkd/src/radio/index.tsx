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
        <span class="quark-radio-container">
          <input type="checkbox" />
          <span class="quark-radio-show"></span>
          <svg
            class="quark-radio-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 40 40"
            version="1.1"
          >
            <title>画板</title>
            <g
              id="画板"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <path
                d="M28.5857864,13.5857864 C29.366835,12.8047379 30.633165,12.8047379 31.4142136,13.5857864 C32.1952621,14.366835 32.1952621,15.633165 31.4142136,16.4142136 L19.9142136,27.9142136 C19.133165,28.6952621 17.866835,28.6952621 17.0857864,27.9142136 L10.5857864,21.4142136 C9.80473785,20.633165 9.80473785,19.366835 10.5857864,18.5857864 C11.366835,17.8047379 12.633165,17.8047379 13.4142136,18.5857864 L18.5,23.671 L28.5857864,13.5857864 Z"
                id="路径-5"
                fill="#FFFFFF"
                fill-rule="nonzero"
              />
            </g>
          </svg>
          <span class="disabled"></span>
        </span>
        <label class={this.classNames}>
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
  value = "";

  @property()
  direction: "vertical" | "horizontal" = "vertical";

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
      <div class="quark-radio-group-wrapper">
        <slot onslotchange={this.handleSlotChange} ref={this.slotRef}></slot>
      </div>
    );
  }
}

export { QuarkRadioGroup };
