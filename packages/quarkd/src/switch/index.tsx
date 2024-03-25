import { property, customElement, QuarkElement } from "quarkc";
import style from "./style.css";
import "../loading";

export interface Props {
  checked?: boolean;
  disabled?: boolean;
  loading?: boolean;
  size?: number;
  color?: string;
  inactivecolor?: string;
  beforechange?: string;
}

export interface CustomEvent {
  change: (e: { detail: { value: boolean } }) => void;
}

@customElement({ tag: "quark-switch", style })
class QuarkSwitch extends QuarkElement {
  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  checked = false;

  @property({ type: Boolean })
  loading = false;

  @property()
  size = "";

  @property()
  color = "#08f";

  @property()
  inactivecolor = "#e1e6eb";

  @property()
  name = "";

  @property()
  beforechange = "";

  handleChange = async () => {
    if (this.disabled || this.loading) {
      return;
    }
    // 完全受控组件，内部不需要更改this.check
    const newValue = !this.checked;
    this.$emit("change", {
      detail: {
        value: newValue,
      },
    });
  };

  render() {
    const inlineStyle = {
      fontSize: this.size ? (16 * +this.size) / 30 : 16, // 高度为基准
      "--switch-active-color": this.color,
      "--switch-inactive-color": this.inactivecolor,
    };

    return (
      <div
        style={inlineStyle}
        class={this.loading && "quark-switch-loading"}
        part="root"
      >
        <input
          type="checkbox"
          id="quark-switch"
          class="quark-switch"
          part="switch"
          onClick={this.handleChange}
        />
        <label for="quark-switch" part="label">
          {this.loading && (
            <div class="quark-switch-loading-wrapper" part="switch-loading">
              <quark-loading
                part="loading-icon"
                size={+this.size ? (16 * +this.size) / 30 : 16}
                color={this.checked ? this.color : this.inactivecolor}
                type="spinner"
              ></quark-loading>
            </div>
          )}
        </label>
      </div>
    );
  }
}

export default QuarkSwitch;
