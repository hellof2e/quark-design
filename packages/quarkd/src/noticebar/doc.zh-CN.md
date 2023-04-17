# Noticebar 通知栏

### 介绍

提供消息通知功能

### 安装使用

```tsx
import "quarkd/lib/noticebar";
```

### 基础用法

```html
<quark-noticebar :text="text"></quark-noticebar>
```

### 文字行数设置

通过内嵌 `multiple` 控制文字行数。

```html
<quark-noticebar :text="multipleText" :multiple="2"></quark-noticebar>
```

### 样式设置

通过 `color` 控制字体颜色，通过 `bgcolor` 控制背景色。

```html
<quark-noticebar :text="text" color="red" bgcolor="#ddd"></quark-noticebar>
```

### 文字超长滚动

通过内嵌 `quark-marquee（跑马灯）` 实现。

```tsx
import "quarkd/lib/marquee";
```

```html
<quark-noticebar>
  <quark-marquee slot="text" :title="multipleText"></quark-marquee>
</quark-noticebar>
```

### 图标隐藏

通过 `righthide`、`lefthide` 实现左右侧图标隐藏效果。

```html
<quark-noticebar text="隐藏右侧" righthide></quark-noticebar>
<quark-noticebar text="隐藏左侧" lefthide></quark-noticebar>
```

## 两端自定义

通过 `slot="left"`、`slot="right"` 实现左右侧内容自定义。

```html
<quark-noticebar text="大学之道，在明明德，在亲民，在止于至善。">
  <div slot="left">左侧内容</div>
  <div slot="right">右侧内容</div>
</quark-noticebar>
```

### 右侧事件绑定

```html
<quark-noticebar text="Try to click right icon" @rightclick="handleClick">
</quark-noticebar>
```

## API

### Props

| 参数      | 说明             | 类型      | 默认值  |
| --------- | ---------------- | --------- | ------- |
| text      | 文本             | `string`  |
| multiple  | 超过多少行省略   | `string`  | `1`     |
| lefthide  | 是否隐藏左侧图标 | `boolean` | `false` |
| righthide | 是否隐藏右侧图标 | `boolean` | `false` |
| keyword   | 关键字高亮       | `string`  |         |

### slot

| 名称  | 说明           |
| ----- | -------------- |
| left  | 自定义左侧内容 |
| text  | 自定义文本     |
| right | 自定义右侧描述 |

### Event

| 名称       | 说明         | 类型         |
| ---------- | ------------ | ------------ |
| rightclick | 右侧点击事件 | `() => void` |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                        | 说明         | 默认值 |
| --------------------------- | ------------ | ------ |
| `--noticebar-border-radius` | 组件倒圆角   | `0px`  |
| `--noticebar-padding`       | 内边距       | `10px` |
| `--noticebar-left-color`    | 左侧图标颜色 | `继承` |
| `--noticebar-right-color`   | 右侧图标颜色 | `继承` |
