import QuarkElement, {
  property,
  customElement,
} from '@quarkd/core';
import style from './style.css';
export interface Props {
  checked?: boolean
  disabled?: boolean
  size?: number
  color?: string
}
export interface CustomEvent {
  change: (e: {detail: {value: boolean}}) => void
}
@customElement({tag: 'quark-switch', style})
class QuarkSwitch extends QuarkElement {
  @property({ type: Boolean })
  disabled: boolean = false;
  
  @property({ type: Boolean })
  checked: boolean = false;
  
  @property()
  size: string = '';
  
  @property()
  color: string = '';

  @property()
  name: string = '';

  handleChange = () => {
    if (this.disabled) {
      return;
    }
    this.checked = !this.checked;
    // 注册 change 函数，供外部使用 <quark-switch @change={} />
    this.$emit('change', {
      detail: {
        value: this.checked,
      },
    });
  }
  
  render() {
    const inlineStyle = {
      fontSize: this.size ? (16 * (+this.size)) / 30 : 16, // 高度为基准
      "--switch-inner-color": this.color,
    }

    return (
      <div style={inlineStyle}>
        <input type="checkbox" id="quark-switch" class="quark-switch" onClick={this.handleChange}/>
        <label for="quark-switch"></label>
      </div>
    );
  }
}

export default QuarkSwitch;
