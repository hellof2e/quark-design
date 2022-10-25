import { FC } from 'react';
import reactify from "@quarkd/reactify";
import "quarkd/lib/badge";
import { componentBaseInterface } from '../type';
interface BadgeProps extends  componentBaseInterface {
    type?: 'dot' | 'round' | 'label'
    content?: string
    size?: 'normal' | 'big'
    border?: boolean
    max?: number
}
type BadgeType =  FC<BadgeProps>;

const Badge = reactify('quark-badge') as BadgeType;
export default Badge;