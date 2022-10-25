import reactify from "@quarkd/reactify";
import "quarkd/lib/tag";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

interface TagProps extends componentBaseInterface {
    type?: 'primary' | 'success' | 'danger' | 'warning'
    size?: 'small' | 'large'
    round?: boolean
    plain?: boolean
    color?: string;
    textcolor?: string;
}
type TagType =  FC<TagProps>;

const Tag = reactify('quark-tag') as TagType;
export default Tag;