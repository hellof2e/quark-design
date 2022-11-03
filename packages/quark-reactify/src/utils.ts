const nativeEventSet = /* #__PURE__ */ new Set(
  Object.keys(HTMLElement.prototype)
  .filter(eventName => eventName.startsWith('on'))
  .map(eventName => eventName.slice(2))
);

export function isNativeEvent(eventName: string) {
  return nativeEventSet.has(eventName);
};
