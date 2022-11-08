import QuarkElement, {
  Fragment,
  property,
  customElement
} from '@quarkd/core';

import '@quarkd/icons/lib/arrow-left';
import '@quarkd/icons/lib/close';
import style from './style.css';
export interface Props {
  title: string
  lefthide?: boolean
  closehide?: boolean
  right?: string
  safearea?: boolean
  iconsize?: string
}
export interface CustomEvent{
  leftclick?: () => void
  rightclick?: () => void
  close?: () => void
}
@customElement({
  tag: 'quark-navbar',
  style
})
class QuarkNavbar extends QuarkElement {
  @property()
  title: string = '';

  @property()
  right: string = '';

  @property()
  iconsize: string = '24';

  @property({ type: Boolean })
  lefthide: boolean = false;

  @property({ type: Boolean })
  closehide: boolean = false;


  leftClick = () => {
    this.$emit('leftclick');
  };

  rightClick = () => {
    this.$emit('rightclick');
  };

  closeClick = () => {
    this.$emit('close');
  };

  render() {
    return (
      <Fragment>
        {!this.lefthide && (
          <slot name="left" class="quark-navbar-left">
            <quark-icon-arrow-left
              id="left"
              size={this.iconsize}
              onClick={this.leftClick}
            />
            {!this.closehide && (
              <quark-icon-close
                id="left"
                size={this.iconsize}
                onClick={this.closeClick}
                class="close"
              />
            )}
          </slot>
        )}
        <div class="quark-navbar-title">
          <div>{this.title}</div>
        </div>
        <slot name="right" class="quark-navbar-right icon">
          <span id="right" onClick={this.rightClick}>
            {this.right}
          </span>
        </slot>
      </Fragment>
    );
  }
}

export default QuarkNavbar;
