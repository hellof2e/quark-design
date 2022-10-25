import reactify from "@quarkd/reactify";
import "quarkd/lib/stepper";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

interface StepperProps extends componentBaseInterface {
    min?: number
    max?: number
    steps?: number
    name?: string
    decimallength?: number
    integer?: boolean
    disabled?: boolean
    onOverlimit?: (e: {detail: {action: string}}) => void
    onPlus?: () => void
    onMinus?: () => void
    onChange: (e: {detail: {value: number, name: string}}) => void
}
type StepperType =  FC<StepperProps>;

const Stepper = reactify('quark-stepper') as StepperType;
export default Stepper;