import reactify from "@quarkd/reactify";
import "quarkd/lib/radio";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

interface RadioProps extends componentBaseInterface {
    shape?: 'round' | 'square'
    size?: 'normal' | 'big'
    disabled?: boolean;
}
type RadioType =  FC<RadioProps>;

const Radio = reactify('quark-radio') as RadioType;
export default Radio;