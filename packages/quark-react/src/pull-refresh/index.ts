import reactify from "@quarkd/reactify";
import "quarkd/lib/pullrefresh";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

interface PullRefreshProps extends componentBaseInterface {
    dark?: boolean
    disabled?: boolean
    headheight?: number
    loading: boolean
    pullingtext?: string
    loosingtext?: string
    loadingtext?: string
    textcolor?: string
    onRefresh: () => void
}
type PullRefreshType =  FC<PullRefreshProps>;

const PullRefresh = reactify('quark-pull-refresh') as PullRefreshType;
export default PullRefresh;