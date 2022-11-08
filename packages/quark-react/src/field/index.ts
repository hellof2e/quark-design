import { FC } from "react";
import reactify from "@quarkd/reactify";
import "quarkd/lib/field";
import { Props, CustomEvent } from "quarkd/lib/field";
import { componentBaseInterface, ReactifyProps } from "../type";

type FieldProps = componentBaseInterface & ReactifyProps<Props, CustomEvent>;
interface Rule {
  message: string; // 错误提示
  validator: (value: string) => void; // 校验规则
}
interface FieldRef {
  setRules: (rule: Rule[]) => void;
}

type FieldType = FC<FieldProps>;

const Field = reactify("quark-field") as FieldType;

export { FieldRef };
export default Field;
