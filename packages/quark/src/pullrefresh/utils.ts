export type ScrollElement = Element | Window;
export function getScrollTop(el: ScrollElement): number {
  const top = "scrollTop" in el ? el.scrollTop : el.pageYOffset;

  // iOS scroll bounce cause minus scrollTop
  return Math.max(top, 0);
}

function getDirection(x: number, y: number) {
  if (x > y) {
    return "horizontal";
  }
  if (y > x) {
    return "vertical";
  }
  return "";
}

let startX = 0;
let startY = 0;
let deltaX = 0;
let deltaY = 0;
let offsetX = 0;
let offsetY = 0;
let onMove = false;
let direction = "";

export function useTouch() {
  const isVertical = () => direction === "vertical";
  const isHorizontal = () => direction === "horizontal";

  const reset = () => {
    deltaX = 0;
    deltaY = 0;
    offsetX = 0;
    offsetY = 0;
    direction = "";
  };

  const start = ((event: TouchEvent) => {
    reset();
    if (!onMove) {
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
      onMove = true;
    }
  }) as EventListener;

  const move = ((event: TouchEvent) => {
    const touch = event.touches[0];
    // safari back will set clientX to negative number
    deltaX = touch.clientX < 0 ? 0 : touch.clientX - startX;
    deltaY = touch.clientY - startY;
    offsetX = Math.abs(deltaX);
    offsetY = Math.abs(deltaY);

    // lock direction when distance is greater than a certain value
    const LOCK_DIRECTION_DISTANCE = 10;
    if (
      !direction ||
      (offsetX < LOCK_DIRECTION_DISTANCE && offsetY < LOCK_DIRECTION_DISTANCE)
    ) {
      direction = getDirection(offsetX, offsetY);
    }
  }) as EventListener;

  const end = (): void => {
    reset();
    onMove = false;
  };

  return {
    move,
    start,
    reset,
    end,
    startX,
    startY,
    deltaX,
    deltaY,
    offsetX,
    offsetY,
    direction,
    isVertical,
    isHorizontal,
  };
}
