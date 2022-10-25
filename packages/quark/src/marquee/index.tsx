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

  @state()
  animating: boolean = false;

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
    if (container.offsetWidth >= text.offsetWidth) {
      this.animating = false;
      text.style.removeProperty('transition-duration');
      text.style.removeProperty('transform');
      return;
    }

    if (this.animating) return;

    const initial = !text.style.transform;
    text.style.transitionDuration = '0s';
    if (initial) {
      text.style.transform = 'translateX(0)';
    } else {
      text.style.transform = `translateX(${container.offsetWidth}px)`;
    }
    const distance = initial
      ? text.offsetWidth
      : container.offsetWidth + text.offsetWidth;
    this.animating = true;
    text.style.transitionDuration = `${Math.round(
      distance / Number(this.speed)
    )}s`;
    text.style.transform = `translateX(-${text.offsetWidth}px)`;
  };

  render() {
    return (
      <Fragment>
        <span
          class="quark-marquee-title"
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
