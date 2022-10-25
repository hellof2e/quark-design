import reactify from "@quarkd/reactify";
import "quarkd/lib/tab";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

interface TabsProps extends componentBaseInterface {
    activekey?: string
    sticky?: boolean
    offsettop?: number
    linewidth?: number
    onChange: (e: {detail: {label: string, name: string}}) => void
}
type TabsType =  FC<TabsProps>;

const Tabs = reactify('quark-tabs') as TabsType;

export default Tabs;