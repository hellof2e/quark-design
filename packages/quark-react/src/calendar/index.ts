import reactify from "@quarkd/reactify";
import "quarkd/lib/datetimepicker";
import { FC } from "react";
import { Props, CustomEvent } from "quarkd/lib/calendar";
import { CalendarDayItem } from "quarkd/lib/calendar/type";
import { componentBaseInterface, ReactifyProps } from "../type";

type CalendarProps = componentBaseInterface & ReactifyProps<Props, CustomEvent>;
type CalendarType = FC<CalendarProps>;
interface Ref {
  setValue: (value: Date | Date[]) => void;
  getValues: () => Date | Date[];
  setFormatter: (
    formatter: (item: CalendarDayItem) => CalendarDayItem
  ) => string;
}
type CalendarRef = Ref & HTMLElement;
const Calendar = reactify("quark-calendar") as CalendarType;
export { CalendarRef };
export default Calendar;
