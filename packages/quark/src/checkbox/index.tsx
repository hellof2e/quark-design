import { classNames } from '../../utils/index';
import QuarkElement, {
  customElement,
  property,
  state,
  createRef,
} from '@quarkd/core';
import {slotAssignedElements} from '../../utils/public';
import { checkFalse } from '../../utils/public';
import style from './style.css';

@customElement({
  tag: 'quark-checkbox',
  style,
})
class QuarkCheckbox extends QuarkElement {
  @property()
  shape: string = 'round';

  @property()
  size: string = 'normal';

  @property()
  name: string = '';

  @property({
    type: Boolean,
  })
  value: boolean = false;

  @property({
    type: Boolean
  })
  disabled: boolean = false;

  @property({
    type: Boolean,
  })
  checked: boolean = false;

  @state()
  classNames: string = '';

  slotRef: any = createRef();

  componentDidMount(): void {
    this.dealClass();
  }

  componentDidUpdate(): void {
    this.dealClass();
  }

  shouldComponentUpdate(
    propName: string,
    oldValue: string,
    newValue: string | boolean
  ) {
    if (propName === 'checked')
      this.value = typeof newValue === 'boolean' ? newValue : false;
    return true;
  }

  dealClass = () => {
    const assignedNodes = this.slotRef.current?.assignedNodes();
    const nodes = slotAssignedElements(assignedNodes);
    this.classNames = classNames({
      hide: !nodes.length,
    });
  };

  handleCheck = () => {
    if (this.disabled) {
      return;
    }
    this.checked = !this.checked;
    this.value = this.checked;
    this.$emit('change', {
      detail: {
        value: this.checked,
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
          <slot ref={this.slotRef} onslotchange={this.dealClass}></slot>
        </label>
      </div>
    );
  }
}

export default QuarkCheckbox;

@customElement({
  tag: 'quark-checkbox-group',
  style
})
class QuarkCheckboxGroup extends QuarkElement {
  @property()
  value: string = '';

  slotRef: any = createRef();

  componentDidMount(): void {
    this.$on('change', this.eventListener);
  }

  shouldComponentUpdate(
    propName: string,
    oldValue: string,
    newValue: string,
  ): boolean {
    if (propName === 'value' && oldValue !== newValue) {
      this.init();
    }
    return true;
  }

  init() {
    const assignedNodes = this.slotRef.current?.assignedNodes();
    const nodes = slotAssignedElements(assignedNodes);
    const value = this.value ? this.value.split(',') : [];
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
  }

  eventListener = (ev: any) => {
    if (ev.target === this) {
      return;
    }
    const value = this.value ? this.value.split(',') : [];
    if (!checkFalse(ev.target.checked)) {
      value.push(ev.target.name);
    } else {
      value.splice(
        value.findIndex((name) => name === ev.target.name),
        1,
      );
    }
    this.$emit('change', {
      detail: { value },
    });
    ev.stopPropagation();
  };

  render() {
    return (
      <div class="quark-checkbox-group-wrapper">
        <slot  
          onslotchange={this.handleSlotChange}
          ref={this.slotRef}
          ></slot>
      </div>
    );
  }
}

export { QuarkCheckboxGroup };
