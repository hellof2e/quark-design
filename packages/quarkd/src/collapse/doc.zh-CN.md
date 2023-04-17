# Collapse

### 介绍

将内容放置在多个折叠面板中，点击面板标题可展开或收缩内容。

### 安装使用

```tsx
import "quarkd/lib/collapse";
```

### 基本用法

```html
<quark-collapse :title="title">
  生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。
</quark-collapse>
```

### 打开状态

通过设置 `open=true` 属性来控制折叠面板打开状态

```html
<quark-collapse :title="title" open>
  生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。
</quark-collapse>
```

### 无 icon 样式

通过 `iconhide` 属性来自定义标题。

```html
<quark-collapse :title="title" iconhide>
  生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。
</quark-collapse>
```

### 自定义标题

通过 `slot="title"` 来自定义标题。

```html
<quark-collapse :title="title">
  <div slot="title">
    <span style="color: blueviolet">自定义标题</span>
  </div>
  生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。
</quark-collapse>
```

### 自定义 icon

通过 `slot="icon"` 来自定义 icon。

```html
<quark-collapse :title="title">
  <span slot="icon">🎉🎉🎉</span>
  生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。
</quark-collapse>
```

## API

### Props

| 参数  | 说明     | 类型      | 默认值  |
| ----- | -------- | --------- | ------- |
| title | 标题文字 | `string`  |         |
| open  | 打开     | `Boolean` | `false` |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                          | 说明         | 默认值 |
| ----------------------------- | ------------ | ------ |
| `--callapse-title-fontsize`   | 标题字体大小 | `14px` |
| `--callapse-title-color`      | 标题字体颜色 | `#666` |
| `--callapse-content-fontsize` | 标题字体大小 | `14px` |
| `--callapse-content-color`    | 标题字体颜色 | `#666` |
