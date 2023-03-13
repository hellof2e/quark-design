import { FC } from "react";
import reactify from "@quarkd/reactify";
import "quarkd/lib/cascadepicker";
import {
  Props,
  CustomEvent,
  PickerColumn,
  SelectedColumn,
} from "quarkd/lib/cascadepicker";
import { componentBaseInterface, ReactifyProps } from "../type";

type CascadePickerProps = componentBaseInterface &
  ReactifyProps<Props, CustomEvent>;
interface CascadePickerRef extends componentBaseInterface {
  setColumns: (columns: PickerColumn[]) => void;
  getValues: () => SelectedColumn[];
}

type CascadePickerType = FC<CascadePickerProps>;
const CascadePicker = reactify("quark-cascade-picker") as CascadePickerType;
export { CascadePickerRef };
export default CascadePicker;
