import QuarkElement, { customElement, property } from "@quarkd/core";
import style from "./style.css";

@customElement({
  tag: "quark-card",
  style,
})
class QuarkCard extends QuarkElement {
  @property()
  title = "";

  @property()
  content = "";

  @property()
  tips = "";

  @property()
  desc = "";

  render() {
    return (
      <div class="card-container">
        <div class="title">{this.title}</div>
        <div class="card-body">
          <slot name="content">
            <div class="content">{this.content}</div>
          </slot>
          <div class="tips">{this.tips}</div>
        </div>
        <slot name="desc">
          <div class="desc">{this.desc}</div>
        </slot>
      </div>
    );
  }
}

export default QuarkCard;
