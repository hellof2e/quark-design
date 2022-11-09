# Sticky

### Intro

When the component rolls out of screen range, it will always be fixed at the top of the screen.

### Install

```tsx
import { Sticky } from "@quarkd/quark-react";
```

### Basic Usage

```html
<Sticky offsettop="17vw">
  <div value="basic usage">Basic Usage</div>
</Sticky>
```

### Offset Top

```html
<Sticky offsettop="45vw">
  <div value="offset top">Offset Top</div>
</Sticky>
```

## API

### Props

| Attribute | Description         | Unit      | Default |
| --------- | ------------------- | --------- | ------- |
| offsettop | Offset top          | `vw `     | `0vw`   |
| zindex    | z-index when sticky | `number ` | `99`    |
