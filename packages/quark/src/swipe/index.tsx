/* eslint-disable no-script-url */
import QuarkElement, {
  property,
  customElement,
  Fragment,
  createRef,
  state,
} from "@quarkd/core";
import { slotAssignedElements } from "../../utils/public";
import style from "./style.css";
import swipeItemStyle from "./swipeItem.css";
export interface Props {
  type?: string;
  duration?: number;
  interval?: number;
  defaultindex?: string;
  autoplay?: boolean;
  activecolor?: string;
  inactivecolor?: string;
}
export interface CustomEvent {
  change: (e: { detail: { index: number } }) => void;
}
@customElement({ tag: "quark-swipe-item", style: swipeItemStyle })
class QuarkSwipeItem extends QuarkElement {
  componentDidMount() {
    const parentNode = this.parentNode as QuarkSwipe;
    if (parentNode && parentNode.moveWidth) {
      this.style.width = `${parentNode.moveWidth}px`;
    }
  }

  render() {
    return <slot></slot>;
  }
}
export { QuarkSwipeItem };

@customElement({ tag: "quark-swipe", style })
class QuarkSwipe extends QuarkElement {
  @property({
    type: Number,
  })
  duration = 500;

  @property({
    type: Number,
  })
  interval = 3000;

  @property({
    type: Number,
  })
  defaultindex = 0;

  @property({
    type: Boolean,
  })
  autoplay = false;

  @property()
  inactivecolor = "#d3dae0";

  @property()
  activecolor = "";

  @property()
  type = "";

  @state()
  count = 0;

  @state()
  currentIndex = 0;

  slotWrapRef: any = createRef();

  containerRef: any = createRef();

  moveWidth = 0;

  startX = 0;

  startY = 0;

  endX: number | undefined = 0;

  endY: number | undefined = 0;

  timer: any = null;

  componentDidMount() {
    const { offsetWidth } = this;
    this.currentIndex = this.defaultindex;
    this.moveWidth = offsetWidth;
    const offset = this.getOffset();
    this.swipeChild(offset, false);
  }

  componentWillUnmount() {
    this.removeEvent();
    this.clearTimer();
  }

  eventBind() {
    this.removeEvent();
    this.addEventListener("touchstart", this.handleTouchStart);
    this.addEventListener("touchmove", this.handleTouchMove);
    this.addEventListener("touchend", this.handleTouchEnd);
  }

  removeEvent = () => {
    this.removeEventListener("touchstart", this.handleTouchStart);
    this.removeEventListener("touchmove", this.handleTouchMove);
    this.removeEventListener("touchend", this.handleTouchEnd);
  };

  handleTouchStart = (e: any) => {
    this.clearTimer();
    this.startX = e.changedTouches[0].clientX;
    this.startY = e.changedTouches[0].clientY;
    this.endX = undefined;
    this.endY = undefined;
  };

  handleTouchMove = (e: any) => {
    this.endX = e.changedTouches[0].clientX;
    this.endY = e.changedTouches[0].clientY;
  };

  handleTouchEnd = () => {
    const angle = this.angle(
      { X: this.startX, Y: this.startY },
      { X: this.endX, Y: this.endY }
    );
    if (this.endX === undefined || this.endY === undefined) {
      this.setTimer();
      return;
    }
    if (Math.abs(angle) > 30) {
      this.setTimer();
      return;
    }
    if (this.endX > this.startX) {
      // 右滑
      this.prevSlider();
    } else {
      // 左滑
      this.nextSlider();
    }
  };

  // 右滑
  prevSlider() {
    const { count } = this;
    if (this.currentIndex === 0) {
      this.changeFirstNodeTranX(true);
      this.changeLastNodeTranX(false);
      this.changeContainerTranX(true);
      setTimeout(() => {
        const offset = this.moveWidth;
        this.swipeChild(offset);
        this.currentIndex = count - 1;
        this.dispatchChanage();
      }, 50);
    } else if (this.currentIndex === count - 1) {
      this.changeLastNodeTranX(true);
      this.changeContainerTranX(false);
      this.currentIndex -= 1;
      setTimeout(() => {
        const offset = this.getOffset();
        this.swipeChild(offset);
        this.dispatchChanage();
      }, 50);
    } else {
      this.currentIndex -= 1;
      const offset = this.getOffset();
      this.swipeChild(offset);
      this.dispatchChanage();
    }
  }

  // 左滑
  nextSlider() {
    const { count } = this;
    if (this.currentIndex === 0) {
      this.changeFirstNodeTranX(true);
      this.changeContainerTranX(true);
      setTimeout(() => {
        this.currentIndex += 1;
        const offset = this.getOffset();
        this.swipeChild(offset);
        this.dispatchChanage();
      }, 50);
    } else if (this.currentIndex > 0 && this.currentIndex < count - 1) {
      this.currentIndex += 1;
      const offset = this.getOffset();
      this.swipeChild(offset);
      this.dispatchChanage();
    } else {
      // 最后一个,两种场景，第一种就正常的滑到最后一个，另外一种是从第一个右滑到最后一个
      const { current } = this.containerRef;
      if (!current) {
        return;
      }
      const { style } = current;
      let offset = 0;
      // 从第一个右滑到最后一个
      if (style.transform === `translateX(${this.moveWidth}px)`) {
        this.changeLastNodeTranX(true);
        this.changeContainerTranX(false);
        this.currentIndex += 1;
        this.changeFirstNodeTranX(false);
        offset = this.getOffset();
      } else {
        // 正常的滑到最后一个
        this.currentIndex += 1;
        this.changeFirstNodeTranX(false);
        offset = this.getOffset();
      }
      setTimeout(() => {
        this.swipeChild(offset);
        this.currentIndex = 0;
        this.dispatchChanage();
      }, 50);
    }
  }

  changeFirstNodeTranX(reset: boolean) {
    const firstNode: any = this.childNodes[0];
    firstNode.style.transitionDuration = null;
    if (reset) {
      firstNode.style.transform = null;
    } else {
      firstNode.style.transform = `translateX(${
        this.count * this.moveWidth
      }px)`;
    }
  }

  changeLastNodeTranX(reset: boolean) {
    const lastNode: any = this.childNodes[this.count - 1];

    lastNode.style.transitionDuration = null;
    if (reset) {
      lastNode.style.transform = null;
    } else {
      lastNode.style.transform = `translateX(${
        -this.count * this.moveWidth
      }px)`;
    }
  }

  changeContainerTranX(reset: boolean) {
    const { current } = this.containerRef;
    if (!current) {
      return;
    }
    current.style.transitionDuration = null;
    if (reset) {
      current.style.transform = `translateX(0px)`;
    } else {
      current.style.transform = `translateX(${
        -(this.count - 1) * this.moveWidth
      }px)`;
    }
  }

  swipeChild(offset: number, needTransition = true) {
    this.clearTimer();
    const { current } = this.containerRef;
    if (!current) {
      return;
    }
    const { duration } = this;
    if (!needTransition) {
      current.style.transitionDuration = null;
    } else {
      current.style.transitionDuration = `${duration / 1000}s`;
    }

    current.style.transform = `translateX(${offset}px)`;
    this.setTimer();
  }

  clearTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  dispatchChanage() {
    this.$emit("change", {
      detail: {
        index: this.currentIndex,
      },
    });
  }

  getOffset() {
    const offset = -this.currentIndex * this.moveWidth;
    return offset;
  }

  setTimer() {
    if (this.autoplay) {
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.timer = setInterval(() => {
        this.nextSlider();
      }, this.interval);
    }
  }

  angle(start: { X: number; Y: number }, end: { X: number; Y: number }) {
    const X = end.X - start.X;
    const Y = end.Y - start.Y;
    // 返回角度 /Math.atan()返回数字的反正切值
    return (360 * Math.atan(Y / X)) / (2 * Math.PI);
  }

  handleRightSlotChange = () => {
    const { current } = this.slotWrapRef;
    if (current) {
      const nodes = slotAssignedElements(current.assignedNodes());
      this.count = nodes.length;
      if (this.count <= 1) {
        // 当为1时禁止滑到
        this.removeEvent();
        this.clearTimer();
      } else {
        this.eventBind();
        this.setTimer();
      }
    }
  };

  renderIndicators() {
    const indicators = [];
    for (let i = 0; i < this.count; i += 1) {
      const indicator = (
        <div
          class="indicator"
          style={{
            backgroundColor:
              this.currentIndex === i ? this.activecolor : this.inactivecolor,
            opacity: this.currentIndex === i ? 1 : 0.7,
          }}
        ></div>
      );
      indicators.push(indicator);
    }
    return indicators;
  }

  render() {
    return (
      <Fragment>
        <div class="container" ref={this.containerRef}>
          <slot
            onslotchange={this.handleRightSlotChange}
            ref={this.slotWrapRef}
          ></slot>
        </div>
        <slot name="indicators">
          <div class="indicators">{this.renderIndicators()}</div>
        </slot>
      </Fragment>
    );
  }
}
export default QuarkSwipe;
