import reactify from "@quarkd/reactify";
import "quarkd/lib/tab";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

interface TabContentProps extends componentBaseInterface {
    label: string
    disabled?: boolean
    name: string
}
type TabContentType =  FC<TabContentProps>;

const TabContent = reactify('quark-tab-content') as TabContentType;

export default TabContent;