import { FC } from 'react';
import reactify from '@quarkd/reactify';
import 'quarkd/lib/cell';
import { Props } from 'quarkd/lib/cell';
import { componentBaseInterface, ReactifyProps } from '../type';

type CellProps = componentBaseInterface & ReactifyProps<Props, {}>
type CellType =  FC<CellProps>;

const Cell = reactify('quark-cell') as CellType;
export default Cell;