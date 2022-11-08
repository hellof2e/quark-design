import QuarkElement, {
  Fragment,
  property,
  customElement,
  createRef,
  state
} from '@quarkd/core';

import style from './style.css';

@customElement({
  tag: 'quark-marquee',
  style,
})
class QuarkMarquee extends QuarkElement {
  @property()
  title: string = '';

  @property()
  speed: string = '50';

  @property({ type: Boolean })
  reverse: boolean = false;

  @property({ type: Boolean })
  paused: boolean = false;

  @state()
  animating: boolean = false;

  @state()
  textWidth: number = 0;

  titleRef: any = createRef();

  componentDidMount(): void {
    this.start();
  }

  transitionEnd = () => {
    this.animating = false;
    this.start();
  };

  start = () => {
    const container = this;
    const text = this.titleRef.current;

    if (container.offsetWidth >= (this.textWidth || text.offsetWidth)) {
      this.animating = false;
      text.style.removeProperty('animation-duration');
      text.style.removeProperty('animation-name');
      return;
    }

    if (this.animating) return;

    const initial = !text.style.animationName;

    if (initial) {
      this.textWidth = text.offsetWidth;
      text.style.paddingLeft = `${container.offsetWidth}px`;
    }

    this.animating = true;
    text.style.animationDirection = this.reverse ? 'reverse' : 'normal';
    text.style.animationDuration = `${Math.round(
      text.offsetWidth / Number(this.speed)
    )}s`;
    text.style.animationName = 'quark-marquee-animation';
  };

  render() {
    return (
      <Fragment>
        <span
          class={`quark-marquee-title ${this.paused ? 'quark-marquee-paused' : ''
            }`}
          ref={this.titleRef}
          onTransitionend={this.transitionEnd}
        >
          {this.title}
        </span>
      </Fragment>
    );
  }
}

export default QuarkMarquee;
