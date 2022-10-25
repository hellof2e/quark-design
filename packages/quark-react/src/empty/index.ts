import { FC } from 'react';
import reactify from "@quarkd/reactify";
import "quarkd/lib/empty";
import { componentBaseInterface } from '../type';

interface EmptyProps extends componentBaseInterface{
    title?: string
    desc?: string
    image?: string
    imagesize?: string
}
type EmptyType =  FC<EmptyProps>;

const Empty = reactify('quark-empty') as EmptyType;
export default Empty;