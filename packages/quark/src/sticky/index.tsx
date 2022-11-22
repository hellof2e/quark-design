import QuarkElement, { property, customElement, createRef } from "@quarkd/core";
import { remToPx,vhToPx,percentToHeightPx, vwToPx } from "../../utils/public";

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

  getCalcEvent = () => {
    if (this.offsettop.includes("vw")) {
      return vwToPx;
    }else if(this.offsettop.includes("rem")){
      return remToPx;
    }else if(this.offsettop.includes("vh")){
      return vhToPx;
    } else if ( this.offsettop.includes( "%" ) ) {
      return percentToHeightPx;
    } else {
      return ( value:string) => {
        return Number(value.replace('px',''))
      }
    }
  }

  convertVw ( value: string ) {
    const calcEvent = this.getCalcEvent();
    return calcEvent(value);
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
