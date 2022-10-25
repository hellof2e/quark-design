import reactify from "@quarkd/reactify";
import "quarkd/lib/popupextra";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

interface PopupExtraProps extends componentBaseInterface {
    round?: boolean
    open: boolean
    title?: string
    subtitle?: string
    safearea?: boolean
    zindex?: number
    onClosed: () => void
}
type PopupExtraType =  FC<PopupExtraProps>;

const PopupExtra = reactify('quark-popupextra') as PopupExtraType;
export default PopupExtra;