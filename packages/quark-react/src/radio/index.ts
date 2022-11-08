import reactify from "@quarkd/reactify";
import "quarkd/lib/radio";
import { FC } from "react";
import { Props } from "quarkd/lib/radio";
import { componentBaseInterface, ReactifyProps } from "../type";

type RadioProps = componentBaseInterface & ReactifyProps<Props, {}>;
type RadioType = FC<RadioProps>;

const Radio = reactify("quark-radio") as RadioType;
export default Radio;
