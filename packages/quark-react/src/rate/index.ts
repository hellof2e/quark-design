import reactify from "@quarkd/reactify";
import "quarkd/lib/rate";
import { FC } from "react";
import { Props, CustomEvent } from "quarkd/lib/rate";
import { componentBaseInterface, ReactifyProps } from "../type";

type RateProps = componentBaseInterface & ReactifyProps<Props, CustomEvent>;
type RateType = FC<RateProps>;

const Rate = reactify("quark-rate") as RateType;
export default Rate;
