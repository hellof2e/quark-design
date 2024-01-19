import {
  property,
  state,
  createRef,
  customElement,
  QuarkElement,
} from "quarkc";
import {
  getPrevDay,
  getNextDay,
  compareDay,
  useRect,
  getMonthEndDay,
  setScrollTop,
} from "./utils";
import style from "./style.css";
import Locale from "../locale";
import type { CalendarDayType, CalendarDayItem } from "./types";

export interface Props {
  date: number | string;
  maxdate: number | string;
  mindate: number | string;
  type: string;
  weekfirstday: number;
  hidemark: boolean;
  lazyrender: boolean;
  allowsameday: boolean;
  showmonthtitle: boolean;
}

export interface CustomEvent {
  click: (item: CalendarDayItem) => void;
}

@customElement({
  tag: "quark-calendar-month",
  style,
})
class QuarkCalendarMonth extends QuarkElement {
  @property({
    type: Number,
  })
  date;

  @property({
    type: Number,
  })
  maxdate;

  @property({
    type: Number,
  })
  mindate;

  @property()
  type: string;

  @property({
    type: Number,
  })
  weekfirstday;

  @property({
    type: Boolean,
  })
  hidemark;

  @property({
    type: Boolean,
  })
  lazyrender;

  @property({
    type: Boolean,
  })
  allowsameday;

  @property({
    type: Boolean,
  })
  showmonthtitle;

  @state()
  visible: boolean;

  @state()
  title = "";

  @state()
  offset = 0;

  @state()
  totalDay: number;

  @state()
  shouldRender = false;

  @state()
  placeholders: CalendarDayItem[] = [];

  @state()
  days: CalendarDayItem[] = [];

  currentDate: Date | Date[];

  innerMaxDate: Date;

  innerMinDate: Date;

  innerDate: Date;

  formatter: (item: CalendarDayItem) => CalendarDayItem;

  daysRef = createRef();

  monthRef = createRef();

  componentDidUpdate(propName: string, oldValue: any, newValue: any) {
    if (propName === "maxdate" && oldValue !== newValue) {
      this.innerMaxDate = new Date(newValue);
      this.setDays();
    }
    if (propName === "mindate" && oldValue !== newValue) {
      this.innerMinDate = new Date(newValue);
      this.setDays();
    }
    if (propName === "date" && oldValue !== newValue) {
      this.innerDate = new Date(newValue);
      this.setTitle();
      this.setTotalDay();
      this.setOffset();
      this.setPlaceholders();
      this.setDays();
    }
  }

  setValue = (value: Date | Date[]) => {
    this.currentDate = value;
    this.setDays();
  };

  setFormatter = (formatter: (item: CalendarDayItem) => CalendarDayItem) => {
    this.formatter = formatter;
  };

  setVisible = (visible) => {
    if (visible !== this.visible) {
      this.visible = visible;
      this.setShouldRender();
    }
  };

  getTitle = () => this.title;

  getDisabledDays = () => this.days.filter((day) => day.type === "disabled");

  setTitle = () => {
    this.title = Locale.current.calendar.monthTitle(
      this.innerDate.getFullYear(),
      this.innerDate.getMonth() + 1
    );
  };

  setTotalDay = () => {
    const { innerDate } = this;
    this.totalDay = getMonthEndDay(
      innerDate.getFullYear(),
      innerDate.getMonth() + 1
    );
  };

  setShouldRender = () => {
    const shouldRender = this.visible || !this.lazyrender;
    if (shouldRender !== this.shouldRender) {
      this.shouldRender = shouldRender;
    }
  };

  setOffset = () => {
    const { innerDate, weekfirstday } = this;
    const realDay = innerDate.getDay();

    if (weekfirstday) {
      return (realDay + 7 - weekfirstday) % 7;
    }
    this.offset = realDay;
  };

  setPlaceholders = () => {
    this.placeholders = Array(
      Math.ceil((this.totalDay + (this.offset || 0)) / 7)
    ).fill({ type: "placeholder" });
  };

  setDays = () => {
    const { innerDate, totalDay } = this;
    const days: CalendarDayItem[] = [];
    const year = innerDate.getFullYear();
    const month = innerDate.getMonth();

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
    this.days = days;
  };

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
    if (!innerMinDate || !innerMaxDate) return;

    if (
      compareDay(day, innerMinDate) < 0 ||
      compareDay(day, innerMaxDate) > 0
    ) {
      return "disabled";
    }

    if (!currentDate) {
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

  onClickDay = (item: CalendarDayItem) => {
    if (item.type !== "disabled") {
      this.$emit("clickday", {
        detail: {
          item,
        },
      });
    }
  };

  scrollToDate = (body: Element, targetDate: Date) => {
    const { daysRef, placeholders, offset } = this;
    if (daysRef) {
      const daysRect = useRect(daysRef.current);
      const totalRows = placeholders.length;
      const currentRow = Math.ceil((targetDate.getDate() + offset) / 7);
      const rowOffset = ((currentRow - 1) * daysRect.height) / totalRows;

      setScrollTop(
        body,
        daysRect.top + rowOffset + body.scrollTop - useRect(body).top
      );
    }
  };

  renderDay = (item: CalendarDayItem, index: number) => {
    const { offset } = this;
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

  render() {
    const {
      showmonthtitle,
      hidemark,
      shouldRender,
      days,
      placeholders,
      innerDate,
      daysRef,
    } = this;
    return (
      <div class="quark-calendar-month">
        {showmonthtitle && (
          <div class="quark-calendar-month-title">{this.title}</div>
        )}
        <div ref={daysRef} role="grid" class="quark-calendar-days">
          {!hidemark && shouldRender && (
            <div class="quark-calendar-month-mark">
              {innerDate && innerDate.getMonth() + 1}
            </div>
          )}
          {(shouldRender ? days : placeholders).map((item, index) =>
            this.renderDay(item, index)
          )}
        </div>
      </div>
    );
  }
}

export default QuarkCalendarMonth;
