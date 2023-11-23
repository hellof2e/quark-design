# DropdownMenu

### 介绍

向下弹出的菜单列表。

### 安装使用

```tsx
import "quarkd/lib/dropdownmenu";
```

### 基本用法

```html
<quark-dropdown-menu>
  <quark-dropdown-item ref="item1" :value="value1"></quark-dropdown-item>
  <quark-dropdown-item ref="item2" :value="value2"></quark-dropdown-item>
</quark-dropdown-menu>
```

```js
export default {
  data() {
    return {
      value1: "0",
      value2: "a",
    };
  },
  mounted() {
    this.$refs.item1.setOptions([
      { text: "全部商品", value: "0" },
      { text: "新款商品", value: "1" },
      { text: "活动商品", value: "2" },
    ]);
    this.$refs.item2.setOptions([
      { text: "默认排序", value: "a" },
      { text: "好评排序", value: "b" },
      { text: "销量排序", value: "c" },
    ]);
  },
};
```

### 自定义菜单内容

```html
<quark-dropdown-menu>
  <quark-dropdown-item ref="item1" :value="value1"></quark-dropdown-item>
  <quark-dropdown-item ref="item2" title="筛选">
    <quark-cell title="包邮">
      <quark-switch :checked="switch1" @change="onSwitch1Change"></quark-switch>
    </quark-cell>
    <quark-cell title="团购">
      <quark-switch :checked="switch2" @change="onSwitch2Change"></quark-switch>
    </quark-cell>
    <div style="padding: 5px 16px">
      <quark-button type="primary" size="big" @click="onConfirm">
        确定
      </quark-button>
    </div>
  </quark-dropdown-item>
</quark-dropdown-menu>
```

```js
export default {
  data() {
    return {
      value1: "0",
      value2: "a",
      switch1: true,
      switch2: false,
    };
  },
  mounted() {
    this.$refs.item1.setOptions([
      { text: "全部商品", value: "0" },
      { text: "新款商品", value: "1" },
      { text: "活动商品", value: "2" },
    ]);
    this.$refs.item2.setOptions([
      { text: "默认排序", value: "a" },
      { text: "好评排序", value: "b" },
      { text: "销量排序", value: "c" },
    ]);
  },
  methods: {
    onSwitch1Change(e) {
      this.switch1 = e.detail.value;
    },
    onSwitch2Change(e) {
      this.switch2 = e.detail.value;
    },
    onConfirm() {
      this.$refs.item2.toggle();
    },
  },
};
```

### 自定义选中状态颜色

```html
<quark-dropdown-menu active-color="#f00">
  <quark-dropdown-item></quark-dropdown-item>
  <quark-dropdown-item></quark-dropdown-item>
</quark-dropdown-menu>
```

### 禁用菜单

```html
<quark-dropdown-menu>
  <quark-dropdown-item disabled></quark-dropdown-item>
  <quark-dropdown-item disabled></quark-dropdown-item>
</quark-dropdown-menu>
```

### 向上展开

```html
<quark-dropdown-menu direction="up">
  <quark-dropdown-item></quark-dropdown-item>
  <quark-dropdown-item></quark-dropdown-item>
</quark-dropdown-menu>
```

### 横向滚动

```html
<quark-dropdown-menu :swipe-threshold="4">
  <quark-dropdown-item></quark-dropdown-item>
  <quark-dropdown-item></quark-dropdown-item>
  <quark-dropdown-item></quark-dropdown-item>
  <quark-dropdown-item></quark-dropdown-item>
  <quark-dropdown-item></quark-dropdown-item>
  <quark-dropdown-item></quark-dropdown-item>
</quark-dropdown-menu>
```

## API

### DropdownMenu Props

| 参数            | 说明                                                             | 类型         | 默认值  |
| --------------- | ---------------------------------------------------------------- | ------------ | ------- |
| active-color    | 菜单标题和选项的选中态颜色                                       | `string`     | `#08f`  |
| direction       | 菜单展开方向                                                     | `up`、`down` | `down`  |
| z-index         | 菜单栏 z-index 层级                                              | `number`     | `10`    |
| hide-overlay    | 是否隐藏遮罩层                                                   | `boolean`    | `false` |
| swipe-threshold | 滚动阈值，选项数量超过阈值且总宽度超过菜单栏宽度时，可以横向滚动 | `number`     | `0`     |

### DropdownMenuItem Props

| 参数     | 说明                   | 类型      | 默认值         |
| -------- | ---------------------- | --------- | -------------- |
| value    | 当前选中项对应的 value | `string`  |                |
| title    | 菜单项标题             | `string`  | 当前选中项文字 |
| disabled | 是否禁用菜单           | `boolean` | `false`        |

### DropdownItem Events

| 事件名 | 说明                            | 回调参数                                     |
| ------ | ------------------------------- | -------------------------------------------- |
| change | 点击选项导致 `value` 变化时触发 | `e: ({ detail: { value: string } }) => void` |
| open   | 打开菜单栏时触发                | -                                            |
| close  | 关闭菜单栏时触发                | -                                            |

### DropdownItem Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 菜单内容 |

### DropdownItem Methods

| 名称   | 说明                                                             | 参数             | 返回值 |
| ------ | ---------------------------------------------------------------- | ---------------- | ------ |
| toggle | 切换菜单展示状态，传 `true` 为显示，`false` 为隐藏，不传参为取反 | `show?: boolean` | -      |

### 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                                           | 默认值    | 说明 |
| ---------------------------------------------- | --------- | ---- |
| `--quark-dropdown-menu-height`                 | `48px`    | -    |
| `--quark-dropdown-menu-title-background-color` | `#fff`    | -    |
| `--quark-dropdown-menu-title-color`            | `#242729` | -    |
| `--quark-dropdown-menu-title-font-size`        | `14px`    | -    |
| `--quark-dropdown-menu-title-padding`          | `8px`     | -    |
