import reactify from "@quarkd/reactify";
import "quarkd/lib/marquee";
import { FC } from "react";
import { Props } from "quarkd/lib/marquee";
import { componentBaseInterface, ReactifyProps } from "../type";

type MarqueeProps = componentBaseInterface & ReactifyProps<Props, {}>;
type MarqueeType = FC<MarqueeProps>;

const Marquee = reactify("quark-marquee") as MarqueeType;
export default Marquee;
