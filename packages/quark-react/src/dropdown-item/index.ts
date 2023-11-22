import { FC } from "react";
import reactify from "@quarkd/reactify";
import "quarkd/lib/dropdownitem";
import {
  DropdownItemOption,
  DropdownItemProps as Props,
  CustomEvent,
} from "quarkd/lib/dropdownitem";
import { componentBaseInterface, ReactifyProps } from "../type";

type DropdownItemProps = componentBaseInterface &
  ReactifyProps<Props, CustomEvent>;
type DropdownItemType = FC<DropdownItemProps>;

interface Ref {
  setOptions(options: DropdownItemOption[]): void;
  toggle(show?: boolean): void;
}

type DropdownItemInstance = Ref & HTMLElement;
const DropdownItem = reactify("quark-dropdown-item") as DropdownItemType;
export { DropdownItemInstance, DropdownItemProps, DropdownItemOption };
export default DropdownItem;
