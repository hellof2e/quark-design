import reactify from "@quarkd/reactify";
import "quarkd/lib/loading";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

interface LoadingProps extends componentBaseInterface {
    type?: 'circular' | 'spinner'
    color?: string
    size?: string | number
    vertical?: boolean
}
type LoadingType =  FC<LoadingProps>;

const Loading = reactify('quark-loading') as LoadingType;
export default Loading;