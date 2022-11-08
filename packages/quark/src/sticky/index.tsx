import QuarkElement, { property, customElement, createRef } from "@quarkd/core";

import style from "./style.css";
export interface Props {
  offsettop?: number;
  zindex?: number;
}
@customElement({ tag: "quark-sticky", style })
class QuarkSticky extends QuarkElement {
  constructor() {
    super();
  }

  @property()
  offsettop = "0vw";

  @property()
  zindex = "99";

  containerRef: any = createRef();

  stickyRef: any = createRef();

  componentDidMount() {
    window.addEventListener("scroll", this.scrollEvent);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollEvent);
  }

  scrollEvent = () => {
    const { current: containerCurrent } = this.containerRef;
    const { current: stickyCurrent } = this.stickyRef;
    if (!containerCurrent || !stickyCurrent) {
      return;
    }
    containerCurrent.style.height = `${
      containerCurrent.getBoundingClientRect().height
    }px`;
    if (
      containerCurrent.getBoundingClientRect().top <=
      this.convertVw(this.offsettop)
    ) {
      stickyCurrent.classList.add("sticky--fixed");
      stickyCurrent.style.top = this.offsettop;
      stickyCurrent.style.zIndex = this.zindex;
    } else {
      stickyCurrent.classList.remove("sticky--fixed");
      stickyCurrent.style = "";
    }
  };

  convertVw(value: string) {
    value = value.replace(/vw/g, "");
    return (+value * document.body.clientWidth) / 100;
  }

  render() {
    return (
      <div id="container" ref={this.containerRef}>
        <div ref={this.stickyRef}>
          <slot></slot>
        </div>
      </div>
    );
  }
}

export default QuarkSticky;
