# Cell

### Intro

Used for cell components that can slide left and right to display operation buttons.

### Install

```tsx
import "quarkd/lib/swipecell";
```

### Basic Usage

The component provides two slots, left and right, to define the contents of the sliding area on both sides

```html
<quark-swipe-cell>
  <quark-cell title="Cell Title" desc="Description" />
  <div slot="left">
    <quark-button type="primary" shape="square"> Select </quark-button>
  </div>
  <div slot="right">
    <quark-button type="danger" shape="square"> Delete </quark-button>
    <quark-button type="primary" shape="square"> Collect </quark-button>
  </div>
</quark-swipe-cell>
```

### Custom Content

`quark-swipe-cell` can nest anything you want.

```html
<quark-swipe-cell>
  <quark-empty title="No Data" desc="Go to add data." type="local" />
  <div slot="right">
    <quark-button type="primary" shape="square"> Add </quark-button>
  </div>
</quark-swipe-cell>
```

### Async Close

You can customize the behavior when the two sides sliding content is closed by using `setBeforeClose` to set the callback function.

```html
<quark-swipe-cell ref="asyncSwipeCell">
  <quark-cell title="Cell Title" desc="Description" />
  <div slot="right">
    <quark-button type="primary" shape="square"> Delete </quark-button>
  </div>
</quark-swipe-cell>
```

```js
export default {
  mounted() {
    this.$refs.asyncSwipeCell.setBeforeClose((position: SwipeCellPosition) => {
      if (position === "right") {
        return new Promise((resolve) => {
          const toast = Toast.loading("loading...");
          setTimeout(() => {
            toast.hide();
            Toast.success("successfully deleted");
            resolve(true);
          }, 1000);
        });
      } else {
        return true;
      }
    });
  },
};
```

## API

### Props

| Attribute  | Description                   | Type               | Default |
| ---------- | ----------------------------- | ------------------ | ------- |
| name       | Unique identifiers            | `number \| string` | `''`    |
| leftwidth  | Width of the left swipe area  | `number`           | `auto`  |
| rightwidth | Width of the right swipe area | `number`           | `auto`  |
| disabled   | Whether to disabled swipe     | `boolean `         | `false` |

### Slots

| Name    | Description                      |
| ------- | -------------------------------- |
| default | Custom content                   |
| left    | Content of left scrollable area  |
| right   | Content of right scrollable area |

### Events

| Event | Description                       | Type                                                         |
| ----- | --------------------------------- | ------------------------------------------------------------ |
| click | Emitted when SwipeCell is clicked | `(args: { detail: { positon: SwipeCellPosition } }) => void` |
| open  | Emitted when SwipeCell is opened  | `(args: Params) => void`                                     |
| close | Emitted when SwipeCell is closed  | `(args: Params) => void`                                     |

### Methods

| Name           | Description                        | Type                                                       |
| -------------- | ---------------------------------- | ---------------------------------------------------------- |
| open           | open SwipeCell                     | `(args: SwipeCellSide) => void`                            |
| close          | close SwipeCell                    | `() => void`                                               |
| setBeforeClose | set callback function before close | `(args: SwipeCellPosition) => boolean \| Promise<boolean>` |

### Data Structure of Action

```ts
type SwipeCellSide = "left" | "right";
type SwipeCellPosition = SwipeCellSide | "cell" | "outside";
type Params = {
  detail: {
    name: string | number;
    position: SwipeCellPosition;
  };
};
```
