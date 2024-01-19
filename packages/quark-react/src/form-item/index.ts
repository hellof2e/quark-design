import { FC } from "react";
import reactify from "@quarkd/reactify";
// import "quarkd/lib/form/form-item";
import { IFormItemProps } from "quarkd/lib/form/type";
import { componentBaseInterface, ReactifyProps } from "../type";

type FormItemProps = componentBaseInterface & ReactifyProps<IFormItemProps, {}>;
type FormItemType = FC<FormItemProps>;

const FormItem = reactify("quark-form-item") as FormItemType;
export default FormItem;
