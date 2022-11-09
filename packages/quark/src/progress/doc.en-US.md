# Progress

### Intro

Used to show the current progress.

### Install

```tsx
import "quarkd/lib/progress";
```

### Basic Usage

```html
<quark-progress value="0"></quark-progress>
```

### Showtext

```html
<quark-progress value="100" showtext></quark-progress>
```

### Custom style 1

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

### Custom style 2

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

| Attribute | Description                                   | Type      | Default                                            |
| --------- | --------------------------------------------- | --------- | -------------------------------------------------- |
| value     | Default progress value 0-100 means percentage | `string`  | ` 0`                                               |
| color     | Default Progress bar color supports gradient  | ` string` | `linear-gradient(90deg, #FFC91C 0%, #FB990F 100%)` |
| showtext  | Whether to show progress text                 | `boolean` | `false`                                            |
