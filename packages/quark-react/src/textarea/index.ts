import reactify from '@quarkd/reactify';
import 'quarkd/lib/textarea';
import { FC } from 'react';
import { Props, CustomEvent } from 'quarkd/lib/textarea';
import { componentBaseInterface, ReactifyProps } from '../type';

type TextAreaProps = componentBaseInterface & ReactifyProps<Props, CustomEvent>;
type TextAreaType =  FC<TextAreaProps>;

const TextArea = reactify('quark-textarea') as TextAreaType;
export default TextArea;