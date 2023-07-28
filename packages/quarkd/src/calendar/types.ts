export type CalendarType = "single" | "range" | "multiple";

export type CalendarDayType =
  | ""
  | "start"
  | "start-end"
  | "middle"
  | "end"
  | "selected"
  | "multiple-middle"
  | "multiple-selected"
  | "disabled"
  | "placeholder";

export type CalendarDayItem = {
  date?: Date;
  text?: number | string;
  type?: CalendarDayType;
  topInfo?: string;
  className?: unknown;
  bottomInfo?: string;
};
