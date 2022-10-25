import reactify from "@quarkd/reactify";
import "quarkd/lib/tooltip";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

interface TooltipProps extends componentBaseInterface {
    open: boolean
    placement?: 'top' | 'topleft' | 'topright' | 'left' | 'lefttop' | 'leftbottom' | 'right' | 'righttop' | 'rightbottom' | 'bottom' | 'bottomleft' | 'bottomright'
    zindex?: number
    tips: string
    closeable?: boolean
    autoclose?: boolean
    opentime?: number
    scroolhidden?: boolean
    onClose: () => void
}
type TooltipType =  FC<TooltipProps>;

const Tooltip = reactify('quark-tooltip') as TooltipType;
export default Tooltip;