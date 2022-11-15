import QuarkElement, { property, customElement, createRef } from "@quarkd/core";
import "../loading";
import style from "./style.css";
export interface Props {
  type?: "primary" | "success" | "danger" | "warning";
  size?: "small" | "normal" | "big" | "large";
  icon?: string;
  shape?: "round" | "square";
  plain?: boolean;
  loading?: boolean;
  loadtype?: "circular" | "spinner";
  loadingcolor?: string;
  loadingsize?: number;
}
@customElement({
  tag: "quark-button",
  style,
})
class QuarkButton extends QuarkElement {
  constructor() {
    super();
  }

  @property({
    type: Boolean,
  })
  disabled = false;

  @property()
  size: string;

  @property()
  type = "";

  @property()
  icon: string | undefined = undefined;

  @property()
  shape: string;

  @property({
    type: Boolean,
  })
  loading = false;

  @property()
  loadtype: string;

  @property()
  loadingcolor: string;

  @property()
  loadingsize: number;

  @property()
  onselectstart: any = "return false";

  @property({
    type: Boolean,
  })
  plain = false;

  slotRef: any = createRef();

  renderIcon = () => {
    if (this.icon && this.icon.startsWith("http")) {
      return <img class="quark-button-icon" src={this.icon}></img>;
    }
    if (this.loading) {
      return (
        <quark-loading
          class="quark-button-load"
          color={this.loadingcolor ? this.loadingcolor : "#fff"}
          size={this.loadingsize ? this.loadingsize : "20"}
          type={this.loadtype ? this.loadtype : "spinner"}
        />
      );
    }
    return null;
  };

  componentDidMount() {
    this.slotRef.current.addEventListener("click", (e: Event) => {
      if (this.disabled || this.loading) {
        e.stopPropagation();
      }
    });
  }

  render() {
    return (
      <div ref={this.slotRef} class="quark-button">
        {this.renderIcon()}
        <slot></slot>
      </div>
    );
  }
}

export default QuarkButton;
