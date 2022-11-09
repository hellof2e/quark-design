import reactify from "@quarkd/reactify";
import "quarkd/lib/tab";
import { FC } from "react";
import { Props, CustomEvent } from "quarkd/lib/tab";
import { componentBaseInterface, ReactifyProps } from "../type";

type TabsProps = componentBaseInterface & ReactifyProps<Props, CustomEvent>;
type TabsType = FC<TabsProps>;

const Tabs = reactify("quark-tabs") as TabsType;
export default Tabs;
