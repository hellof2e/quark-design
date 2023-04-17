# Marquee 跑马灯

### 介绍

文字滚动效果

### 安装使用

```tsx
import { Marquee } from "@quarkd/quark-react";
```

### 基础用法

```html
<marquee title="{title}"></marquee>
```

### 不同速度

```html
<marquee title="{title}" speed="25"></marquee>
<marquee title="{title}" speed="100"></marquee>
```

### 控制暂停

```html
<button onClick="{pauseAnimation}">暂停</button>
<button onClick="{continueAnimation}">继续</button>
<marquee title="{title}" paused="{paused}"></marquee>
```

### 悬浮暂停

```html
<marquee
  title="{title}"
  paused="{paused}"
  onMouseover="{pauseAnimation}"
  onMouseleave="{continueAnimation}"
></marquee>
```

### 点击暂停

```html
<marquee
  title="{title}"
  paused="{paused}"
  onClick="{changePauseStatus}"
></marquee>
```

### 反向动画

```html
<marquee title="{title}" reverse="true"></marquee>
```

## API

### Props

| 参数    | 说明         | 类型      | 默认值  |
| ------- | ------------ | --------- | ------- |
| title   | 标题         | `string`  |
| speed   | 动画速度     | `string`  | `50`    |
| paused  | 是否暂停动画 | `boolean` | `false` |
| reverse | 是否反向动画 | `boolean` | `false` |
