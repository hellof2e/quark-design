import reactify from "@quarkd/reactify";
import "quarkd/lib/image";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

interface ImageProps extends componentBaseInterface {
    width?: number
    height?: number
    fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
    lazy?: boolean
    round?: boolean
    radius?: number
    alt?: string
    onClick?: () => void
    onLoad?: () => void
    onError?: () => void
}
type ImageType =  FC<ImageProps>;

const Image = reactify('quark-image') as ImageType;
export default Image;