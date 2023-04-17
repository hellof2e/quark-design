# Sticky 粘性布局

### 介绍

用于处理元素在滚动时的吸顶效果

### 安装使用

```tsx
import "quarkd/lib/sticky";
```

### 基本用法

```html
<quark-sticky offsettop="17vw">
  <div value="基础用法">基础用法</div>
</quark-sticky>
```

### 吸顶距离

```html
<quark-sticky offsettop="45vw">
  <div value="吸顶距离">吸顶距离</div>
</quark-sticky>
```

### 其他单位

```html
<quark-sticky offsettop="150px">
  <div value="其他单位">其他单位</div>
</quark-sticky>
```

## API

### Props

| 参数      | 说明               | 单位                                 | 默认值 |
| --------- | ------------------ | ------------------------------------ | ------ |
| offsettop | 吸顶时与顶部的距离 | `vw` or `vh` or `px` or `rem` or `%` | `0vw`  |
| zindex    | 吸顶时的 z-index   | `number`                             | `99`   |
