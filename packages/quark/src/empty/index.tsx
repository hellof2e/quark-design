import QuarkElement, { property, customElement } from "@quarkd/core";

import style from "./style.css";
export interface Props {
  title?: string;
  desc?: string;
  image?: string;
  imagesize?: string;
}
@customElement({
  tag: "quark-empty",
  style,
})
class QuarkEmpty extends QuarkElement {
  constructor() {
    super();
  }

  @property()
  title = "";

  @property()
  desc = "";

  @property()
  image = "";

  @property()
  imagesize: string;

  render() {
    return (
      <div class="quark-empty">
        <div class="quark-empty-container">
          <img
            style={{
              width: ~["px", "rem", "em", "vw", "vh"].indexOf(this.imagesize)
                ? this.imagesize
                : `${this.imagesize}px`,
            }}
            class="quark-empty-image"
            src={
              this.image
                ? this.image
                : "https://m.hellobike.com/resource/helloyun/16682/-UzYw-6Q1G.png?x-oss-process=image/quality,q_80"
            }
            alt="empty-image"
          />
        </div>
        {this.title && <div class="quark-empty-title">{this.title}</div>}
        {this.desc && <div class="quark-empty-desc">{this.desc}</div>}
        <slot name="footer"></slot>
      </div>
    );
  }
}

export default QuarkEmpty;
