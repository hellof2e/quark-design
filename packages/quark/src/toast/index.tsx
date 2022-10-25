import '@quarkd/icons/lib/success';
import '@quarkd/icons/lib/close';
import '@quarkd/icons/lib/warning';
import QuarkElement, {
  Fragment,
  property,
  customElement,
  createRef,
} from '@quarkd/core';
import style from './style.css';
import '../overlay';
import '../loading';

let toast = null;
@customElement({tag: 'quark-toast', style})
class QuarkToast extends QuarkElement {
  @property()
  type: string = '';

  @property()
  icon: string = '';

  @property({ type: Boolean })
  show: boolean = false;

  @property()
  content: any = '';

  dRemove: boolean = false;

  timer: any = '';

  iconSize: number = 40;

  iconColor: string = '#ffffff';

  zIndex: number = 9999;

  iconRef: any = createRef();

  toastRef: any = createRef();

  static allowMultiple: boolean = false;

  componentDidMount(): void {
    this.dRemove = false;
  }

  // 删除 toast dom
  transitionendChange = () => {
    if (!this.show && this.dRemove) {
      document.body.removeChild(this);
    }
  };

  shouldComponentUpdate(
    propName: string,
    oldValue: string | boolean,
    newValue: string | boolean
  ): boolean {
    if (propName === 'show') {
      if (this.toastRef && this.toastRef.current) {
        const { current } = this.toastRef;
        // 设置退出过度动画
        if (newValue) {
          // 由关闭到打开
          current.classList.remove('quark-toast-leave');
        } else {
          current.classList.add('quark-toast-leave');
          this.transitionendChange();
        }
      }
    }
    return true;
  }

  hide = () => {
    document.body.removeChild(this);
  };

  renderIcon = () => {
    if (this.type === 'success') {
      return  <quark-icon-success color={this.iconColor} size={this.iconSize} ref={this.iconRef} />
    } else if (this.type === 'failure') {
      return  <div class="quark-toast-failure">
          <quark-icon-close color={this.iconColor} size={this.iconSize} ref={this.iconRef} />
      </div>
    } else if (this.type === 'warning') {
      return  <quark-icon-warning color={this.iconColor} size={this.iconSize} ref={this.iconRef} />
    }
    return null;
  }
  renderLoading = () => {
    return (
      <quark-overlay open={this.show} zIndex={this.zIndex}>
        <div class="quark-toast" ref={this.toastRef}>
          {this.type !== 'text' && (
            this.renderIcon() 
          )}
            <quark-loading
              class="loading"
              size={this.iconSize}
              color="#ffffff"
              type="circular"
              vertical
            ></quark-loading>
          <slot>{this.content}</slot>
        </div>
    </quark-overlay>
    )
  }
  renderOther = () => (
    <div class="quark-toast" ref={this.toastRef}>
      {this.type !== 'text' && (
        this.renderIcon() 
      )}
      <slot>{this.content}</slot>
    </div>
  )
  render() {
    return (
      <Fragment>
        {this.type ==='loading' ? this.renderLoading() : this.renderOther()}
      </Fragment>
    );
  }
}

interface TOptions {
  msg: string;
  duration?: number;
  type: string;
  close?: any;
  show?: boolean;
  size?: number;
  zIndex?: number;
}

type ToastParams = {
  duration?: number
  close?: () => void
  size?: number
  zIndex?: number
}

const defaultOptions = {
  msg: '',
  duration: 2000,
  type: 'text',
  close: null
};

const mountToast = (opts: TOptions) => {
  const {
    type,
    msg,
    duration = 2000,
    close,
    size = 40,
    zIndex = 9999
  } = { ...defaultOptions, ...opts };
  let mountToast = null
  if (QuarkToast.allowMultiple) {
    mountToast = document.createElement('quark-toast');
  } else {
    if (!toast) {
      toast = document.createElement('quark-toast');
    }
    mountToast = toast
  }
  if (mountToast.timer) clearTimeout(mountToast.timer);
  mountToast.type = type;
  mountToast.content = msg;
  mountToast.iconSize = size;
  mountToast.zIndex = zIndex;
  document.body.appendChild(mountToast);
  setTimeout(() => {
    mountToast.show = true;
  });
  mountToast.dRemove = true;

  if (duration !== 0) {
    mountToast.timer = setTimeout(() => {
      // TODO：关闭的回调函数。怎么调用比较合适？
      mountToast.show = false;
      if (close) close();
    }, duration);
  }
  // eslint-disable-next-line consistent-return
  return mountToast;
};

const errorMsg = (msg: string) => {
  if (!msg) {
    console.warn('[Quark Toast]: msg cannot empty');
  }
};
export { QuarkToast };

export default {
  text: function (msg = '', opts: ToastParams  = {}) :QuarkToast {
    errorMsg(msg);
    return mountToast({ ...opts, type: 'text', msg });
  },

  success: function (msg = '', opts: ToastParams = {}):QuarkToast {
    errorMsg(msg);
    return mountToast({ ...opts, type: 'success', msg });
  },

  error: function (msg = '', opts: ToastParams = {}):QuarkToast {
    errorMsg(msg);
    return mountToast({ ...opts, type: 'failure', msg });
  },

  warning: function (msg = '', opts: ToastParams = {}):QuarkToast {
    errorMsg(msg);
    return mountToast({ ...opts, type: 'warning', msg });
  },

  loading: function (msg = '', opts: ToastParams = {}):QuarkToast {
    errorMsg(msg);
    return mountToast({ ...opts, type: 'loading', msg });
  },

  hide: function () {
    if(toast)toast.hide()
  },
  
  allowMultiple: function (): void {
    QuarkToast.allowMultiple = true
  }
};
