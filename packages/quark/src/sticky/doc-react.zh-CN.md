# Sticky 粘性布局

### 介绍

用于处理元素在滚动时的吸顶效果

### 安装使用

```tsx
import { Sticky } from "@quarkd/quark-react";
```

### 基本用法

```html
<Sticky offsettop="17vw">
  <div value="基础用法">基础用法</div>
</Sticky>
```

### 吸顶距离

```html
<Sticky offsettop="45vw">
  <div value="吸顶距离">吸顶距离</div>
</Sticky>
```

## API

### Props

| 参数      | 说明               | 单位      | 默认值 |
| --------- | ------------------ | --------- | ------ |
| offsettop | 吸顶时与顶部的距离 | `vw `     | `0vw`  |
| zindex    | 吸顶时的 z-index   | `number ` | `99`   |
