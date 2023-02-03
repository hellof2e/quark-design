# Progress

### Intro

Used to show the current progress.

### Install

```tsx
import { Progress } "@quarkd/quark-react"
```

### Basic Usage

```html
<Progress value="0"></Progress>
```

### Showtext

```html
<Progress value="100" showtext></Progress>
```

### Custom style 1

```css
.green {
  --progress-box-background: yellowgreen;
  --progress-margin-left: 6px;
}
```

```html
<Progress value="20" color="green"></Progress>
<Progress value="30" color="green" class="green"></Progress>
```

### Custom style 2

```css
.auto {
  width: 50%;
  height: 50px;
  border-radius: 15px;
}
```

```html
<Progress
  value="90"
  class="auto"
  color="linear-gradient(
  268deg,#fa2c19 0%,#fa3f19 44.59259259%,#fa5919 83.40740741%,#fa6419 100%)"
>
  <span slot="percent" class="percent">0.9</span>
</Progress>
```

## API

### Props

| Attribute | Description                                   | Type      | Default                                            |
| --------- | --------------------------------------------- | --------- | -------------------------------------------------- |
| value     | Default progress value 0-100 means percentage | `string`  | ` 0`                                               |
| color     | Default Progress bar color supports gradient  | ` string` | `linear-gradient(90deg, #FFC91C 0%, #FB990F 100%)` |
| showtext  | Whether to show progress text                 | `boolean` | `false`                                            |
