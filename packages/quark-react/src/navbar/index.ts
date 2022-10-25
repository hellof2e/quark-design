import reactify from "@quarkd/reactify";
import "quarkd/lib/navbar";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

interface NavbarProps extends componentBaseInterface {
    title: string
    lefthide?: boolean
    closehide?: boolean
    right?: string
    safearea?: boolean
    iconsize?: string
    onLeftClick?: () => void
    onRightClick?: () => void
    onClose?: () => void
}
type NavbarType =  FC<NavbarProps>;

const Navbar = reactify('quark-navbar') as NavbarType;
export default Navbar;