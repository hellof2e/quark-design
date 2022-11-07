import reactify from "@quarkd/reactify";
import "quarkd/lib/steps";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

interface StepItemProps extends componentBaseInterface {
    title: string
    status: 'done' | 'doing' | 'todo'
    content?: string
    order?: string
}
type StepItemType =  FC<StepItemProps>;

const StepItem = reactify('quark-step') as StepItemType;
export default StepItem;