import reactify from "@quarkd/reactify";
import "quarkd/lib/tooltip";
import { FC } from "react";
import { Props, CustomEvent } from "quarkd/lib/tooltip";
import { componentBaseInterface, ReactifyProps } from "../type";

type TooltipProps = componentBaseInterface & ReactifyProps<Props, CustomEvent>;
type TooltipType = FC<TooltipProps>;

const Tooltip = reactify("quark-tooltip") as TooltipType;
export default Tooltip;
