import { FC } from 'react';
import reactify from "@quarkd/reactify";
import "quarkd/lib/grid";
import { componentBaseInterface } from '../type';

interface GridItemProps extends componentBaseInterface {
    text?: string
    icon?: string
    iconsize?: string
}
type GridItemType =  FC<GridItemProps>;

const GridItem = reactify('quark-grid-item') as GridItemType;
export default GridItem;