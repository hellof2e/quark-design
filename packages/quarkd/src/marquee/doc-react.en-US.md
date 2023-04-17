# Marquee

### Intro

Text scrolling.

### Install

```html
import { Marquee } from "@quarkd/quark-react";
```

### Basic Usage

```html
<marquee title="{title}"></marquee>
```

### Speed

```html
<marquee title="{title}" speed="25"></marquee>
<marquee title="{title}" speed="100"></marquee>
```

### Control Paused

```html
<button onClick="{pauseAnimation}">Paused</button>
<button onClick="{continueAnimation}">Continue</button>
<marquee title="{title}" paused="{paused}"></marquee>
```

### Hover Paused

```html
<marquee
  title="{title}"
  paused="{paused}"
  onMouseover="{pauseAnimation}"
  onMouseleave="{continueAnimation}"
></marquee>
```

### Click Paused

```html
<marquee
  title="{title}"
  paused="{paused}"
  onClick="{changePauseStatus}"
></marquee>
```

### Reverse

```html
<marquee title="{title}" reverse="true"></marquee>
```

## API

### Props

| Attribute | Description                      | Type      | Default |
| --------- | -------------------------------- | --------- | ------- |
| title     | Title                            | `string`  |
| speed     | Animation speed                  | `string`  | `50`    |
| paused    | Whether to pause the animation   | `boolean` | `false` |
| reverse   | Whether to reverse the animation | `boolean` | `false` |
