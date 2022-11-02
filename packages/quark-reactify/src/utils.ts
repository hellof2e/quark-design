const nativeEvents = /* #__PURE__ */ Object.keys(HTMLElement.prototype)
  .filter(eventName => eventName.startsWith('on'))
  .map(eventName => eventName.slice(2));

export function isNativeEvent(eventName: string) {
  return nativeEvents.indexOf(eventName) !== -1;
};
