import { FC } from 'react';
import reactify from "@quarkd/reactify";
import "quarkd/lib/countdown";
import { componentBaseInterface } from '../type';
interface CountDownProps extends  componentBaseInterface {
    time: string
    format?: string
    onEnd: () => void
}
type CountDownType =  FC<CountDownProps>;

const CountDown = reactify('quark-countdown') as CountDownType;
export default CountDown;