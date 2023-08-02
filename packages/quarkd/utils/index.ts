export type ScrollElement = HTMLElement | Window;

const defaultRoot = window;

function isElement(node: Element) {
  const ELEMENT_NODE_TYPE = 1;
  return (
    node.tagName !== "HTML" &&
    node.tagName !== "BODY" &&
    node.nodeType === ELEMENT_NODE_TYPE
  );
}

// 获取不可见得父元素
export function getUnuseParent(
  el: Element,
  root: ScrollElement | undefined = defaultRoot
) {
  let node = el;

  while (node && node !== root && isElement(node)) {
    const { display, height, visibility } = window.getComputedStyle(node);
    if (
      display === "none" ||
      height.startsWith("0") ||
      visibility === "hidden"
    ) {
      return node;
    }
    node = node.parentNode as Element;
  }

  return null;
}

const overflowScrollReg = /scroll|auto/i;
// 获取滚动的父元素
export function getScrollParent(
  el: Element,
  root: ScrollElement | undefined = defaultRoot
) {
  let node = el;

  while (node && node !== root && isElement(node)) {
    const { overflowY } = window.getComputedStyle(node);
    if (overflowScrollReg.test(overflowY)) {
      return node;
    }
    node = node.parentNode as Element;
  }

  return root;
}

export const hasOwn = {}.hasOwnProperty;
export function classNames(...rest: any): string {
  const classes = [];

  for (let i = 0; i < rest.length; i++) {
    const arg = rest[i];
    if (!arg) continue;

    const argType = typeof arg;

    if (argType === "string" || argType === "number") {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      if (arg.length) {
        // @ts-ignore
        const inner = classNames.apply(null, arg);
        if (inner) {
          classes.push(inner);
        }
      }
    } else if (argType === "object") {
      if (arg.toString === Object.prototype.toString) {
        for (const key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      } else {
        classes.push(arg.toString());
      }
    }
  }

  return classes.join(" ");
}

export function debounce(func, delay) {
  let timerId: ReturnType<typeof setTimeout> | null;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => func(...args), delay);
  };
}

export const clamp = (num: number, min: number, max: number): number =>
  Math.min(Math.max(num, min), max);
