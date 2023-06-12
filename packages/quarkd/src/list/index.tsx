import { property, createRef, customElement, QuarkElement } from "quarkc";
import delay from "../../utils/delay";
import "../loading";
import { checkFalse } from "../../utils/public";
import { getUnuseParent } from "../../utils/index";
import style from "./style.css";
import Locale from "../locale";
export interface Props {
  error?: boolean;
  loading: boolean;
  finished: boolean;
  offset?: number;
  loadingtext?: string;
  finishedtext?: string;
  errortext?: string;
  textcolor?: string;
}
export interface CustomEvent {
  load?: () => void;
  reload?: () => void;
}
@customElement({
  tag: "quark-list",
  style,
})
class QuarkList extends QuarkElement {
  @property({
    type: Boolean,
  })
  error = false;

  @property({
    type: Number,
  })
  offset = 300;

  @property({
    type: Boolean,
  })
  finished = false;

  @property()
  errortext = "";

  @property()
  textcolor = "#879099";

  @property()
  loadingtext = Locale.current.loading;

  @property()
  finishedtext = "";

  @property({
    type: Boolean,
  })
  loading = false;

  @property({
    type: Boolean,
  })
  immediatecheck = true;

  placeholderRef: any = createRef();

  componentDidMount() {
    if (this.immediatecheck) {
      setTimeout(() => this.check({ auto: true }), 50);
    }
    window.addEventListener("scroll", this.check, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.check, true);
  }

  shouldComponentUpdate(
    propName: string,
    oldValue: string,
    newValue: string
  ): boolean {
    if (propName === "loading") {
      if (!checkFalse(oldValue) && checkFalse(newValue)) {
        this.check({ auto: true });
      }
    }
    return true;
  }

  check = delay(({ auto = false }) => {
    if (
      this.loading ||
      !checkFalse(this.finished) ||
      !checkFalse(this.error) ||
      (getUnuseParent(this) && !auto)
    ) {
      return;
    }
    if (this.placeholderRef && this.placeholderRef.current) {
      const { offset } = this;
      const placeholderRect =
        this.placeholderRef.current.getBoundingClientRect();

      const isReachEdge =
        placeholderRect.bottom - window.screen.height <= offset;

      if (isReachEdge) {
        this.$emit("load");
      }
    }
  });

  clickErrorText = () => {
    this.$emit("reload");
    this.check({ auto: true });
  };

  renderLoading = () => {
    return (
      <slot name="loading">
        <div class="quark-list-text">
          <quark-loading type="circular" color={this.textcolor} size="15">
            {this.loadingtext}
          </quark-loading>
        </div>
      </slot>
    );
  };

  renderFinishedText = () => {
    if (this.finishedtext) {
      return (
        <div class="quark-list-text" style={`color: ${this.textcolor}`}>
          {this.finishedtext}
        </div>
      );
    }
    return <slot name="finished"></slot>;
  };

  renderErrorText = () => {
    if (this.errortext) {
      return (
        <div
          class="quark-list-text"
          style={`color: ${this.textcolor}`}
          onClick={this.clickErrorText}
        >
          {this.errortext}
        </div>
      );
    }
    return <slot name="error" onClick={this.clickErrorText}></slot>;
  };

  render() {
    return (
      <div class="quark-list">
        <slot name="content"></slot>
        {this.loading && !this.finished && this.renderLoading()}
        {this.finished && this.renderFinishedText()}
        {this.error && this.renderErrorText()}
        <div ref={this.placeholderRef}></div>
      </div>
    );
  }
}

export default QuarkList;
