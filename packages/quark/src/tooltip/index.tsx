import QuarkElement, {
  property,
  customElement,
  createRef
} from '@quarkd/core';
import '@quarkd/icons/lib/close';
import style from './style.css';

@customElement({tag: 'quark-tooltip', style})
class QuarkTooltip extends QuarkElement {
  constructor() {
    super();
  }

  @property()
  placement: string = 'bottom';

  @property()
  tips: string = '';

  @property({
    type: Boolean
  })
  open: boolean = false;

  @property({
    type: Boolean
  })
  closeable: boolean = false;

  @property({
    type: Boolean
  })
  autoclose: boolean = false;

  @property()
  opentime: number = 3000;

  @property({
    type: Boolean
  })
  scroolhidden: boolean = false;

  @property()
  zindex: string = '999';

  timer: number | undefined = undefined;

  tipsRef: any = createRef();

  componentDidMount() {
    if (this.zindex) {
      this.style.zIndex = this.zindex;
    }

    if (this.scroolhidden) {
      window.addEventListener('scroll', this.windowScrollListener);
    }

    document.addEventListener('click', (e) => {
      if(!e.composedPath().includes(this) && this.open) {  // 打开状态，并且外界点击
        this.closeEmit();
      }
    })

    this.addTimer();
  }

  shouldComponentUpdate(
    propName: string,
    oldValue: string | boolean,
    newValue: string | boolean
  ): boolean {
    if (propName === 'open' && this.tipsRef && this.tipsRef.current) {
      const { current } = this.tipsRef;
      // 设置退出过度动画
      if (newValue) {
        // 由关闭到打开
        current.classList.remove('quark-tooltip-leave');
        this.addTimer();
      } else if (oldValue && !newValue) {
        // 由打开到关闭
        current.classList.add('quark-tooltip-leave');
        this.clearTimer();
      }
    }
    return true;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.windowScrollListener);
    this.clearTimer();
  }

  windowScrollListener = () => {
    if (this.open) {
      this.closeEmit();
    }
  };

  addTimer = () => {
    if (!this.open) {
      return;
    }
    if (this.autoclose) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.closeEmit();
      }, this.opentime);
    }
  };

  clearTimer = () => {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  };

  addRemoveAnnimation = () => {
    if (this.tipsRef && this.tipsRef.current) {
      const { current } = this.tipsRef;
      current.classList.add('quark-tooltip-leave');
    }
  };

  closeEmit = () => {
    this.addRemoveAnnimation();
    this.open = false;
    this.$emit('close');
  };

  handleTipsClick = (ev: any) => {
    ev.stopPropagation();
    if (!this.closeable) {
      return;
    }
    this.closeEmit();
  };

  renderCloseIcon = () => {
    if (!this.closeable) {
      return null;
    }
    return <quark-icon-close style={{ opacity: 0.9, marginLeft: 9 }} />;
  };

  renderTips = () => {
    if (
      this.placement === 'top' ||
      this.placement === 'topleft' ||
      this.placement === 'topright' ||
      this.placement === 'left' ||
      this.placement === 'lefttop' ||
      this.placement === 'leftbottom'
    ) {
      return (
        <div class="quark-tooltip-tips" ref={this.tipsRef} onClick={this.handleTipsClick}>
          <div class="quark-tooltip-content">
            <div>{this.tips}</div>
            {this.renderCloseIcon()}
          </div>
          <div class="quark-tooltip-triangle" />
        </div>
      );
    }
    return (
      <div class="quark-tooltip-tips" ref={this.tipsRef} onClick={this.handleTipsClick}>
        <div class="quark-tooltip-triangle" />
        <div class="quark-tooltip-content">
          <div>{this.tips}</div>
          {this.renderCloseIcon()}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div class="quark-tooltip">
        <slot></slot>
        {this.renderTips()}
      </div>
    );
  }
}

export default QuarkTooltip;
