import reactify from "@quarkd/reactify";
import "quarkd/lib/skeleton";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

interface SkeletonProps extends componentBaseInterface {
    avatar?: boolean
    avatarshape?: 'round' | 'square'
    titel?: boolean
    row: number
    rowwidths?: string
    hide?: boolean
}
type SkeletonType =  FC<SkeletonProps>;

const Skeleton = reactify('quark-skeleton') as SkeletonType;
export default Skeleton;