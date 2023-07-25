# Cell

### Intro

Used for cell components that can slide left and right to display operation buttons.

### Install

```tsx
import { SwipeCell, SwipeCellRef } from "@quarkd/quark-react";
```

### Basic Usage

The component provides two slots, left and right, to define the contents of the sliding area on both sides

```tsx
export default () => {
  return (
    <SwipeCell>
      <Cell title="Cell Title" desc="Description" />
      <div slot="left">
        <Button type="primary" shape="square">
          Select
        </Button>
      </div>
      <div slot="right">
        <Button type="danger" shape="square">
          Delete
        </Button>
        <Button type="primary" shape="square">
          Collect
        </Button>
      </div>
    </SwipeCell>
  );
};
```

### Custom Content

`SwipeCell` can nest anything you want.

```tsx
export default () => {
  return (
    <SwipeCell>
      <Empty title="No Data" desc="Go to add data." type="local" />
      <div slot="right">
        <Button type="primary" shape="square">
          Add
        </Button>
      </div>
    </SwipeCell>
  );
};
```

### Async Close

You can customize the behavior when the two sides sliding content is closed by using `setBeforeClose` to set the callback function.

```tsx
export default () => {
  const swipeCellRef = useRef<SwipeCellRef>(null);

  useEffect(() => {
    const { current } = swipeCellRef;
    current.setBeforeClose((position: SwipeCellPosition) => {
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
  }, []);

  return (
    <SwipeCell ref={swipeCellRef}>
      <Cell title="Cell Title" desc="Description" />
      <div slot="right">
        <Button type="primary" shape="square">
          Delete
        </Button>
      </div>
    </SwipeCell>
  );
};
```

## API

### Props

| Attribute  | Description                       | Type                                                         | Default |
| ---------- | --------------------------------- | ------------------------------------------------------------ | ------- |
| name       | Unique identifiers                | `number \| string`                                           | `''`    |
| leftwidth  | Width of the left swipe area      | `number`                                                     | `auto`  |
| rightwidth | Width of the right swipe area     | `number`                                                     | `auto`  |
| disabled   | Whether to disabled swipe         | `boolean `                                                   | `false` |
| onClick    | Emitted when SwipeCell is clicked | `(args: { detail: { positon: SwipeCellPosition } }) => void` |
| onOpen     | Emitted when SwipeCell is opened  | `(args: Params) => void`                                     |
| onClose    | Emitted when SwipeCell is closed  | `(args: Params) => void`                                     |

### Slots

| Name    | Description                      |
| ------- | -------------------------------- |
| default | Custom content                   |
| left    | Content of left scrollable area  |
| right   | Content of right scrollable area |

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
