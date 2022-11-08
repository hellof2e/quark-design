import { FC } from 'react';
import reactify from '@quarkd/reactify';
import "quarkd/lib/grid";
import { Props } from "quarkd/lib/grid";
import { componentBaseInterface, ReactifyProps } from '../type';

type GridProps = componentBaseInterface & ReactifyProps<Props, {}>;
type GridType =  FC<GridProps>;

const Grid = reactify('quark-grid') as GridType;
export default Grid;