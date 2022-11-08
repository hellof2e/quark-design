import { FC } from "react";
import reactify from "@quarkd/reactify";
import "quarkd/lib/countdown";
import { Props, CustomEvent } from "quarkd/lib/countdown";
import { componentBaseInterface, ReactifyProps } from "../type";

type CountDownProps = componentBaseInterface &
  ReactifyProps<Props, CustomEvent>;
type CountDownType = FC<CountDownProps>;

const CountDown = reactify("quark-countdown") as CountDownType;
export default CountDown;
