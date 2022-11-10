# Marquee 跑马灯

### 介绍

文字滚动效果

### 安装使用

```tsx
import "quarkd/lib/marquee";
```

### 基础用法

```html
<quark-marquee :title="title"></quark-marquee>
```

### 不同速度

```html
<quark-marquee :title="title" speed="25"></quark-marquee>
<quark-marquee :title="title" speed="100"></quark-marquee>
```

### 控制暂停

```html
<quark-button @click="isPaused = true"> 暂停 </quark-button>
<quark-button @click="isPaused = false"> 继续 </quark-button>
<quark-marquee :title="title" :paused="isPaused"></quark-marquee>
```

### 悬浮暂停

```html
<quark-marquee
  :title="title"
  :paused="isPaused"
  @mouseover="isPaused = true"
  @mouseleave="isPaused = false"
></quark-marquee>
```

### 点击暂停

```html
<quark-marquee
  :title="title"
  :paused="isPaused"
  @click="isPaused = !isPaused"
></quark-marquee>
```

### 反向动画

```html
<quark-marquee :title="title" :reverse="true"></quark-marquee>
```

## API

### Props

| 参数    | 说明         | 类型      | 默认值  |
| ------- | ------------ | --------- | ------- |
| title   | 标题         | `string`  |
| speed   | 动画速度     | `string`  | `50`    |
| paused  | 是否暂停动画 | `boolean` | `false` |
| reverse | 是否反向动画 | `boolean` | `false` |
