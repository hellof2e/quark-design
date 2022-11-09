import { inBrowser, throttle } from "./public";
// import { EventController } from './eventController';
import { ScrollElement } from "./index";

const OPTIONS = {
  rootMargin: "0px",
  threshold: 0,
};

const PRELOAD = 1.3;

const overflowScrollReg = /scroll|auto/i;
const defaultRoot = inBrowser ? window : undefined;

const DEFAULT_EVENTS = [
  "scroll",
  "wheel",
  "mousewheel",
  "resize",
  "animationend",
  "transitionend",
  "touchmove",
  "touchend",
];

type LISTENER = {
  el: HTMLElement;
  load: (src?: string) => void;
};

class LazyLoad {
  private mode: string = "";
  private observer?: IntersectionObserver;
  private listeners: Array<LISTENER> = [];
  public listenEvents: string[] = DEFAULT_EVENTS;

  constructor() {
    this.setMode(this.supportIntersection() ? "observer" : "event");
  }

  /**
   * 判断是否支持intersectionObserver
   *  */
  private supportIntersection() {
    if (inBrowser) {
      if (
        "IntersectionObserver" in window &&
        "IntersectionObserverEntry" in window &&
        "intersectionRatio" in window.IntersectionObserverEntry.prototype
      ) {
        return true;
      }
    }
    return false;
  }

  /**
   * 初始化Intersection对象
   *  */
  private initIntersection() {
    this.observer = new IntersectionObserver(
      this.observerCallback.bind(this),
      OPTIONS
    );
  }

  /**
   * 初始化EventTarget对象
   *  */
  private initEventTarget() {
    if (inBrowser) {
      this.addListenerTarget(window);
    }
  }

  /**
   * 添加监听对象
   */

  private addListenerTarget(el: Window | Node) {
    if (!el) return;
    this.listenEvents.forEach((evt) => {
      el.addEventListener(
        evt,
        throttle(this.eventCallback.bind(this, evt), 200)
      );
    });
  }

  /**
   * 设置懒加载模式
   *  */
  private setMode(mode: string) {
    this.mode = mode;
    if (mode === "observer") {
      this.initIntersection();
    } else {
      this.initEventTarget();
    }
  }

  /**
   * 执行回调
   *  */
  private observerCallback(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        this.listeners.forEach((listener) => {
          if (listener.el === entry.target) {
            listener.load();
            return this.remove(listener.el);
          }
        });
      }
    });
  }

  private eventCallback(evt: string) {
    setTimeout(() => {
      if (!this.listeners || this.listeners.length === 0) return;
      this.listeners.forEach((listener) => {
        const checkinView = this.checkVisible(listener.el);
        if (!checkinView) return;
        listener.load();
        return this.remove(listener.el);
      });
    });
  }

  checkVisible(el: HTMLElement): Boolean {
    const Rect = el.getBoundingClientRect();
    return (
      Rect.top < window.innerHeight * PRELOAD &&
      Rect.bottom > 0 &&
      Rect.left < window.innerWidth * PRELOAD &&
      Rect.right > 0
    );
  }

  isElement(node: Element) {
    const ELEMENT_NODE_TYPE = 1;
    return (
      node.tagName !== "HTML" &&
      node.tagName !== "BODY" &&
      node.nodeType === ELEMENT_NODE_TYPE
    );
  }

  private getScrollParent(
    el: Element,
    root: ScrollElement | undefined = defaultRoot
  ) {
    let node = el;

    while (node && node !== root && this.isElement(node)) {
      const { overflowY } = window.getComputedStyle(node);
      if (overflowScrollReg.test(overflowY)) {
        return node;
      }
      node = node.parentNode as Element;
    }

    return root;
  }

  /**
   * 添加监听元素
   *  */
  add(el: HTMLImageElement, src: string, parent?: ParentNode | null) {
    const listener = {
      el: el,
      load: () => {
        el.src = src;
      },
    };
    if (this.mode === "observer" && this.observer) {
      this.observer && this.observer.observe(el);
      this.listeners.push(listener);
    } else {
      if (parent) {
        this.addListenerTarget(parent);
      }
      const checkinView = this.checkVisible(el);
      if (checkinView) {
        listener.load();
      } else {
        this.listeners.push(listener);
      }
    }
  }

  /***
   * 卸载监听元素
   */
  remove(el: HTMLElement) {
    if (this.mode === "observer" && this.observer) {
      this.observer.unobserve(el);
    }

    if (!this.listeners || this.listeners.length === 0) return;

    const targetIndex = this.listeners.findIndex(
      (listener) => listener.el === el
    );

    if (targetIndex >= 0) {
      this.listeners.splice(targetIndex, 1);
    }
  }

  /**
   * 卸载
   *  */
  uninstall() {
    if (this.mode === "observer" && this.observer) {
      this.observer.disconnect();
    }
  }
}

export default new LazyLoad();
