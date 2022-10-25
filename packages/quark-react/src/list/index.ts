import reactify from "@quarkd/reactify";
import "quarkd/lib/list";
import { FC } from 'react';
import { componentBaseInterface } from '../type';
interface ListProps extends componentBaseInterface {
    error?: boolean
    loading: boolean
    finished: boolean
    offset?: number
    loadingtext?: string
    finishedtext?: string
    errortext?: string
    textcolor?: string
    onLoad?: () => void
    onReload?: () => void
}
type ListType =  FC<ListProps>;

const List = reactify('quark-list') as ListType;
export default List;