import reactify from '@quarkd/reactify';
import 'quarkd/lib/switch';
import { FC } from 'react';
import { Props, CustomEvent } from  'quarkd/lib/switch';
import { componentBaseInterface, ReactifyProps } from '../type';

type SwitchProps = componentBaseInterface & ReactifyProps<Props, CustomEvent>;
type SwitchType =  FC<SwitchProps>;

const Switch = reactify('quark-switch') as SwitchType;
export default Switch;