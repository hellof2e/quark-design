# DatetimePicker 时间选择

### 介绍

时间选择器，支持日期、年月、时分等维度。

### 安装使用

```tsx
import "quarkd/lib/datetimepicker";
```

### 基础用法

#### 选择年月日

DatetimePicker 通过 type 属性来定义需要选择的时间类型，type 为 date 表示选择年月日。通过 mindate 和 maxdate 属性可以确定可选的时间范围。

```html
<template>
  <div>
    <div @click="click">open</div>
    <quark-datetime-picker
      type="date"
      :title="选择年月日"
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

#### 选择年月

将 type 设置为 year-month 即可选择年份和月份。通过调用 setFormatter 方法，可以对选项文字进行格式化处理。

```html
<template>
  <div>
    <div @click="click">open</div>
    <quark-datetime-picker
      ref="yearMonthRef"
      type="year-month"
      :title="选择年月"
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
        return `${val}年`;
      }
      if (type === "month") {
        return `${val}月`;
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

#### 选择月日

将 type 设置为 month-day 即可选择月份和日期。

```html
<template>
  <div>
    <div @click="click">open</div>
    <quark-datetime-picker
      ref="monthDayRef"
      type="month-day"
      :title="选择月日"
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

#### 选择时间

将 type 设置为 time 即可选择时间（小时和分钟），通过调用 setFilter 方法，可以对选项数组进行过滤，实现自定义时间间隔。

```html
<template>
  <div>
    <div @click="click">open</div>
    <quark-datetime-picker
      ref="timeRef"
      type="time"
      :title="选择时间"
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
        return `${val}时`;
      }
      if (type === 'minute') {
        return `${val}分`;
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

#### 选择完整时间

将 type 设置为 datetime 即可选择完整时间，包括年月日和小时、分钟。

```html
<template>
  <div>
    <div @click="click">open</div>
    <quark-datetime-picker
      type="datetime"
      :title="选择完整时间"
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

#### 选择年月日小时

将 type 设置为 datehour 即可选择日期和小时，包括年月日和小时。

```html
<template>
  <div>
    <div @click="click">open</div>
    <quark-datetime-picker
      type="datehour"
      :title="选择年月日小时"
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

#### 显示顶部栏

将 showtoolbar 设置为 true

```html
<template>
  <div>
    <div @click="click">open</div>
    <quark-datetime-picker
      type="date"
      :title="选择年月日"
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

#### 设置当前时间

通过调用 setValue 方法，设置组件当前时间， 当 type 为 time 时， value 类型为 `HH:mm`， 其他类型为 `yyyy-MM-dd` 或 `yyyy-MM-dd HH:mm`

```html
<template>
  <div>
    <div @click="click">open</div>
    <quark-datetime-picker
      ref="datetimePickerRef"
      type="date"
      :title="选择年月日"
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

| 参数              | 说明                                                                                                  | 类型      | 默认值     |
| ----------------- | ----------------------------------------------------------------------------------------------------- | --------- | ---------- |
| type              | 时间类型，可选值为 `date` `time` `year-month` `month-day` `datehour`                                  | `string`  | `datetime` |
| value             | 默认值，`type` 为 `time` 时 `value` 格式为 `HH:mm`, 其他类型格式为 `yyyy-MM-dd` 或 `yyyy-MM-dd HH:mm` | `string`  | `null`     |
| open              | datetime-picker 是否显示                                                                              | `boolean` | `require`  |
| title             | Title                                                                                                 | `string`  | `''`       |
| showtoolbar       | 是否显示顶部栏                                                                                        | `boolean` | `false`    |
| confirmbuttontext | 顶部栏确认按钮文字                                                                                    | `string`  | `确认`     |
| cancelbuttontext  | 顶部栏取消按钮文字                                                                                    | `string`  | `取消`     |

### DatePicker Props

当时间选择器类型为 date 或 datetime 时，支持以下 props:
| 参数 | 说明 | 类型 | 默认值 |
|--------------|----------------------------------|--------|------------------|
| mindate | 可选的最小时间，精确到分钟 | `yyyy-MM-dd` 或 `yyyy-MM-dd HH:mm` | 十年前
| maxdate | 可选的最大时间，精确到分钟 | `yyyy-MM-dd` 或 `yyyy-MM-dd HH:mm` | 十年后

### TimerPicker Props

当时间选择器类型为 time 时，支持以下 props:
| 参数 | 说明 | 类型 | 默认值 |
|--------------|----------------------------------|----------|-------------|
| minhour | 可选的最小小时 | `number` | 0
| maxhour | 可选的最大小时 | `number` | 23
| minminute | 可选的最小分钟 | `number` | 0
| maxminute | 可选的最大分钟 | `number` | 59

### Events

| 名称    | 说明                 | 类型                                               |
| ------- | -------------------- | -------------------------------------------------- |
| close   | 点击遮罩或者取消按钮 | `() => void `                                      |
| confirm | 确定按钮点击回调     | `（e: {detail:{value: Date \| string }}）=> void ` |
| change  | picker 改变回调      | `（e: {detail:{value: Date \| string }}）=> void`  |

### 方法

| 名称         | 说明                                                                                                              | 类型                                           |
| ------------ | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| setValue     | 用于设置选择器数据，`type` 为 `time` 时 `value` 格式为 `HH:mm`, 其他类型格式为 `yyyy-MM-dd` 或 `yyyy-MM-dd HH:mm` | `(value: string) => void`                      |
| getValues    | 获取选择器选中的数据，通常配合自定义头部时使用                                                                    | `() => SelectedColumn[]`                       |
| setFilter    | 设置选项过滤函数                                                                                                  | `(type: string, values: string[]) => string[]` |
| setFormatter | 设置选项格式化函数                                                                                                | `(type: string, value: string) => string`      |

### 类型定义

```js
type SelectedColumn = {
  value: string
  index: number
};
```
