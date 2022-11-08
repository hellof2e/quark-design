import { classNames } from '../../utils/index';
import QuarkElement, {
  property,
  customElement,
  createRef
} from '@quarkd/core';
import style from './style.css';
export interface Props {
  min?: number
  max?: number
  steps?: number
  name?: string
  decimallength?: number
  integer?: boolean
  disabled?: boolean
}
export interface CustomEvent {
  overlimit?: (e: {detail: {action: string}}) => void
  plus?: () => void
  minus?: () => void
  change: (e: {detail: {value: number, name: string}}) => void
}
@customElement({tag:'quark-stepper', style})
class QuarkStepper extends QuarkElement {
  constructor() {
    super();
  }

  @property({
    type: Number
  })
  value: number = 0;

  @property({
    type: Number
  })
  min: number | undefined = undefined;

  @property({
    type: Number
  })
  max: number | undefined = undefined;

  @property({
    type: Boolean
  })
  interger: boolean = false;

  @property({
    type: Boolean
  })
  disabled: boolean = false;

  @property({
    type: Number
  })
  decimallength: number | undefined = undefined;

  @property({
    type: Number
  })
  steps: number = 1;

  @property()
  name: string = '';

  inputRef: any = createRef();

  miniRef: any = createRef();

  plusRef: any = createRef();


  componentDidMount() {
    this.formatData();
  }

  handlePlusClick = (event: any) => {
    event.stopPropagation();
    this.$emit('plus');

    if ((this.max && this.value < this.max) || this.max === null) {
      this.value += this.steps;
      this.dispatchChange();
    } else if (this.max && this.value >= this.max) {
      this.$emit('overlimit', {
        detail: {
          action: 'plus'
        }
      });
    }
  };

  handleMinusClick = (event: any) => {
    event.stopPropagation();
    this.$emit('minus');
    if ((this.min && this.value > this.min) || this.min === null) {
      this.value -= this.steps;
      this.dispatchChange();
    } else if (this.min && this.value <= this.min) {
      this.$emit('overlimit', {
        detail: {
          action: 'minus'
        }
      });
    }
  };

  handleInputInput = (event: any) => {
    event.stopPropagation();
    const { current } = this.inputRef;
    const { value } = event.target;

    const Reg = this.interger ? /^-?\d*$/ : /^-?\d*\.{0,1}\d*$/;

    if (Reg.test(value)) {
      this.value = value;
      this.dispatchChange();
    } else {
      current.value = this.value;
    }
  };

  dispatchChange() {
    this.formatData();
    this.$emit('change', {
      detail: {
        value: this.value,
        name: this.name || ''
      }
    });
  }

  // 格式化数据
  formatData() {
    if (this.min && this.min > this.value) {
      this.value = this.min;
      return;
    }
    if (this.max && this.max <= this.value) {
      this.value = this.max;
      return;
    }
    if (this.decimallength) {
      this.value = Number(this.value.toFixed(this.decimallength));
    }
  }

  miniNeedDisable = () => {
    if (this.disabled) {
      return true;
    }
    if (this.min && this.value <= this.min) {
      return true;
    }
    return false;
  };

  plusNeedDisable = () => {
    if (this.disabled) {
      return true;
    }
    if (this.max && this.value >= this.max) {
      return true;
    }
    return false;
  };

  render() {
    const miniClassName = classNames('quark-stepper-minus', {
      'quark-stepper-disabled': this.miniNeedDisable()
    });
    const plusClassName = classNames('quark-stepper-plus', {
      'quark-stepper-disabled': this.plusNeedDisable()
    });
    const inputClassName = classNames('quark-stepper-input', {
      'quark-stepper-disabled': this.disabled
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
          // onChange={this.handleInputInput}
          value={this.value}
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
