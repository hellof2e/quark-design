# Countdown

### Intro

Used to display the countdown value in real time.

### Install

```tsx
import { CountDown } from "@quarkd/quark-react";
```

### Basic Usage

```html
<CountDown time="7200000" />
```

### Custom Format

The format property controls that the spacer supports only one bit string.

```html
<CountDown time="360000" format="MM:SS" />
<CountDown time="360000" format="MM-SS" />
<CountDown time="360000" format="MM SS" />
```

### End the callback

When the countdown is 0, an end event is triggered.

```jsx
export default () => {
  const onEnd = () => {
    Toast.text("countdown finished");
  };
  return <CountDown time="5000" onEnd={onEnd} />;
};
```

### Custom Style

```html
<CountDown class="css" time="360000" />
```

```css
.css {
  font-size: 20px;
  color: #333;
  letter-spacing: 2px;
  --countdown-num-min-width: 20px;
  --countdown-num-background: #fff;
  --countdown-num-padding: 0 10px;
  --countdown-num-border-radius: 6px;
  --countdown-dot-color: #333;
  --countdown-dot-margin: 6px;
}
```

## API

### Props

| Attribute | Description                                             | Type         | Default    |
| --------- | ------------------------------------------------------- | ------------ | ---------- |
| time      | Standard timestamp                                      | `string`     |
| format    | HH MM SS、 MM:SS The spacer customizes a one-bit string | `string`     | `HH:MM:SS` |
| onEnd     | Emitted when the countdown is 0.                        | `() => void` |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name                            | Description                      | Default   |
| ------------------------------- | -------------------------------- | --------- |
| `--countdown-num-min-width`     | The min width of digital content | `18px`    |
| `--countdown-num-background`    | Digital content background color | `#F4433D` |
| `--countdown-num-padding`       | Digital content padding          | `0 4px`   |
| `--countdown-num-border-radius` | Digital border-radius            | `4px`     |
| `--countdown-dot-color`         | Dot color                        | `#fff`    |
| `--countdown-dot-margin`        | Dot margin                       | `0 2px`   |
