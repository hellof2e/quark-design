import { FC } from "react";
import reactify from "@quarkd/reactify";
import "quarkd/lib/form";
import { Rules, IFormProps } from "quarkd/lib/form/type";
import { componentBaseInterface, ReactifyProps } from "../type";

type FormProps = componentBaseInterface & ReactifyProps<IFormProps, {}>;
type FormType = FC<FormProps>;

interface Ref {
  validate: (callback: any) => Promise<boolean> | void;
  validateField: (props: string | string[], callback: any) => void;
  clearValidate(props?: string[] | string): void;
  resetFields(): void;
  setRules(rules: Rules): void;
  setModel: (model: Record<string, any>) => void;
  getValues(): Record<string, any>;
}

type FormRef = Ref & HTMLElement;
const Form = reactify("quark-form") as FormType;
export { FormRef };
export default Form;
