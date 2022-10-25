import { FC } from 'react';
import reactify from "@quarkd/reactify";
import "quarkd/lib/checkbox";
import { componentBaseInterface } from '../type';

interface CheckboxGroupProps extends componentBaseInterface {
    value?: string
    onChange: (e: {detail: {value: string []}}) => void
}
type CheckboxGroupType =  FC<CheckboxGroupProps>;

const CheckboxGroup = reactify('quark-checkbox-group') as CheckboxGroupType;
export default CheckboxGroup;