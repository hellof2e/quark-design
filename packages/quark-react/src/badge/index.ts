import { FC } from 'react';
import reactify from '@quarkd/reactify';
import 'quarkd/lib/badge';
import { Props } from 'quarkd/lib/badge';
import { componentBaseInterface, ReactifyProps } from '../type';

type BadgeProps = componentBaseInterface & ReactifyProps<Props, {}>
type BadgeType =  FC<BadgeProps>;

const Badge = reactify('quark-badge') as BadgeType;
export default Badge;