import { FC } from "react";
import reactify from "@quarkd/reactify";
import "quarkd/lib/button";
import { Props } from "quarkd/lib/button";
import { componentBaseInterface, ReactifyProps } from "../type";

type ButtonProps = componentBaseInterface & ReactifyProps<Props, {}>;
type ButtonType = FC<ButtonProps>;

const Button = reactify("quark-button") as ButtonType;
export default Button;
