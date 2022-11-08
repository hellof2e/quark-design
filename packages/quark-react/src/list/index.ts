import reactify from '@quarkd/reactify';
import "quarkd/lib/list";
import { FC } from 'react';
import { Props, CustomEvent } from "quarkd/lib/list";
import { componentBaseInterface, ReactifyProps } from "../type";

type ListProps = componentBaseInterface & ReactifyProps<Props, CustomEvent>;
type ListType =  FC<ListProps>;

const List = reactify('quark-list') as ListType;
export default List;