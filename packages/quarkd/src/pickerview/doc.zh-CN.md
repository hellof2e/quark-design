# PickerView 选择器视图

### 介绍

PickerView 是 Picker 的内容区域

### 安装使用

```tsx
import "quarkd/lib/pickerview";
```

### 基础用法

```html
<template>
  <div>
    <h2>基础用法</h2>
    <quark-pickerview
      ref="pickervieRef"
      @change="change"
    />
  </div>
</template>
```

```js
<script>
export default {
  mounted() {
    setTimeout(() => {
      //模拟异步获取数据
      const pickerView = this.$refs.pickervieRef;
      pickerView.setColumns(
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
    change({detail}) {
      console.log(detail.value)
    }
  }
};
```

### 自定义样式

```html
<template>
  <div>
    <h2>自定义样式</h2>
    <div @click="click">自定义头部</div>
    <quark-pickerview ref="customPickerRef" class="custom-pickerview" />
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
            values: ['浙江省']
          },
          {
            defaultIndex: 2,
            values:  values: ["杭州", "嘉兴", "绍兴", "宁波", "湖州", "千岛湖"],
          }
        ]
      )
    }, 1000)
  },
  methods: {
    change({detail}) {
      console.log(detail.value,   33333)
    }
  }
};
```  

建议都设置成 ``picker-item-hieght`` 的 ``n`` 倍

```css
.custom-pickerview {
  --pickerview-item-height: 44px;
  --pickerview-height: 220px;
  --pickerview-row-top-height: 88px;
  --pickerview-row-bottom-height: 88px;
  --pickerview-current-top: 90px;
}
```

## API

### Events

| 名称    | 说明                 | 类型                                             |
| ------- | -------------------- | ------------------------------------------------ |
| change  | picker 改变回调      | `（e: {detail:{value: SelectColumn[]}}）=> void` |

### 方法

| 名称       | 说明                                           | 类型                                |
| ---------- | ---------------------------------------------- | ----------------------------------- |
| setColumns | 用于设置选择器数据                             | `(columns: PickerColumn[]) => void` |
| getValues  | 获取选择器选中的数据，通常配合自定义头部时使用 | `（）=> SelectColumn[]`             |

### 类型定义

```ts
type PickerColumn = {
  values: string[];
  defaultIndex: number; // 默认选中
};

type SelectColumn = {
  value: string;
  index: number;
};
```

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。  

### 注意  

**自定义变量的时候建议设置为 pickerview-item-height 的 n 倍**
| 变量名                     | 说明|默认值            |
| ------------------------  | ----------------  |----------------|
| --pickerview-item-height  |每行的高度的|`34px`||
| --pickerview-height       | 容器高度| `170px`            |
| --pickerview-row-top-mask-height| 顶部透明遮罩层高度|`68px`           |
| --pickerview-row-bottom-mask-height| 底部透明遮罩层高度|`68px`           |
| --pickerview-border       | 默认选中的边框|`1px solid #eee`   |
| --pickerview-item-font-size |每行的字体大小| `16px`            |
| --pickerview-item-color   | 每行的字体颜色|`#242729` |
| --pickerview-current-top| 当前选中的行的位置, 2倍高度 + 上下边框|`70px`|
