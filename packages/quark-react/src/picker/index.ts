import reactify from '@quarkd/reactify';
import 'quarkd/lib/picker';
import { FC } from 'react';
import { Props, CustomEvent, PickerColumn, SelectColumn } from  'quarkd/lib/picker';
import { componentBaseInterface, ReactifyProps } from '../type';

type PickerProps = componentBaseInterface & ReactifyProps<Props, CustomEvent>;
type PickerType =  FC<PickerProps>;
interface PickerRef {
    setColumns: (columns: PickerColumn[]) => void
    getValues:  ()=> SelectColumn[]
}
const Picker = reactify('quark-picker') as PickerType;
export {
    PickerRef
}
export default Picker;