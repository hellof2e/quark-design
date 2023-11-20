import {
  customElement,
  property,
  state,
  createRef,
  QuarkElement,
} from "quarkc";
import { slotAssignedElements } from "../../utils/public";
import "../sticky";
import tabs from "./tabs-style.css";
import tab from "./tab-style.css";
export interface ContentProps {
  label: string;
  disabled?: boolean;
  name: string;
}
export interface Props {
  activekey?: string;
  sticky?: boolean;
  offsettop?: number;
  linewidth?: number;
}
export interface CustomEvent {
  change: (e: { detail: { label: string; name: string } }) => void;
}
@customElement("quark-tab-content")
class QuarkTabContent extends QuarkElement {
  @property()
  label = "";

  @property()
  name = "";

  @property({
    type: Boolean,
  })
  disabled = false;

  render() {
    return <slot></slot>;
  }
}

@customElement({ tag: "quark-tabs", style: tabs })
class QuarkTabs extends QuarkElement {
  @property()
  activekey = "0";

  @property({
    type: Boolean,
  })
  sticky = false;

  @property()
  offsettop = "0vw";

  @property()
  linewidth = "40px";

  @property({
    type: Boolean,
  })
  dark = false;

  @state()
  init = false;

  @state()
  tabNavs: Array<any> = [];

  @state()
  leftIndex = 0;

  @state()
  tabPos: any = {};

  @state()
  startX = 0;

  @state()
  startY = 0;

  @state()
  endX = 0;

  @state()
  endY = 0;

  @state()
  tabLineStyle = "";

  slotRef: any = createRef();

  navRef: any = createRef();

  componentDidMount(): void {
    // this.$on('change', (e) => {
    //   console.log(e);
    // });
  }

  componentDidUpdate(
    propName: string,
    oldValue: string,
    newValue: string
  ): void {
    if (propName === "activekey" && oldValue !== newValue && this.init) {
      this.handleChange(newValue);
    }
  }

  handleChange = (activekey = "0") => {
    let active = this.tabPos[activekey];
    this.activekey = activekey;
    const assignedNodes = this.slotRef.current?.assignedNodes();
    const elements = slotAssignedElements(assignedNodes);
    if (active === undefined) {
      this.activekey = elements[0].name;
      active = this.tabPos[this.activekey];
    }
    elements.forEach((item: HTMLElement) => {
      if (item.getAttribute("name") === this.activekey) {
        item.setAttribute("active", "");
      } else {
        item.removeAttribute("active");
      }
    });
    this.navRef.current.parentNode.scrollLeft =
      active?.left +
      active?.width / 2 -
      this.navRef.current.parentNode.offsetWidth / 2;
    const pre = this.navRef.current.querySelector(`quark-tab-nav[active]`);
    if (pre) {
      pre.removeAttribute("active");
    }
    const cur = this.navRef.current.querySelector(
      `quark-tab-nav[name='${activekey}']`
    );
    if (cur) {
      cur.setAttribute("active", true);
    }
    this.initTabLine();
    this.initTabContent();
  };

  handleTouchStart = (e: any) => {
    this.startX = e.changedTouches[0].clientX;
    this.startY = e.changedTouches[0].clientY;
    this.endX = 0;
    this.endY = 0;
  };

  handleTouchMove = (e: any) => {
    this.endX = e.changedTouches[0].clientX;
    this.endY = e.changedTouches[0].clientY;
  };

  handleTouchEnd = (e: any) => {
    const angle = this.angle(
      { X: this.startX, Y: this.startY },
      { X: this.endX, Y: this.endY }
    );
    if (this.endX === undefined || this.endY === undefined) {
      return;
    }
    // 点击事件
    if (this.endX === 0) {
      return;
    }
    if (Math.abs(angle) > 30) {
      return;
    }
    if (this.endX > this.startX) {
      // 右滑
      this.prevSlider();
    } else {
      // 左滑
      this.nextSlider();
    }
  };

  emitChange = (active) => {
    this.$emit("change", {
      detail: {
        name: active.name,
        label: active.label || "",
      },
    });
  };

  // 右滑
  prevSlider = () => {
    const active = this.tabPos[this.activekey];
    if (!active) {
      return;
    }
    const keys = Object.keys(this.tabPos);
    if (active.index <= 0 && keys.length > 0) {
      this.activekey = keys[keys.length - 1];
      this.emitChange(this.tabPos[this.activekey]);
      return;
    }
    const preIndex = active.index - 1;
    let activeKey;
    let prevItem;
    keys.forEach((key) => {
      const item = this.tabPos[key];
      if (item.index === preIndex) {
        activeKey = key;
        prevItem = item;
      }
    });
    if (prevItem && prevItem.disabled) {
      this.activekey = activeKey;
      this.prevSlider();
      return;
    }

    if (!activeKey) {
      return;
    }
    this.activekey = activeKey;
    this.emitChange(this.tabPos[this.activekey]);
  };

  // 左滑
  nextSlider = () => {
    const active = this.tabPos[this.activekey];
    if (!active) {
      return;
    }
    const keys = Object.keys(this.tabPos);
    if (active.index >= keys.length - 1) {
      this.activekey = keys[0];
      this.emitChange(this.tabPos[this.activekey]);
      return;
    }
    const nextIndex = active.index + 1;
    let activeKey;
    let nextItem;
    keys.forEach((key) => {
      const item = this.tabPos[key];
      if (item.index === nextIndex) {
        activeKey = key;
        nextItem = item;
      }
    });
    if (nextItem && nextItem.disabled) {
      this.activekey = activeKey;
      this.nextSlider();
      return;
    }
    if (!activeKey) {
      return;
    }
    this.activekey = activeKey;
    this.emitChange(this.tabPos[this.activekey]);
  };

  angle = (start: any, end: any) => {
    const X = end.X - start.X;
    const Y = end.Y - start.Y;
    // 返回角度 /Math.atan()返回数字的反正切值
    return (360 * Math.atan(Y / X)) / (2 * Math.PI);
  };

  slotchange = () => {
    this.initTabNavs();
    setTimeout(this.initTabLine, 0);
    setTimeout(this.initTabContent, 0);
  };

  initTabNavs = () => {
    const assignedNodes = this.slotRef.current?.assignedNodes();
    const elements = slotAssignedElements(assignedNodes);
    elements.forEach((item: any, index: number) => {
      if (item.name === null) {
        item.name = String(index);
      }
      this.tabNavs.push({
        disabled: item.disabled,
        name: item.name,
        label: item.label,
        dark: this.dark,
      });
    });
    this.init = true;
  };

  initTabLine = () => {
    const items = this.navRef.current?.querySelectorAll("quark-tab-nav");
    Array.from(items).forEach((item: any, index) => {
      this.tabPos[item.name] = {
        index: index,
        width: item.offsetWidth,
        left: item.offsetLeft,
        label: item.textContent,
        disabled: item.disabled,
      };
    });
  };

  initTabContent = () => {
    let active = this.tabPos[this.activekey];
    const assignedNodes = this.slotRef.current?.assignedNodes();
    const elements = slotAssignedElements(assignedNodes);
    if (active === undefined) {
      this.activekey = elements[0].name;
      active = this.tabPos[this.activekey];
    }
    elements.forEach((item: any) => {
      if (item.getAttribute("name") === this.activekey) {
        item.setAttribute("active", "");
      } else {
        item.removeAttribute("active");
      }
    });
    this.tabLineStyle = this.getLineStyle(active?.width, active?.left);
    this.leftIndex = active.index;
  };

  getLineStyle = (labelWidth: number, labelOffset: number) => {
    let lineWidth: string | number = this.linewidth;
    if (lineWidth.includes("px")) {
      lineWidth.replace("px", "");
    }
    lineWidth = parseInt(lineWidth, 10);
    const tranX = labelOffset + (labelWidth - lineWidth) * 0.5;
    // 根据设计稿，左右6px padding
    return `width:${lineWidth - 12}px;transform:translateX(${tranX + 6}px)`;
  };

  handleClick = (e: any, item: any) => {
    if (item.active || item.disabled) {
      return;
    }
    this.handleChange(item.name);
    this.emitChange(item);
  };

  renderTabNav = () => {
    return (
      <div class="quark-tab-nav-con">
        <div class="quark-tab-nav" ref={this.navRef}>
          {this.tabNavs.map((item) => (
            <quark-tab-nav
              active={item.name === this.activekey}
              disabled={item.disabled}
              dark={item.dark}
              name={item.name}
              onClick={(e: any) => this.handleClick(e, item)}
            >
              {item.label}
            </quark-tab-nav>
          ))}
        </div>
        <i class="quark-tab-line" style={this.tabLineStyle}></i>
      </div>
    );
  };

  render() {
    const style = {
      transform: `translateX(${-this.leftIndex * 100}%)`,
    };
    return (
      <div class="quark-tabs">
        {this.sticky && (
          <quark-sticky offsettop={this.offsettop}>
            {this.renderTabNav()}
          </quark-sticky>
        )}
        {!this.sticky && this.renderTabNav()}
        <div
          class="quark-tab-content"
          ontouchstart={this.handleTouchStart}
          ontouchmove={this.handleTouchMove}
          ontouchend={this.handleTouchEnd}
        >
          <div class="quark-tab-content-wrap" style={style}>
            <slot ref={this.slotRef} onslotchange={this.slotchange}>
              NEED CONTENT
            </slot>
          </div>
        </div>
      </div>
    );
  }
}

@customElement({ tag: "quark-tab-nav", style: tab })
class QuarkTabNav extends QuarkElement {
  @property({
    type: Boolean,
  })
  active = false;

  @property({
    type: Boolean,
  })
  disabled = false;

  @property({
    type: Boolean,
  })
  dark = false;

  @property()
  name: string | number = 0;

  handleClick = () => {
    if (this.active || this.disabled) {
      return;
    }
    this.$emit("change", {
      detail: {
        name: this.name,
        label: this.innerHTML || "",
      },
    });
  };

  render() {
    return (
      <div class="quark-tab-nav" onClick={this.handleClick}>
        <slot></slot>
      </div>
    );
  }
}

export default QuarkTabs;

export { QuarkTabContent, QuarkTabNav };
