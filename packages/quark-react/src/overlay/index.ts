import reactify from "@quarkd/reactify";
import "quarkd/lib/overlay";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

interface OverlayProps extends componentBaseInterface {
    open: boolean
    zindex?: number
    onClose: () => void
}
type OverlayType =  FC<OverlayProps>;

const Overlay = reactify('quark-overlay') as OverlayType;
export default Overlay;