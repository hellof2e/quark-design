import reactify from "@quarkd/reactify";
import "quarkd/lib/tabbar";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

interface TabbarItemProps extends componentBaseInterface {
   label: string
   badgecontent?: string
   name: string
}
type TabbarItemType =  FC<TabbarItemProps>;

const TabbarItem = reactify('quark-tabbar-item') as TabbarItemType;
export default TabbarItem;