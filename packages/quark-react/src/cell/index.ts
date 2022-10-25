import { FC } from 'react';
import reactify from "@quarkd/reactify";
import "quarkd/lib/cell";
import { componentBaseInterface } from '../type';
interface CellProps extends componentBaseInterface{
    title: string
    desc?: string
    to?: string;
    islink?: boolean
    icon?: string
}

type CellType =  FC<CellProps>;

const Cell = reactify('quark-cell') as CellType;

export default Cell;