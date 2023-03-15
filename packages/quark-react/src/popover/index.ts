import reactify from "@quarkd/reactify";
import "quarkd/lib/popover";
import { FC } from "react";
import { Props, CustomEvent, PopoverAction } from "quarkd/lib/popover";
import { componentBaseInterface, ReactifyProps } from "../type";

type PopoverProps = componentBaseInterface & ReactifyProps<Props, CustomEvent>;
interface Ref {
  setActions: (actions: PopoverAction[]) => void;
}
type PopoverType = FC<PopoverProps>;
type PopoverRef = Ref & HTMLElement;
const Popover = reactify("quark-popover") as PopoverType;
export { PopoverRef };
export default Popover;
