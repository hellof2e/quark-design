import QuarkElement, {
  property,
  customElement
} from '@quarkd/core';

import style from './style.css';
export interface Props {
  title?: string
  desc?: string
  image?: string
  imagesize?: string
}
@customElement({
  tag: 'quark-empty',
  style
})
class QuarkEmpty extends QuarkElement {
  constructor() {
    super();
  }

  @property()
  title: string = '';

  @property()
  desc: string = '';

  @property()
  image: string = '';

  @property()
  imagesize: string;

  render() {
    return (
      <div class="quark-empty">
        <div class="quark-empty-container">
          <img
            style={{width: ~['px', 'rem', 'em', 'vw', 'vh'].indexOf(this.imagesize) ? this.imagesize : `${this.imagesize}px`}}
            class="quark-empty-image"
            src={this.image ? this.image : "https://m.hellobike.com/resource/helloyun/16719/NzmBm8lW4h.png"}
            alt="empty-image"
          />
        </div>
        {this.title && (
          <div class="quark-empty-title">
            {this.title}
          </div>
        )}
        {this.desc && (
          <div class="quark-empty-desc">
            {this.desc}
          </div>
        )}
        <slot name="footer"></slot>
      </div>
    );
  }
}

export default QuarkEmpty;
