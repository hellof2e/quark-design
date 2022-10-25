import { FC } from 'react';
import reactify from "@quarkd/reactify";
import "quarkd/lib/button";
import { componentBaseInterface } from '../type';
interface ButtonProps extends componentBaseInterface{
    type?: 'primary' | 'success' | 'danger' | 'warning'
    size?: 'small' | 'normal' | 'big' | 'large'
    icon?: string;
    shape?: 'square' | 'round'
    plain?: boolean
    loading?: boolean
    loadtype?: 'circular' | 'spinner'
    loadingcolor?: string;
    loadingsize?: number;
}
type ButtonType =  FC<ButtonProps>;

const Button = reactify('quark-button') as ButtonType;
export default Button;