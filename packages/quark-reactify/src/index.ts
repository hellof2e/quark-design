/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Copy From https://github.com/BBKolton/reactify-wc/
 * Change to Adaptive QuarkElement
 * */
import { Component, createRef, createElement, forwardRef } from "react";

const reactifyWebComponent = (WC: any) => {
  class Reactified extends Component {
    eventHandlers: any[];

    ref;

    constructor(props: any) {
      super(props);
      this.eventHandlers = [];
      const { innerRef } = props;
      this.ref = innerRef || createRef();
    }

    // eslint-disable-next-line @typescript-eslint/ban-types
    setEvent(event: string, val: Function) {
      this.eventHandlers.push([event, val]);
      this.ref.current.addEventListener(event, val);
    }

    update() {
      this.clearEventHandlers();
      if (!this.ref.current) return;
      Object.entries(this.props).forEach(([prop, val]) => {
        if (typeof val === "function") {
          if (prop.match(/^on[A-Za-z]/)) {
            // 需要过滤掉原生支持的 click 事件
            const eventName = prop.substr(2).toLowerCase();
            const nativeEvent = ["click", "blur", "focus"];
            if (!nativeEvent.includes(eventName)) {
              return this.setEvent(eventName, val);
            }
          }
        }
        return true;
      });
    }

    componentDidUpdate() {
      this.update();
    }

    componentDidMount() {
      this.update();
    }

    componentWillUnmount() {
      this.clearEventHandlers();
    }

    clearEventHandlers() {
      this.eventHandlers.forEach(([event, handler]) => {
        this.ref.current.removeEventListener(event, handler);
      });
      this.eventHandlers = [];
    }

    render() {
      const { children, className, ...rest } = this.props;
      return createElement(
        WC,
        { class: className, ...rest, ref: this.ref },
        children
      );
    }
  }

  return forwardRef((props: any, ref: any) => {
    return createElement(Reactified, { ...props, innerRef: ref });
  });
};

export default reactifyWebComponent;
