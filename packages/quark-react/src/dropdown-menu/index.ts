import { FC } from "react";
import reactify from "@quarkd/reactify";
import "quarkd/lib/dropdownmenu";
import {
  IDropdownMenuProps as Props,
  DropdownMenuDirection,
} from "quarkd/lib/dropdownmenu";
import { componentBaseInterface, ReactifyProps } from "../type";

type DropdownMenuProps = componentBaseInterface & ReactifyProps<Props, {}>;

type DropdownMenuType = FC<DropdownMenuProps>;

const DropdownMenu = reactify("quark-dropdown-menu") as DropdownMenuType;

export { DropdownMenuDirection, DropdownMenuProps };
export default DropdownMenu;
