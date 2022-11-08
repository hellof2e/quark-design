# Button 按钮

### 介绍

按钮。

### 安装使用

```tsx
import { Button } from '@quarkd/quark-react';
```

### 基本使用

```html
<Button>默认按钮</Button>
```

### 按钮类型

按钮支持 `primary`、`success`、`danger`、`warning`和默认类型。

```html
<Button>默认按钮</Button>
<Button type="primary">主要按钮</Button>
<Button type="success">成功按钮</Button>
<Button type="danger">危险按钮</Button>
<Button type="warning">警告按钮</Button>
```

### 朴素按钮

通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

```html
<Button plain type="primary">主要按钮</Button>
<Button plain type="success">成功按钮</Button>
```

### 按钮尺寸

按钮支持 `big`、`small` 和默认尺寸。

```html
<Button type="primary" size="small">小号尺寸</Button>
<Button type="primary" size="big">大号尺寸</Button>
<Button type="primary">普通尺寸</Button>
```

### 禁用状态

通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

```html
<Button disabled type="primary">禁用状态</Button>
<Button disabled plain>禁用状态</Button>
```

### 按钮形状

通过 `shape` 属性设置按钮形状，支持圆角（`round`）、方形按钮(`square`)和默认的小圆角。

```html
<Button shape="square" type="danger">方形按钮</Button>
<Button shape="round" type="primary">圆角按钮</Button>
```

### 加载状态

通过 `loading` 属性设置加载状态，其中`loadingcolor `属性控制loading颜色，`loadingsize `属性控制loading大小，`loadingtype `属性控制loading类型，loading参考loading组件，

```tsx
<Button loading type="danger" loadtype="circular">加载中...</Button>
<Button loading type="warning">加载中...</Button>
<Button onClick="changeLoading" loading={isLoading} type="success">Click me!</Button>
```

### 图标按钮

通过 `icon` 属性设置图标。

```html
<Button type="primary"
  icon="https://m.hellobike.com/resource/helloyun/16682/Agnve_tel%20(1).png">
  喜欢
</Button>
```

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| type         | 类型，可选值为 `primary`、`success`、`orange`、`danger`、`warning` 和默认 6 种类型| `string` |`primary`         |
| size |  尺寸，可选值为 `small`, `normal`, `big`, `large` 4种类型 | `string` | `normal` |
| disabled          | 	是否禁用按钮                       | `boolean` | `false`              |
| icon          | 按钮图标 (支持传url链接)                        | `string` | -     |
| shape          | 形状，可选值为 `square`                  | `string` | `round`               |
| plain         | 是否启用空心按钮 | `boolean` | `false ` |
| loading          | 按钮loading状态                        | `boolean` | `false`               |
| loadtype |  加载图标类型，可选值为 `circular` | `string` | `spinner` |
| loadingcolor |  加载图标颜色 | `string` | `#fff` |
| loadingsize |  加载图标大小 | `string` | `20` |


## 样式变量

组件提供了以下[CSS变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                     | 说明                                  | 默认值          | 
| ------------------------ | ----------------------------------- | --------------- |
| `--button-height`       | 按钮高度                       |    `32px` |    
| `--button-hspacing`       | 按钮左右内边距                       |    `12px`|    
| `--button-font-size`    | 按钮字体大小                          |       `14px`| 
| `--button-border-radius`        | 按钮圆角                          | `8px`      | 
| `--button-color` | 文字颜色                        | `#fff`  |
| `--button-icon-hspacing` | icon 右间距                        | `6px`  |

