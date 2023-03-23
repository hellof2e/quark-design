# Noticebar 通知栏

### 介绍

提供消息通知功能

### 安装使用

```tsx
import { Noticebar } from "@quarkd/quark-react";
```

### 基础用法

```html
<Noticebar text="{text}"></Noticebar>
```

### 文字行数设置

通过内嵌 `multiple` 控制文字行数。

```html
<Noticebar text="{multipleText}" multiple="2"></Noticebar>
```

### 样式设置

通过 `color` 控制字体颜色，通过 `bgcolor` 控制背景色。

```html
<Noticebar text="{text}" color="red" bgcolor="#ddd"></Noticebar>
```

### 文字超长滚动

通过内嵌 `quark-marquee（跑马灯）` 实现。

```tsx
import { Marquee } from "@quarkd/quark-react";
```

```html
<Noticebar>
  <marquee slot="text" title="{multipleText}"></marquee>
</Noticebar>
```

### 图标隐藏

通过 `righthide`、`lefthide` 实现左右侧图标隐藏效果。

```html
<Noticebar text="隐藏右侧" righthide></Noticebar>
<Noticebar text="隐藏左侧" lefthide></Noticebar>
```

## 两端自定义

通过 `slot="left"`、`slot="right"` 实现左右侧内容自定义。

```html
<Noticebar text="大学之道，在明明德，在亲民，在止于至善。">
  <div slot="left">左侧内容</div>
  <div slot="right">右侧内容</div>
</Noticebar>
```

### 右侧事件绑定

```html
<Noticebar text="Try to click right icon" @rightclick="handleClick">
</Noticebar>
```

## API

### Props

| 参数         | 说明             | 类型          | 默认值  |
| ------------ | ---------------- | ------------- | ------- |
| text         | 文本             | `string`      |
| multiple     | 超过多少行省略   | `string`      | `1`     |
| lefthide     | 是否隐藏左侧图标 | `boolean`     | `false` |
| righthide    | 是否隐藏右侧图标 | `boolean`     | `false` |
| keyword      | 关键字高亮       | `string`      |         |
| onRightclick | 右侧点击事件     | `() => void ` |         |

### slot

| 名称  | 说明           |
| ----- | -------------- |
| left  | 自定义左侧内容 |
| text  | 自定义文本     |
| right | 自定义右侧描述 |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                      | 说明         | 默认值 |
| ------------------------- | ------------ | ------ |
| `--noticebar-border-radius`  | 组件倒圆角 |  0px  |
| `--noticebar-padding`  | 内边距 |  10px  |
| `--noticebar-left-color`  | 左侧图标颜色 | `继承` |
| `--noticebar-right-color` | 右侧图标颜色 | `继承` |
