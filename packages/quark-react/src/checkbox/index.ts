import { FC } from "react";
import reactify from "@quarkd/reactify";
import "quarkd/lib/checkbox";
import { Props, CustomEvent } from "quarkd/lib/checkbox";
import { componentBaseInterface, ReactifyProps } from "../type";

type CheckBoxProps = componentBaseInterface & ReactifyProps<Props, CustomEvent>;
type CheckboxType = FC<CheckBoxProps>;

const Checkbox = reactify("quark-checkbox") as CheckboxType;
export default Checkbox;
