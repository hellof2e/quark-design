import reactify from "@quarkd/reactify";
import "quarkd/lib/loading";
import { FC } from "react";
import { Props } from "quarkd/lib/loading";
import { componentBaseInterface, ReactifyProps } from "../type";

type LoadingProps = componentBaseInterface & ReactifyProps<Props, {}>;
type LoadingType = FC<LoadingProps>;

const Loading = reactify("quark-loading") as LoadingType;
export default Loading;
