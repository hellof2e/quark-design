import reactify from "@quarkd/reactify";
import "quarkd/lib/sticky";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

interface StickyProps extends componentBaseInterface {
    offsettop?: number
    zindex?: number
}
type StickyType =  FC<StickyProps>;

const Sticky = reactify('quark-sticky') as StickyType;
export default Sticky;