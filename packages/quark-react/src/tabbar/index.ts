import reactify from "@quarkd/reactify";
import "quarkd/lib/tabbar";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

interface TabbarProps extends componentBaseInterface {
   fixed?: boolean
   inactivecolor?: string
   activecolor?: string
   value?: number
   onChange: (e: {detail: {value: number | string}}) => void
}
type TabbarType =  FC<TabbarProps>;

const Tabbar = reactify('quark-tabbar') as TabbarType;
export default Tabbar;