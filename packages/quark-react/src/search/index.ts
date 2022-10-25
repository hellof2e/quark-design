import reactify from "@quarkd/reactify";
import "quarkd/lib/search";
import { FC } from 'react';
import { componentBaseInterface } from '../type';

interface SearchProps extends componentBaseInterface {
    value?: string
    shape?: 'round' | 'square'
    dark?: boolean
    showback?: boolean
    hideaction?: boolean
    actiontext?: string
    iconcolor?: string
    placeholder?: string
    maxlength?: number
    autofocus?: boolean
    clearable?: boolean
    disabled?: boolean
    readonly?: boolean
    onFocus?: (e: {detail: {value: string}}) => void
    onBlur?: (e: {detail: {value: string}}) => void
    onSearch?: (e: {detail: {value: string}}) => void
    onChange: (e: {detail: {value: string}}) => void
    onCancel?: () => void
    onBack?: () => void
}
type SearchType =  FC<SearchProps>;

const Search = reactify('quark-search') as SearchType;
export default Search;