# CascadePicker 级联选择器

### 介绍

级联选择器，用于多级联动选择，列如地区选择。级联选择的数据嵌套深度需要保持一致，如果部分选项没有子选项，可以使用空字符串进行占位。

### 安装使用

```tsx
import "quarkd/lib/cascadepicker";
```

### 基础用法

```html
<template>
  <div>
    <h2>基础用法</h2>
    <div @click="click">open</div>
    <quark-cascade-picker
      title="请选择地区"
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
            text: '浙江',
            children: [
              {
                text: '杭州',
                children: [{ text: '西湖区' }, { text: '余杭区' }],
              },
              {
                text: '温州',
                children: [{ text: '鹿城区' }, { text: '瓯海区' }],
              },
            ],
          },
          {
            text: '福建',
            children: [
              {
                text: '福州',
                children: [{ text: '鼓楼区' }, { text: '台江区' }],
              },
              {
                text: '厦门',
                children: [{ text: '思明区' }, { text: '海沧区' }],
              },
            ],
          },
          {
            text: '北京',
            children: [
              {
                text: '',
                children: [{ text: '' }],
              },
            ],
          },
        ];
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
    <quark-cascade-picker
      :open="open"
      @close="close"
      ref="pickerRef"
      bottomhidden
    >
      <div slot="header" class="head-container">
        <span class="cancel" @click="close">取消</span>
        <span class="picker-title">请选择城市</span>
        <span class="ensure" @click="confirm">确定</span>
      </div>
    </quark-cascade-picker>
  </div>
</template>
```

```js
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
            text: '浙江',
            children: [
              {
                text: '杭州',
                children: [{ text: '西湖区' }, { text: '余杭区' }],
              },
              {
                text: '温州',
                children: [{ text: '鹿城区' }, { text: '瓯海区' }],
              },
            ],
          },
          {
            text: '福建',
            children: [
              {
                text: '福州',
                children: [{ text: '鼓楼区' }, { text: '台江区' }],
              },
              {
                text: '厦门',
                children: [{ text: '思明区' }, { text: '海沧区' }],
              },
            ],
          },
          {
            text: '北京',
            children: [
              {
                text: '',
                children: [{ text: '' }],
              },
            ],
          },
        ];
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
      console.log(values)
      this.open = false
    },
    change({detail}) {
      console.log(detail.value)
    }
  }
};
```

## API

### Props

| 参数         | 说明                                       | 类型      | 默认值    |
| ------------ | ------------------------------------------ | --------- | --------- |
| open         | picker 是否显示                            | `boolean` | `require` |
| title        | 标题                                       | `string`  |           |
| bottomhidden | 是否隐藏底部按钮（通常配合自定义头部使用） | `boolean` | `false`   |

### Events

| 名称    | 说明                 | 类型                                                |
| ------- | -------------------- | --------------------------------------------------- |
| close   | 点击遮罩或者取消按钮 | `() => void `                                       |
| confirm | 确定按钮点击回调     | `（e: {detail:{value: SelectedColumn[]}}）=> void ` |
| change  | picker 改变回调      | `（e: {detail:{value: SelectedColumn[]}}）=> void`  |

### Slot

| 名称        | 说明       |
| ----------- | ---------- |
| name=header | 自定义头部 |

### 方法

| 名称       | 说明                                           | 类型                                |
| ---------- | ---------------------------------------------- | ----------------------------------- |
| setColumns | 用于设置选择器数据                             | `(columns: PickerColumn[]) => void` |
| getValues  | 获取选择器选中的数据，通常配合自定义头部时使用 | `（）=> SelectedColumn[] `          |

### 类型定义

```js
type PickerColumn = {
  text: string;
  children: PickerColumn[];
};

type SelectedColumn = {
  value: string
  index: number
};

```

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                                | 说明     | 默认值                           |
| ----------------------------------- | -------- | -------------------------------- |
| `--cascadepicker-title-font-size`   | 标题字号 | `18px`                           |
| `--cascadepicker-title-color`       | 标题颜色 | `#242729`                        |
| `--cascadepicker-title-font-weight` | 标题字重 | `500`                            |
| `--cascadepicker-title-font-family` | 标题字体 | `PingFangSC-Medium, PingFang SC` |
