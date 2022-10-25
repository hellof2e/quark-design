import reactify from "@quarkd/reactify";
import "quarkd/lib/datetimepicker";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

type type = 'date' | 'time' | 'year-month' | 'month-day' | 'datehour' | 'datetime';

interface DatetimePickerProps extends componentBaseInterface {
    open: boolean
    title?: string
    type?: type
    value?: string
    mindate?: string
    maxdate?: string
    minhour?: number
    maxhour?: number
    minMinute?: number
    maxMinute?: number
    showtoolbar?: boolean
    confirmbuttontext?: string
    cancelbuttontext?: string
    onClose: () => void
    onConfirm: (e: {detail:{value: {value: string, index: number}[]}}) => void
    onChange: (e: {detail:{value: {value: string, index: number}[]}}) => void
}
type DatetimePickerType =  FC<DatetimePickerProps>;

interface SelectColumn {
    value: string
    index: number
}
interface DatetimePickerRef {
    setValue: (value: Date | string) => void
    getValues: () => SelectColumn[]
    setFormatter: (type: string, value: string) => string
    setFilter: (type: string, values: string[]) => string[]
}

const DatetimePicker = reactify('quark-datetime-picker') as DatetimePickerType;
export {
    DatetimePickerRef
}
export default DatetimePicker;