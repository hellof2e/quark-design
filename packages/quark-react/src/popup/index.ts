import reactify from "@quarkd/reactify";
import "quarkd/lib/popup";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

interface PopupProps extends componentBaseInterface {
    position?: 'top' | 'bottom' | 'left' | 'right'
    round?: boolean
    open: boolean
    closeable?: boolean
    safearea?: boolean
    zindex?: number
    onClosed: () => void
}
type PopupType =  FC<PopupProps>;

const Popup = reactify('quark-popup') as PopupType;
export default Popup;