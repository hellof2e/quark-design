# Steps

### Intro

Split the process into multiple steps and display them, so that you can complete tasks through the process. Besides, the steps will show you the current status of work.

### Install

```tsx
import { Steps, StepItem } from "@quarkd/quark-react";
```

### Basic Usage

```html
<Steps>
  <StepItem status="done" title="step one" order="1"></StepItem>
  <StepItem status="doing" title="step two" order="2"></StepItem>
  <StepItem status="todo" title="step three" order="3"></StepItem>
</Steps>
```

### Title & Content

```html
<Steps>
  <StepItem
    status="done"
    title="finished"
    order="1"
    content="Your order has been packed and the item has been dispatched"
    >1</StepItem
  >
  <StepItem
    status="doing"
    title="processing"
    order="2"
    content="Your order is being shipped..."
    >2</StepItem
  >
  <StepItem
    status="todo"
    title="not started"
    order="3"
    content="The delivery address is: 16F, Yizhan Business Building, Hangzhou"
    >3</StepItem
  >
</Steps>
```

### Vertical Steps

```html
<Steps direction="vertical">
  <StepItem
    status="done"
    title="finished"
    order="1"
    content="Your order has been packed and the item has been dispatched"
    >1</StepItem
  >
  <StepItem
    status="doing"
    title="processing"
    order="2"
    content="Your order is being shipped..."
    >2</StepItem
  >
  <StepItem
    status="todo"
    title="not started"
    order="3"
    content="The delivery address is: 16F, Yizhan Business Building, Hangzhou"
    >3</StepItem
  >
</Steps>
```

## API

### Props

#### Steps

| Attribute | Description                                              | Type      | Default      |
| --------- | -------------------------------------------------------- | --------- | ------------ |
| direction | Display direction，can be set to `horizontal` `vertical` | `string ` | `horizontal` |

#### StepItem

| Attribute | Description                                               | Type     | support `slot`    |
| --------- | --------------------------------------------------------- | -------- | ----------------- |
| title     | Title of the step                                         | `string` | `name = title`    |
| status    | status of the step can be set to `done`，`doing`， `todo` | `string` |                   |
| content   | Description of the step(html is supported)                | `string` | `name = content ` |
| order     | order                                                     | `string` | `name = order`    |

### slot

| Attribute | Description                                | Type      | Default |
| --------- | ------------------------------------------ | --------- | ------- |
| title     | title                                      | `string`  |         |
| content   | Description of the step(html is supported) | `string ` |         |
| order     | order                                      | `string`  |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name                       | Description                  | Default   |
| -------------------------- | ---------------------------- | --------- |
| `--quark-theme-color`      | Theme color(blue)            | `#0088FF` |
| `--step-title-font-size`   | Title font size              | `14px`    |
| `--step-title-color`       | Title font color             | `#909ca4` |
| `--step-content-font-size` | Content font size            | `14px`    |
| `--step-content-color`     | Content font color           | `#666`    |
| `--steps-base-font-size`   | Set round size(radius： 2em) | `13px`    |
