import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from 'body-scroll-lock';
import QuarkElement, {
  property,
  customElement,
  Fragment,
  createRef
} from '@quarkd/core';
import style from './style.css';
export interface Props {
  open: boolean
  zindex?: number
}
export interface CustomEvent {
  close: () => void
}
@customElement({
  tag: 'quark-overlay',
  style
})
class QuarkOverlay extends QuarkElement {
  constructor() {
    super();
  }

  @property({
    type: Boolean
  })
  open: boolean = false;

  @property()
  zindex: number | string = 999;

  wrap: any = createRef();

  componentDidMount() {
    if (this.zindex) {
      this.style.zIndex = `${this.zindex}`;
    }
  }

  componentDidUpdate(propName: string, oldValue: string, newValue: string) {
    if (propName === 'open' && this.wrap && this.wrap.current) {
      const { current } = this.wrap;
      if (newValue) {
        disableBodyScroll(current);
      } else {
        enableBodyScroll(current);
      }
    }
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  handleMaskClick = () => {
    this.$emit('close');
  };

  render() {
    return (
      <Fragment>
        <div class="quark-overlay" ref={this.wrap}>
          <slot></slot>
        </div>
        <div class="quark-overlay-mask" onClick={this.handleMaskClick} />
      </Fragment>
    );
  }
}

export default QuarkOverlay;
