# Marquee 跑马灯

### 介绍

文字滚动效果

### 安装使用

```tsx
import { Marquee } from "@quarkd/quark-react";
```

### 基础用法

```html
<Marquee title={title}></Marquee>
```

### 不同速度

```html
<Marquee title={title} speed="25"></Marquee>
<Marquee title={title} speed="100"></Marquee>
```

### 控制暂停

```html
<Button onClick={pauseAnimation}> 暂停 </Button>
<Button onClick={continueAnimation}> 继续 </Button>
<Marquee title={title} paused={paused}></Marquee>
```

### 悬浮暂停

```html
<Marquee
  title={title}
  paused={paused}
  onMouseover={pauseAnimation}
  onMouseleave={continueAnimation}
></Marquee>
```

### 点击暂停

```html
<Marquee title={title} paused={paused} onClick={changePauseStatus}></Marquee>
```

### 反向动画

```html
<Marquee title={title} reverse="true"></Marquee>
```

## API

### Props

| 参数    | 说明         | 类型      | 默认值  |
| ------- | ------------ | --------- | ------- |
| title   | 标题         | `string`  |
| speed   | 动画速度     | `string`  | `50`    |
| paused  | 是否暂停动画 | `boolean` | `false` |
| reverse | 是否反向动画 | `boolean` | `false` |
