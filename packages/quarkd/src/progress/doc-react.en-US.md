# Progress

### Intro

Used to show the current progress.

### Install

```tsx
import { Progress } "@quarkd/quark-react"
```

### Basic Usage

```html
<progress value="0"></progress>
```

### Showtext

```html
<progress value="100" showtext></progress>
```

### Custom style 1

```css
.green {
  --progress-box-background: yellowgreen;
  --progress-margin-left: 6px;
}
```

```html
<progress value="20" color="green"></progress>
<progress value="30" color="green" class="green"></progress>
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
<progress
  value="90"
  class="auto"
  color="linear-gradient(
  268deg,#fa2c19 0%,#fa3f19 44.59259259%,#fa5919 83.40740741%,#fa6419 100%)"
>
  <span slot="percent" class="percent">0.9</span>
</progress>
```

## API

### Props

| Attribute | Description                                   | Type      | Default                                            |
| --------- | --------------------------------------------- | --------- | -------------------------------------------------- |
| value     | Default progress value 0-100 means percentage | `string`  | ` 0`                                               |
| color     | Default Progress bar color supports gradient  | ` string` | `linear-gradient(90deg, #FFC91C 0%, #FB990F 100%)` |
| showtext  | Whether to show progress text                 | `boolean` | `false`                                            |
