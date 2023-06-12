import { property, customElement, createRef, QuarkElement } from "quarkc";
import "../loading";
import style from "./style.css";
import { pxToVw } from "../../utils/util";

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
  disabled?: boolean;
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

  @property({
    type: Boolean,
  })
  plain = false;

  @property({
    type: Boolean,
  })
  light = false;

  slotRef: any = createRef();

  isActive: true;

  renderIcon = () => {
    if (this.icon && this.icon.startsWith("http")) {
      return <img class="quark-button-icon" src={this.icon}></img>;
    }
    if (this.loading) {
      return (
        <quark-loading
          class="quark-button-load"
          color={this.loadingcolor ? this.loadingcolor : "#fff"}
          size={this.loadingsize ? pxToVw(this.loadingsize) : pxToVw(20)}
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
    this.slotRef.current.addEventListener("touchstart", () => {});
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
