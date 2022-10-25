import { FC } from 'react';
import reactify from "@quarkd/reactify";
import 'quarkd/lib/dialog';
import { componentBaseInterface } from '../type';

interface DialogProps extends componentBaseInterface{
    title?: string
    content?: string
    oktext?: string;
    canceltext?: string
    open: boolean
    zindex?: number
    type?: 'modal' | 'confirm'
    btnVertical?: boolean;
    nofooter?: boolean
    hideclose?: boolean
    autoclose?: boolean
    onConfirm: () => void
    onCancel: () => void
    onClose: () => void
}
type DialogType =  FC<DialogProps>;

const Dialog = reactify('quark-dialog') as DialogType;
export default Dialog;