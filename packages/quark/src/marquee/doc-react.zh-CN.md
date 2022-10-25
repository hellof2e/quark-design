# Marquee 跑马灯

### 介绍

文字滚动效果

### 安装使用

```tsx
import { Marquee } from "@quarkd/quark-react"
```

### 基础用法
```html
<Marquee title={title}></Marquee>
```
### 不同速度
```html
<Marquee title={title} speed="25"></Marquee>
```

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| title        | 标题 | `string`                     | 
| speed      | 是否隐藏左侧内容               | `string`  | `50`
