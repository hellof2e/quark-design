import { FC } from 'react';
import reactify from '@quarkd/reactify';
import 'quarkd/lib/dialog';
import { Props, CustomEvent } from 'quarkd/lib/dialog';
import { componentBaseInterface, ReactifyProps } from '../type';

type DialogProps = componentBaseInterface & ReactifyProps<Props, CustomEvent>;
type DialogType =  FC<DialogProps>;

const Dialog = reactify('quark-dialog') as DialogType;
export default Dialog;