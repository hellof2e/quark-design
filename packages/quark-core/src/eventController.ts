import DblKeyMap from "./dblKeyMap";

export type EventHandler = (evt: Event) => void;

export class EventController {
  private eventMap: DblKeyMap<Element, string, Set<EventHandler>> =
    new DblKeyMap();

  bindListener = (
    el: Element | null,
    eventName: string,
    eventHandler: EventHandler
  ) => {
    if (!el || !eventName || !eventHandler) {
      return;
    }

    let list = this.eventMap.get(el, eventName);
    if (!list) {
      list = new Set();
      this.eventMap.set(el, eventName, list);
    }
    if (!list.has(eventHandler)) {
      list.add(eventHandler);
      el.addEventListener(eventName, eventHandler, true);
    }
  };

  removeAllListener = () => {
    this.eventMap.forEach((list, el, eventName) => {
      list.forEach((handler) => {
        el.removeEventListener(eventName, handler);
      });
    });
    this.eventMap.deleteAll();
  };
}
