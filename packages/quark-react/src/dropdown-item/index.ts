import { FC } from "react";
import reactify from "@quarkd/reactify";
import "quarkd/lib/dropdownitem";
import {
  DropdownItemOption,
  IDropdownItemProps,
  CustomEvent,
} from "quarkd/lib/dropdownitem";
import { componentBaseInterface, ReactifyProps } from "../type";

type DropDownItemProps = componentBaseInterface &
  ReactifyProps<IDropdownItemProps, CustomEvent>;
type DropdownItemType = FC<DropDownItemProps>;

interface Ref {
  setOptions(options: DropdownItemOption[]): void;
  toggle(show?: boolean): void;
}

type DropdownItemInstance = Ref & HTMLElement;
const DropdownItem = reactify("quark-dropdown-item") as DropdownItemType;
export { DropdownItemInstance, DropDownItemProps, DropdownItemOption };
export default DropdownItem;
