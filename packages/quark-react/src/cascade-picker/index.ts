
import { FC } from 'react';
import reactify from "@quarkd/reactify";
import "quarkd/lib/cascadepicker";
import { componentBaseInterface } from '../type';

interface CascadePickerProps extends componentBaseInterface {
    open: boolean
    title?: string
    bottomhidden?: boolean
    onClose: () => void
    onConfirm: (e: {detail:{value: {value: string, index: number}[]}}) => void
    onChange: (e: {detail:{value: {value: string, index: number}[]}}) => void
}

interface PickerColumn {
    text: string;
    children: PickerColumn[];
}
  
interface SelectedColumn {
    value: string
    index: number
}
interface CascadePickerRef {
    setColumns: (columns: PickerColumn[]) => void
    getValues:  ()=> SelectedColumn[]
}

type CascadePickerType =  FC<CascadePickerProps>;

const CascadePicker = reactify('quark-cascade-picker') as CascadePickerType;
export {
  CascadePickerRef
}
export default CascadePicker;