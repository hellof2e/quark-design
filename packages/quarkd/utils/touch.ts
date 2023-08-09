type Direction = "" | "vertical" | "horizontal";

const getDirection = (x: number, y: number) => {
  if (x > y) {
    return "horizontal";
  }
  if (y > x) {
    return "vertical";
  }
  return "";
};

export class Touch {
  startX = 0;
  startY = 0;
  deltaX = 0;
  deltaY = 0;
  offsetX = 0;
  offsetY = 0;
  direction: Direction = "";
  isTap = true;

  constructor() {
    this.reset();
  }

  isVertical = () => this.direction === "vertical";
  isHorizontal = () => this.direction === "horizontal";

  reset() {
    this.startX = 0;
    this.startY = 0;
    this.deltaX = 0;
    this.deltaY = 0;
    this.offsetX = 0;
    this.offsetY = 0;
    this.direction = "";
    this.isTap = true;
  }

  start = ((event: TouchEvent) => {
    this.reset();
    this.startX = event.touches[0].clientX;
    this.startY = event.touches[0].clientY;
  }) as EventListener;

  move = ((event: TouchEvent) => {
    const touch = event.touches[0];
    this.deltaX = (touch.clientX < 0 ? 0 : touch.clientX) - this.startX;
    this.deltaY = touch.clientY - this.startY;
    this.offsetX = Math.abs(this.deltaX);
    this.offsetY = Math.abs(this.deltaY);

    const LOCK_DIRECTION_DISTANCE = 10;

    if (
      !this.direction ||
      (this.offsetX < LOCK_DIRECTION_DISTANCE &&
        this.offsetY < LOCK_DIRECTION_DISTANCE)
    ) {
      this.direction = getDirection(this.offsetX, this.offsetY);
    }
    const TAP_OFFSET = 5;
    if (
      this.isTap &&
      (this.offsetX > TAP_OFFSET || this.offsetY > TAP_OFFSET)
    ) {
      this.isTap = false;
    }
  }) as EventListener;
}
