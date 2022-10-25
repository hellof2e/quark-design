import reactify from "@quarkd/reactify";
import "quarkd/lib/progress";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

interface ProgressProps extends componentBaseInterface {
    value: number
    color?: string
    showtext?: boolean
}
type ProgressType =  FC<ProgressProps>;

const Progress = reactify('quark-progress') as ProgressType;
export default Progress;