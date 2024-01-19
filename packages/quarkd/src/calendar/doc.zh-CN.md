# Calendar 日历

### 介绍

日历组件用于选择日期或日期区间。

### 安装使用

```tsx
import "quarkd/lib/calendar";
```

### 基础用法

#### 选择单个日期

下面演示了结合单元格来使用日历组件的用法，日期选择完成后会触发 `confirm` 事件。

```html
<template>
  <div>
    <quark-cell
      title="选择单个日期"
      :desc="formatFullDate(date)"
      @click="click"
    />
    <quark-calendar :open="open" @close="close" @confirm="confirm" />
  </div>
</template>
```

```js
export default {
  data() {
    return {
      open: false,
      date: null,
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
      this.date = detail.value;
      this.open = false;
    },
    formatFullDate(date) {
      if (date) {
        return `${date.getFullYear()}/${formatDate(date)}`;
      }
    },
  },
};
```

#### 选择多个日期

设置 `type` 为 `multiple` 后可以选择多个日期，此时 `confirm` 事件返回的 date 为数组结构，数组包含若干个选中的日期。

```html
<template>
  <div>
    <quark-cell
      title="选择多个日期"
      :desc="formatMultiple(date)"
      @click="click"
    />
    <quark-calendar
      type="multiple"
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
      date: null,
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
      this.date = detail.value;
      this.open = false;
    },
    formatMultiple(dates) {
      if (dates.length) {
        return `${dates.length}个日期`;
      }
    },
  },
};
```

#### 选择日期区间

设置 `type` 为 `range` 后可以选择多个日期，此时 `confirm` 事件返回的 date 为数组结构，数组第一项为开始时间，第二项为结束时间。默认情况下，日期区间的起止时间不能为同一天，可以通过设置 `allowsameday` 属性来允许选择同一天。

```html
<template>
  <div>
    <quark-cell title="选择日期区间" :desc="formatRange(date)" @click="click" />
    <quark-calendar
      type="range"
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
      date: null,
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
      this.date = detail.value;
      this.open = false;
    },
    formatRange(dateRange) {
      if (dateRange.length) {
        const [start, end] = dateRange;
        return `${formatDate(start)} - ${formatDate(end)}`;
      }
    },
  },
};
```

#### 快捷选择

将 `hideconfirm` 设置为 `true` 可以隐藏确认按钮，这种情况下选择完成后会立即触发 `confirm` 事件。

```html
<quark-calendar :hideconfirm="true" />
```

#### 自定义选中值

通过 `setValue` 方法，可定义或重置日历的选中值。

```html
<quark-calendar ref="calendarRef" />
```

```js
export default {
  mounted() {
    this.$refs.calendarRef.setValue(new Date());
  },
};
```

#### 自定义日期范围

通过 `mindate` 和 `maxdate` 定义日历的范围。可以是`yyyy-MM-dd`字符串类型或毫秒时间戳数值。

```html
<quark-calendar mindate="minDate" :maxdate="maxDate" />
```

```js
export default {
  data() {
    return {
      minDate: "2022-1-1",
      maxDate: "2022-1-31",
    };
  },
};
```

或

```js
export default {
  data() {
    return {
      minDate: new Date().getTime(),
      maxDate: new Date().getTime() + 15552000000,
    };
  },
};
```

#### 自定义日期区间最大范围

选择日期区间时，可以通过 `maxrange` 属性来指定最多可选天数，选择的范围超过最多可选天数时，会弹出相应的提示文案。

```html
<quark-calendar type="range" :maxrange="3" />
```

#### 自定义按钮文字

通过 `confirmtext` 设置按钮文字，通过 `confirmdisabledtext` 设置按钮禁用时的文字。

```html
<quark-calendar confirmtext="完成" confirmdisabledtext="请选择" />
```

#### 自定义日期文案

通过传入 `formatter` 函数来对日历上每一格的内容进行格式化。

```html
<quark-calendar type="range" ref="calendarRef" />
```

```js
export default {
  mounted() {
    this.$refs.calendarRef.setFormatter(this.dayFormatter);
  }
  methods: {
    dayFormatter(day) {
      if (!day.date) {
        return day;
      }

      const month = day.date.getMonth() + 1;
      const date = day.date.getDate();

      if (month === 9) {
        if (date === 29) {
          day.topInfo = '中秋节';
        }
        if (date === 10) {
          day.topInfo = '今天';
        }
        if (date > 28) {
          day.bottomInfo = '休';
        }
      }

      if (month === 10) {
        if (date === 1) {
          day.topInfo = '国庆节';
        }
        if (date < 7) {
          day.bottomInfo = '休';
        }
      }

      if (day.type === "start") {
        day.bottomInfo = '入店';
      } else if (day.type === "end") {
        day.bottomInfo = '离店';
      }

      return day;
    }
  },
}
```

#### 自定义周起始日

通过 `weekfirstday` 属性设置一周从哪天开始。

```html
<quark-calendar weekfirstday="1" />
```

#### 自定义弹出位置

通过 `position` 属性自定义弹出层的弹出位置，默认为`bottom`，可选值为 `top`、`left`、`right`。

```html
<quark-calendar position="right" />
```

#### 自定义样式

可通过组件提供的 CSS 变量来自定义组件样式。如定义组件背景色、主题色等。主题色对选中日期和底部按钮生效。

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

| 参数                | 说明                                         | 类型                           | 默认值             |
| ------------------- | -------------------------------------------- | ------------------------------ | ------------------ |
| type                | 类型，可选值为 `single`、`multiple`、`range` | `string`                       | `single`           |
| title               | 日历标题                                     | `string`                       | `日期选择`         |
| readonly            | 日历是否为只读状态，只读状态下不能选择日期   | `boolean`                      | `false`            |
| tiled               | 日历是否平铺                                 | `boolean`                      | `false`            |
| mindate             | 可选择的最小日期                             | `yyyy-MM-dd` 或 毫秒时间戳数值 | 当前日期           |
| maxdate             | 可选择的最大日期                             | `yyyy-MM-dd` 或 毫秒时间戳数值 | 当前日期的六个月后 |
| hidemark            | 是否隐藏月份背景水印                         | `boolean`                      | `false`            |
| hidetitle           | 是否隐藏标题                                 | `boolean`                      | `false`            |
| hidesubtitle        | 是否隐藏副标题                               | `boolean`                      | `false`            |
| hideconfirm         | 是否隐藏确认按钮                             | `boolean`                      | `false`            |
| eagerrender         | 是否渴望加载，若为`true`则关闭懒加载功能     | `boolean`                      | `false`            |
| confirmtext         | 确认按钮的文字                               | `string`                       | `确定`             |
| confirmdisabledtext | 确认按钮处于禁用状态时的文字                 | `string`                       | `确定`             |
| weekfirstday        | 设置周起始日                                 | `0-6`                          | `0`                |

### Calendar tiled false Props

当 Calendar 的 `tiled` 为 `false` 时，支持以下 props:

| 参数            | 说明                                    | 类型      | 默认值   |
| --------------- | --------------------------------------- | --------- | -------- |
| open            | 日历是否弹出                            | `boolean` | `false`  |
| position        | 弹出位置，可选值为 `top` `right` `left` | `string`  | `bottom` |
| square          | 是否显示方角弹窗                        | `boolean` | `false`  |
| forbidmaskclick | 是否禁止遮罩层点击                      | `boolean` | `false`  |

### Calendar Range Props

当 Calendar 的 `type` 为 `range` 时，支持以下 props:

| 参数            | 说明                                         | 类型      | 默认值           |
| --------------- | -------------------------------------------- | --------- | ---------------- |
| maxrange        | 日期区间最多可选天数                         | `number`  | 无限制           |
| rangeprompt     | 范围选择超过最多可选天数时的提示文案         | `string`  | `最多选择 xx 天` |
| hiderangeprompt | 范围选择超过最多可选天数时，是否隐藏提示文案 | `boolean` | `false`          |
| allowsameday    | 是否允许日期范围的起止时间为同一天           | `boolean` | `false`          |

### Calendar Multiple Props

当 Calendar 的 `type` 为 `multiple` 时，支持以下 props:

| 参数        | 说明                                 | 类型     | 默认值           |
| ----------- | ------------------------------------ | -------- | ---------------- |
| maxrange    | 日期区间最多可选天数                 | `number` | 无限制           |
| rangeprompt | 范围选择超过最多可选天数时的提示文案 | `string` | `最多选择 xx 天` |

### Events

| 名称      | 说明                                                                   | 类型                                                |
| --------- | ---------------------------------------------------------------------- | --------------------------------------------------- |
| close     | 点击遮罩或者取消按钮                                                   | `() => void `                                       |
| confirm   | 日期选择完成后触发，若 `hide-confirm` 为 `false`，则点击确认按钮后触发 | `（e: {detail:{value: Date \|  Date[] }}）=> void ` |
| select    | 点击并选中任意日期时触发                                               | `（e: {detail:{value: Date \|  Date[] }}）=> void`  |
| unselect  | 当日历组件的 `type` 为 `multiple` 时，取消选中日期时触发               | `（e: {detail:{value: Date \|  Date[] }}）=> void`  |
| overrange | 范围选择超过最多可选天数时触发                                         | `() => void `                                       |

### Slots

| 名称     | 说明               |
| -------- | ------------------ |
| title    | 自定义标题         |
| subtitle | 自定义日历副标题   |
| footer   | 自定义底部区域内容 |

### 方法

| 名称         | 说明                                                                         | 类型                                                                         |
| ------------ | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| setValue     | 用于设置日历选中的日期, `type`为`single`时，参数类型为`Date`，其他为`Date[]` | `(value?: Date \|  Date[]) => void`                                          |
| getValues    | 获取日历选中的日期                                                           | `() => Date \|  Date[]`                                                      |
| setFormatter | 设置选项格式化函数                                                           | `(formatter: (item: CalendarDayItem) => CalendarDayItem) => CalendarDayItem` |

### 类型定义

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

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                                | 说明                           | 默认值                            |
| ----------------------------------- | ------------------------------ | --------------------------------- |
| `--calendar-background-color`       | 日历背景色                     | `#fff`                            |
| `--calendar-theme-color`            | 日历主题色                     | `#0088ff`                         |
| `--calendar-font-family`            | 日历字体                       | `PingFangSC-Regular, PingFang SC` |
| `--calendar-height`                 | 日历高度                       | -                                 |
| `--calendar-title-color`            | 标题字体颜色                   | `#242729`                         |
| `--calendar-title-row-height`       | 标题行高                       | `44px`                            |
| `--calendar-title-font-size`        | 标题字体大小                   | `16px`                            |
| `--calendar-subtitle-color`         | 副标题字体颜色                 | `#242729`                         |
| `--calendar-subtitle-row-height`    | 副标题行高                     | `44px`                            |
| `--calendar-subtitle-font-size`     | 副标题字体大小                 | `14px`                            |
| `--calendar-month-title-color`      | 月份标题字体颜色               | `#242729`                         |
| `--calendar-month-title-row-height` | 月份标题行高                   | `44px`                            |
| `--calendar-month-title-font-size`  | 月份标题字体大小               | `14px`                            |
| `--calendar-weekday-font-size`      | 星期栏字体大小                 | `12px`                            |
| `--calendar-day-row-height`         | 日期部分行高                   | `64px`                            |
| `--calendar-day-font-size`          | 日期部分字体大小               | `16px`                            |
| `--calendar-day-selected-color`     | 选中日期部分的字体颜色         | `#fff`                            |
| `--calendar-day-border-radius`      | 选中日期部分的圆角值           | `6px`                             |
| `--calendar-day-disabled-color`     | 日期为`disabled`状态时字体颜色 | `#bbbbbb`                         |
| `--calendar-footer-padding`         | footer 左右间距                | `16px`                            |
