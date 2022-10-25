import reactify from "@quarkd/reactify";
import "quarkd/lib/picker";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

interface PickerProps extends componentBaseInterface {
    open: boolean
    title: string
    bottomhidden?: boolean
    onClose: () => void
    onConfirm: (e: {detail:{value: {value: string, index: number}[]}}) => void
    onChange: (e: {detail:{value: {value: string, index: number}[]}}) => void
}
type PickerType =  FC<PickerProps>;

interface PickerColumn {
    values: string[]
    defaultIndex: number
}
  
interface SelectColumn {
    value: string
    index: number
}
interface PickerRef {
    setColumns: (columns: PickerColumn[]) => void
    getValues:  ()=> SelectColumn[]
}
const Picker = reactify('quark-picker') as PickerType;
export {
    PickerRef
}
export default Picker;