# DatetimePicker

### Intro

Used to select time, support date and time dimensions.

### Install

```tsx
import "quarkd/lib/datetimepicker";
```

### Basic Usage

#### Choose Date

```html
<template>
  <div>
    <div @click="click">open</div>
    <quark-datetime-picker
      type="date"
      :title="Choose Date"
      :value="currentDate"
      :open="open"
      :mindate="minDate"
      :maxdate="maxDate"
      @close="close"
      @confirm="confirm"
      @change="change"
    />
  </div>
</template>
```

```js
export default {
  data() {
    return {
      open: false,
      currentDate: "2021-11-30",
      minDate: "2020-10-01",
      maxDate: "2025-08-13",
    };
  },
  methods: {
    click() {
      this.open = true;
    },
    close() {
      this.open = false;
    },
    confirm({ detail }) {
      Toast.text(`${detail.value}`);
      this.open = false;
    },
    change({ detail }) {
      Toast.text(`${detail.value}`);
    },
  },
};
```

#### Choose Year-Month

```html
<template>
  <div>
    <div @click="click">open</div>
    <quark-datetime-picker
      ref="yearMonthRef"
      type="year-month"
      :title="Choose Year-Month"
      :open="open"
      :showtoolbar="true"
      :hidebottombutton="true"
      @close="close"
      @confirm="confirm"
    />
  </div>
</template>
```

```js
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    formatter(type, val) {
      if (type === "year") {
        return `${val}Year`;
      }
      if (type === "month") {
        return `${val}Month`;
      }
      return val;
    },
    click() {
      this.open = true;
    },
    close() {
      this.open = false;
    },
    confirm({ detail }) {
      Toast.text(`${detail.value}`);
      this.open = false;
    },
  },
  mounted() {
    this.$refs.yearMonthRef.setFormatter(this.formatter);
  },
};
```

#### Choose Month-Day

```html
<template>
  <div>
    <div @click="click">open</div>
    <quark-datetime-picker
      ref="monthDayRef"
      type="month-day"
      :title="Choose Month-Day"
      :open="open"
      @close="close"
      @confirm="confirm"
    />
  </div>
</template>
```

```js
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    click() {
      this.open = true;
    },
    close() {
      this.open = false;
    },
    confirm({ detail }) {
      Toast.text(`${detail.value}`);
      this.open = false;
    },
  },
  mounted() {
    this.$refs.monthDayRef.setFormatter((type, value) => {
      if (type === "month") {
        return `${val}月`;
      }
      if (type === "day") {
        return `${val}日`;
      }
      return val;
    });
  },
};
```

#### Choose Time

```html
<template>
  <div>
    <div @click="click">open</div>
    <quark-datetime-picker
      ref="timeRef"
      type="time"
      :title="Choose Time"
      :open="open"
      :minhour="10"
      :maxhour="22"
      :minminute="3"
      :maxminute="45"
      @close="close"
      @confirm="confirm"
    />
  </div>
</template>
```

```js
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    formatter(type, val) {
      if (type === 'hour') {
        return `${val}Hour`;
      }
      if (type === 'minute') {
        return `${val}Minute`;
      }
      return val;
    },
    filter(type, options) {
      if (type === 'minute') {
        return options.filter((option) => Number(option) % 5 === 0);
      }
      return options;
    };
    click() {
      this.open = true;
    },
    close() {
      this.open = false;
    },
    confirm({ detail }) {
      Toast.text(`${detail.value}`);
      this.open = false;
    },
  },
  mounted() {
    this.$refs.timeRef.setFilter(this.filter);
    this.$refs.timeRef.setFormatter(this.formatter);
  }
};
```

#### Choose DateTime

```html
<template>
  <div>
    <div @click="click">open</div>
    <quark-datetime-picker
      type="datetime"
      :title="Choose DateTime"
      :open="open"
      @close="close"
      @confirm="confirm"
    />
  </div>
</template>
```

```js
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    click() {
      this.open = true;
    },
    close() {
      this.open = false;
    },
    confirm({ detail }) {
      Toast.text(`${detail.value}`);
      this.open = false;
    },
  },
};
```

#### Choose DateHour

```html
<template>
  <div>
    <div @click="click">open</div>
    <quark-datetime-picker
      type="datehour"
      :title="Choose DateHour"
      :open="open"
      @close="close"
      @confirm="confirm"
    />
  </div>
</template>
```

```js
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    click() {
      this.open = true;
    },
    close() {
      this.open = false;
    },
    confirm({ detail }) {
      Toast.text(`${detail.value}`);
      this.open = false;
    },
  },
};
```

#### ShowToolBar

setting showtoolbar true

```html
<template>
  <div>
    <div @click="click">open</div>
    <quark-datetime-picker
      type="date"
      :title="Choose Date"
      :open="open"
      :showtoolbar="true"
      @close="close"
      @confirm="confirm"
    />
  </div>
</template>
```

```js
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    click() {
      this.open = true;
    },
    close() {
      this.open = false;
    },
    confirm({ detail }) {
      Toast.text(`${detail.value}`);
      this.open = false;
    },
  },
};
```

#### Set Current Date

```html
<template>
  <div>
    <div @click="click">open</div>
    <quark-datetime-picker
      ref="datetimePickerRef"
      type="date"
      :title="Set Current Date"
      :open="open"
      :showtoolbar="true"
      @close="close"
      @confirm="confirm"
    />
  </div>
</template>
```

```js
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    click() {
      this.$refs.datetimePickerRef.setValue("2023-10-07");
      this.open = true;
    },
    close() {
      this.open = false;
    },
    confirm() {
      Toast.text(`${detail.value}`);
      this.open = false;
    },
  },
};
```

## API

### Props

| Attribute         | Description                                                                                                                      | Type      | Default    |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- |
| type              | Can be set to `date` `time` `year-month` `month-day` `datehour`                                                                  | `string`  | `datetime` |
| value             | Default value，when `type` is `time`, the type of `value` should be `HH:mm`, others should be `yyyy-MM-dd` or `yyyy-MM-dd HH:mm` | `string`  | `null`     |
| open              | Whether to show datetime-picker                                                                                                  | `boolean` | `require`  |
| title             | Title                                                                                                                            | `string`  | `''`       |
| showtoolbar       | Whether to show toolbar                                                                                                          | `boolean` | `false`    |
| confirmbuttontext | Text of confirm button                                                                                                           | `string`  | `Confirm`  |
| cancelbuttontext  | Text of cancel button                                                                                                            | `string`  | `Cancel`   |

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

### Events

| name    | Description                               | Type                                            |
| ------- | ----------------------------------------- | ----------------------------------------------- |
| close   | Emitted when click mask or cancel button. | `() => void `                                   |
| confirm | Emitted when click confirm button.        | `e: {detail:{value: Date \| string }}）=> void` |
| change  | Emitted when current option changed.      | `e: {detail:{value: Date \| string }}）=> void` |

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
