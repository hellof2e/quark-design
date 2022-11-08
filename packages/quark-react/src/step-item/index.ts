import reactify from '@quarkd/reactify';
import 'quarkd/lib/steps';
import { FC } from 'react';
import { ItemProps } from  'quarkd/lib/steps';
import { componentBaseInterface, ReactifyProps } from '../type';

type StepItemProps = componentBaseInterface & ReactifyProps<ItemProps, {}>;
type StepItemType =  FC<StepItemProps>;

const StepItem = reactify('quark-step') as StepItemType;
export default StepItem;