import reactify from '@quarkd/reactify';
import 'quarkd/lib/steps';
import { FC } from 'react';
import { Props } from  'quarkd/lib/steps';
import { componentBaseInterface, ReactifyProps } from '../type';

type StepsProps = componentBaseInterface & ReactifyProps<Props, {}>;
type StepsType =  FC<StepsProps>;

const Steps = reactify('quark-steps') as StepsType;
export default Steps;