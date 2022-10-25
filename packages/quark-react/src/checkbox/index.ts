import { FC } from 'react';
import reactify from "@quarkd/reactify";
import "quarkd/lib/checkbox";
import { componentBaseInterface } from '../type';
interface CheckBoxProps extends componentBaseInterface{
    shape?: 'round' | 'square'
    size?: 'normal' | 'big'
    disabled?: boolean;
    checked?: boolean
    onChange: (e: {detail: {value: string}}) => void
}
type CheckboxType =  FC<CheckBoxProps>;

const Checkbox = reactify('quark-checkbox') as CheckboxType;

export default Checkbox;