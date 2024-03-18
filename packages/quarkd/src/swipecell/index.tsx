import {
  property,
  customElement,
  QuarkElement,
  createRef,
  state,
} from "quarkc";
import style from "./style.css";
import { Touch } from "../../utils/touch";
import { clamp } from "../../utils";
import { getRect, isPromise } from "../../utils/util";
import { BeforeCloseFunc, SwipeCellPosition, SwipeCellSide } from "./type";
import { slotAssignedElements } from "../../utils/public";

const touch = new Touch();

@customElement({
  tag: "quark-swipe-cell",
  style: style,
})
class QuarkSwipeCell extends QuarkElement {
  @property({ type: Boolean })
  disabled = false;

  @property({ type: String })
  name = "";

  @property({ type: Number })
  leftwidth = 0;

  @property({ type: Number })
  rightwidth = 0;

  root = createRef();
  leftRef = createRef();
  rightRef = createRef();
  defaultSlotRef = createRef();
  leftSlotRef = createRef();
  rightSlotRef = createRef();

  @state()
  offset = 0;

  @state()
  dragging = false;

  opened = false;

  startOffset = 0;

  lockClick = false;

  attached = false;

  beforeClose: BeforeCloseFunc | undefined = undefined;

  @state()
  leftWidthCache = 0;

  @state()
  rightWidthCache = 0;

  setBeforeClose(fn: BeforeCloseFunc) {
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
        -this.getRightWidth(),
        this.getLeftWidth()
      );
    }
  };

  onTouchEnd = () => {
    if (this.dragging) {
      this.dragging = false;
      this.toggle(this.offset > 0 ? "left" : "right");

      setTimeout(() => {
        this.lockClick = false;
      }, 30);
    }
  };

  open(side: SwipeCellPosition) {
    this.offset = side === "left" ? this.getLeftWidth() : -this.getRightWidth();
    if (!this.opened) {
      this.opened = true;
      this.$emit("open", {
        detail: { position: side, name: this.name || "" },
      });
    }
  }

  close(position: SwipeCellPosition) {
    this.offset = 0;
    if (this.opened) {
      this.opened = false;
      this.$emit("close", {
        detail: { position, name: this.name || "" },
      });
    }
  }

  toggle = (side: SwipeCellSide) => {
    const offset = Math.abs(this.offset);
    const width = side === "left" ? this.getLeftWidth() : this.getRightWidth();
    const THRESHOLD = 0.15;
    const threshold = this.opened ? 1 - THRESHOLD : THRESHOLD;

    if (width && offset > width * threshold) {
      this.open(side);
    } else {
      this.close(side);
    }
  };

  onClick = async (position: SwipeCellPosition = "outside") => {
    this.$emit("click", { detail: { position } });

    if (this.opened && !this.lockClick) {
      if (this.beforeClose) {
        const returnVal = this.beforeClose(position);
        if (isPromise(returnVal)) {
          returnVal.then((value) => {
            if (value) this.close(position);
          });
        } else if (returnVal) {
          this.close(position);
        }
      } else {
        this.close(position);
      }
    }
  };

  getClickHandler = (position, stop?: boolean) => (event: MouseEvent) => {
    if (stop) {
      event.stopPropagation();
    }
    this.onClick(position);
  };

  getLeftWidth(): number {
    if (!this.leftWidthCache) {
      this.leftWidthCache =
        this.leftwidth || getRect(this.leftRef.current).width;
    }
    return this.leftWidthCache;
  }

  getRightWidth(): number {
    if (!this.rightWidthCache) {
      this.rightWidthCache =
        this.rightwidth || getRect(this.rightRef.current).width;
    }
    return this.rightWidthCache;
  }

  componentDidMount(): void {
    this.root.current?.addEventListener("touchstart", this.onTouchStart);
    this.root.current?.addEventListener("touchend", this.onTouchEnd);
    this.root.current?.addEventListener("touchmove", this.onTouchMove);

    const defaultSlotNodes = slotAssignedElements(
      this.defaultSlotRef.current?.assignedNodes()
    );

    const leftSlotNodes = slotAssignedElements(
      this.leftSlotRef.current?.assignedNodes()
    );

    const rightSlotNodes = slotAssignedElements(
      this.rightSlotRef.current?.assignedNodes()
    );

    // 获取swipe-cell 内部dom 用于判断点击位置
    const targetNodes = [
      ...defaultSlotNodes,
      ...leftSlotNodes,
      ...rightSlotNodes,
      this.root.current,
    ];
    if (!this.attached) {
      document.addEventListener(
        "touchstart",
        (e) => {
          const isClickAway = targetNodes.every((item) => {
            return item && !item.contains(e.target);
          });

          if (isClickAway) {
            this.onClick("outside");
          }
        },
        {
          capture: false,
          passive: false,
        }
      );
      this.attached = true;
    }
  }

  componentWillUnmount(): void {
    this.root.current?.removeEventListener("touchstart", this.onTouchStart);
    this.root.current?.removeEventListener("touchend", this.onTouchEnd);
    this.root.current?.removeEventListener("touchmove", this.onTouchMove);
    document.removeEventListener(
      "touchstart",
      () => {
        this.onClick("outside");
      },
      false
    );
  }

  render() {
    const wrapperStyle = {
      transform: `translate3d(${this.offset}px, 0, 0)`,
      transitionDuration: this.dragging ? "0s" : ".6s",
    };

    return (
      <div
        ref={this.root}
        class="quark-swipe-cell"
        onClick={this.getClickHandler("cell", this.lockClick)}
        part="root"
      >
        <div
          class="quark-swipe-cell__wrapper"
          part="cell-wrapper"
          style={wrapperStyle}
        >
          <div
            ref={this.leftRef}
            class="quark-swipe-cell__left"
            part="cell-left"
            onClick={this.getClickHandler("left", true)}
          >
            <slot name="left" ref={this.leftSlotRef} />
          </div>
          <slot ref={this.defaultSlotRef}></slot>
          <div
            ref={this.rightRef}
            class="quark-swipe-cell__right"
            part="cell-right"
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
