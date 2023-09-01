# Calendar

### Intro

Calendar component for selecting dates or date ranges.

### Install

```tsx
import { Calendar, CalendarRef } from "@quarkd/quark-react";
```

### Basic Usage

#### Select Single Date

The `confirm` event will be emitted after the date selection is completed.

```js
export default () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(null);

  const close = () => setOpen(false);

  const confirm = ({ detail }) => {
    setDate(detail.value);
    setOpen(false);
  };

  const click = () => setOpen(true);

  const formatFullDate = (date) => {
    if (date) {
      return `${date.getFullYear()}/${formatDate(date)}`;
    }
  };

  return (
    <div className="demo">
      <quark-cell
        title="Select Single Date"
        desc={formatFullDate(date)}
        onClick={click}
      />
      <quark-calendar open={open} onClose={close} onConfirm={confirm} />
    </div>
  );
};
```

#### Select Multiple Date

You can select multiple date after setting `type` to `multiple`. In multiple mode, the date returned by the `confirm` event is an array, it contains several selected dates.

```js
export default () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(null);

  const close = () => setOpen(false);

  const confirm = ({ detail }) => {
    setDate(detail.value);
    setOpen(false);
  };

  const click = () => setOpen(true);

  const formatMultiple = (dates) => {
    if (dates.length) {
      return `${dates.length}days`;
    }
  };

  return (
    <div className="demo">
      <quark-cell
        title="Select Multiple Date"
        desc={formatMultiple(date)}
        onClick={click}
      />
      <quark-calendar
        type="multiple"
        open={open}
        onClose={close}
        onConfirm={confirm}
      />
    </div>
  );
};
```

#### Select Date Range

You can select a date range after setting `type` to`range`. In range mode, the date returned by the `confirm` event is an array, the first item in the array is the start time and the second item is the end time.

```js
export default () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(null);

  const close = () => setOpen(false);

  const confirm = ({ detail }) => {
    setDate(detail.value);
    setOpen(false);
  };

  const click = () => setOpen(true);

  const formatRange = (dateRange) => {
    if (dateRange.length) {
      const [start, end] = dateRange;
      return `${formatDate(start)} - ${formatDate(end)}`;
    }
  };

  return (
    <div className="demo">
      <quark-cell
        title="Select Date Range"
        desc={formatRange(date)}
        onClick={click}
      />
      <quark-calendar
        type="range"
        open={open}
        onClose={close}
        onConfirm={confirm}
      />
    </div>
  );
};
```

#### Quick Select

Set `show-confirm` to `false` to hide the confirm button. In this case, the `confirm` event will be emitted immediately after the selection is completed.

```html
<quark-calendar hide-confirm="{true}" />
```

#### Custom Selected Value

The selected value of the calendar can be defined or reset through the `setValue` method.

```js
export default () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(null);
  const calendarRef = useRef < CalendarRef > null;

  const close = () => setOpen(false);

  const confirm = ({ detail }) => {
    setDate(detail.value);
    setOpen(false);
  };

  const click = () => setOpen(true);

  const formatFullDate = (date) => {
    if (date) {
      return `${date.getFullYear()}/${formatDate(date)}`;
    }
  };

  useEffect(() => {
    const { current: calendarCurrent } = calendarRef;
    calendarCurrent.setValue(new Date());
  }, []);

  return (
    <div className="demo">
      <quark-cell
        title="Select Single Date"
        desc={formatFullDate(date)}
        onClick={click}
      />
      <quark-calendar
        ref={calendarRef}
        open={open}
        onClose={close}
        onConfirm={confirm}
      />
    </div>
  );
};
```

#### Custom Date Range

Use `mindate` and `maxdate` to custom date range. It can be a `yyyy-MM-dd` string type or a timestamp value.

```html
<quark-calendar mindate="2022-1-1" maxdate="2022-1-31" />
```

Or

```html
<quark-calendar
  mindate="{new Date().getTime()}"
  maxdate="{new Date().getTime() + + 15552000000}"
/>
```

#### Custom Max Range

When selecting a date range, you can use the `maxrange` prop to specify the maximum number of selectable days.

```html
<quark-calendar type="range" maxrange="3" />
```

#### Custom Confirm Text

Use `confirmtext` and `confirmdisabledtext` to custom confirm text.

```html
<quark-calendar confirmtext="OK" confirmdisabledtext="Please Select" />
```

#### Custom Day Text

Use `formatter` to custom day text.

```js
export default () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(null);
  const calendarRef = useRef < CalendarRef > null;

  const close = () => setOpen(false);

  const confirm = ({ detail }) => {
    setDate(detail.value);
    setOpen(false);
  };

  const click = () => setOpen(true);

  const formatRange = (dateRange) => {
    if (dateRange.length) {
      const [start, end] = dateRange;
      return `${formatDate(start)} - ${formatDate(end)}`;
    }
  };

  const dayFormatter = (day) => {
    if (!day.date) {
      return day;
    }

    const month = day.date.getMonth() + 1;
    const date = day.date.getDate();

    if (month === 9) {
      if (date === 29) {
        day.topInfo = "Mid-Autumn";
      }
      if (date === 10) {
        day.topInfo = "Today";
      }
      if (date > 28) {
        day.bottomInfo = "Rest";
      }
    }

    if (month === 10) {
      if (date === 1) {
        day.topInfo = "National Dday";
      }
      if (date < 7) {
        day.bottomInfo = "Rest";
      }
    }

    if (day.type === "start") {
      day.bottomInfo = "In";
    } else if (day.type === "end") {
      day.bottomInfo = "Out";
    }

    return day;
  };

  useEffect(() => {
    const { current: calendarCurrent } = calendarRef;
    calendarCurrent.setFormatter(dayFormatter);
  }, []);

  return (
    <div className="demo">
      <quark-cell
        title="Select Single Date"
        desc={formatRange(date)}
        onClick={click}
      />
      <quark-calendar
        type="range"
        ref={calendarRef}
        open={open}
        onClose={close}
        onConfirm={confirm}
      />
    </div>
  );
};
```

#### Custom First Day Of Week

Use `weekfirstday` to custom the start day of week

```html
<quark-calendar weekfirstday="1" />
```

#### Custom Position

Use `position` to custom popup position, default is `bottom`. can be set to `top`、`left`、`right`.

```html
<quark-calendar position="right" />
```

#### Custom CSS

Component styles can be customized through CSS variables provided by the component.

```html
<quark-calendar class="css" />
```

```css
.css {
  --calendar-background-color: #fce8e8;
  --calendar-theme-color: red;
}
```

## API

### Props

| Attribute           | Description                             | Type                            | Default                    |
| ------------------- | --------------------------------------- | ------------------------------- | -------------------------- |
| type                | Type, can be set to `multiple`、`range` | `string`                        | `single`                   |
| title               | Title of calendar                       | `string`                        | `Calendar`                 |
| readonly            | Whether to be readonly                  | `boolean`                       | `false`                    |
| tiled               | Whether to show the calendar tiled      | `boolean`                       | `false`                    |
| mindate             | Min date                                | `yyyy-MM-dd` or timestamp value | Today                      |
| maxdate             | Max date                                | `yyyy-MM-dd` or timestamp value | Six months after the today |
| hidemark            | Whether to hide background month mark   | `boolean`                       | `false`                    |
| hidetitle           | Whether to hide title                   | `boolean`                       | `false`                    |
| hidesubtitle        | Whether to hide subtitle                | `boolean`                       | `false`                    |
| hideconfirm         | Whether to hide confirm button          | `boolean`                       | `false`                    |
| eagerrender         | Whether to disabled lazy render         | `boolean`                       | `false`                    |
| confirmtext         | Confirm button text                     | `string`                        | `Confirm`                  |
| confirmdisabledtext | Confirm button text when disabled       | `string`                        | `Confirm`                  |
| weekfirstday        | Set the start day of week               | `0-6`                           | `0`                        |

### Calendar tiled false Props

Following props are supported when the `tiled` is `false`

| Attribute       | Description                                        | Type      | Default  |
| --------------- | -------------------------------------------------- | --------- | -------- |
| open            | Whether to show calendar                           | `boolean` | `false`  |
| position        | Popup position, can be set to `top` `right` `left` | `string`  | `bottom` |
| square          | Whether to show square corner                      | `boolean` | `false`  |
| forbidmaskclick | Whether to forbid the mask click                   | `boolean` | `false`  |

### Calendar Range Props

Following props are supported when the `type` is `range`

| Attribute       | Description                                                            | Type      | Default                       |
| --------------- | ---------------------------------------------------------------------- | --------- | ----------------------------- |
| maxrange        | Number of selectable days                                              | `number`  | Unlimited                     |
| rangeprompt     | Error message when exceeded max range                                  | `string`  | `Choose no more than xx days` |
| hiderangeprompt | Whether prompt error message when exceeded max range                   | `boolean` | `false`                       |
| allowsameday    | Whether the start and end time of the range is allowed on the same day | `boolean` | `false`                       |

### Calendar Multiple Props

Following props are supported when the `type` is `multiple`

| Attribute   | Description                           | Type     | Default                       |
| ----------- | ------------------------------------- | -------- | ----------------------------- |
| maxrange    | Max count of selectable days          | `number` | Unlimited                     |
| rangeprompt | Error message when exceeded max count | `string` | `Choose no more than xx days` |

### Events

| Event     | Description                                      | Type                                                |
| --------- | ------------------------------------------------ | --------------------------------------------------- |
| close     | Emitted when closing Popup                       | `() => void `                                       |
| confirm   | Emitted after date selection is complete         | `（e: {detail:{value: Date \|  Date[] }}）=> void ` |
| select    | Emitted when date is selected                    | `（e: {detail:{value: Date \|  Date[] }}）=> void`  |
| unselect  | Emitted when unselect date when type is multiple | `（e: {detail:{value: Date \|  Date[] }}）=> void`  |
| overrange | Emitted when exceeded max range                  | `() => void `                                       |

### Slots

| Name     | Description     |
| -------- | --------------- |
| title    | Custom title    |
| subtitle | Custom subtitle |
| footer   | Custom footer   |

### Methods

| Name         | Description                                                                                                               | Type                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| setValue     | To set the date selected by the calendar, when `type` is `single`, the parameter type is `Date`, otherwise it is `Date[]` | `(value?: Date \|  Date[]) => void`                                          |
| getValues    | Get the date selected in the calendar                                                                                     | `() => Date \|  Date[]`                                                      |
| setFormatter | Set option format function                                                                                                | `(formatter: (item: CalendarDayItem) => CalendarDayItem) => CalendarDayItem` |

### Types

```js
type CalendarDayType =
  | ""
  | "start"
  | "start-end"
  | "middle"
  | "end"
  | "selected"
  | "multiple-middle"
  | "multiple-selected"
  | "disabled"
  | "placeholder";

type CalendarDayItem = {
  date?: Date,
  text?: number | string,
  type?: CalendarDayType,
  topInfo?: string,
  className?: unknown,
  bottomInfo?: string,
};
```

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles.

| Name                                | Description                                     | Default Value                     |
| ----------------------------------- | ----------------------------------------------- | --------------------------------- |
| `--calendar-background-color`       | Calendar background color                       | `#fff`                            |
| `--calendar-theme-color`            | Calendar theme color                            | `#0088ff`                         |
| `--calendar-font-family`            | Calendar font family                            | `PingFangSC-Regular, PingFang SC` |
| `--calendar-height`                 | Calendar height                                 | -                                 |
| `--calendar-title-color`            | Calendar title color                            | `#242729`                         |
| `--calendar-title-row-height`       | Calendar title row height                       | `44px`                            |
| `--calendar-title-font-size`        | Calendar title font size                        | `16px`                            |
| `--calendar-subtitle-color`         | Calendar subtitle color                         | `#242729`                         |
| `--calendar-subtitle-row-height`    | Calendar subtitle row height                    | `44px`                            |
| `--calendar-subtitle-font-size`     | Calendar subtitle font size                     | `14px`                            |
| `--calendar-month-title-color`      | Calendar month title color                      | `#242729`                         |
| `--calendar-month-title-row-height` | Calendar month title row height                 | `44px`                            |
| `--calendar-month-title-font-size`  | Calendar month title font size                  | `14px`                            |
| `--calendar-weekday-font-size`      | Weekday row font size                           | `12px`                            |
| `--calendar-day-row-height`         | Date row height                                 | `64px`                            |
| `--calendar-day-font-size`          | Date font size                                  | `16px`                            |
| `--calendar-day-selected-color`     | The font color of the selected date             | `#fff`                            |
| `--calendar-day-border-radius`      | The border radius of the selected date          | `6px`                             |
| `--calendar-day-disabled-color`     | Font color when the date is in `disabled` state | `#bbbbbb`                         |
| `--calendar-footer-padding`         | Left and right spacing in footer                | `16px`                            |
