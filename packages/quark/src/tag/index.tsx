import QuarkElement, {
  property,
  customElement,
  createRef
} from '@quarkd/core';

import style from './style.css';

@customElement({tag: 'quark-tag', style})
class QuarkTag extends QuarkElement {
  constructor() {
    super();
  }

  @property()
  type: string = '';

  @property()
  color: string = '';

  @property()
  textcolor: string = '';

  @property()
  size: string = '';

  @property({
    type: Boolean
  })
  plain: boolean = false;

  @property({
    type: Boolean
  })
  round: boolean = false;

  wrap: any = createRef();

  render() {
    return (
      <span
        class="quark-tag"
        style={{ background: this.color, color: this.textcolor }}
      >
        <slot></slot>
      </span>
    );
  }
}

export default QuarkTag;
