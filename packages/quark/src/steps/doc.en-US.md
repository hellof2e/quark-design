# Steps

### Intro

Split the process into multiple steps and display them, so that you can complete tasks through the process. Besides, the steps will show you the current status of work.

### Install

```tsx
import "quarkd/lib/steps";
```

### Basic Usage

```html
<quark-steps>
  <quark-step status="done" title="step one">1</quark-step>
  <quark-step status="doing" title="step two">2</quark-step>
  <quark-step status="todo" title="step three">3</quark-step>
</quark-steps>
```

### Title & Content

```html
<quark-steps>
  <quark-step
    status="done"
    title="finished"
    content="Your order has been packed and the item has been dispatched"
    >1</quark-step
  >
  <quark-step
    status="doing"
    title="processing"
    content="Your order is being shipped..."
    >2</quark-step
  >
  <quark-step
    status="todo"
    title="not started"
    content="The delivery address is: 16F, Yizhan Business Building, Hangzhou"
    >3</quark-step
  >
</quark-steps>
```

### Vertical Steps

```html
<quark-steps direction="vertical">
  <quark-step
    status="done"
    title="finished"
    content="Your order has been packed and the item has been dispatched"
    >1</quark-step
  >
  <quark-step
    status="doing"
    title="processing"
    content="Your order is being shipped..."
    >2</quark-step
  >
  <quark-step
    status="todo"
    title="not started"
    content="The delivery address is: 16F, Yizhan Business Building, Hangzhou"
    >3</quark-step
  >
</quark-steps>
```

## API

### Props

#### quark-steps

| Attribute | Description                                              | Type      | Default      |
| --------- | -------------------------------------------------------- | --------- | ------------ |
| direction | Display direction，can be set to `horizontal` `vertical` | `string ` | `horizontal` |

#### quark-step

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
