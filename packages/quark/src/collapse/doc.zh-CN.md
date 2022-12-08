# Collapse

### 介绍

Collapse 折叠面板

### 安装使用

```tsx
import "quarkd/lib/collapse";
```

### 基本用法

```html
<quark-collapse title="标题1">
  生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。
</quark-collapse>
```

### 无icon样式

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

### 自定义icon

通过 `slot="icon"` 来自定义icon。

```html
<quark-collapse :title="title">
  <span slot="icon">🎉🎉🎉</span>
  生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。
</quark-collapse>
```


## API

### Props

| 参数               | 说明             | 类型                                      | 默认值    |
| ------------------ | ---------------- | ----------------------------------------- | --------- |
| title              | 标题文字         | `string`                                  |           |
| open               | 打开            | `Boolean`                                |   `false` |

