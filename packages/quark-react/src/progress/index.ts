import reactify from "@quarkd/reactify";
import "quarkd/lib/progress";
import { FC } from "react";
import { Props } from "quarkd/lib/progress";
import { componentBaseInterface, ReactifyProps } from "../type";

type ProgressProps = componentBaseInterface & ReactifyProps<Props, {}>;
type ProgressType = FC<ProgressProps>;

const Progress = reactify("quark-progress") as ProgressType;
export default Progress;
