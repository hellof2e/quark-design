import reactify from "@quarkd/reactify";
import "quarkd/lib/swipe";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

interface SwipeItemProps extends componentBaseInterface {}
type SwipeItemType =  FC<SwipeItemProps>;

const SwipeItem = reactify('quark-swipe-item') as SwipeItemType;
export default SwipeItem;