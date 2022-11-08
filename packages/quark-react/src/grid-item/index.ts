import { FC } from 'react';
import reactify from '@quarkd/reactify';
import "quarkd/lib/grid";
import { ItemProps } from "quarkd/lib/grid";
import { componentBaseInterface, ReactifyProps } from '../type';

type GridItemProps = componentBaseInterface & ReactifyProps<ItemProps, {}>;
type GridItemType =  FC<GridItemProps>;

const GridItem = reactify('quark-grid-item') as GridItemType;
export default GridItem;