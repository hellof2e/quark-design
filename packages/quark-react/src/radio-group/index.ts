import reactify from "@quarkd/reactify";
import "quarkd/lib/radio";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

interface RadioGroupProps extends componentBaseInterface {
    value?: string
    onChange: (e: {detail: {value: string}}) => void
}
type RadioGroupType =  FC<RadioGroupProps>;

const RadioGroup = reactify('quark-radio-group') as RadioGroupType;
export default RadioGroup;