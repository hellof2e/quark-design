import reactify from "@quarkd/reactify";
import "quarkd/lib/textarea";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

interface TextAreaProps extends componentBaseInterface {
    value?: string
    placeholder?: string
    rows?: number
    maxlength?: number
    showcount?: boolean
    autocomplete?: boolean
    disabled?: boolean
    readonly?: boolean
    id?: string
    onInput: (e: {target: {value: string}}) => void
    onFocus?: () => void
    onBlur?: () => void
    onChange: (e: {target: {value: string}}) => void
}
type TextAreaType =  FC<TextAreaProps>;

const TextArea = reactify('quark-textarea') as TextAreaType;
export default TextArea;