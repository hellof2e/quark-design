import {
  property,
  customElement,
  QuarkElement,
  createRef,
  state,
} from "quarkc";
import "@quarkd/icons/lib/arrow-right";
import style from "./style.css";
export interface Props {
  disabled?: boolean;
}

const clamp = (num: number, min: number, max: number): number =>
  Math.min(Math.max(num, min), max);

@customElement({
  tag: "quark-swipe-cell",
  style: style,
})
class QuarkSwipeCell extends QuarkElement {
  @property({ type: Boolean })
  disabled = false;

  swipeCellRef = createRef();
  leftRef = createRef();
  rightRef = createRef();

  letfWidth = 0;
  rightWidth = 0;

  @state()
  offset = 0;

  startX = 0;

  @state()
  dragging = false;

  @state()
  opened = false;

  startOffset = 0;
  lockClick = false;

  onTouchStart = (ev: TouchEvent) => {
    if (this.disabled) return;
    this.startOffset = this.offset;
    this.startX = ev.touches[0].clientX;
  };

  onTouchMove = (ev: TouchEvent) => {
    if (this.disabled) return;
    const touch = ev.touches[0];
    const deltaX = (touch.clientX > 0 ? touch.clientX : 0) - this.startX;

    this.dragging = true;
    this.lockClick = true;

    this.offset = clamp(
      deltaX + this.startOffset,
      -this.rightWidth,
      this.letfWidth
    );
  };

  onTouchEnd = () => {
    if (this.dragging) {
      this.dragging = false;
      this.toggle(this.offset > 0 ? "left" : "right");

      setTimeout(() => {
        this.lockClick = false;
      }, 0);
    }
  };

  open(side) {
    this.offset = side === "left" ? this.letfWidth : -this.rightWidth;
    if (!this.opened) {
      this.opened = true;
    }
  }

  close() {
    this.offset = 0;
    if (this.opened) {
      this.opened = false;
    }
  }

  toggle = (side: "left" | "right") => {
    const offset = Math.abs(this.offset);
    const width = side === "left" ? this.letfWidth : this.rightWidth;
    const THRESHOLD = 0.15;
    const threshold = this.opened ? 1 - THRESHOLD : THRESHOLD;

    if (width && offset > width * threshold) {
      this.open(side);
    } else {
      this.close();
    }
  };

  onClick = (position = "outside") => {
    console.log("onclick", position);

    if (this.opened && !this.lockClick) {
      this.close();
    }
  };

  getClickHandler = (position, stop?: boolean) => (event: MouseEvent) => {
    if (stop) {
      event.stopPropagation();
    }
    this.onClick(position);
  };

  wrapperStyle() {
    return {
      transform: `translate3d(${this.offset}px, 0, 0)`,
      transitionDuration: this.dragging ? "0s" : ".6s",
    };
  }

  componentDidMount(): void {
    this.swipeCellRef.current.addEventListener("touchstart", this.onTouchStart);
    this.swipeCellRef.current.addEventListener("touchend", this.onTouchEnd);
    this.swipeCellRef.current.addEventListener("touchmove", this.onTouchMove);

    document.addEventListener("click", () => {
      this.onClick("outside");
    });

    this.letfWidth = this.leftRef.current.offsetWidth;
    this.rightWidth = this.rightRef.current.offsetWidth;
  }

  componentWillUnmount(): void {
    this.swipeCellRef.current.removeEventListener(
      "touchstart",
      this.onTouchStart
    );
    this.swipeCellRef.current.removeEventListener("touchend", this.onTouchEnd);
    this.swipeCellRef.current.removeEventListener(
      "touchmove",
      this.onTouchMove
    );
    document.removeEventListener("click", () => {
      this.onClick("outside");
    });
  }

  render() {
    return (
      <div
        ref={this.swipeCellRef}
        class="quark-swipe-cell"
        onClick={this.getClickHandler("cell", this.lockClick)}
      >
        <div class="quark-swipe-cell__wrapper" style={this.wrapperStyle()}>
          <div
            ref={this.leftRef}
            class="quark-swipe-cell__left"
            onClick={this.getClickHandler("left", true)}
          >
            <slot name="left" />
          </div>
          <slot></slot>
          <div
            ref={this.rightRef}
            class="quark-swipe-cell__right"
            onClick={this.getClickHandler("right", true)}
          >
            <slot name="right" />
          </div>
        </div>
      </div>
    );
  }
}

export default QuarkSwipeCell;
