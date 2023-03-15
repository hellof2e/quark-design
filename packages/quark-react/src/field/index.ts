import { FC } from "react";
import reactify from "@quarkd/reactify";
import "quarkd/lib/field";
import { Props, CustomEvent, Rule } from "quarkd/lib/field";
import { componentBaseInterface, ReactifyProps } from "../type";

type FieldProps = componentBaseInterface & ReactifyProps<Props, CustomEvent>;

interface Ref {
  setRules: (rule: Rule[]) => void;
}

type FieldType = FC<FieldProps>;
type FieldRef = Ref & HTMLElement;
const Field = reactify("quark-field") as FieldType;

export { FieldRef };
export default Field;
