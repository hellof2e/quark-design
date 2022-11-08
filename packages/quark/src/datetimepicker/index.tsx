import QuarkElement, {
  property,
  createRef,
  customElement,
} from '@quarkd/core';
import './DatePicker';
import './TimePicker';
import '@quarkd/icons/lib/close';
import style from './style.css';
import Locale from '../locale';

type DateType = 'date' | 'time' | 'year-month' | 'month-day' | 'datehour' | 'datetime';

export interface SelectColumn {
  value: string,
  index: number
}
export interface Props {
  open: boolean
  title?: string
  type?: DateType
  value?: string
  mindate?: string
  maxdate?: string
  minhour?: number
  maxhour?: number
  minminute?: number
  maxminute?: number
  showtoolbar?: boolean
  confirmbuttontext?: string
  cancelbuttontext?: string
}
export interface CustomEvent {
  close: () => void
  confirm: (e: {detail:{value: {value: string, index: number}[]}}) => void
  change?: (e: {detail:{value: {value: string, index: number}[]}}) => void
}
@customElement({
  tag: 'quark-datetime-picker',
  style,
})

class QuarkDatetimePicker extends QuarkElement {
  constructor() {
    super();
  }

  @property({ type: Boolean })
  open: boolean = false;

  @property()
  value: string;

  @property({ type: String })
  title: string = '';

  @property({ type: String })
  type: DateType = 'datetime';

  @property({ type: String })
  mindate: string = '';

  @property({ type: String })
  maxdate: string = '';

  @property({ type: Number })
  minhour: number | string = 0;

  @property({ type: Number })
  maxhour: number | string = 23;

  @property({ type: Number })
  minminute: number | string = 0;

  @property({ type: Number })
  maxminute: number | string = 59;

  @property({ type: Boolean })
  showtoolbar: boolean = false;

  @property({ type: String })
  confirmbuttontext: string = Locale.current.confirm;

  @property({ type: String })
  cancelbuttontext: string = Locale.current.cancel;

  datePickerRef: any = createRef();
  timePickerRef: any = createRef();

  componentDidMount() {
    // console.log(this.mindate, this.maxdate)
  }

  onClose = () => {
    this.$emit('close');
  };

  onConfirm = ({ detail }) => {
    this.$emit('confirm', { detail });
  };

  onChange = ({ detail }) => {
    this.$emit('change', { detail });
  }

  getValues(): SelectColumn[] {
    return this.type === 'time' ? this.timePickerRef.current?.getValues() : this.datePickerRef.current?.getValues();
  }

  setValue(value: string) {
    this.type === 'time' ? this.timePickerRef.current?.setValue(value) : this.datePickerRef.current?.setValue(new Date(value));
  }

  setFormatter(formatter: Function) {
    this.type === 'time' ? this.timePickerRef.current?.setFormatter(formatter) : this.datePickerRef.current?.setFormatter(formatter);
  }

  setFilter(filter: (type: string, values: []) => []) {
    this.type === 'time' ? this.timePickerRef.current?.setFilter(filter) : this.datePickerRef.current?.setFilter(filter);
  }

  render() {
    return this.type === 'time' ? (
      <quark-time-picker
        ref={this.timePickerRef}
        value={this.value}
        title={this.title}
        open={this.open}
        type={this.type}
        minhour={this.minhour}
        maxhour={this.maxhour}
        minminute={this.minminute}
        maxminute={this.maxminute}
        showtoolbar={this.showtoolbar}
        confirmbuttontext={this.confirmbuttontext}
        cancelbuttontext={this.cancelbuttontext}
        onclose={this.onClose}
        onchange={this.onChange}
        onconfirm={this.onConfirm}
      >
        <slot></slot>
      </quark-time-picker>
    ) : (
      <quark-date-picker
        ref={this.datePickerRef}
        value={this.value}
        title={this.title}
        open={this.open}
        type={this.type}
        maxdate={this.maxdate}
        mindate={this.mindate}
        showtoolbar={this.showtoolbar}
        confirmbuttontext={this.confirmbuttontext}
        cancelbuttontext={this.cancelbuttontext}
        onclose={this.onClose}
        onchange={this.onChange}
        onconfirm={this.onConfirm}
      >
        <slot></slot>
      </quark-date-picker>
    );
  }
}

export default QuarkDatetimePicker;
