import QuarkElement, { property, createRef, customElement } from "@quarkd/core";
import "../picker";
import "@quarkd/icons/lib/close";
import style from "./style.css";
import {
  clamp,
  getMonthEndDay,
  getTrueValue,
  isDate,
  padZero,
  times,
} from "./utils";
import { SelectColumn } from "./index";

type Datetype = "date" | "year-month" | "month-day" | "datehour" | "datetime";
type FilterType = (type: string, values: string[]) => string[];
type FormatterType = (type: string, value: string) => string;

const currentYear = new Date().getFullYear();

@customElement({
  tag: "quark-date-picker",
  style,
})
class QuarkDatePicker extends QuarkElement {
  constructor() {
    super();
  }

  @property({ type: Boolean })
  open = false;

  @property({ type: String })
  value = "";

  @property({ type: String })
  type: Datetype = "datetime";

  @property({ type: String })
  title = "";

  @property({ type: String })
  mindate = "";

  @property({ type: String })
  maxdate = "";

  @property({ type: Boolean })
  showtoolbar = false;

  @property({ type: String })
  confirmbuttontext = "";

  @property({ type: String })
  cancelbuttontext = "";

  pickerRef: any = createRef();

  originColumns: { defaultIndex: number; type: string; values: string[] }[] =
    [];
  columns: { defaultIndex: number; type: string; values: string[] }[] = [];
  currentDate: Date | null = null;
  innerMinDate: Date = new Date(currentYear - 10, 0, 1);
  innerMaxDate: Date = new Date(currentYear + 10, 0, 1);

  formatter: FormatterType = (type, value) => value;
  filter: FilterType = (type, value) => value;

  formatValue(value) {
    if (isDate(value)) {
      const timestamp = clamp(
        value.getTime(),
        this.innerMinDate.getTime(),
        this.innerMaxDate.getTime()
      );
      return new Date(timestamp);
    }
    return void 0;
  }

  getBoundary = (type, value) => {
    const boundary = type === "max" ? this.innerMaxDate : this.innerMinDate;
    const year = boundary.getFullYear();
    let month = 1;
    let date = 1;
    let hour = 0;
    let minute = 0;
    if (type === "max") {
      month = 12;
      date = getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
      hour = 23;
      minute = 59;
    }
    if (value.getFullYear() === year) {
      month = boundary.getMonth() + 1;
      if (value.getMonth() + 1 === month) {
        date = boundary.getDate();
        if (value.getDate() === date) {
          hour = boundary.getHours();
          if (value.getHours() === hour) {
            minute = boundary.getMinutes();
          }
        }
      }
    }
    return {
      [`${type}Year`]: year,
      [`${type}Month`]: month,
      [`${type}Date`]: date,
      [`${type}Hour`]: hour,
      [`${type}Minute`]: minute,
    };
  };

  // 计算日期选择范围
  calcRanges() {
    const { maxYear, maxDate, maxMonth, maxHour, maxMinute } = this.getBoundary(
      "max",
      this.currentDate || this.innerMinDate
    );

    const { minYear, minDate, minMonth, minHour, minMinute } = this.getBoundary(
      "min",
      this.currentDate || this.innerMinDate
    );
    let result = [
      { type: "year", range: [minYear, maxYear] },
      { type: "month", range: [minMonth, maxMonth] },
      { type: "day", range: [minDate, maxDate] },
      { type: "hour", range: [minHour, maxHour] },
      { type: "minute", range: [minMinute, maxMinute] },
    ];

    switch (this.type) {
      case "date":
        result = result.slice(0, 3);
        break;
      case "year-month":
        result = result.slice(0, 2);
        break;
      case "month-day":
        result = result.slice(1, 3);
        break;
      case "datehour":
        result = result.slice(0, 4);
        break;
    }
    return result;
  }

  setColumns() {
    const ranges = this.calcRanges();
    this.originColumns = ranges.map(({ type, range }) => {
      let values = times(range[1] - range[0] + 1, (index) =>
        padZero(range[0] + index)
      );
      if (this.filter) {
        values = this.filter(type, values);
      }
      return {
        defaultIndex: 0,
        type,
        values,
      };
    });
    // 初始化默认值
    if (this.currentDate) {
      let date = [];
      date = [
        this.currentDate.getFullYear(),
        this.currentDate.getMonth() + 1,
        this.currentDate.getDate(),
        this.currentDate.getHours(),
        this.currentDate.getMinutes(),
      ];
      if (this.type === "month-day") {
        date = date.slice(1);
      }
      this.originColumns.forEach((column, index) => {
        const idx = column.values.indexOf(padZero(`${date[index]}`));
        column.defaultIndex = idx > 0 ? idx : 0;
      });
    }
    this.columns = this.originColumns.map(({ type, defaultIndex, values }) => {
      return {
        type,
        defaultIndex,
        // values
        values: values.map((value) => this.formatter(type, value)),
      };
    });
    this.pickerRef.current && this.pickerRef.current.setColumns(this.columns);
  }

  updateInnerValue(detail) {
    let year;
    let month;
    let day;
    const indexes = detail.value.map((item) => item.index);
    const [yearIndex, monthIndex, dayIndex, hourIndex, minuteIndex] = indexes;

    const getValue = (type, index) => {
      const column = this.originColumns.find((item) => item.type === type);
      return getTrueValue(column.values[index]);
    };

    if (this.type === "month-day") {
      const [monthIndex, dayIndex] = indexes;
      year = (this.currentDate || this.innerMinDate).getFullYear();
      month = getValue("month", monthIndex);
      day = getValue("day", dayIndex);
    } else {
      year = getValue("year", yearIndex);
      month = getValue("month", monthIndex);
      day = this.type === "year-month" ? 1 : getValue("day", dayIndex);
    }

    const maxDay = getMonthEndDay(year, month);
    day = day > maxDay ? maxDay : day;

    let hour = 0;
    let minute = 0;
    if (this.type === "datehour") {
      hour = getValue("hour", hourIndex);
    } else if (this.type === "datetime") {
      hour = getValue("hour", hourIndex);
      minute = getValue("minute", minuteIndex);
    }
    const value = new Date(year, month - 1, day, hour, minute);
    this.currentDate = this.formatValue(value);
    this.$emit("change", { detail: { value: this.currentDate } });
  }

  onClose = () => {
    this.$emit("close");
  };

  onConfirm = () => {
    this.$emit("confirm", { detail: { value: this.currentDate } });
  };

  onChange = ({ detail }) => {
    this.updateInnerValue(detail);
    this.setColumns();
  };

  componentDidMount() {
    if (this.mindate) this.innerMinDate = new Date(this.mindate);
    if (this.maxdate) this.innerMaxDate = new Date(this.maxdate);
    if (this.value) {
      this.currentDate = this.formatValue(new Date(this.value));
    } else {
      this.currentDate = this.innerMinDate;
    }
    this.setColumns();
  }

  getValues(): SelectColumn[] {
    return this.pickerRef.current.getValues();
  }

  setValue(value: Date) {
    if (!isDate(value)) {
      throw new Error("请传入正确格式的value");
    }
    this.currentDate = this.formatValue(value);
    this.setColumns();
  }

  setFormatter(formatter: FormatterType) {
    this.formatter = formatter;
    this.setColumns();
  }

  setFilter(filter: FilterType) {
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
        onconfirm={this.onConfirm}
      >
        {this.showtoolbar && (
          <div slot="header" class="quark-date-picker-header">
            <span class="quark-date-picker-close-btn" onclick={this.onClose}>
              {this.cancelbuttontext}
            </span>
            <span class="quark-date-picker-title">{this.title}</span>
            <span
              class="quark-date-picker-confirm-btn"
              onclick={this.onConfirm}
            >
              {this.confirmbuttontext}
            </span>
          </div>
        )}
      </quark-picker>
    );
  }
}

export default QuarkDatePicker;
