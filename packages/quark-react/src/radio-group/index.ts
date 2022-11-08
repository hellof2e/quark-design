import reactify from '@quarkd/reactify';
import 'quarkd/lib/radio';
import { FC } from 'react';
import { GroupProps, GroupCustomEvent } from  'quarkd/lib/radio';
import { componentBaseInterface, ReactifyProps } from '../type';

type RadioGroupProps = componentBaseInterface & ReactifyProps<GroupProps, GroupCustomEvent>;
type RadioGroupType =  FC<RadioGroupProps>;

const RadioGroup = reactify('quark-radio-group') as RadioGroupType;
export default RadioGroup; 