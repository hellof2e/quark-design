# DatetimePicker

### Intro

Used to select time, support date and time dimensions.

### Install

```tsx
import { DatetimePicker, DatetimePickerRef } from "@quarkd/quark-react";
```

### Basic Usage

#### Choose Date

```js
export default () => {
  const [open, setOpen] = useState(false);
  const minDate = "2020-10-01";
  const maxDate = "2025-08-13";
  const currentDate = "2021-11-30";

  const handleClose = () => setOpen(false);

  const handleConfirm = ({ detail }) => {
    Toast.text(`${detail.value}`);
    setOpen(false);
  };

  const handleClick = () => setOpen(true);

  const handleChange = ({ detail }) => {
    Toast.text(`${detail.value}`);
  };

  return (
    <div className="demo">
      <div onClick={handleClick}></div>
      <DatetimePicker
        title="Choose Date"
        type="date"
        open={open}
        value={this.currentDate}
        mindate={this.minDate}
        maxdate={this.maxDate}
        onClose={handleClose}
        onConfirm={handleConfirm}
        onChange={handleChange}
      />
    </div>
  );
};
```

#### Choose Year-Month

```js
export default () => {
  const [open, setOpen] = useState(false);
  const datetimePickerRef = useRef < DatetimePickerRef > null;

  const formatter = (type, val) => {
    if (type === "year") {
      return `${val}Year`;
    }
    if (type === "month") {
      return `${val}Month`;
    }
    return val;
  };

  const handleClose = () => setOpen(false);

  const handleConfirm = ({ detail }) => {
    Toast.text(`${detail.value}`);
    setOpen(false);
  };

  const handleClick = () => setOpen(true);

  useEffect(() => {
    const { current: datetimePickerCurrent } = datetimePickerRef;
    datetimePickerCurrent.setFormatter(formatter);
  }, []);

  return (
    <div className="demo">
      <div onClick={handleClick}></div>
      <DatetimePicker
        ref={datetimePickerRef}
        title="Choose Year-Month"
        type="year-month"
        open={open}
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
    </div>
  );
};
```

#### Choose Month-Day

```js
export default () => {
  const [open, setOpen] = useState(false);
  const datetimePickerRef = useRef < DatetimePickerRef > null;

  const handleClose = () => setOpen(false);

  const handleConfirm = ({ detail }) => {
    Toast.text(`${detail.value}`);
    setOpen(false);
  };

  const handleClick = () => setOpen(true);

  useEffect(() => {
    const { current: datetimePickerCurrent } = datetimePickerRef;
    datetimePickerCurrent.setFormatter((type, val) => {
      if (type === "month") {
        return `${val}Month`;
      }
      if (type === "day") {
        return `${val}Day`;
      }
      return val;
    });
  }, []);

  return (
    <div className="demo">
      <div onClick={handleClick}></div>
      <DatetimePicker
        ref={datetimePickerRef}
        title="Choose Month-Day"
        type="month-day"
        open={open}
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
    </div>
  );
};
```

#### Choose Time

```js
export default () => {
  const [open, setOpen] = useState(false);
  const datetimePickerRef = useRef < DatetimePickerRef > null;

  const formatter = (type, val) => {
    if (type === "hour") {
      return `${val}Hour`;
    }
    if (type === "minute") {
      return `${val}Minute`;
    }
    return val;
  };

  const filter = (type, options) => {
    if (type === "minute") {
      return options.filter((option) => Number(option) % 5 === 0);
    }
    return options;
  };

  const handleClose = () => setOpen(false);

  const handleConfirm = ({ detail }) => {
    Toast.text(`${detail.value}`);
    setOpen(false);
  };

  const handleClick = () => setOpen(true);

  useEffect(() => {
    const { current: datetimePickerCurrent } = datetimePickerRef;
    datetimePickerCurrent.setFormatter(formatter);
    datetimePickerCurrent.setFilter(filter);
  }, []);

  return (
    <div className="demo">
      <div onClick={handleClick}></div>
      <DatetimePicker
        ref={datetimePickerRef}
        title="Choose Tim"
        type="time"
        open={open}
        minhour={10}
        maxhour={22}
        minminute={5}
        maxminute={45}
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
    </div>
  );
};
```

#### Choose DateTime

```js
export default () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const handleConfirm = ({ detail }) => {
    Toast.text(`${detail.value}`);
    setOpen(false);
  };

  const handleClick = () => setOpen(true);

  return (
    <div className="demo">
      <div onClick={handleClick}></div>
      <DatetimePicker
        title="Choose DateTime"
        type="datetime"
        open={open}
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
    </div>
  );
};
```

#### Choose DateHour

```js
export default () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const handleConfirm = ({ detail }) => {
    Toast.text(`${detail.value}`);
    setOpen(false);
  };

  const handleClick = () => setOpen(true);

  return (
    <div className="demo">
      <div onClick={handleClick}></div>
      <DatetimePicker
        title="Choose DateHour"
        type="datehour"
        open={open}
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
    </div>
  );
};
```

#### ShowToolBar

setting showtoolbar true

```js
export default () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const handleConfirm = ({ detail }) => {
    Toast.text(`${detail.value}`);
    setOpen(false);
  };

  const handleClick = () => setOpen(true);

  return (
    <div className="demo">
      <div onClick={handleClick}></div>
      <DatetimePicker
        title="选择年月日"
        type="date"
        open={open}
        showtoolbar={true}
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
    </div>
  );
};
```

#### Set Current Date

```js
export default () => {
  const [open, setOpen] = useState(false);
  const datetimePickerRef = useRef < DatetimePickerRef > null;

  const handleClose = () => setOpen(false);

  const handleConfirm = ({ detail }) => {
    Toast.text(`${detail.value}`);
    setOpen(false);
  };

  const handleClick = () => {
    const { current: datetimePickerCurrent } = datetimePickerRef;
    datetimePickerCurrent.setValue("2023-10-07");
    setOpen(true);
  };

  return (
    <div className="demo">
      <div onClick={handleClick}></div>
      <DatetimePicker
        title="Set Current Date"
        type="date"
        open={open}
        showtoolbar={true}
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
    </div>
  );
};
```

## API

### Props

| Attribute         | Description                                                                                                                      | Type                                            | Default    |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- | ---------- |
| type              | Can be set to `date` `time` `year-month` `month-day` `datehour`                                                                  | `string`                                        | `datetime` |
| value             | Default value，when `type` is `time`, the type of `value` should be `HH:mm`, others should be `yyyy-MM-dd` or `yyyy-MM-dd HH:mm` | `string`                                        | `null`     |
| open              | Whether to show datetime-picker                                                                                                  | `boolean`                                       | `require`  |
| title             | Title                                                                                                                            | `string`                                        | `''`       |
| showtoolbar       | Whether to show toolbar                                                                                                          | `boolean`                                       | `false`    |
| confirmbuttontext | Text of confirm button                                                                                                           | `string`                                        | `Confirm`  |
| cancelbuttontext  | Text of cancel button                                                                                                            | `string`                                        | `Cancel`   |
| onClose           | Emitted when click mask or cancel button.                                                                                        | `() => void `                                   |
| onConfirm         | Emitted when click confirm button.                                                                                               | `e: {detail:{value: Date \| string }}）=> void` |
| onChange          | Emitted when current option changed.                                                                                             | `e: {detail:{value: Date \| string }}）=> void` |

### DatePicker Props

Following props are supported when the type is date or datetime
| Attribute | Description | Type | Default |
|------------|--------------------|------------------------------------|------------------|
| mindate | Min date | `yyyy-MM-dd` or `yyyy-MM-dd HH:mm` | Ten years ago on January 1
| maxdate | Max date | `yyyy-MM-dd` or `yyyy-MM-dd HH:mm` | Ten years later on December 31

### TimerPicker Props

Following props are supported when the type is time
| Attribute | Description | Type | Default |
|--------------|----------------------------------|----------|---------------|
| minhour | Min hour for time type | `number` | 0
| maxhour | Max hour for time type | `number` | 23
| minminute | Min minute for time type | `number` | 0
| maxminute | Max minute for time type | `number` | 59

### Methods

| Name         | Description                                                                                                                          | Type                                           |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| setValue     | Set current value, when `type` is `time`, the type of `value` should be `HH:mm`, others should be `yyyy-MM-dd` or `yyyy-MM-dd HH:mm` | `(value: Date \| string) => void`              |
| getValues    | Get current values of all columns                                                                                                    | `() => SelectedColumn[]`                       |
| setFilter    | Option filter                                                                                                                        | `(type: string, values: string[]) => string[]` |
| setFormatter | Option text formatter                                                                                                                | `(type: string, value: string) => string`      |

### Types

```js
type SelectedColumn = {
  value: string
  index: number
};
```
