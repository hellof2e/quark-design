import { state, property, customElement, QuarkElement } from "quarkc";
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
    const { status, dark } = this;
    if (status === "normal") {
      return "";
    }
    if (status === "loading") {
      if (dark) {
        return (
          <div class="quark-dark-loading" part="dark-loading">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAHKADAAQAAAABAAAAHAAAAABkvfSiAAADD0lEQVRIDa2WzUuUURSHncky08yilEKDKCpaCLWTdiF9uGhR0KaWEf0FQRD+BW2jXbt27SKEdtHGkr6/IQQ16FszLft0ep6ZOdN11EGdOfDMufd97zm/e9733vtOpm4Rlsvl2hi2E7bCOmiFLHyHKRiG55lM5g2+omUq3UVoB/f3wwZYUaQ+aXst7X+i34/wA/y8Nq8gQi2M7oHNYCXlYiFS7h3n+BG4grATmGVzBBFTRLFGCKHwCgRei7Y+xoSf5tplRF/hSzZLELF27hwGg9LKHDcMQ/AeJsFra6ETumAvrIQQNF67iOiLQrMQlG8j1kzjCKyGVNDHM0DQBH5BI34TN4/DPkhFXVh9xH/A52epryOgB2eQM4vq7jHwCf1FG3mc9AmISZtriDwXTGJHsQ6cS/1vwuBSxYitI6Yfdw2iSv0uNLrxBUH8bpiBEBwh8Bn9ZRmxNwi8DyFqYadMlkXZjbwGQuwP7YdQrV0lgQsrRDvQ2q6yKzPE9KPM0NOjKiPHOxIMQgjquxW0QoWsTN5CrewuiWKvKthlx72jkOVrXwquJr+vyaKGZv62ULfCsJ/RqIH/TI4QNF1e0NWZWi7tVNmORRNpsr7DaUjf4aq4WwO/kRzxFH2H43YUjLKtzi3itVrYHpKYO57amBV6RqYV+mmqlR0gUVrhYwXHQcGgmQ3aQL8qI0cnCXog3Ye3smxQT/N4jyHqIV6tnSOBEw9BD5SXVqi52dOztJEZepgvy4g9Q+AhCDF1LpksL4iy7/EbRIX6VgKX/D6JOUvseQgx/VM0buJLp4ufKE8cn7uWVusjnyTASSxoxG/jZh8cBMdGjjHax4gfxf8XtEOQ/2PaIQ2wLT/gV7GNq2uCLeBfi17ww6vFeAUdfxKxO97Q4vws9PhF1L8Y64sXIjh8HPB6r5X3Y5zeyk4jNoAvWSya0gUGWMlH8Ex1lm7aFLqzzEmbRx9tv6e95WJcq2xU2wAtRZqsHuohAzPwG6ZhCiZgEI5Wyjrnkc43mCSx4rwdi+ErbReC3IbrVPQIX9H+ATXUIAon3nomAAAAAElFTkSuQmCC" />
            {this.loadingtext}
          </div>
        );
      }

      return (
        <quark-loading
          type="pullrefresh"
          color={this.getTextColor()}
          size="28"
          vertical
          part="loading"
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
        part="text"
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
      <div class="quark-pull-refresh" part="root">
        <div
          class="quark-pull-refresh-container"
          part="container"
          style={trackStyle}
        >
          <div
            class="quark-pull-refresh-head"
            part="head"
            style={this.getHeadStyle()}
          >
            {this.renderHead()}
          </div>
          <slot name="content"></slot>
        </div>
      </div>
    );
  }
}

export default QuarkPullRefresh;
