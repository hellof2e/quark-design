# Button 按钮

### 介绍

按钮。

### 安装使用

```tsx
import "quarkd/lib/button";
```

### 基本使用

```html
<quark-button>默认按钮</quark-button>
```

### 按钮类型

按钮支持 `primary`、`success`、`danger`、`warning`和默认类型。

```html
<quark-button>默认按钮</quark-button>
<quark-button type="primary">主要按钮</quark-button>
<quark-button type="success">成功按钮</quark-button>
<quark-button type="danger">危险按钮</quark-button>
<quark-button type="warning">警告按钮</quark-button>
```

### 朴素按钮

通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

```html
<quark-button type="primary" plain>主要按钮</quark-button>
<quark-button type="success" plain>成功按钮</quark-button>
```

### 浅色按钮

通过 `light` 属性将按钮设置为浅色按钮，浅色按钮的文字为按钮颜色，背景为对应的浅色。

```html
<quark-button type="primary" light>主要按钮</quark-button>
<quark-button type="success" light>成功按钮</quark-button>
```

### 按钮尺寸

按钮支持 `big`、`small` 和默认尺寸。

```html
<quark-button type="primary" size="small">小号尺寸</quark-button>
<quark-button type="primary" size="big">大号尺寸</quark-button>
<quark-button type="primary" size="large">特大尺寸</quark-button>
<quark-button type="primary">普通尺寸</quark-button>
```

### 禁用状态

通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

```html
<quark-button disabled type="primary">禁用状态</quark-button>
<quark-button disabled plain>禁用状态</quark-button>
```

### 按钮形状

通过 `shape` 属性设置按钮形状，支持圆角（`round`）、方形按钮(`square`)和默认的小圆角。

```html
<quark-button shape="square" type="danger">方形按钮</quark-button>
<quark-button shape="round" type="primary">圆角按钮</quark-button>
```

### 加载状态

通过 `loading` 属性设置加载状态，其中`loadingcolor `属性控制 loading 颜色，`loadingsize `属性控制 loading 大小，`loadingtype `属性控制 loading 类型，loading 参考 loading 组件，

```html
<quark-button loading type="danger" loadtype="circular">加载中...</quark-button>
<quark-button loading type="warning">加载中...</quark-button>
<!-- @click="changeLoading" -->
<quark-button type="success" onclick="changeLoading()">Click me!</quark-button>
```

```js
function changeLoading() {
  btn.loading = true;
  setTimeout(() => {
    btn.loadng = false;
  }, 2000); // 点击2s后loading消失
}

export default {
  setup() {
    const isLoading = ref(false);

    const changeLoading = () => {
      isLoading.value = true;
      setTimeout(() => {
        isLoading.value = false;
      }, 2000); // 点击2s后loading消失
    };

    return {
      data,
      isLoading,
      changeLoading,
    };
  },
};
```

### 图标按钮

通过 `icon` 属性设置图标。

```html
<quark-button type="primary" icon="https://xx.png"> 喜欢 </quark-button>
```

## API

### Props

| 参数         | 说明                                                                     | 类型      | 默认值    |
| ------------ | ------------------------------------------------------------------------ | --------- | --------- |
| type         | 类型，可选值为 `primary`、`success`、`danger`、`warning` 和默认 5 种类型 | `string`  | -         |
| size         | 尺寸，可选值为 `small`, `normal`, `big`, `large` 4 种类型                | `string`  | `normal`  |
| disabled     | 是否禁用按钮                                                             | `boolean` | `false`   |
| icon         | 按钮图标 (支持传 url 链接)                                               | `string`  | -         |
| shape        | 形状，可选值为 `square`                                                  | `string`  | `round`   |
| plain        | 是否为朴素按钮                                                           | `boolean` | `false `  |
| light        | 是否为浅色按钮                                                           | `boolean` | `false `  |
| loading      | 按钮 loading 状态                                                        | `boolean` | `false`   |
| loadtype     | 加载图标类型，可选值为 `circular`                                        | `string`  | `spinner` |
| loadingcolor | 加载图标颜色                                                             | `string`  | `#fff`    |
| loadingsize  | 加载图标大小                                                             | `string`  | `20`      |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                         | 说明           | 默认值 |
| ---------------------------- | -------------- | ------ |
| `--button-height`            | 按钮高度       | `32px` |
| `--button-hspacing`          | 按钮左右内边距 | `12px` |
| `--button-font-size`         | 按钮字体大小   | `14px` |
| `--button-border-radius`     | 按钮圆角       | `8px`  |
| `--button-color`             | 文字颜色       | `#fff` |
| `--button-icon-hspacing`     | icon 右间距    | `6px`  |
| `--button-icon-size`         | icon 大小      | `1em`  |
| `--button-big-border-radius` | 大尺寸按钮圆角 | `8px`  |
