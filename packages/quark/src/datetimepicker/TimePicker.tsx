import QuarkElement, { property, createRef, customElement } from "@quarkd/core";
import "../picker";
import "@quarkd/icons/lib/close";
import style from "./style.css";
import { clamp, padZero, times } from "./utils";
import { SelectColumn } from ".";

type TimeType = "time";

@customElement({
  tag: "quark-time-picker",
  style,
})
class QuarkTimePicker extends QuarkElement {
  constructor() {
    super();
  }

  @property({ type: Boolean })
  open: boolean = false;

  @property({ type: String })
  value: string | null;

  @property({ type: String })
  type: TimeType = "time";

  @property({ type: String })
  title: string = "";

  @property({ type: Number })
  minhour: number = 0;

  @property({ type: Number })
  maxhour: number = 23;

  @property({ type: Number })
  minminute: number = 0;

  @property({ type: Number })
  maxminute: number = 59;

  @property({ type: Boolean })
  showtoolbar: boolean = false;

  @property({ type: String })
  confirmbuttontext: string = "";

  @property({ type: String })
  cancelbuttontext: string = "";

  pickerRef: any = createRef();
  originColumns: { defaultIndex: number; type: string; values: string[] }[] =
    [];
  columns: { defaultIndex: number; type: string; values: string[] }[] = [];
  currentTime: string | null = null;
  formatter: Function = (type: string, value: string): string => value;
  filter: Function = (type: string, value: string[]): string[] => value;

  formatValue(value) {
    if (!value) {
      value = `${padZero(this.minhour)}:${padZero(this.minminute)}`;
    }
    let [hour, minute] = value.split(":");
    hour = padZero(clamp(+hour, +this.minhour, +this.maxhour));
    minute = padZero(clamp(+minute, +this.minminute, this.maxminute));
    return `${hour}:${minute}`;
  }

  // 计算范围
  calcRanges() {
    return [
      {
        type: "hour",
        range: [+this.minhour, +this.maxhour],
      },
      {
        type: "minute",
        range: [+this.minminute, +this.maxminute],
      },
    ];
  }

  setColumns() {
    const ranges = this.calcRanges();
    const [hour, minute] = this.currentTime.split(":");
    const getDefaultIndex = (values, value) => {
      const index = values.indexOf(value);
      return index > -1 ? index : 0;
    };
    this.originColumns = ranges.map(({ type, range }) => {
      let values = times(range[1] - range[0] + 1, (index) =>
        padZero(range[0] + index)
      );
      if (this.filter) {
        values = this.filter(type, values);
      }
      return {
        defaultIndex:
          type === "hour"
            ? getDefaultIndex(values, hour)
            : getDefaultIndex(values, minute),
        type,
        values,
      };
    });

    this.columns = this.originColumns.map(({ type, defaultIndex, values }) => {
      return {
        type,
        defaultIndex,
        values: values.map((value) => this.formatter(type, value)),
      };
    });
    this.pickerRef.current.setColumns(this.columns);
  }

  updateInnerValue(detail) {
    const values: number[] = detail.value.map((item) =>
      parseInt(item.value, 10)
    );
    const [hour, minute] = values;
    this.currentTime = this.formatValue(`${hour}:${minute}`);
    this.$emit("change", { detail: { value: this.currentTime } });
    this.setColumns();
  }

  onClose = () => {
    this.$emit("close");
  };

  confirm = () => {
    this.$emit("confirm", { detail: { value: this.currentTime } });
  };

  onChange = ({ detail }) => {
    this.updateInnerValue(detail);
  };

  componentDidMount() {
    this.currentTime = this.formatValue(this.value);
    this.setColumns();
  }

  getValues(): SelectColumn[] {
    return this.pickerRef.current.getValues();
  }

  setValue(value: string) {
    this.currentTime = this.formatValue(value);
    this.setColumns();
  }

  setFormatter(formatter: (type: string, value: string) => string) {
    this.formatter = formatter;
    this.setColumns();
  }

  setFilter(filter: (type: string, values: string[]) => string[]) {
    this.filter = filter;
    this.setColumns();
  }

  render() {
    return (
      <quark-picker
        ref={this.pickerRef}
        title={this.title}
        bottomhidden={this.showtoolbar}
        open={this.open}
        onclose={this.onClose}
        onchange={this.onChange}
        onconfirm={this.confirm}
      >
        {this.showtoolbar && (
          <div slot="header" class="quark-date-picker-header">
            <span class="quark-date-picker-close-btn" onclick={this.onClose}>
              {this.cancelbuttontext}
            </span>
            <span class="quark-date-picker-title">{this.title}</span>
            <span class="quark-date-picker-confirm-btn" onclick={this.confirm}>
              {this.confirmbuttontext}
            </span>
          </div>
        )}
      </quark-picker>
    );
  }
}

export default QuarkTimePicker;
