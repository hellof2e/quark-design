import QuarkElement, {
  property,
  customElement,
  Fragment,
} from '@quarkd/core';
import style from './style.css';
export interface Props {
  type?: 'circular' | 'spinner'
  color?: string
  size?: string | number
  vertical?: boolean
}
@customElement({
  tag: 'quark-loading',
  style
})
class QuarkLoading extends QuarkElement {
  constructor() {
    super();
  }

  @property()
  type: 'spinner' | 'circular' = 'spinner';

  @property({
    type: Boolean,
  })
  vertical: boolean = false;

  @property()
  color: string | undefined = '#879099';

  @property()
  size: string | undefined = undefined;


  getFontSize() {
    let fontSize = '30px';
    if (
      this.size
      && (this.size.includes('px')
        || this.size.includes('rem')
        || this.size.includes('em'))
    ) {
      fontSize = this.size;
    } else {
      fontSize = `${this.size}px`;
    }
    return fontSize;
  }

  renderLoadingSvg = () => {
    const fontSize = this.getFontSize();
    if (this.type === 'circular') {
      return (
        <svg
          style={{ fontSize }}
          class="quark-loading-spinner"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g stroke={this.color} stroke-width="1.91304348">
              <g transform="translate(1.000000, 1.000000)">
                <rect
                  id="Base"
                  stroke-opacity="0.2"
                  x="0"
                  y="0"
                  width="22"
                  height="22"
                  rx="11"
                ></rect>
                <path
                  d="M11,0 C17.0751322,-1.11598369e-15 22,4.92486775 22,11 C22,17.0751322 17.0751322,22 11,22 C4.92486775,22 7.43989126e-16,17.0751322 0,11 C-7.43989126e-16,4.92486775 4.92486775,1.11598369e-15 11,0 Z"
                  stroke-linecap="round"
                  stroke-dasharray="39.85507368004841,19.9275368400242"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      );
    }

    return (
      <svg
        class="quark-loading-spinner"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2171"
        width="128"
        height="128"
        style={{ color: this.color, fontSize }}
      >
        <path
          d="M480 96a32 32 0 0 1 64 0v192a32 32 0 0 1-64 0V96z m250.624 60.64a32 32 0 1 1 51.776 37.632l-112.832 155.328a32 32 0 0 1-51.808-37.632l112.864-155.328z m167.136 196.384a32 32 0 1 1 19.776 60.864l-182.624 59.328a32 32 0 0 1-19.776-60.864l182.624-59.328z m19.776 257.088a32 32 0 1 1-19.776 60.864l-182.624-59.328a32 32 0 0 1 19.776-60.864l182.624 59.328zM782.4 829.76a32 32 0 0 1-51.776 37.632l-112.864-155.328a32 32 0 1 1 51.808-37.632l112.832 155.328zM544 928a32 32 0 0 1-64 0v-192a32 32 0 0 1 64 0v192z m-250.624-60.64a32 32 0 0 1-51.776-37.632l112.832-155.328a32 32 0 0 1 51.808 37.632l-112.864 155.328z m-167.136-196.384a32 32 0 1 1-19.776-60.864l182.624-59.328a32 32 0 0 1 19.776 60.864l-182.624 59.328z m-19.776-257.088a32 32 0 0 1 19.776-60.864l182.624 59.328a32 32 0 1 1-19.776 60.864l-182.624-59.328zM241.6 194.24a32 32 0 1 1 51.776-37.632l112.864 155.328a32 32 0 1 1-51.808 37.632L241.6 194.24z"
          p-id="2172"
        ></path>
      </svg>
    );
  };

  render() {
    return (
      <Fragment>
        {this.renderLoadingSvg()}
        <span class="quark-loading-text">
          <slot></slot>
        </span>
      </Fragment>
    );
  }
}

export default QuarkLoading;
