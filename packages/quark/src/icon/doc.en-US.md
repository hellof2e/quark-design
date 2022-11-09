# Icon

### Intro

The icons are in a separate npm package. If you want to use the icons, you need to install it first:

### Install

```tsx
npm install --save @quarkd/icons

import '@quarkd/icons/lib/user';
```

### Basic Usage

```html
<quark-icon-user size="20" />
```

### Icon Size

Use `size` prop to set icon size. The default unit is `px`.

```html
<quark-icon-user size="18" />
<quark-icon-user size="24" />
<quark-icon-user size="30" />
```

### Icon Color

Use `color` prop to set icon color.

```html
<quark-icon-user size="40" color="#F44336" />
<quark-icon-user size="40" color="#3F51B5" />
```

## API

### Props

| Attribute | Description                            | Type               | Default |
| --------- | -------------------------------------- | ------------------ | ------- |
| color     | Icon color                             | `string `          | -       |
| size      | Icon size，such as `20px` `2em` `2rem` | `string or number` | -       |
