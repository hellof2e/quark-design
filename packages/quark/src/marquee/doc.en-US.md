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

## API

### Props

| Attribute | Description                  | Type     | Default |
| --------- | ---------------------------- | -------- | ------- |
| title     | Title                        | `string` |
| speed     | Whether to hide left content | `string` | `50`    |
