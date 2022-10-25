import { FC } from 'react';
import reactify from "@quarkd/reactify";
import "quarkd/lib/grid";
import { componentBaseInterface } from '../type';
interface GridProps extends componentBaseInterface {
    column?: number
    noborder?: boolean
    square?: boolean
}
type GridType =  FC<GridProps>;

const Grid = reactify('quark-grid') as GridType;
export default Grid;