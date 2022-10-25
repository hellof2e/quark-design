import reactify from "@quarkd/reactify";
import "quarkd/lib/popover";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

interface PopoverAction {
    text: string;
    icon?: string; // url link
    disabled?: boolean;
}
interface PopoverProps extends componentBaseInterface {
    open: boolean
    placement?: 'top' | 'topleft' | 'topright' | 'left' | 'lefttop' | 'leftbottom' | 'right' | 'righttop' | 'rightbottom' | 'bottom' | 'bottomleft' | 'bottomright'
    zindex?: number
    theme?: 'light' | 'dark'
    scroolhidden?: boolean
    onClose: () => void
    onSelect: (e: {detail:{action: PopoverAction, index: number}}) => void
}
interface PopoverRef {
    setActions: (actions: PopoverAction[]) => void 
}

type PopoverType =  FC<PopoverProps>;

const Popover = reactify('quark-popover') as PopoverType;
export {
  PopoverRef
}
export default Popover;