import { FC } from "react";
import reactify from "@quarkd/reactify";
import { Rule } from "quarkd/lib/form";
import { componentBaseInterface } from "../type";

interface FormProps extends componentBaseInterface {}

interface FormRef extends componentBaseInterface {
  submit: () => Promise<any[]>;
  setRules: (rule: Rule[]) => void;
}

type FormType = FC<FormProps>;
const Form = reactify("quark-form") as FormType;
export { FormRef };
export default Form;
