import reactify from "@quarkd/reactify";
import "quarkd/lib/steps";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

interface StepsProps extends componentBaseInterface {
    direction?: 'horzontal' | 'vertical'
}
type StepsType =  FC<StepsProps>;

const Steps = reactify('quark-steps') as StepsType;
export default Steps;