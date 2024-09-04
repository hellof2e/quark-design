import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import {
  property,
  customElement,
  Fragment,
  createRef,
  QuarkElement,
} from "quarkc";
import "@quarkd/icons/lib/close";
import style from "./style.css";

export interface Props {
  position?: "top" | "bottom" | "left" | "right";
  round?: boolean;
  open: boolean;
  closeable?: boolean;
  forbidmaskclick?: boolean;
  safearea?: boolean;
  zindex?: number;
}

export interface CustomEvent {
  clickoverlay: () => void;
  close: () => void;
  closed: () => void;
  opened: () => void;
}

@customElement({
  tag: "quark-popup",
  style,
})
class QuarkPopup extends QuarkElement {
  @property({ type: Boolean }) open = false;
  @property({ type: Boolean }) forbidmaskclick = false;
  @property({ type: Boolean }) safearea = false;
  @property({ type: Boolean }) round = false;
  @property({ type: Boolean }) closeable = false;
  @property() position = "bottom";
  @property() zindex?: number | string = undefined;
  @property() scrollid?: string = undefined;

  wrap: any = createRef();

  componentDidMount() {
    if (this.zindex) {
      this.style.zIndex = `${this.zindex}`;
    }
  }

  shouldComponentUpdate(
    propName: string,
    oldValue: string | boolean,
    newValue: string | boolean
  ): boolean {
    if (propName === "open" && this.wrap && this.wrap.current) {
      const { current } = this.wrap;
      current.classList.toggle("leave", !newValue && oldValue);
    }
    return true;
  }

  componentDidUpdate(propName: string, oldValue: string, newValue: string) {
    if (propName === "open" && this.wrap && this.wrap.current) {
      const scrollElement = this.scrollid
        ? document.querySelector(`#${this.scrollid}`)
        : this.wrap.current;

      const toggleBodyScroll = (shouldDisable: boolean) => {
        shouldDisable
          ? disableBodyScroll(scrollElement)
          : enableBodyScroll(scrollElement);
      };

      toggleBodyScroll(!!newValue);
      this.dispatchEvent(new CustomEvent(newValue ? "opened" : "closed"));
    }
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  dispatchClose() {
    this.dispatchEvent(new CustomEvent("close"));
  }

  handleCloseBtnClick = () => {
    this.dispatchClose();
  };

  handleClick = () => {
    this.dispatchEvent(new CustomEvent("clickoverlay"));
    if (!this.forbidmaskclick) {
      this.dispatchClose();
    }
  };

  render() {
    return (
      <Fragment>
        <div class="quark-popup" ref={this.wrap} part="root">
          {this.closeable && (
            <div
              class="quark-popup-close-btn"
              part="close-btn"
              onClick={this.handleCloseBtnClick}
            >
              <quark-icon-close part="close-btn-icon" size="24" />
            </div>
          )}
          <slot></slot>
        </div>
        <div class="quark-popup-mask" part="mask" onClick={this.handleClick} />
      </Fragment>
    );
  }
}

export default QuarkPopup;
