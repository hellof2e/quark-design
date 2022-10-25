import { FC } from 'react';
import reactify from "@quarkd/reactify";
import "quarkd/lib/field";
import { componentBaseInterface } from '../type';

interface FieldProps extends componentBaseInterface{
    label?: string
    type?: string
    value?: string
    defaultvalue?: string
    name?: string
    placeholder?: string
    min?: string
    minlength?: string
    max?: string
    maxlength?: string
    disabled?: boolean
    readonly?: boolean
    required?: boolean
    errormsg?: string
    onChange: (e: {detail: {value: string}}) => void
    onFocus?: () => void
    onBlur?: () => void
}

interface Rule {
    message: string; // 错误提示
    validator: (value: string) => void; // 校验规则
 }
interface FieldRef {
    setRules: (rule: Rule[]) => void
}

type FieldType =  FC<FieldProps>;

const Field = reactify('quark-field') as FieldType;

export {
   FieldRef
}
export default Field;