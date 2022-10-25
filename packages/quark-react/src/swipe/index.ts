import reactify from "@quarkd/reactify";
import "quarkd/lib/swipe";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

interface SwipeProps extends componentBaseInterface {
    type?: string
    duration?: number
    interval?: number
    defaultindex?: string
    autoplay?: boolean
    activecolor?: string
    inactivecolor?: string
    onChange: (e: {detail: {index: number}}) => void
}
type SwipeType =  FC<SwipeProps>;


const Swipe = reactify('quark-swipe') as SwipeType;
export default Swipe;