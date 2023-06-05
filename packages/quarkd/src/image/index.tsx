import { customElement, property, state, QuarkElement } from "quarkc";
import { addUnit } from "../../utils/public";
import style from "./style.css";
import LazyLoad from "../../utils/lazy";
import Locale from "../locale";

type FitType = "fill" | "contain" | "cover" | "none" | "scale-down";

type Stauts = "loading" | "loaded" | "error";

type LazyLoadType = {
  add: (el: HTMLImageElement, src: string, parent?: ParentNode | null) => void;
};
export interface Props {
  width?: number | string;
  height?: number | string;
  fit?: FitType;
  lazy?: boolean;
  round?: boolean;
  radius?: number | string;
  alt?: string;
  src: string;
}
export interface CustomEvent {
  load?: () => void;
  error?: () => void;
}
@customElement({
  tag: "quark-image",
  style,
})
class QuarkImage extends QuarkElement {
  @property()
  src = "";

  @property({
    type: Boolean,
  })
  lazy = false;

  @property()
  alt = "";

  @property()
  width: number | string = "";

  @property()
  height: number | string = "";

  @property({
    type: Boolean,
  })
  round = false;

  @property()
  fit: FitType = "fill";

  @property()
  radius: number | string = "";

  lazyTarget: LazyLoadType = null;

  @state()
  status: Stauts = "loading";

  imgRef: HTMLImageElement | null = null;

  handleLoad = () => {
    this.status = "loaded";
    this.$emit("load");
  };

  handleError = () => {
    this.status = "error";
    this.$emit("error");
  };

  componentDidMount(): void {
    if (!this.shadowRoot) return;
    this.imgRef = this.shadowRoot.getElementById(
      "quark-img"
    ) as HTMLImageElement;

    if (!this.imgRef) return;

    // lazyload
    if (this.lazy) {
      this.lazyTarget = LazyLoad;
      this.imgRef.src =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWP4////fwAJ+wP9CNHoHgAAAABJRU5ErkJggg==";
      this.lazyTarget.add(this.imgRef, this.src);
    } else {
      this.imgRef.src = this.src;
    }
  }

  render() {
    const alt = this.alt ? { alt: this.alt } : {};
    const attrs = {
      class: "quark-image-img",
      style: {
        width: addUnit(this.width),
        height: addUnit(this.height),
        "object-fit": this.fit,
        "border-radius": this.round ? "50%" : this.radius ? 1 : 0,
      },
      ...alt,
    };

    return (
      <div class="quark-image">
        {this.status === "error" && (
          <div class="quark-image-loading">
            <slot name="error">{Locale.current.image.loadError}</slot>
          </div>
        )}
        {this.status === "loading" && (
          <div class="quark-image-loading">
            <slot name="loading">{Locale.current.loading}</slot>
          </div>
        )}
        <img
          id="quark-img"
          {...attrs}
          onload={this.handleLoad}
          onerror={this.handleError}
        />
      </div>
    );
  }
}

export default QuarkImage;
