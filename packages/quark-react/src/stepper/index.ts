import reactify from '@quarkd/reactify';
import 'quarkd/lib/stepper';
import { FC } from 'react';
import { Props, CustomEvent } from  'quarkd/lib/stepper';
import { componentBaseInterface, ReactifyProps } from '../type';

type StepperProps = componentBaseInterface & ReactifyProps<Props, CustomEvent>;
type StepperType =  FC<StepperProps>;

const Stepper = reactify('quark-stepper') as StepperType;
export default Stepper;