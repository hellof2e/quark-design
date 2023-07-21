# SwipeCell

### Intro

This is a cell component that enables left and right swiping to reveal actionable content.

### Install

```tsx
import "quarkd/lib/swipecell";
```

### Basic Usage

`quark-swipe-cell` component provides two slots, 'left' and 'right', for defining the content of the left and right swiping areas, respectively.

```html
<quark-swipe-cell>
  <quark-button slot="left" size="big" shape="square" type="danger"
    >button1</quark-button
  >
  <quark-cell title="title" desc="desc"></quark-cell>
  <quark-button slot="right" size="big" shape="square" type="primary"
    >button2</quark-button
  >
</quark-swipe-cell>
```

## API

### Props

| Attribute   | Description                                  | Type      | Default |
| ----------- | -------------------------------------------- | --------- | ------- |
| left-width  | Specify the width of the left swiping area.  | `number`  | auto    |
| right-width | Specify the width of the right swiping area. | `number`  | auto    |
| disabled    | Whether to disable swiping.                  | `boolean` | false   |
| threshold   | The triggering threshold.                    | `number`  | 0.15    |

### Method

| Name   | Description    | Type                            |
| ------ | -------------- | ------------------------------- |
| open   | open sidebar   | `(side: SwipeCellSide) => void` |
| close  | close sidebar  | `(side: SwipeCellSide) => void` |
| toogle | toggle sidebar | `(side: SwipeCellSide) => void` |

### Slots

| Name            | Description                           |
| --------------- | ------------------------------------- |
| slot            | custom content                        |
| slot name=left  | Content displayed during left swipe.  |
| slot name=right | Content displayed during right swipe. |

### Event

| 名称  | 说明                           | 类型                                                   |
| ----- | ------------------------------ | ------------------------------------------------------ |
| open  | Triggered when swiping opens.  | `e: ({ detail: { position: SwipeCellSide } }) => void` |
| close | Triggered when swiping closes. | `e: ({ detail: { position: SwipeCellSide } }) => void` |
