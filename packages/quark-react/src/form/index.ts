import { FC } from "react";
import reactify from "@quarkd/reactify";
import "quarkd/lib/form";
import { Rule } from "quarkd/lib/form";
import { componentBaseInterface } from "../type";

interface FormProps extends componentBaseInterface {}

interface Ref {
  getValues: () => Promise<any[]>;
  setRules: (rule: Rule[]) => void;
}
type FormRef = Ref & HTMLElement;
type FormType = FC<FormProps>;
const Form = reactify("quark-form") as FormType;
export { FormRef };
export default Form;
