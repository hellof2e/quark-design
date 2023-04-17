# Navbar 头部导航

### 介绍

提供导航功能。

### 安装使用

```tsx
import "quarkd/lib/navbar";
```

### 基础用法

```html
<quark-navbar title="页面标题"></quark-navbar>
<quark-navbar title="左标题" closehide class="left"></quark-navbar>
```

```css
.left {
  text-align: left;
  padding-left: 50px;
}
```

### 文字/背景颜色设置

```html
<quark-navbar title="页面标题" class="bg" righttext="分享"></quark-navbar>
<quark-navbar
  title="小号图标"
  class="bg2"
  iconsize="18"
  righttext="分享"
></quark-navbar>
```

```css
.bg {
  background: linear-gradient(to right, #7ec1ff, #2197ff);
  color: #fff;
}
.bg2 {
  background: purple;
  color: #fff;
}
```

### 左侧按钮自定义

```html
<quark-navbar title="左侧自定义图标展示">
  <div class="icon" slot="left"></div>
</quark-navbar>
<quark-navbar title="左侧文字展示">
  <span slot="left">返回</span>
</quark-navbar>
```

### 右侧按钮自定义

```html
<quark-navbar title="右侧图标展示">
  <div class="icon" slot="right"></div>
</quark-navbar>
<quark-navbar right="分享" title="右侧文字展示"></quark-navbar>
```

### 事件绑定

```html
<quark-navbar
  right="分享"
  title="Click left or right"
  @leftclick="onLeftClick"
  @rightclick="onRightClick"
  @close="close"
>
</quark-navbar>
```

## API

### Props

| 参数      | 说明             | 类型      | 默认值  |
| --------- | ---------------- | --------- | ------- |
| title     | 标题             | `string`  |
| lefthide  | 是否隐藏左侧内容 | `boolean` | `false` |
| closehide | 是否隐藏关闭图标 | `boolean` | `false` |
| right     | 右侧节点         | `string`  |
| safearea  | 安全区适配       | `boolean` | `false` |
| iconsize  | 默认图标大小     | `string ` | `24px`  |

### Event

| 名称       | 说明         | 类型         |
| ---------- | ------------ | ------------ |
| leftclick  | 左侧点击事件 | `() => void` |
| rightclick | 右侧点击事件 | `() => void` |
| close      | 关闭点击事件 | `() => void` |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                         | 说明           | 默认值 |
| ---------------------------- | -------------- | ------ |
| `--navbar-title-font-weight` | 标题自重       | `600`  |
| `--navbar-title-color`       | 标题颜色       | `继承` |
| `--navbar-left-padding`      | 内部图标左间距 | `16px` |
| `--navbar-left-space`        | 关闭图标左间距 | `40px` |
| `--navbar-right-font-size`   | 右侧字体大小   | `继承` |
| `--navbar-right-color`       | 右侧字体颜色   | `继承` |
| `--navbar-right-padding`     | 内部图标右间距 | `16px` |
| `--navbar-right-font-weight` | 右侧字体大小   | `继承` |
