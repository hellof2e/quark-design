import QuarkElement, {
  Fragment,
  property,
  customElement
} from '@quarkd/core';

import style from './style.css';

@customElement({
  tag: 'quark-progress',
  style
})
class QuarkProgress extends QuarkElement {
  @property()
  color: string = 'linear-gradient(90deg, #FFC91C 0%, #FB990F 100%)';

  @property()
  value: string = '';

  @property({ type: Boolean })
  showtext: boolean = false;


  render() {
    return (
      <Fragment>
        <div class="wrap">
          <div
            class="progress active"
            style={{ background: this.color, width: `${this.value}%` }}
          ></div>
        </div>
        <slot name="percent">
          {this.showtext && <span class="value">{this.value}%</span>}
        </slot>
      </Fragment>
    );
  }
}

export default QuarkProgress;
