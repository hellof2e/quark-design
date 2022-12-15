import QuarkElement, { state, property, customElement } from "@quarkd/core";
import "../loading";
import { checkFalse } from "../../utils/public";
import { getScrollParent } from "../../utils/index";
import { useTouch, getScrollTop } from "./utils";
import style from "./style.css";
import Locale from "../locale";
export interface Props {
  dark?: boolean;
  disabled?: boolean;
  headheight?: number;
  loading: boolean;
  pullingtext?: string;
  loosingtext?: string;
  loadingtext?: string;
  textcolor?: string;
}
export interface CustomEvent {
  refresh: () => void;
}

const DEFAULT_HEAD_HEIGHT = 96;
const DEFAULT_DURING = 300;
@customElement({
  tag: "quark-pull-refresh",
  style,
})
class QuarkPullRefresh extends QuarkElement {
  @property({
    type: Boolean,
  })
  disabled = false;

  @property({
    type: Boolean,
  })
  loading = false;

  @property({
    type: Number,
  })
  headheight: number = DEFAULT_HEAD_HEIGHT;

  @property()
  pullingtext: string = Locale.current.pullRefresh.pulling;

  @property()
  loosingtext: string = Locale.current.pullRefresh.loosing;

  @property()
  textcolor = "#879099";

  @property()
  loadingtext: string = Locale.current.loading;

  @property({
    type: Boolean,
  })
  dark = false;

  @state()
  status = "normal";

  @state()
  distance = 0;

  @state()
  duration = 0;

  scrollParent: any = null;

  shouldComponentUpdate(
    propName: string,
    oldValue: string,
    newValue: string
  ): boolean {
    if (propName === "loading" && checkFalse(newValue)) {
      this.setStatus(0);
    }
    return false;
  }

  componentDidMount() {
    this.eventBind();
    this.scrollParent = getScrollParent(this);
  }

  isTouchable = () => this.status !== "loading" && !this.disabled;

  eventBind() {
    this.removeEvent();
    this.addEventListener("touchstart", this.onTouchStart);
    this.addEventListener("touchmove", this.onTouchMove);
    this.addEventListener("touchend", this.onTouchEnd);
    this.addEventListener("touchcancel", this.onTouchEnd);
  }

  removeEvent = () => {
    this.removeEventListener("touchstart", this.onTouchStart);
    this.removeEventListener("touchmove", this.onTouchMove);
    this.removeEventListener("touchend", this.onTouchEnd);
    this.addEventListener("touchcancel", this.onTouchEnd);
  };

  ease = (distance: number) => {
    const pullDistance = +this.headheight;
    if (distance > pullDistance) {
      if (distance < pullDistance * 2) {
        distance = pullDistance + (distance - pullDistance) / 2;
      } else {
        distance = pullDistance * 1.5 + (distance - pullDistance * 2) / 4;
      }
    }
    return Math.round(distance);
  };

  setStatus = (distance: number, isLoading?: boolean) => {
    const pullDistance = +this.headheight;
    this.distance = distance;
    if (isLoading) {
      this.status = "loading";
    } else if (distance === 0) {
      this.status = "normal";
    } else if (distance < pullDistance) {
      this.status = "pulling";
    } else {
      this.status = "loosing";
    }
  };

  getTextColor = (): string => {
    if (this.dark) {
      return "#FFF";
    }
    return this.textcolor;
  };

  getStatusText = () => {
    const { status } = this;
    if (status === "normal") {
      return "";
    }
    if (status === "loading") {
      return (
        <quark-loading
          type="pullrefresh"
          color={this.getTextColor()}
          size="28"
          vertical
        >
          {this.loadingtext}
        </quark-loading>
      );
    }
    if (status === "pulling") {
      return this.pullingtext;
    }
    if (status === "loosing") {
      return this.loosingtext;
    }
    return "";
  };

  checkPosition = (event: TouchEvent) => {
    this.duration = 0;
    useTouch().start(event);
  };

  onTouchStart = (event: TouchEvent) => {
    if (
      this.isTouchable() &&
      !getScrollTop(this.scrollParent) &&
      !this.scrollTop &&
      !window.pageYOffset
    ) {
      this.checkPosition(event);
    }
  };

  onTouchMove = (event: TouchEvent) => {
    if (
      this.isTouchable() &&
      !getScrollTop(this.scrollParent) &&
      !this.scrollTop &&
      !window.pageYOffset
    ) {
      this.checkPosition(event);
      useTouch().move(event);
      const { deltaY } = useTouch();
      if (deltaY >= 0 && useTouch().isVertical()) {
        event.preventDefault();
        this.setStatus(this.ease(deltaY));
      }
    }
  };

  onTouchEnd = () => {
    if (useTouch().deltaY && this.isTouchable()) {
      useTouch().end();
      this.duration = DEFAULT_DURING;
      if (this.status === "loosing") {
        this.setStatus(+this.headheight, true);
        this.$emit("refresh");
        // delay(() => this.$emit('refresh'));
      } else {
        this.setStatus(0);
      }
    }
  };

  getHeadStyle = () => {
    return {
      height: `${
        this.headheight !== DEFAULT_HEAD_HEIGHT
          ? this.headheight
          : DEFAULT_HEAD_HEIGHT
      }px`,
    };
  };

  renderHead = () => {
    const { status } = this;
    if (status === "loading" && this.querySelector("[slot='loading']")) {
      return <slot name="loading"></slot>;
    }
    if (status === "pulling" && this.querySelector("[slot='pulling']")) {
      return <slot name="pulling"></slot>;
    }
    if (status === "loosing" && this.querySelector("[slot='loosing']")) {
      return <slot name="loosing"></slot>;
    }
    return (
      <div
        class="quark-pull-refresh-text"
        style={`color: ${this.getTextColor()}`}
      >
        {this.getStatusText()}
      </div>
    );
  };

  render() {
    const trackStyle = {
      transitionDuration: `${this.duration}ms`,
      transform: this.distance ? `translate3d(0,${this.distance}px, 0)` : "",
    };
    return (
      <div class="quark-pull-refresh">
        <div class="quark-pull-refresh-container" style={trackStyle}>
          <div class="quark-pull-refresh-head" style={this.getHeadStyle()}>
            {this.renderHead()}
          </div>
          <slot name="content"></slot>
        </div>
      </div>
    );
  }
}

export default QuarkPullRefresh;
