import QuarkElement, {
  Fragment,
  property,
  customElement,
  createRef,
  state
} from '@quarkd/core';

import style from './style.css';

@customElement({
  tag: 'quark-field',
  style
})
class QuarkField extends QuarkElement {
  @property()
  name: string = '';

  @property()
  label: string = '';

  @property()
  defaultvalue: string = '';

  @property()
  value: string = '';

  @property()
  type: string = '';

  @property()
  placeholder: string = '';

  @property()
  max: string = '';

  @property()
  maxlength: string = '';

  @property()
  min: string = '';

  @property()
  minlength: string = '';

  @property()
  errormsg: string = '';

  @property({ type: Boolean })
  disabled: boolean = false;

  @property({ type: Boolean })
  readonly: boolean = false;

  @property({ type: Boolean })
  required: boolean = false;

  rules: any[] = [];

  inputRef: any = createRef();

  errorRef: any = createRef();

  @state()
  showError: boolean = false;


  evenFn = (type: string) => (e: Event) => {
    if (!this.inputRef && !this.inputRef.current) return;
    e.stopPropagation();
    const { value } = this.inputRef.current;
    this.value = value;
    this.$emit(type, { detail: { value } });
    if (type === 'blur' || type === 'change') {
      this.validRules();
    }
  };

  validRules = () => {
    if (!this.errorRef || !this.errorRef.current) return;
    const { current } = this.errorRef;
    if (this.rules && this.rules.length > 0) {
      for (let i = 0; i < this.rules.length; i += 1) {
        const rule = this.rules[i];
        if (rule.validator) {
          if (!rule.validator(this.value) && rule.message) {
            this.errormsg = rule.message;
            if (rule.message) current.style.display = 'inline-block';
            return;
          }
        } else if (rule.required && rule.message && !this.value) {
          this.errormsg = rule.message;
          if (rule.message) current.style.display = 'inline-block';
          return;
        }
      }
      current.style.display = 'none';
      this.errormsg = '';
    }
    if (this.required)
      current.style.display =
        !this.value && this.errormsg ? 'inline-block' : 'none';
  };

  setRules(rules: any[]) {
    if (!Array.isArray(rules)) {
      throw new Error('rules need array');
    }
    this.rules = rules;
  }

  render() {
    const label = this.label ? <label class="quark-field-label">{this.label}</label> : null;
    return (
      <Fragment>
        <slot name="label">{label}</slot>
        <div class="quark-field-input-container">
          <div class="quark-field-input-inner">
            <input
              ref={this.inputRef}
              name={this.name}
              value={this.value}
              type={this.type}
              placeholder={this.placeholder}
              min={this.min}
              max={this.max}
              minlength={this.minlength}
              maxlength={this.maxlength}
              disabled={this.disabled}
              readonly={this.readonly}
              onChange={this.evenFn('change')}
              onInput={this.evenFn('change')}
              onBlur={this.evenFn('blur')}
              onFocus={this.evenFn('focus')}
            />
          </div>
          <div class="quark-field-error-msg" ref={this.errorRef}>
            {this.errormsg}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default QuarkField;
