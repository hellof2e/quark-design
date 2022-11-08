import reactify from '@quarkd/reactify';
import 'quarkd/lib/pullrefresh';
import { FC } from 'react';
import { Props, CustomEvent } from  'quarkd/lib/pullrefresh';
import { componentBaseInterface, ReactifyProps } from '../type';

type PullRefreshProps = componentBaseInterface & ReactifyProps<Props, CustomEvent>;
type PullRefreshType =  FC<PullRefreshProps>;

const PullRefresh = reactify('quark-pull-refresh') as PullRefreshType;
export default PullRefresh;