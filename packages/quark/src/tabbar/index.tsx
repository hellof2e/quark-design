import QuarkElement, {
  property,
  createRef,
  customElement
} from '@quarkd/core';
import {slotAssignedElements} from '../../utils/public';
import '../tabbaritem';
import style from './style.css';
export interface Props {
  fixed?: boolean
  inactivecolor?: string
  activecolor?: string
  value?: number
}
export interface CustomEvent {
  change: (e: {detail: {value: number | string}}) => void
}
@customElement({tag: 'quark-tabbar', style})
class QuarkTabbar extends QuarkElement {
  @property({
    type: Boolean
  })
  fixed: boolean = false;

  @property({
    type: Boolean
  })
  placeholder: boolean = false;

  @property()
  inactivecolor: string;

  @property()
  activecolor: string;

  @property()
  value: string = '0';

  slotRef: any = createRef();

  shouldComponentUpdate(
    propName: string,
    oldValue: string,
    newValue: string
  ): boolean {
    if (propName === 'value' && oldValue !== newValue) {
      const assignedNodes = this.slotRef.current?.assignedNodes();
      const elements = slotAssignedElements(assignedNodes);
      elements.forEach((item, index) => {
        if (item.getAttribute('name') === newValue) {
          item.setAttribute('active', 'true');
        } else {
          item.setAttribute('active', 'false');
        }
      });
    }
    return true;
  }

  slotchange = () => {
    const assignedNodes = this.slotRef.current?.assignedNodes();
    const elements = slotAssignedElements(assignedNodes);
    elements.forEach((item, index) => {
      item.setAttribute('inactivecolor', this.inactivecolor ? this.inactivecolor : '#879099');
      item.setAttribute('activecolor', this.activecolor ? this.activecolor : '#0088FF');
      if (item.getAttribute('name') === null) {
        item.setAttribute('name', String(index));
      }
      item.addEventListener('click', this.eventListener);
      if (item.getAttribute('name') === this.value) {
        item.setAttribute('active', 'true');
      }
    });
  };


  eventListener = (e: any) => {
    this.value = e.currentTarget.getAttribute('name');
    this.$emit('change', {
      detail: { value: e.currentTarget.getAttribute('name') }
    });
  };

  render() {
    return (
      <div class="quark-tabbar">
        <slot ref={this.slotRef} onslotchange={this.slotchange}></slot>
      </div>
    );
  }
}

export default QuarkTabbar;
