# Progress 进度条组件

### 介绍

展示进度

### 安装

```tsx
import "quarkd/lib/progress";
```

### 基本用法

```html
<quark-progress value="0"></quark-progress>
```

### 显示字体进度

```html
<quark-progress value="100" showtext></quark-progress>
```

### 自定义颜色/背景色

```css
.green {
  --progress-box-background: yellowgreen;
  --progress-margin-left: 6px;
}
```

```html
<quark-progress value="20" color="green"></quark-progress>
<quark-progress value="30" color="green" class="green"></quark-progress>
```

### 自定义宽度高度/圆角

```css
.auto {
  width: 50%;
  height: 50px;
  border-radius: 15px;
}
```

```html
<quark-progress
  value="90"
  class="auto"
  color="linear-gradient(
  268deg,#fa2c19 0%,#fa3f19 44.59259259%,#fa5919 83.40740741%,#fa6419 100%)"
>
  <span slot="percent" class="percent">0.9</span>
</quark-progress>
```

## API

### Props

| 参数     | 说明                      | 类型      | 默认值                                             |
| -------- | ------------------------- | --------- | -------------------------------------------------- |
| value    | 默认进度 0-100 代表百分比 | `string`  | ` 0`                                               |
| color    | 进度条激活颜色支持渐变    | `string`  | `linear-gradient(90deg, #FFC91C 0%, #FB990F 100%)` |
| showtext | 是否显示文字进度          | `boolean` | `false`                                            |
