import {
  property,
  customElement,
  QuarkElement,
  createRef,
  state,
} from "quarkc";
import "@quarkd/icons/lib/arrow-right";
import style from "./style.css";
import { Touch } from "../../utils/touch";
import { clamp } from "../../utils";
import { getElementRect } from "../../utils/util";

export interface Props {
  disabled?: boolean;
}

type beforeClose = Promise<boolean> | boolean | undefined | void;

const touch = new Touch();

@customElement({
  tag: "quark-swipe-cell",
  style: style,
})
class QuarkSwipeCell extends QuarkElement {
  @property({ type: Boolean })
  disabled = false;

  root = createRef();
  leftRef = createRef();
  rightRef = createRef();
  defaultSlotRef = createRef();
  leftSlotRef = createRef();
  rightSlotRef = createRef();

  letfWidth = 0;
  rightWidth = 0;

  @state()
  offset = 0;

  @state()
  dragging = false;

  @state()
  opened = false;

  startOffset = 0;
  lockClick = false;

  beforeClose: beforeClose = undefined;

  setBeforeClose(fn: beforeClose) {
    this.beforeClose = fn;
  }

  onTouchStart = (ev: TouchEvent) => {
    if (this.disabled) return;
    this.startOffset = this.offset;
    touch.start(ev);
  };

  onTouchMove = (ev: TouchEvent) => {
    if (this.disabled) return;

    const deltaX = touch.deltaX;
    touch.move(ev);
    if (touch.isHorizontal()) {
      this.dragging = true;
      this.lockClick = true;
      const isEdge = !this.opened || deltaX * this.startOffset < 0;
      if (isEdge) {
        ev.preventDefault();
      }

      this.offset = clamp(
        deltaX + this.startOffset,
        -this.rightWidth,
        this.letfWidth
      );
    }
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
      this.$emit("open", {
        detail: {
          position: side,
        },
      });
    }
  }

  close(position) {
    this.offset = 0;
    if (this.opened) {
      this.opened = false;
      this.$emit("close", {
        detail: { position },
      });
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
      this.close(side);
    }
  };

  onClick = (position = "outside") => {
    this.$emit("click", { detail: { position } });
    if (this.opened && !this.lockClick) {
      this.close(position);
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
    this.root.current.addEventListener("touchstart", this.onTouchStart);
    this.root.current.addEventListener("touchend", this.onTouchEnd);
    this.root.current.addEventListener("touchmove", this.onTouchMove);

    const targets = [
      ...this.defaultSlotRef.current.assignedNodes(),
      ...this.leftSlotRef.current.assignedNodes(),
      ...this.rightSlotRef.current.assignedNodes(),
      this.root.current,
    ];

    document.addEventListener(
      "touchstart",
      (e) => {
        const clickAway = targets.every((item) => {
          return item && !item.contains(e.target);
        });

        if (clickAway) {
          this.onClick("outside");
        }
      },
      {
        capture: false,
        passive: false,
      }
    );
    console.log(getElementRect(this.leftRef.current));
    console.log(this.leftRef.current.offsetWidth);
    console.log(this.leftRef.current.clientWidth);
    this.letfWidth = this.leftRef.current.offsetWidth;
    this.rightWidth = this.rightRef.current.offsetWidth;
  }

  componentWillUnmount(): void {
    this.root.current.removeEventListener("touchstart", this.onTouchStart);
    this.root.current.removeEventListener("touchend", this.onTouchEnd);
    this.root.current.removeEventListener("touchmove", this.onTouchMove);
    document.removeEventListener(
      "touchstart",
      () => {
        this.onClick("outside");
      },
      false
    );
  }

  render() {
    return (
      <div
        ref={this.root}
        class="quark-swipe-cell"
        onClick={this.getClickHandler("cell", this.lockClick)}
      >
        <div class="quark-swipe-cell__wrapper" style={this.wrapperStyle()}>
          <div
            ref={this.leftRef}
            class="quark-swipe-cell__left"
            onClick={this.getClickHandler("left", true)}
          >
            <slot name="left" ref={this.leftSlotRef} />
          </div>
          <slot ref={this.defaultSlotRef}></slot>
          <div
            ref={this.rightRef}
            class="quark-swipe-cell__right"
            onClick={this.getClickHandler("right", true)}
          >
            <slot name="right" ref={this.rightSlotRef} />
          </div>
        </div>
      </div>
    );
  }
}

export default QuarkSwipeCell;
