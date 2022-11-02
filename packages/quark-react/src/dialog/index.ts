import { FC } from 'react';
import type DialogFn from 'quarkd/lib/dialog'
import reactify from "@quarkd/reactify";
import 'quarkd/lib/dialog';
import { ReactifyProps } from '../type';


type DialogProps = ReactifyProps<Parameters<typeof DialogFn>[0]>
type DialogType =  FC<DialogProps>;

const Dialog = reactify('quark-dialog') as DialogType;
export default Dialog;