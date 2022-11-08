import reactify from "@quarkd/reactify";
import "quarkd/lib/tabbar";
import { FC } from "react";
import { Props, CustomEvent } from "quarkd/lib/tabbar";
import { componentBaseInterface, ReactifyProps } from "../type";

type TabbarProps = componentBaseInterface & ReactifyProps<Props, CustomEvent>;
type TabbarType = FC<TabbarProps>;

const Tabbar = reactify("quark-tabbar") as TabbarType;
export default Tabbar;
