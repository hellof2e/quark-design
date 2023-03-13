import reactify from "@quarkd/reactify";
import "quarkd/lib/datetimepicker";
import { FC } from "react";
import { Props, CustomEvent, SelectColumn } from "quarkd/lib/datetimepicker";
import { componentBaseInterface, ReactifyProps } from "../type";

type DatetimePickerProps = componentBaseInterface &
  ReactifyProps<Props, CustomEvent>;
type DatetimePickerType = FC<DatetimePickerProps>;
interface DatetimePickerRef extends componentBaseInterface {
  setValue: (value: Date | string) => void;
  getValues: () => SelectColumn[];
  setFormatter: (type: string, value: string) => string;
  setFilter: (type: string, values: string[]) => string[];
}

const DatetimePicker = reactify("quark-datetime-picker") as DatetimePickerType;
export { DatetimePickerRef };
export default DatetimePicker;
