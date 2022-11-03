const nativeEventSet = new Set(
  /* #__PURE__ */ Object.keys(HTMLElement.prototype)
  .filter(eventName => eventName.startsWith('on'))
  .map(eventName => eventName.slice(2))
);

export function isNativeEvent(eventName: string) {
  return nativeEventSet.has(eventName);
};
