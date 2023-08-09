# Calendar 日历

### 介绍

日历选择器，支持弹窗和平铺两种形式。

### 安装使用

```tsx
import "quarkd/lib/calendar";
```

### 基础用法

#### 选择日期

Calendar 通过 type 属性来定义需要选择的日期类型，支持单个日期、多个日期和日期区间。通过 mindate 和 maxdate 属性可以确定可选的日期范围。

```html
<template>
  <div>
    <div @click="click">open</div>
    <quark-calendar
      type="single"
      :open="open"
      :mindate="minDate"
      :maxdate="maxDate"
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
      minDate: new Date().getTime() - 15552000000,
      maxDate: new Date().getTime(),
      currentDate: null,
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
      this.currentDate = detail.value;
      this.open = false;
    },
  },
};
```

## API

### Props

| 参数                | 说明                                         | 类型                       | 默认值             |
| ------------------- | -------------------------------------------- | -------------------------- | ------------------ |
| type                | 类型，可选值为 `single`、`multiple`、`range` | `string`                   | `single`           |
| title               | 日历标题                                     | `string`                   | `日期选择`         |
| readonly            | 日历是否为只读状态，只读状态下不能选择日期   | `boolean`                  | `false`            |
| tiled               | 日历是否平铺                                 | `boolean`                  | `false`            |
| mindate             | 可选择的最小日期                             | `yyyy-MM-dd` 或 时间戳数值 | 当前日期           |
| maxdate             | 可选择的最大日期                             | `yyyy-MM-dd` 或 时间戳数值 | 当前日期的六个月后 |
| hidemark            | 是否隐藏月份背景水印                         | `boolean`                  | `false`            |
| hidetitle           | 是否隐藏标题                                 | `boolean`                  | `false`            |
| hidesubtitle        | 是否隐藏副标题                               | `boolean`                  | `false`            |
| hideconfirm         | 是否隐藏确认按钮                             | `boolean`                  | `false`            |
| eagerrender         | 是否渴望加载，若为`true`则关闭懒加载功能     | `boolean`                  | `false`            |
| confirmtext         | 确认按钮的文字                               | `string`                   | `确定`             |
| confirmdisabledtext | 确认按钮处于禁用状态时的文字                 | `string`                   | `确定`             |
| weekfirstday        | 设置周起始日                                 | `0-6`                      | `0`                |

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

| 名称      | 说明                                                     | 类型                                                |
| --------- | -------------------------------------------------------- | --------------------------------------------------- |
| close     | 点击遮罩或者取消按钮                                     | `() => void `                                       |
| confirm   | 确定按钮点击回调                                         | `（e: {detail:{value: Date \|  Date[] }}）=> void ` |
| select    | 点击并选中任意日期时触发                                 | `（e: {detail:{value: Date \|  Date[] }}）=> void`  |
| unselect  | 当日历组件的 `type` 为 `multiple` 时，取消选中日期时触发 | `（e: {detail:{value: Date \|  Date[] }}）=> void`  |
| overrange | 范围选择超过最多可选天数时触发                           | `() => void `                                       |

### 方法

| 名称         | 说明                                                                                            | 类型                                                                         |
| ------------ | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| setValue     | 用于设置日历选中的日期, `type`为`single`时，参数类型为`Date`，其他为`Date[]`,未传参时可重置日历 | `(value?: Date \|  Date[]) => void`                                          |
| getValues    | 获取日历选中的日期                                                                              | `() => Date \|  Date[]`                                                      |
| setFormatter | 设置选项格式化函数                                                                              | `(formatter: (item: CalendarDayItem) => CalendarDayItem) => CalendarDayItem` |

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
| ----------------------------------- | ------------------------------ | --------------------------------- | --------- | --- |
| `--calendar-background-color`       | 日历背景色                     | `#fff`                            |
| `--calendar-font-family`            | 日历字体                       | `PingFangSC-Regular, PingFang SC` |
| `--calendar-height`                 | 日历高度                       | `80vh`                            |
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
| <!--                                | `--calendar-theme-color`       | 日历主题色                        | `#0088ff` | --> |
