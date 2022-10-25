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
import '@quarkd/icons/lib/close'
import style from './style.css';

@customElement({
  tag: 'quark-popup',
  style
})
class QuarkPopup extends QuarkElement {
  constructor() {
    super();
  }

  @property({
    type: Boolean
  })
  open: boolean = false;

  @property({
    type: Boolean
  })
  safearea: boolean = false;

  @property({
    type: Boolean
  })
  round: boolean = false;

  @property({
    type: Boolean
  })
  closeable: boolean = false;

  @property()
  position: string = 'bottom';

  @property()
  zindex: number | string | undefined = undefined;

  wrap: any = createRef();


  componentDidMount() {
    if (this.zindex) {
      this.style.zIndex = `${this.zindex}`;
    }
  }

  shouldComponentUpdate(
    propName: string,
    oldValue: string | boolean,
    newValue: string | boolean
  ): boolean {
    if (propName === 'open' && this.wrap && this.wrap.current) {
      const { current } = this.wrap;
      // 设置退出过度动画
      if (newValue) {
        // 由关闭到打开
        current.classList.remove('leave');
      } else if (oldValue && !newValue) {
        // 由打开到关闭
        current.classList.add('leave');
      }
    }
    return true;
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

  dispatchClose() {
    this.open = false;
    // 标签调用触发
    this.dispatchEvent(new CustomEvent('closed'));
  }

  handleCloseBtnClick = () => {
    this.dispatchClose();
  };

  handleClick = () => {
    this.dispatchClose();
  };

  render() {
    return (
      <Fragment>
        <div class="quark-popup" ref={this.wrap}>
          {this.closeable && this.position === 'bottom' && (
            <div class="quark-popup-close-btn" onClick={this.handleCloseBtnClick}>
              <quark-icon-close  size="24" />
            </div>
          )}
          <slot></slot>
        </div>
        <div class="quark-popup-mask" onClick={this.handleClick} />
      </Fragment>
    );
  }
}

export default QuarkPopup;
