import reactify from '@quarkd/reactify';
import 'quarkd/lib/tabbaritem';
import { FC } from 'react';
import { Props } from  'quarkd/lib/tabbaritem';
import { componentBaseInterface, ReactifyProps } from '../type';

type TabbarItemProps = componentBaseInterface & ReactifyProps<Props, {}>;
type TabbarItemType =  FC<TabbarItemProps>;

const TabbarItem = reactify('quark-tabbar-item') as TabbarItemType;
export default TabbarItem;