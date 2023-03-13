import { FC } from "react";
import reactify from "@quarkd/reactify";
import "quarkd/lib/form";
import { componentBaseInterface } from "../type";

interface FormProps extends componentBaseInterface {}
interface Rule {
  name: string; // 需要校验的 field 组件的 name 属性
  required?: boolean; // 是否必填
  message?: string; // 错误信息
  validator: (value: string) => void; // 校验规则
}
interface FormRef extends componentBaseInterface {
  submit: () => Promise<any[]>;
  setRules: (rule: Rule[]) => void;
}

type FormType = FC<FormProps>;
const Form = reactify("quark-form") as FormType;
export { FormRef };
export default Form;
