import reactify from "@quarkd/reactify";
import "quarkd/lib/tab";
import { FC } from "react";
import { ContentProps } from "quarkd/lib/tab";
import { componentBaseInterface, ReactifyProps } from "../type";

type TabContentProps = componentBaseInterface & ReactifyProps<ContentProps, {}>;
type TabContentType = FC<TabContentProps>;

const TabContent = reactify("quark-tab-content") as TabContentType;
export default TabContent;
