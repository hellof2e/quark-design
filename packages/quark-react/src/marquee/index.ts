import reactify from "@quarkd/reactify";
import "quarkd/lib/marquee";
import { FC } from 'react';
import { componentBaseInterface } from '../type';
interface MarqueeProps extends componentBaseInterface {
    title: string
    speed?: number
}
type MarqueeType =  FC<MarqueeProps>;

const Marquee = reactify('quark-marquee') as MarqueeType;
export default Marquee;