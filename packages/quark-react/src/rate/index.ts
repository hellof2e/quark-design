import reactify from "@quarkd/reactify";
import "quarkd/lib/rate";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

interface RateProps extends componentBaseInterface {
    defaultvalue?: number
    value?: number
    size?: number
    disabled?: boolean
    readonly?: boolean
    activecolor?: string
    onChange: (e: {detail: {value: string}}) => void
}
type RateType =  FC<RateProps>;

const Rate = reactify('quark-rate') as RateType;
export default Rate;