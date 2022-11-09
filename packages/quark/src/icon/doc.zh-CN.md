# Icon 图标

### 介绍

图标是在一个单独的 npm 包中，如果你想使用图标，需要先安装它：

### 安装

```tsx
npm install --save @quarkd/icons

import '@quarkd/icons/lib/user';
```

### 基本使用

```html
<quark-icon-user size="20" />
```

### 图标大小

通过 `size` 属性用来设置图标的自定义大小，默认单位为 `px`。

```html
<quark-icon-user size="18" />
<quark-icon-user size="24" />
<quark-icon-user size="30" />
```

### 图标颜色

通过 `color` 属性用来设置图标的颜色。

```html
<quark-icon-user size="40" color="#F44336" />
<quark-icon-user size="40" color="#3F51B5" />
```

## API

### Props

| 参数  | 说明                             | 类型               | 默认值 |
| ----- | -------------------------------- | ------------------ | ------ |
| color | 图标颜色                         | `string`           | -      |
| size  | 图标大小，如 `20px` `2em` `2rem` | `string or number` | -      |
