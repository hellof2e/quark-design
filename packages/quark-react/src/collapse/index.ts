import { FC } from "react";
import reactify from "@quarkd/reactify";
import { Props } from "quarkd/lib/collapse";
import { componentBaseInterface, ReactifyProps } from "../type";
import "quarkd/lib/collapse";

type CollapseProps = componentBaseInterface & ReactifyProps<Props, {}>;
type CollapseType = FC<CollapseProps>;

const Collapse = reactify("quark-collapse") as CollapseType;
export default Collapse;
