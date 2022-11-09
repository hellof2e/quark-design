# Picker 选择器

### 介绍

提供多个选项集合供用户选择，支持单列选择和多列选择，级联选择请使用 CascadePicker

### 安装使用

```tsx
import "quarkd/lib/picker";
```

### 基础用法

```html
<template>
  <div>
    <h2>基础用法</h2>
    <div @click="click">open</div>
    <quark-picker
      title="请选择时间"
      ref="pickerRef"
      :open="open"
      @close="close"
      @confirm="confirm"
      @change="change"
    />
  </div>
</template>
```

```js
<script>
export default {
  data() {
    return {
      open: false
    };
  },
  mounted() {
    setTimeout(() => {
      //模拟异步获取数据
      const picker = this.$refs.pickerRef;
      picker.setColumns(
        [
          {
            defaultIndex: 0,
            values: ['星期一', '星期二', '星期三', '星期四', '星期五']
          },
          {
            defaultIndex: 1,
            values: ['上午', '下午']
          }
        ]
      )
    }, 1000)
  },
  methods: {
    click() {
      this.open = true
    },
    close() {
      this.open = false
    },
    confirm({detail}) {
      console.log(detail.value)
      this.open = false
    },
    change({detail}) {
      console.log(detail.value)
    }
  }
};
```

### 自定义头部

```html
<template>
  <div>
    <h2>自定义头部</h2>
    <div @click="click">自定义头部</div>
    <quark-picker :open="open" @close="close" ref="pickerRef" bottomhidden>
      <div slot="header" class="head-container">
        <span class="cancel" @click="close">取消</span>
        <span class="picker-title">请选择城市</span>
        <span class="ensure" @click="confirm">确定</span>
      </div>
    </quark-picker>
  </div>
</template>
```

```js
<script>
export default {
  data() {
    return {
      open: false
    };
  },
  mounted() {
    setTimeout(() => {
      //模拟异步获取数据
      const picker = this.$refs.pickerRef;
      picker.setColumns(
        [
          {
            defaultIndex: 0,
            values: ['星期一', '星期二', '星期三', '星期四', '星期五']
          },
          {
            defaultIndex: 1,
            values: ['上午', '下午']
          }
        ]
      )
    }, 1000)
  },
  methods: {
    click() {
      this.open = true
    },
    close() {
      this.open = false
    },
    confirm() {
      const picker = this.$refs.pickerRef;
      const values = picker.getValues()
      console.log(values,   2222)
      this.open = false
    },
    change({detail}) {
      console.log(detail.value,   33333)
    }
  }
};
```

## API

### Props

| 参数         | 说明                                       | 类型      | 默认值    |
| ------------ | ------------------------------------------ | --------- | --------- |
| open         | picker 是否显示                            | `boolean` | `require` |
| title        | 标题                                       | `string ` |           |
| confirmtext  | 确定按钮的文字                             | `string`  | `确认`    |
| bottomhidden | 是否隐藏底部按钮（通常配合自定义头部使用） | `boolean` | `false`   |

### Events

| 名称    | 说明                 | 类型                                             |
| ------- | -------------------- | ------------------------------------------------ |
| close   | 点击遮罩或者取消按钮 | `() => void`                                     |
| confirm | 确定按钮点击回调     | `（e: {detail:{value: SelectColumn[]}}）=> void` |
| change  | picker 改变回调      | `（e: {detail:{value: SelectColumn[]}}）=> void` |

### Slot

| 名称        | 说明       |
| ----------- | ---------- |
| name=header | 自定义头部 |

### 方法

| 名称       | 说明                                           | 类型                                |
| ---------- | ---------------------------------------------- | ----------------------------------- |
| setColumns | 用于设置选择器数据                             | `(columns: PickerColumn[]) => void` |
| getValues  | 获取选择器选中的数据，通常配合自定义头部时使用 | `（）=> SelectColumn[]`             |

### 类型定义

```js
type PickerColumn = {
  values: string[];
  defaultIndex: number;
};

type SelectColumn = {
  value: string
  index: number
};
```

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                         | 说明     | 默认值                            |
| ---------------------------- | -------- | --------------------------------- |
| `--picker-title-font-size`   | 标题字号 | `18px`                            |
| `--picker-title-color`       | 标题颜色 | `#242729`                         |
| `--picker-title-font-weight` | 标题字重 | `500`                             |
| `--picker-title-font-family` | 标题字体 | `PingFangSC-Medium, PingFang SC ` |
