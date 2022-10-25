import reactify from "@quarkd/reactify";
import "quarkd/lib/switch";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

interface SwitchProps extends componentBaseInterface {
    checked?: boolean
    disabled?: boolean
    size?: number
    color?: string
    onChange: (e: {detail: {value: boolean}}) => void
}
type SwitchType =  FC<SwitchProps>;

const Switch = reactify('quark-switch') as SwitchType;
export default Switch;