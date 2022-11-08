import reactify from '@quarkd/reactify';
import 'quarkd/lib/skeleton';
import { FC } from 'react';
import { Props } from  'quarkd/lib/skeleton';
import { componentBaseInterface, ReactifyProps } from '../type';

type SkeletonProps = componentBaseInterface & ReactifyProps<Props, {}>;
type SkeletonType =  FC<SkeletonProps>;

const Skeleton = reactify('quark-skeleton') as SkeletonType;
export default Skeleton;