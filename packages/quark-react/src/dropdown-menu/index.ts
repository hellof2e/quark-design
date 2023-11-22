import { FC } from "react";
import reactify from "@quarkd/reactify";
import "quarkd/lib/dropdownmenu";
import {
  IDropdownMenuProps as Props,
  Direction,
} from "quarkd/lib/dropdownmenu";
import { componentBaseInterface, ReactifyProps } from "../type";

type DropdownMenuProps = componentBaseInterface & ReactifyProps<Props, {}>;

type DropdownMenuType = FC<DropdownMenuProps>;
type DropdownMenuDirection = Direction;

const DropdownMenu = reactify("quark-dropdown-menu") as DropdownMenuType;

export { DropdownMenuDirection, DropdownMenuProps };
export default DropdownMenu;
