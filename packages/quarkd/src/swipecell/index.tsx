import {
  property,
  customElement,
  QuarkElement,
  createRef,
  state,
} from "quarkc";
import style from "./style.css";

export type SwipeCellSide = "left" | "right";
export interface SwipeCellInstance extends QuarkElement {
  open: (side: SwipeCellSide) => void;
  close: (side: SwipeCellSide) => void;
  toogle: (side: SwipeCellSide) => void;
}

const getRectByEl = (element?: HTMLElement): DOMRect => {
  if (element?.getBoundingClientRect) {
    return element.getBoundingClientRect();
  }
  return {
    x: 0,
    y: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 0,
    height: 0,
  } as DOMRect;
};

export interface Props {
  desc?: string;
  to?: string;
  islink?: boolean;
  icon?: string;
  threshold?: number;
}

interface Point {
  x: number;
  y: number;
}

@customElement({
  tag: "quark-swipe-cell",
  style,
})
class QuarkSwipeCell extends QuarkElement {
  @property({
    type: Number,
    attribute: "left-width",
  })
  leftWidth = 0;

  @property({
    type: Number,
    attribute: "right-width",
  })
  rightWidth = 0;

  @property({
    type: Boolean,
  })
  disabled = false;

  @property({
    type: Number,
  })
  threshold = 0.15;

  @state()
  state: { offset: number; dragging: boolean } = { offset: 0, dragging: false };

  left = createRef<HTMLDivElement>();
  right = createRef<HTMLDivElement>();
  startPoint: Point;
  startOffset = 0;
  isOpen = false;

  onTouchStart = (e: TouchEvent) => {
    if (this.disabled) {
      return;
    }
    this.startPoint = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
    this.startOffset = this.state.offset;
  };

  onTouchend = () => {
    this.state.dragging = false;
    this.toogle(this.state.offset > 0 ? "left" : "right");
  };

  onTouchMove = (e: TouchEvent) => {
    if (this.disabled) {
      return;
    }
    const currentX = e.touches[0].clientX;

    const diffX = currentX - this.startPoint.x;
    const { left, right } = this.getSlotWidth();
    this.state = {
      dragging: true,
      offset: Math.min(Math.max(diffX + this.startOffset, -right), left),
    };
  };

  getSlotWidth() {
    return {
      left: this.leftWidth || getRectByEl(this.left.current).width,
      right: this.rightWidth || getRectByEl(this.right.current).width,
    };
  }

  open = (side: SwipeCellSide) => {
    const { left, right } = this.getSlotWidth();
    this.state = {
      ...this.state,
      offset: side === "left" ? left : -right,
    };

    if (!this.isOpen) {
      this.isOpen = true;
      this.$emit("open", {
        detail: {
          position: side,
        },
      });
    }
  };

  close = (side: SwipeCellSide) => {
    this.state = {
      ...this.state,
      offset: 0,
    };

    if (this.isOpen) {
      this.isOpen = false;
      this.$emit("close", {
        detail: {
          position: side,
        },
      });
    }
  };

  toogle = (side: SwipeCellSide) => {
    const offset = Math.abs(this.state.offset);
    const threshold = this.isOpen ? 1 - this.threshold : this.threshold;
    const { left, right } = this.getSlotWidth();
    const width = side === "left" ? left : right;

    if (width && offset > width * threshold) {
      this.open(side);
    } else {
      this.close(side);
    }
  };

  render() {
    const wrapperStyle = {
      transform: `translate3d(${this.state.offset}px, 0, 0)`,
      transitionDuration: this.state.dragging ? "0s" : ".6s",
    };
    return (
      <div
        class="quark-swipe-cell"
        onTouchMove={this.onTouchMove}
        onTouchend={this.onTouchend}
        onTouchStart={this.onTouchStart}
        onTouchcancel={this.onTouchend}
      >
        <div class="quark-swipe-cell-wrap" style={wrapperStyle}>
          <div class="quark-swipe-cell-left" ref={this.left}>
            <slot name="left"></slot>
          </div>
          <div class="quark-swipe-cell-content">
            <slot></slot>
          </div>
          <div class="quark-swipe-cell-right" ref={this.right}>
            <slot name="right"></slot>
          </div>
        </div>
      </div>
    );
  }
}

export default QuarkSwipeCell;
