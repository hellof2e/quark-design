import { classNames } from '../../utils/index';
import '../icon';
import QuarkElement, {
  customElement,
  property
} from '@quarkd/core';
import "@quarkd/icons/lib/arrow-left";
import "@quarkd/icons/lib/close";
import "@quarkd/icons/lib/search";
import style from './style.css';
import Locale from "../locale";

@customElement({
  tag: 'quark-search',
  style
})
class QuarkSearch extends QuarkElement {
  @property()
  value: string = '';

  @property()
  shape: string = 'square';

  @property({
    type: Boolean
  })
  dark: boolean = false;

  @property({
    type: Boolean
  })
  showback: boolean = false;

  @property({
    type: Boolean
  })
  hideaction: boolean = false;

  @property()
  actiontext: string = Locale.current.cancel;

  @property()
  iconcolor: string = '#242729';

  @property()
  placeholder: string = Locale.current.search.placeholder;

  @property()
  maxlength: string = '';

  @property({
    type: Boolean
  })
  autofocus: boolean = false;

  @property({
    type: Boolean
  })
  clearable: boolean = true;

  @property({
    type: Boolean
  })
  disabled: boolean = false;

  @property({
    type: Boolean
  })
  readonly: boolean = false;


  backEvent = () => {
    this.$emit('back');
  };

  actionEvent = () => {
    this.$emit('cancel');
  };

  clearEvent = () => {
    if (!this.value) {
      return;
    }
    this.value = '';
    this.$emit('change', {
      detail: {
        value: this.value
      }
    });
  };

  inputEvent = (e: any) => {
    const { target } = e;
    if (target.flag) {
      return;
    }
    e.stopPropagation();
    const { value } = target;
    this.value = value;
    this.$emit('change', {
      detail: {
        value
      }
    });
  };

  focusEvent = (e: any) => {
    e.stopPropagation();
    this.$emit('focus', {
      detail: { value: this.value }
    });
  };

  blurEvent = (e: any) => {
    e.stopPropagation();
    this.$emit('blur', {
      detail: { value: this.value }
    });
  };

  keypressEvent = (e: any) => {
    const ENTER_CODE = 13;
    if (e.keyCode === ENTER_CODE) {
      e.stopPropagation();
      this.$emit('search', {
        detail: { value: this.value }
      });
    }
  };

  onChoiceStart = ({ target }: any) => {
    target.flag = true;
  };

  onChoiceEnd = (e: any) => {
    const { target } = e;
    if (target.flag) {
      target.flag = false;
      this.inputEvent(e);
    }
  };

  render() {
    const searchClass = classNames('quark-search', {
      'quark-search-dark': this.dark
    });

    const contentClass = classNames('quark-search-content', {
      round: this.shape === 'round'
    });

    const showClear =
      this.value && this.clearable && !this.disabled && !this.readonly;

    return (
      <div class={searchClass}>
        {this.showback && (
          <div class="quark-search-back" onClick={this.backEvent}>
            <quark-icon-arrow-left
              color={this.dark ? '#fff' : this.iconcolor}
              size="24"
            />
          </div>
        )}

        <div class={contentClass}>
          <div class="quark-search-content-left-icon">
            <quark-icon-search
              color="RGBA(188, 196, 204, 1)"
              size="12"
            />
          </div>
          <div class="quark-search-input">
            <input
              disabled={this.disabled}
              readonly={this.readonly}
              autofocus={this.autofocus}
              maxlength={this.maxlength}
              placeholder={this.placeholder}
              // @ts-ignore
              oncompositionstart={this.onChoiceStart}
              oncompositionend={this.onChoiceEnd}
              oninput={this.inputEvent}
              onfocus={this.focusEvent}
              onblur={this.blurEvent}
              onkeypress={this.keypressEvent}
              value={this.value}
              type="search"
              class="quark-search-field-control"
            ></input>
            {showClear && (
              <quark-icon-close
                color="RGBA(188, 196, 204, 1)"
                class="quark-search-field-clear"
                size="13"
                onClick={this.clearEvent}
              />
            )}
          </div>
        </div>
        {!this.hideaction && (
          <slot name="action">
            <div class="quark-search-action" onClick={this.actionEvent}>
              {this.actiontext}
            </div>
          </slot>
        )}
      </div>
    );
  }
}

export default QuarkSearch;
