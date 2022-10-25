import QuarkElement, {
  property,
  customElement
} from '@quarkd/core';

import '@quarkd/icons/lib/close-o';
import style from './style.css';
import '../overlay';
type MarketDialogParams = {
  close?: () => void, 
  zindex?: () => void, 
  url: string
}
@customElement({
  tag: 'quark-market-dialog',
  style
})
class QuarkMarketDialog extends QuarkElement {
  @property()
  url: string = '';

  @property()
  size: string = '32';

  @property({ type: Boolean })
  open: boolean = false;

  dRemove: boolean = false;


  shouldComponentUpdate(propName: string, oldValue: string, newValue: string) {
    if (propName === 'open' && newValue !== oldValue) {
      if (!newValue && this.dRemove) {
        // 等动画结束
        setTimeout(() => document.body.removeChild(this), 300);
      }
    }
    return true;
  }

  closeIconClick = () => {
    this.open = false;
    this.$emit('close');
  };

  render() {
    return (
      <quark-overlay open={this.open}>
        <div class="quark-market-container">
          <slot name="market">
            {this.url && <img alt="error" src={this.url} />}
          </slot>
          <quark-icon-close-o
            class="quark-market-close"
            size={this.size}
            color="#fff"
            onClick={this.closeIconClick}
          />
        </div>
      </quark-overlay>
    );
  }
}

// 函数调用
export default function MarketDialog(params: MarketDialogParams): QuarkMarketDialog{
  const dialog: any = document.createElement('quark-market-dialog');
  const { close, zindex, url } = params;
    dialog.dRemove = true;
    dialog.close = close;
    dialog.zindex = zindex;
    dialog.url = url;
    dialog.dRemove = true;
  document.body.appendChild(dialog);
  setTimeout(() => {
    dialog.open = true;
  });
  return dialog;
}
export { QuarkMarketDialog };
