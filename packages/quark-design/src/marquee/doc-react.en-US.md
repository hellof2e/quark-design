# Marquee

### Intro

Text scrolling.

### Install

```html
import { Marquee } from "@quarkd/quark-react";
```

### Basic Usage

```html
<Marquee title={title}></Marquee>
```

### Speed

```html
<Marquee title={title} speed="25"></Marquee>
<Marquee title={title} speed="100"></Marquee>
```

### Control Paused

```html
<Button onClick={pauseAnimation}> Paused </Button>
<Button onClick={continueAnimation}> Continue </Button>
<Marquee title={title} paused={paused}></Marquee>
```

### Hover Paused

```html
<Marquee
  title={title}
  paused={paused}
  onMouseover={pauseAnimation}
  onMouseleave={continueAnimation}
></Marquee>
```

### Click Paused

```html
<Marquee title={title} paused={paused} onClick={changePauseStatus}></Marquee>
```

### Reverse

```html
<Marquee title={title} reverse="true"></Marquee>
```

## API

### Props

| Attribute | Description                      | Type      | Default |
| --------- | -------------------------------- | --------- | ------- |
| title     | Title                            | `string`  |
| speed     | Animation speed                  | `string`  | `50`    |
| paused    | Whether to pause the animation   | `boolean` | `false` |
| reverse   | Whether to reverse the animation | `boolean` | `false` |
