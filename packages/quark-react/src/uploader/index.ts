import reactify from '@quarkd/reactify';
import 'quarkd/lib/uploader';
import { FC } from 'react';
import { Props, CustomEvent } from 'quarkd/lib/uploader';
import { componentBaseInterface, ReactifyProps } from '../type';

type UploaderProps = componentBaseInterface & ReactifyProps<Props, CustomEvent>;
interface UploaderRef {
    setBeforeUpload: (fn: () => boolean) => void
    setPreview: (url: string[]) => void
}

type UploaderType =  FC<UploaderProps>;
const Uploader = reactify('quark-uploader') as UploaderType;
export {
    UploaderRef
}
export default Uploader;