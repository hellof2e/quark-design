import reactify from "@quarkd/reactify";
import "quarkd/lib/noticebar";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

interface NoticebarProps extends componentBaseInterface {
    text?: string
    multiple?: boolean
    closehide?: boolean
    right?: string
    safearea?: boolean
    iconsize?: string
    onLeftclick?: () => void
    onRightclick?: () => void
    onClose?: () => void
}
type NoticebarType =  FC<NoticebarProps>;

const Noticebar = reactify('quark-noticebar') as NoticebarType;
export default Noticebar;