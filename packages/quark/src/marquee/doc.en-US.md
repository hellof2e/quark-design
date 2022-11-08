# Marquee

### Intro

Text scrolling.

### Install

```tsx
import "quarkd/lib/marquee";
```

### Basic Usage

```html
<quark-marquee :title="title"></quark-marquee>
```

### Speed

```html
<quark-marquee :title="title" speed="25"></quark-marquee>
```

### Paused

```html
<quark-button @click="paused = true"> Paused </quark-button>
<quark-button @click="paused = false"> Continue </quark-button>
<quark-marquee :title="title" :paused="paused"></quark-marquee>
```

### Reverse

```html
<quark-marquee :title="title" :reverse="true"></quark-marquee>
```

## API

### Props

| Attribute | Description                      | Type      | Default |
| --------- | -------------------------------- | --------- | ------- |
| title     | Title                            | `string`  |
| speed     | Animation speed                  | `string`  | `50`    |
| paused    | Whether to pause the animation   | `boolean` | `false` |
| reverse   | Whether to reverse the animation | `boolean` | `false` |
