import {
  customElement,
  property,
  createRef,
  state,
  QuarkElement,
} from "quarkc";
import Locale from "../locale";
import style from "./style.css";

type autoCompleteType = "off" | "on";
export interface Props {
  value?: string;
  placeholder?: string;
  rows?: number;
  maxlength?: number;
  showcount?: boolean;
  autocomplete?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  id?: string;
}
export interface CustomEvent {
  input: (e: { target: { value: string } }) => void;
  focus?: () => void;
  blur?: () => void;
  change: (e: { target: { value: string } }) => void;
}
@customElement({ tag: "quark-textarea", style })
class TextArea extends QuarkElement {
  @property()
  name = "";

  @property()
  rows = 1;

  @property({
    type: Boolean,
  })
  autosize = false;

  @property()
  placeholder: string = Locale.current.placehold;

  @property()
  maxlength: number | string = "";

  @property({
    type: Boolean,
  })
  showcount = false;

  @property({
    type: Boolean,
  })
  readonly = false;

  @property({
    type: Boolean,
  })
  disabled = false;

  @property()
  autocomplete: autoCompleteType = "off";

  @property()
  id = "";

  @state()
  value = "";

  textAreaRef: any = createRef();

  evenFn = (type: string) => (e: Event) => {
    if (!this.textAreaRef && !this.textAreaRef.current) return;
    e.stopPropagation();
    const { current } = this.textAreaRef;
    this.value = current.value;
    this.$emit(type, { detail: { value: this.value } });
    if (type === "change" && this.autosize) {
      current.style.height = "auto";
      current.style.height = `${current.scrollHeight}px`;
    }
  };

  render() {
    return (
      <div class="quark-textarea">
        <textarea
          class="quark-text-area"
          ref={this.textAreaRef}
          value={this.value}
          id={this.id}
          rows={this.rows}
          disabled={this.disabled}
          autocomplete={this.autocomplete}
          maxlength={this.maxlength}
          placeholder={this.placeholder}
          readonly={this.readonly}
          onChange={this.evenFn("change")}
          onInput={this.evenFn("change")}
          onBlur={this.evenFn("blur")}
          onFocus={this.evenFn("focus")}
          onClick={this.evenFn("click")}
        ></textarea>
        {this.showcount && (
          <div class="quark-textarea-text-count">
            {this.value.length || 0}
            {this.maxlength && <span>/{this.maxlength}</span>}
          </div>
        )}
      </div>
    );
  }
}

export default TextArea;
