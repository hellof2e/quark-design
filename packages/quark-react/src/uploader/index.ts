import reactify from "@quarkd/reactify";
import "quarkd/lib/uploader";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

interface UploaderFileListItem {
    id?: number;
    url?: string;
    file?: File;
    content?: string;
    isImage?: boolean;
    status?: '' | 'uploading' | 'done' | 'failed';
    message?: string;
    deletable?: boolean;
    previewSize?: number | string;
}
interface UploaderProps extends componentBaseInterface {
    accept?: string
    name?: string
    multiple?: boolean
    preview?: boolean
    capture?: boolean
    maxcount?: number
    maxsize?: number
    disabled?: string
    onAfterread?: (e: {detail: UploaderFileListItem | UploaderFileListItem[]}) => void
}
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