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

  componentDidMount () {
    const calcSize = this.getCalcEvent(this.offsettop);
    window.addEventListener("scroll", this.scrollEvent.bind(this,calcSize));
  }

  componentWillUnmount () {
    const calcSize = this.getCalcEvent( this.offsettop );
    window.removeEventListener("scroll", this.scrollEvent.bind( this, calcSize ) );
  }

  scrollEvent = (event:(arg: string) => number) => {
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
      event(this.offsettop)
    ) {
      stickyCurrent.classList.add("sticky--fixed");
      stickyCurrent.style.top = this.offsettop;
      stickyCurrent.style.zIndex = this.zindex;
    } else {
      stickyCurrent.classList.remove("sticky--fixed");
      stickyCurrent.style = "";
    }
  };

  getCalcEvent = ( offsettop ) => {
    if (offsettop.includes("vw")) {
      return vwToPx;
    }else if(offsettop.includes("rem")){
      return remToPx;
    }else if(offsettop.includes("vh")){
      return vhToPx;
    } else if ( offsettop.includes( "%" ) ) {
      return percentToHeightPx;
    } else {
      return (value:string) => {
        return Number(value.replace('px',''))
      }
    }
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
