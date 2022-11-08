import reactify from '@quarkd/reactify';
import 'quarkd/lib/sticky';
import { FC } from 'react';
import { Props } from  'quarkd/lib/sticky';
import { componentBaseInterface, ReactifyProps } from '../type';

type StickyProps = componentBaseInterface & ReactifyProps<Props, {}>;
type StickyType =  FC<StickyProps>;

const Sticky = reactify('quark-sticky') as StickyType;
export default Sticky;