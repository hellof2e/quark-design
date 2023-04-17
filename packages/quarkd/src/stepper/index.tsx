import { classNames } from "../../utils/index";
import QuarkElement, {
  property,
  customElement,
  createRef,
  state,
} from "quarkc";
import style from "./style.css";
export interface Props {
  min?: number;
  max?: number;
  steps?: number;
  name?: string;
  decimallength?: number;
  integer?: boolean;
  disabled?: boolean;
}
export interface CustomEvent {
  overlimit?: (e: { detail: { action: string } }) => void;
  plus?: () => void;
  minus?: () => void;
  change: (e: { detail: { value: number; name: string } }) => void;
}
@customElement({ tag: "quark-stepper", style })
class QuarkStepper extends QuarkElement {
  constructor() {
    super();
  }

  @property({
    type: Number,
  })
  value = 0;

  @property({
    type: Number,
  })
  min: number | undefined = undefined;

  @property({
    type: Number,
  })
  max: number | undefined = undefined;

  @property({
    type: Boolean,
  })
  interger = false;

  @property({
    type: Boolean,
  })
  disabled = false;

  @property({
    type: Number,
  })
  decimallength: number | undefined = undefined;

  @property({
    type: Number,
  })
  steps = 1;

  @property()
  name = "";

  @state()
  cacheValue = 0;

  inputRef: any = createRef();

  miniRef: any = createRef();

  plusRef: any = createRef();

  componentDidMount() {
    this.inputRef.current.value = this.value;
    this.formatData(this.value);
  }

  handlePlusClick = (event: any) => {
    event.stopPropagation();
    this.$emit("plus");
    const value = this.inputRef.current.value;
    if ((this.max && value < this.max) || this.max === null) {
      this.inputRef.current.value =
        Number(this.inputRef.current.value) + this.steps;
      this.dispatchChange(this.inputRef.current.value);
    } else if (this.max && value >= this.max) {
      this.$emit("overlimit", {
        detail: {
          action: "plus",
        },
      });
    }
  };

  handleMinusClick = (event: any) => {
    event.stopPropagation();
    this.$emit("minus");
    const value = this.inputRef.current.value;
    if ((this.min && value > this.min) || this.min === null) {
      this.inputRef.current.value =
        Number(this.inputRef.current.value) - this.steps;
      this.dispatchChange(this.inputRef.current.value);
    } else if (this.min && value <= this.min) {
      this.$emit("overlimit", {
        detail: {
          action: "minus",
        },
      });
    }
  };

  handleInputInput = (event: any) => {
    event.stopPropagation();
    const { current } = this.inputRef;
    const { value } = event.target;
    console.warn(value, current.value);
    const Reg = this.interger ? /^-?\d*$/ : /^-?\d*\.{0,1}\d*$/;
    // this.value = value;
    if (Reg.test(value)) {
      current.value = value;
      this.dispatchChange(value);
    } else {
      current.value = this.value;
    }
    this.cacheValue = value;
  };
  handleBlur = (event: any) => {
    this.formatData(event.target.value);
    this.dispatchChange(event.target.value);
  };

  dispatchChange(value: number) {
    this.cacheValue = value;
    this.$emit("change", {
      detail: {
        value,
        name: this.name || "",
      },
    });
  }

  // 格式化数据
  formatData(value) {
    if (this.min && this.min > value) {
      this.inputRef.current.value = this.min;
      this.cacheValue = this.inputRef.current.value;
      return;
    }
    if (this.max && this.max <= value) {
      this.inputRef.current.value = this.max;
      this.cacheValue = this.inputRef.current.value;
      return;
    }
    if (this.decimallength) {
      this.inputRef.current.value = Number(value.toFixed(this.decimallength));
      this.cacheValue = this.inputRef.current.value;
    }
  }

  miniNeedDisable = () => {
    const value = Number(this.cacheValue);
    if (this.disabled) {
      return true;
    }
    if (this.min && value <= this.min) {
      return true;
    }
    return false;
  };

  plusNeedDisable = () => {
    const value = Number(this.cacheValue);
    if (this.disabled) {
      return true;
    }
    if (this.max && value >= this.max) {
      return true;
    }
    return false;
  };

  render() {
    const miniClassName = classNames("quark-stepper-minus", {
      "quark-stepper-disabled": this.miniNeedDisable(),
    });
    const plusClassName = classNames("quark-stepper-plus", {
      "quark-stepper-disabled": this.plusNeedDisable(),
    });
    const inputClassName = classNames("quark-stepper-input", {
      "quark-stepper-disabled": this.disabled,
    });
    return (
      <div class="quark-stepper-container" id="stepper">
        <button
          type="button"
          class={miniClassName}
          onClick={this.handleMinusClick}
          ref={this.miniRef}
        ></button>
        <input
          type="text"
          class={inputClassName}
          onInput={this.handleInputInput}
          onBlur={this.handleBlur}
          // onChange={this.handleInputInput}
          min={this.min}
          max={this.max}
          ref={this.inputRef}
          disabled={this.disabled}
        />
        <button
          type="button"
          class={plusClassName}
          onClick={this.handlePlusClick}
          ref={this.plusRef}
        ></button>
      </div>
    );
  }
}

export default QuarkStepper;
