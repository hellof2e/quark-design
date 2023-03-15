import { FC } from "react";
import reactify from "@quarkd/reactify";
import "quarkd/lib/field";
import { Props, CustomEvent, Rule } from "quarkd/lib/field";
import { componentBaseInterface, ReactifyProps } from "../type";

type FieldProps = componentBaseInterface & ReactifyProps<Props, CustomEvent>;

interface FieldRef extends componentBaseInterface {
  setRules: (rule: Rule[]) => void;
}

type FieldType = FC<FieldProps>;

const Field = reactify("quark-field") as FieldType;

export { FieldRef };
export default Field;
