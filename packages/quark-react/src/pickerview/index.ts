import reactify from "@quarkd/reactify";
import "quarkd/lib/pickerview";
import { FC } from "react";
import {
  Props,
  CustomEvent,
  PickerColumn,
  SelectColumn,
} from "quarkd/lib/pickerview";
import { componentBaseInterface, ReactifyProps } from "../type";

type PickerViewProps = componentBaseInterface &
  ReactifyProps<Props, CustomEvent>;
type PickerViewType = FC<PickerViewProps>;
interface Ref {
  setColumns: (columns: PickerColumn[]) => void;
  getValues: () => SelectColumn[];
}
type PickerViewRef = Ref & HTMLElement;
const PickerView = reactify("quark-pickerview") as PickerViewType;
export { PickerViewRef };
export default PickerView;
