import {
  QuarkElement,
  property,
  state,
  customElement,
  createRef,
} from "quarkc";
import {
  getToday,
  cloneDate,
  cloneDates,
  getPrevDay,
  getNextDay,
  compareDay,
  calcDateNum,
  compareMonth,
  getDayByOffset,
  isDate,
  getScrollTop,
  raf,
  useRect,
  getInitMinDate,
  getInitMaxDate,
} from "./utils";
import "../popup";
import "../button";
import "./month";
import Toast from "../toast";
import style from "./style.css";
import Locale from "../locale";
// Types
import type { CalendarDayItem, EventType } from "./types";

export interface Props {
  open?: boolean;
  type?: "single" | "multiple" | "range";
  title?: string;
  square?: boolean;
  readonly?: boolean;
  tiled?: boolean;
  maxrange?: number | string;
  position?: "top" | "left" | "bottom" | "right" | "center" | "";
  maxdate?: number;
  mindate?: number;
  hidemark?: boolean;
  hidetitle?: boolean;
  hidesubtitle?: boolean;
  rangeprompt?: string;
  hiderangeprompt?: boolean;
  allowsameday?: boolean;
  hideconfirm?: boolean;
  forbidmaskclick?: boolean;
  eagerrender?: boolean;
  confirmtext?: string;
  confirmdisabledtext?: string;
  weekfirstday?: number;
}

export interface CustomEvent {
  confirm: (e: EventType) => void;
  select: (e: EventType) => void;
  unselect: (e: EventType) => void;
  close: () => void;
  overrange: () => void;
}

@customElement({
  tag: "quark-calendar",
  style,
})
class QuarkCalendar extends QuarkElement {
  constructor() {
    super();
  }

  @property({
    type: Boolean,
  })
  open = false;

  @property()
  type = "single";

  @property()
  title = "日期选择";

  @property({
    type: Boolean,
  })
  square = false;

  @property({
    type: Boolean,
  })
  readonly = false;

  @property({
    type: Boolean,
  })
  tiled = false;

  @property()
  maxrange: number | string;

  @property()
  position = "bottom";

  @property()
  mindate: number | string;

  @property()
  maxdate: number | string;

  @property({
    type: Boolean,
  })
  hidemark = false;

  @property({
    type: Boolean,
  })
  hidetitle = false;

  @property({
    type: Boolean,
  })
  hidesubtitle = false;

  @property()
  rangeprompt: string;

  @property({
    type: Boolean,
  })
  hiderangeprompt = false;

  @property({
    type: Boolean,
  })
  allowsameday = false;

  @property({
    type: Boolean,
  })
  hideconfirm = false;

  @property({
    type: Boolean,
  })
  forbidmaskclick = false;

  @property({
    type: Boolean,
  })
  eagerrender = false;

  @property()
  confirmtext: string;

  @property()
  confirmdisabledtext?: string;

  @property({
    type: Number,
  })
  weekfirstday = 0;

  @state()
  currentDate: Date | Date[];

  @state()
  dayOffset = 0;

  @state()
  subtitle = "";

  @state()
  months: Date[] = [];

  @state()
  btnDisabled = true;

  @state()
  innerMinDate: Date = getInitMinDate();

  @state()
  innerMaxDate: Date = getInitMaxDate();

  bodyHeight: number;

  bodyRef = createRef();

  monthRefs: any[] = [];

  componentDidMount() {
    this.initInnerData();
    this.init();
  }

  componentDidUpdate(propName: string, oldValue: any, newValue: any) {
    if (propName === "mindate" && oldValue !== newValue) {
      this.innerMinDate = newValue ? new Date(newValue) : getInitMinDate();
      this.setValue(this.currentDate);
      this.setMonths();
    }
    if (propName === "maxdate" && oldValue !== newValue) {
      this.innerMaxDate = newValue ? new Date(newValue) : getInitMaxDate();
      this.setValue(this.currentDate);
      this.setMonths();
    }

    if (propName === "type" && oldValue !== newValue) {
      this.setValue(this.currentDate);
    }
    if (propName === "weekfirstday" && oldValue !== newValue) {
      this.dayOffset = (newValue || 0) % 7;
    }
    if (propName === "open" && oldValue !== newValue && newValue) {
      this.init();
    }
    if (propName === "currentDate" && oldValue !== newValue) {
      this.months.forEach((month, index) => {
        this.monthRefs[index].current.setValue(newValue);
      });
      this.setBtnDisabled();
    }
  }

  init = () => {
    if (!this.tiled && !this.open) {
      return;
    }

    raf(() => {
      const body = this.bodyRef.current;
      if (!body) return;
      const height = useRect(body).height;
      this.bodyHeight = Math.floor(height);
    });
    this.scrollToCurrentDate();
  };

  setValue = (value) => {
    const currentDate = this.getInitialDate(value);
    if (currentDate !== this.currentDate) {
      this.currentDate = currentDate;
      this.scrollToCurrentDate();
    }
  };

  getValue() {
    return this.currentDate;
  }

  setFormatter(formatter: (item: CalendarDayItem) => CalendarDayItem) {
    this.months.forEach((month, index) => {
      this.monthRefs[index].current.setFormatter(formatter);
    });
  }

  initInnerData = () => {
    this.maxdate && (this.innerMaxDate = new Date(this.maxdate));
    this.mindate && (this.innerMinDate = new Date(this.mindate));
    this.dayOffset = (this.weekfirstday || 0) % 7;
    this.setMonths();
    this.setBtnDisabled();
  };

  setMonths = () => {
    const months: Date[] = [];
    const cursor = new Date(this.innerMinDate);

    cursor.setDate(1);

    do {
      months.push(new Date(cursor));
      cursor.setMonth(cursor.getMonth() + 1);
    } while (compareMonth(cursor, this.innerMaxDate) !== 1);
    this.months = months;
  };

  setBtnDisabled = () => {
    let btnDisabled = !this.currentDate;
    if (this.currentDate) {
      if (this.type === "range") {
        btnDisabled =
          !(this.currentDate as Date[])[0] || !(this.currentDate as Date[])[1];
      } else if (this.type === "multiple") {
        btnDisabled = !(this.currentDate as Date[]).length;
      }
    }
    if (btnDisabled !== this.btnDisabled) {
      this.btnDisabled = btnDisabled;
    }
  };

  limitDateRange = (
    date: Date,
    minDate = this.innerMinDate,
    maxDate = this.innerMaxDate
  ) => {
    if (compareDay(date, minDate) === -1) {
      return minDate;
    }
    if (compareDay(date, maxDate) === 1) {
      return maxDate;
    }
    return date;
  };

  getInitialDate = (defaultDate: Date | Date[]) => {
    const { type, allowsameday, innerMinDate, innerMaxDate } = this;

    if (!defaultDate) {
      return null;
    }

    const now = getToday();

    if (type === "range") {
      if (!Array.isArray(defaultDate)) {
        defaultDate = [];
      }
      const start = this.limitDateRange(
        defaultDate[0] || now,
        innerMinDate,
        allowsameday ? innerMaxDate : getPrevDay(innerMaxDate)
      );
      const end = this.limitDateRange(
        defaultDate[1] || now,
        allowsameday ? innerMinDate : getNextDay(innerMinDate)
      );
      return [start, end];
    }

    if (type === "multiple") {
      if (Array.isArray(defaultDate)) {
        return defaultDate.map((date) => this.limitDateRange(date));
      }
      return [this.limitDateRange(now)];
    }

    if (!defaultDate || Array.isArray(defaultDate)) {
      defaultDate = now;
    }
    return this.limitDateRange(defaultDate);
  };

  onScroll = () => {
    const top = getScrollTop(this.bodyRef.current);
    const bottom = top + this.bodyHeight;

    const heights = this.getMonthHeights();
    const heightSum = heights.reduce((a, b) => a + b, 0);

    if (bottom > heightSum && top > 0) {
      return;
    }

    let height = 0;
    let currentMonth = null;
    const visibleRange = [-1, -1];

    for (let i = 0; i < this.months.length; i++) {
      const visible = height <= bottom && height + heights[i] >= top;

      if (visible) {
        visibleRange[1] = i;

        if (currentMonth === null) {
          currentMonth = i;
          visibleRange[0] = i;
        }
      }

      height += heights[i];
    }

    this.months.forEach((month, index) => {
      const visible =
        index >= visibleRange[0] - 1 && index <= visibleRange[1] + 1;
      this.monthRefs[index].current.setVisible(visible);
    });

    if (currentMonth !== null) {
      const subtitle = this.monthRefs[currentMonth].current.getTitle();
      if (subtitle !== this.subtitle) {
        this.subtitle = subtitle;
      }
    }
  };

  scrollToDate = (targetDate: Date) => {
    raf(() => {
      this.months.some((month, index) => {
        if (compareMonth(month, targetDate) === 0) {
          if (this.bodyRef.current) {
            this.monthRefs[index].current.scrollToDate(
              this.bodyRef.current,
              targetDate
            );
          }
          return true;
        }

        return false;
      });

      this.onScroll();
    });
  };

  scrollToCurrentDate = () => {
    if (!this.tiled && !this.open) {
      return;
    }

    if (this.currentDate) {
      const targetDate =
        this.type === "single"
          ? (this.currentDate as Date)
          : (this.currentDate as Date[])[0];
      if (isDate(targetDate)) {
        this.scrollToDate(targetDate);
      }
    } else {
      raf(this.onScroll);
    }
  };

  checkRange = (date: [Date, Date]) => {
    const { maxrange, rangeprompt, hiderangeprompt } = this;

    if (maxrange && calcDateNum(date) > +maxrange) {
      if (!hiderangeprompt) {
        Toast.text(
          rangeprompt || Locale.current.calendar.rangePrompt(maxrange)
        );
      }
      this.$emit("overrange");
      return false;
    }

    return true;
  };

  onConfirm = () =>
    this.$emit("confirm", {
      detail: {
        value: cloneDates(this.currentDate),
      },
    });

  select = (date: Date | Date[], complete?: boolean) => {
    const setCurrentDate = (date: Date | Date[]) => {
      this.currentDate = date;
      this.$emit("select", {
        detail: {
          value: cloneDates(date),
        },
      });
    };

    if (complete && this.type === "range") {
      const valid = this.checkRange(date as [Date, Date]);

      if (!valid) {
        setCurrentDate([
          (date as Date[])[0],
          getDayByOffset((date as Date[])[0], +this.maxrange - 1),
        ]);
        return;
      }
    }

    setCurrentDate(date);

    if (complete && this.hideconfirm) {
      this.onConfirm();
    }
  };

  getDisabledDate = (startDay: Date, date: Date): Date | undefined => {
    const disabledDays = this.months.reduce((arr, date, index) => {
      arr.push(...(this.monthRefs[index].current.getDisabledDays() ?? []));
      return arr;
    }, [] as CalendarDayItem[]);
    return disabledDays.find(
      (day) =>
        compareDay(startDay, day.date) === -1 &&
        compareDay(day.date, date) === -1
    )?.date;
  };

  onClickDay = ({ detail }: { detail: { item: CalendarDayItem } }) => {
    const { item } = detail;
    if (this.readonly || !item.date) {
      return;
    }

    const { date } = item;
    const { type } = this;

    if (type === "range") {
      if (!this.currentDate) {
        this.select([date]);
        return;
      }

      const [startDay, endDay] = this.currentDate as [Date, Date];

      if (startDay && !endDay) {
        const compareToStart = compareDay(date, startDay);

        if (compareToStart === 1) {
          const disabledDay = this.getDisabledDate(startDay, date);

          if (disabledDay) {
            const endDay = getPrevDay(disabledDay);
            if (compareDay(startDay, endDay) === -1) {
              this.select([startDay, endDay]);
            } else {
              this.select([date]);
            }
          } else {
            this.select([startDay, date], true);
          }
        } else if (compareToStart === -1) {
          this.select([date]);
        } else if (this.allowsameday) {
          this.select([date, date], true);
        }
      } else {
        this.select([date]);
      }
    } else if (type === "multiple") {
      if (!this.currentDate) {
        this.select([date]);
        return;
      }
      const dates = this.currentDate as Date[];

      const selectedIndex = dates.findIndex(
        (dateItem: Date) => compareDay(dateItem, date) === 0
      );

      if (selectedIndex !== -1) {
        const [unselectedDate] = dates.splice(selectedIndex, 1);
        this.$emit("unselect", {
          detail: {
            value: cloneDate(unselectedDate),
          },
        });
      } else if (this.maxrange && dates.length >= +this.maxrange) {
        Toast.text(this.rangeprompt);
      } else {
        this.select([...dates, date]);
      }
    } else {
      this.select(date, true);
    }
  };

  setMonthRef = (index) => {
    if (this.monthRefs[index]) {
      return this.monthRefs[index];
    }
    this.monthRefs[index] = createRef();
    return this.monthRefs[index];
  };

  renderMonth = (date: Date, index: number) => {
    const showMonthTitle = index !== 0 || this.hidesubtitle;
    return (
      <quark-calendar-month
        ref={this.setMonthRef(index)}
        date={date.getTime()}
        maxdate={this.innerMaxDate.getTime()}
        mindate={this.innerMinDate.getTime()}
        weekfirstday={this.dayOffset}
        type={this.type}
        hidemark={this.hidemark}
        lazyrender={!this.eagerrender}
        allowsameday={this.allowsameday}
        showmonthtitle={showMonthTitle}
        onclickday={this.onClickDay}
      />
    );
  };

  getMonthHeights = () => {
    return this.months.map((v, i) => useRect(this.monthRefs[i].current).height);
  };

  renderFooterButton = () => {
    if (!this.hideconfirm) {
      const disabled = this.btnDisabled;
      const text = disabled ? this.confirmdisabledtext : this.confirmtext;
      return (
        <slot name="footer">
          <quark-button
            type="primary"
            size="big"
            disabled={disabled}
            nativeType="button"
            onClick={this.onConfirm}
          >
            {text || Locale.current.confirm}
          </quark-button>
        </slot>
      );
    }
  };

  renderFooter = () => (
    <div class="quark-calendar-footer">{this.renderFooterButton()}</div>
  );

  renderHeader = () => {
    const { weekfirstday } = this;
    const weekdays = Locale.current.calendar.weekdays;
    const renderWeekDays = [
      ...weekdays.slice(weekfirstday, 7),
      ...weekdays.slice(0, weekfirstday),
    ];
    return (
      <div class="quark-calendar-header">
        {!this.hidetitle && (
          <div class="quark-calendar-header-title">
            <slot name="title">{this.title}</slot>
          </div>
        )}
        {!this.hidesubtitle && (
          <div class="quark-calendar-header-subtitle">
            <slot name="subtitle">{this.subtitle}</slot>
          </div>
        )}
        <div class="quark-calendar-weekdays">
          {renderWeekDays.map((text) => (
            <span class="quark-calendar-weekday">{text}</span>
          ))}
        </div>
      </div>
    );
  };

  renderCalendar = () => (
    <div class="quark-calendar">
      {this.renderHeader()}
      <div
        ref={this.bodyRef}
        class="quark-calendar-body"
        onScroll={this.onScroll}
      >
        {this.months.map(this.renderMonth)}
      </div>
      {this.renderFooter()}
    </div>
  );

  closePop = () => {
    this.$emit("close");
  };

  render() {
    if (!this.tiled) {
      return (
        <quark-popup
          position={this.position}
          round={!this.square}
          closeable={!this.hidetitle || !this.hidesubtitle}
          safearea
          forbidmaskclick={this.forbidmaskclick}
          open={this.open}
          onClose={this.closePop}
        >
          {this.renderCalendar()}
        </quark-popup>
      );
    }
    return this.renderCalendar();
  }
}

export default QuarkCalendar;
