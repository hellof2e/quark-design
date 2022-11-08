import reactify from "@quarkd/reactify";
import "quarkd/lib/swipe";
import { FC } from "react";
import { Props, CustomEvent } from "quarkd/lib/swipe";
import { componentBaseInterface, ReactifyProps } from "../type";

type SwipeProps = componentBaseInterface & ReactifyProps<Props, CustomEvent>;
type SwipeType = FC<SwipeProps>;

const Swipe = reactify("quark-swipe") as SwipeType;
export default Swipe;
