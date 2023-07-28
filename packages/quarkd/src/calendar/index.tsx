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
  getMonthEndDay,
  setScrollTop,
} from "./utils";
import "../popup";
import "../button";
import Toast from "../toast";
import style from "./style.css";
import Locale from "../locale";
// Types
import type { CalendarDayType } from "./types";

export interface CalendarDayItem {
  date?: Date;
  text?: number | string;
  type?: CalendarDayType;
  topInfo?: string;
  bottomInfo?: string;
}

export interface Props {
  open?: boolean;
  type?: "single" | "multiple" | "danger" | "range";
  title?: string;
  round?: boolean;
  readonly?: boolean;
  poppable?: boolean;
  maxrange?: number | string;
  position?: "top" | "left" | "bottom" | "right" | "center" | "";
  maxdate?: number;
  mindate?: number;
  showmark?: boolean;
  showtitle?: boolean;
  showsubtitle?: boolean;
  // rowheight?: number | string;
  rangeprompt?: string;
  showrangeprompt?: boolean;
  allowsameday?: boolean;
  showconfirm?: boolean;
  // defaultdate?: number;
  forbidmaskclick?: boolean;
  lazyrender?: boolean;
  confirmtext?: string;
  confirmdisabledtext?: string;
  weekfirstday?: number;
}

export interface CustomEvent {
  select: () => void;
  confirm: () => void;
  unselect: () => void;
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
  round = true;

  @property({
    type: Boolean,
  })
  readonly = false;

  @property({
    type: Boolean,
  })
  poppable = true;

  @property()
  maxrange: number | string;

  @property()
  position = "bottom";

  @property({
    type: Number,
  })
  mindate;

  @property({
    type: Number,
  })
  maxdate;

  @property({
    type: Boolean,
  })
  showmark = true;

  @property({
    type: Boolean,
  })
  showtitle = true;

  @property({
    type: Boolean,
  })
  showsubtitle = true;
  // @property()
  // rowheight: number | string = 64;

  // @property()
  // defaultdate: number | string;

  @property()
  rangeprompt: string;

  @property({
    type: Boolean,
  })
  showrangeprompt = true;

  @property({
    type: Boolean,
  })
  allowsameday = false;

  @property({
    type: Boolean,
  })
  showconfirm = true;

  @property({
    type: Boolean,
  })
  forbidmaskclick = false;

  @property({
    type: Boolean,
  })
  lazyrender = true;

  @property()
  confirmtext: string;

  @property()
  confirmdisabledtext?: string;

  @property({
    type: Number,
  })
  weekfirstday = 0;

  @state()
  innerMaxDate: Date = new Date(new Date().getTime() + 15552000000);

  @state()
  innerMinDate: Date = new Date();

  @state()
  currentDate: Date | Date[];

  dayOffset = 0;

  @state()
  subtitle = "";

  @state()
  months: Date[] = [];

  buttonDisabled = false;

  bodyHeight: number;

  bodyRef = createRef();

  monthRefs: any[] = [];

  daysRefs: any[] = [];

  disabledDays: CalendarDayItem[] = [];

  @state()
  monthVisibles: boolean[] = [];

  monthTitles: string[] = [];

  monthPlaceholders: CalendarDayItem[][] = [];

  monthDisabledDays: CalendarDayItem[][] = [];

  monthOffsets: number[] = [];

  formatter: (item: CalendarDayItem) => CalendarDayItem;

  componentDidMount() {
    this.initInnerDate();
    this.init();
  }

  shouldComponentUpdate(
    propName: string,
    oldValue: string | boolean,
    newValue: string | boolean
  ): boolean {
    console.log(propName, 99999);
    if (propName === "open" && oldValue !== newValue) {
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    this.init();
  }

  initInnerDate() {
    this.maxdate && (this.innerMaxDate = new Date(this.maxdate));
    this.mindate && (this.innerMinDate = new Date(this.mindate));
    this.weekfirstday && (this.dayOffset = this.weekfirstday % 7);
    this.months = this.getMonths();
    this.buttonDisabled = this.getBtnDisabled();
    this.disabledDays = this.getDisabledDays();
    this.setMonthTitles();
    this.setMonthOffsets();
  }

  setValue(value: Date | Date[]) {
    this.currentDate = this.getInitialDate(value);
    this.init();
  }

  getValue() {
    return this.currentDate;
  }

  setFormatter(formatter: (item: CalendarDayItem) => CalendarDayItem) {
    this.formatter = formatter;
  }

  getMonths = () => {
    const months: Date[] = [];
    const cursor = new Date(this.innerMinDate);

    cursor.setDate(1);

    do {
      months.push(new Date(cursor));
      cursor.setMonth(cursor.getMonth() + 1);
    } while (compareMonth(cursor, this.innerMaxDate) !== 1);
    return months;
  };

  getBtnDisabled = () => {
    if (this.currentDate) {
      if (this.type === "range") {
        return (
          !(this.currentDate as Date[])[0] || !(this.currentDate as Date[])[1]
        );
      }
      if (this.type === "multiple") {
        return !(this.currentDate as Date[]).length;
      }
    }
    return !this.currentDate;
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

    // iOS scroll bounce may exceed the range
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
      this.setMonthVisible(index, visible);
    });

    /* istanbul ignore else */
    if (currentMonth !== null) {
      this.subtitle = this.monthTitles[currentMonth];
    }
  };

  scrollToDate = (targetDate: Date) => {
    raf(() => {
      this.months.some((month, index) => {
        if (compareMonth(month, targetDate) === 0) {
          const body = this.bodyRef.current;
          if (body) {
            const daysRef = this.daysRefs[index].current;
            if (daysRef) {
              const daysRect = useRect(daysRef);
              const totalRows = this.monthPlaceholders[index].length;
              const currentRow = Math.ceil(
                (targetDate.getDate() + (this.monthOffsets[index] || 0)) / 7
              );
              const rowOffset =
                ((currentRow - 1) * daysRect.height) / totalRows;

              setScrollTop(
                body,
                daysRect.top + rowOffset + body.scrollTop - useRect(body).top
              );
            }
          }
          return true;
        }

        return false;
      });

      this.onScroll();
    });
  };

  scrollToCurrentDate = () => {
    if (this.poppable && !this.open) {
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

  init = () => {
    if (this.poppable && !this.open) {
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

  reset = (date) => {
    this.currentDate = date;
    this.scrollToCurrentDate();
  };

  checkRange = (date: [Date, Date]) => {
    const { maxrange, rangeprompt, showrangeprompt } = this;

    if (maxrange && calcDateNum(date) > +maxrange) {
      if (showrangeprompt) {
        Toast.text(rangeprompt);
      }
      // this.$emit("overrange");
      return false;
    }

    return true;
  };

  onConfirm = () =>
    this.$emit("confirm", {
      detail: {
        currentDate: cloneDates(this.currentDate),
      },
    });

  select = (date: Date | Date[], complete?: boolean) => {
    const setCurrentDate = (date: Date | Date[]) => {
      this.currentDate = date;
      this.$emit("select", {
        detail: {
          currentDate: cloneDates(date),
        },
      });
    };

    if (complete && this.type === "range") {
      const valid = this.checkRange(date as [Date, Date]);

      if (!valid) {
        // auto selected to max range
        setCurrentDate([
          (date as Date[])[0],
          getDayByOffset((date as Date[])[0], +this.innerMaxDate - 1),
        ]);
        return;
      }
    }

    setCurrentDate(date);

    if (complete && !this.showconfirm) {
      this.onConfirm();
    }
  };

  // get first disabled calendarDay between date range
  getDisabledDate = (
    disabledDays: CalendarDayItem[],
    startDay: Date,
    date: Date
  ): Date | undefined =>
    disabledDays.find(
      (day) =>
        compareDay(startDay, day.date) === -1 &&
        compareDay(day.date, date) === -1
    )?.date;

  // disabled calendarDay
  getDisabledDays = () =>
    this.monthDisabledDays.reduce((arr, current) => {
      arr.push(...(current ?? []));
      return arr;
    }, [] as CalendarDayItem[]);

  onClickDay = (item: CalendarDayItem) => {
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
          const disabledDay = this.getDisabledDate(
            this.disabledDays,
            startDay,
            date
          );

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
            unselectedDate: cloneDate(unselectedDate),
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

  // updateShow = (value: boolean) => (this.isShow = value);

  getMultipleDayType = (day: Date) => {
    const isSelected = (date: Date) =>
      (this.currentDate as Date[]).some((item) => compareDay(item, date) === 0);

    if (isSelected(day)) {
      const prevDay = getPrevDay(day);
      const nextDay = getNextDay(day);
      const prevSelected = isSelected(prevDay);
      const nextSelected = isSelected(nextDay);

      if (prevSelected && nextSelected) {
        return "multiple-middle";
      }
      if (prevSelected) {
        return "end";
      }
      if (nextSelected) {
        return "start";
      }
      return "multiple-selected";
    }

    return "";
  };

  getRangeDayType = (day: Date) => {
    const [startDay, endDay] = this.currentDate as Date[];

    if (!startDay) {
      return "";
    }

    const compareToStart = compareDay(day, startDay);

    if (!endDay) {
      return compareToStart === 0 ? "start" : "";
    }

    const compareToEnd = compareDay(day, endDay);

    if (this.allowsameday && compareToStart === 0 && compareToEnd === 0) {
      return "start-end";
    }
    if (compareToStart === 0) {
      return "start";
    }
    if (compareToEnd === 0) {
      return "end";
    }
    if (compareToStart > 0 && compareToEnd < 0) {
      return "middle";
    }

    return "";
  };

  getDayType = (day: Date): CalendarDayType => {
    const { type, innerMinDate, innerMaxDate, currentDate } = this;

    if (
      compareDay(day, innerMinDate) < 0 ||
      compareDay(day, innerMaxDate) > 0
    ) {
      return "disabled";
    }

    if (currentDate === null) {
      return "";
    }

    if (Array.isArray(currentDate)) {
      if (type === "multiple") {
        return this.getMultipleDayType(day);
      }
      if (type === "range") {
        return this.getRangeDayType(day);
      }
    } else if (type === "single") {
      return compareDay(day, currentDate as Date) === 0 ? "selected" : "";
    }

    return "";
  };

  getBottomInfo = (dayType: CalendarDayType) => {
    const localeDict = Locale.current.calendar;
    if (this.type === "range") {
      if (dayType === "start" || dayType === "end") {
        return localeDict[dayType];
      }
      if (dayType === "start-end") {
        return `${localeDict.start}/${localeDict.end}`;
      }
    }
  };

  renderMonth = (date: Date, index: number) => {
    this.daysRefs[index] = createRef();
    this.monthRefs[index] = createRef();
    const totalDay = getMonthEndDay(date.getFullYear(), date.getMonth() + 1);
    const shouldRender = this.monthVisibles[index] || !this.lazyrender;
    console.log(totalDay, this.monthOffsets[index], 90);
    const placeholders: CalendarDayItem[] = Array(
      Math.ceil((totalDay + (this.monthOffsets[index] || 0)) / 7)
    ).fill({ type: "placeholder" });

    const days: CalendarDayItem[] = [];
    const year = date.getFullYear();
    const month = date.getMonth();

    for (let day = 1; day <= totalDay; day++) {
      const date = new Date(year, month, day);
      const type = this.getDayType(date);

      let config: CalendarDayItem = {
        date,
        type,
        text: day,
        bottomInfo: this.getBottomInfo(type),
      };

      if (this.formatter) {
        config = this.formatter(config);
      }

      days.push(config);
    }

    this.monthDisabledDays[index] = days.filter(
      (day) => day.type === "disabled"
    );

    const showMonthTitle = index !== 0 || !this.showsubtitle;
    return (
      <div class="quark-calendar-month" ref={this.monthRefs[index]}>
        {showMonthTitle && (
          <div class="quark-calendar-month-title">
            {this.monthTitles[index]}
          </div>
        )}
        <div ref={this.daysRefs[index]} role="grid" class="quark-calendar-days">
          {this.showmark && shouldRender && (
            <div class="quark-calendar-month-mark">{date.getMonth() + 1}</div>
          )}
          {(shouldRender ? days : placeholders).map((item, index) =>
            this.renderDay(item, index)
          )}
        </div>
      </div>
    );
  };

  getMonthHeights = () => {
    return this.months.map((v, i) => useRect(this.monthRefs[i].current).height);
  };

  setMonthTitles = () => {
    this.monthTitles = this.months.map((date) =>
      Locale.current.calendar.monthTitle(
        date.getFullYear(),
        date.getMonth() + 1
      )
    );
  };

  setMonthOffsets = () => {
    console.log(this.months, 900000);
    this.monthOffsets = this.months.map((date) => {
      const realDay = date.getDay();

      if (this.dayOffset) {
        return (realDay + 7 - this.dayOffset) % 7;
      }
      return realDay;
    });
  };

  setMonthVisible = (i: number, val: boolean) => {
    this.monthVisibles[i] = val;
  };

  renderFooterButton = () => {
    if (this.showconfirm) {
      const disabled = this.buttonDisabled;
      const text = disabled ? this.confirmdisabledtext : this.confirmtext;
      return (
        <slot name="footer">
          <quark-button
            round
            type="primary"
            class="quark-calendar-confirm"
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
    <div class="quark-calendar-footer quark-safe-area-bottom">
      {this.renderFooterButton()}
    </div>
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
        {this.showtitle && (
          <div class="quark-calendar-header-title">
            <slot name="title">{this.title}</slot>
          </div>
        )}
        {this.showsubtitle && (
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

  renderDay = (item: CalendarDayItem, index: number) => {
    const offset = this.monthOffsets[index];
    const style: { [propName: string]: any } = {};
    if (item.type === "placeholder") {
      style.width = "100%";
    } else {
      if (index === 0) {
        style.marginLeft = `${(100 * offset) / 7}%`;
      }
      if (offset + (item.date?.getDate() || 1) > 28) {
        style.marginBottom = 0;
      }
    }
    const { type, text, topInfo, bottomInfo } = item;

    if (type === "placeholder") {
      return <div class="quark-calendar-day" style={style} />;
    }

    const Nodes = [
      <div class="quark-calendar-top-info">{topInfo}</div>,
      text,
      <div class="quark-calendar-bottom-info">{bottomInfo}</div>,
    ];

    let className = "quark-calendar-day";
    if (type) {
      className += ` quark-calendar-day-${type}`;
    }

    return (
      <div
        role="gridcell"
        style={style}
        class={className}
        tabindex={type === "disabled" ? undefined : -1}
        onClick={() => this.onClickDay(item)}
      >
        {type === "selected" ? (
          <div class="quark-calendar-selected-day">{Nodes}</div>
        ) : (
          Nodes
        )}
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
    if (this.poppable) {
      return (
        <quark-popup
          position={this.position}
          round={this.round}
          closeable={this.showtitle || this.showsubtitle}
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
