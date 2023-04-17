# ImagePreview

### Intro

Basic image preview function

### Install

```tsx
import {
  imagepreview,
  ImagePreview,
  ImagePreviewRef,
} from "@quarkd/quark-react";
```

### Basic Usage

Image preview

```js
imagepreview({
  images: ["1.png", "2.png", "3.png"],
});
```

### Set Start Position

Specify the image preview position to start. The default is 1.

```js
imagepreview({
  startPosition: 3,
  images: ["1.png", "2.png", "3.png"],
});
```

### Move Event

```js
imagepreview({
  images: ["1.png", "2.png", "3.png"],
  change: (index) => Toast.text(`current location${index + 1}`),
});
```

### Close Event

```js
imagepreview({
  images: ["1.png", "2.png", "3.png"],
  close: (index) => Toast.text(`current close location${index + 1}`),
});
```

### Component Call

```tsx
export default () => {
  const preview = useRef<ImagePreviewRef>(null);
  const [open, setOpen] = useState(false);
  const baseUrls = [
    "https://m.hellobike.com/resource/helloyun/15697/iWS-0QI6QV.png",
    "https://m.hellobike.com/resource/helloyun/15697/1V_2oJv02t.png",
    "https://m.hellobike.com/resource/helloyun/15697/Q6t6B_noNetWork.png",
  ];

  const componentsClick = () => {
    setOpen(true);
    preview.current.setData({
      images: baseUrls,
    });
  };
  return (
    <div>
      <div onClick={componentsClick} />
      <ImagePreview ref={preview} open={open} />
    </div>
  );
};
```

### Custom Navigation

Display index with change event

```tsx
export default () => {
  const baseUrls = [
    "https://m.hellobike.com/resource/helloyun/15697/iWS-0QI6QV.png",
    "https://m.hellobike.com/resource/helloyun/15697/1V_2oJv02t.png",
    "https://m.hellobike.com/resource/helloyun/15697/Q6t6B_noNetWork.png",
  ];
  const [index, setIndex] = useState(0);
  const [open2, setOpen2] = useState(false);
  const preview2 = useRef<ImagePreviewRef>(null);

  const componentsClick2 = () => {
    setOpen2(true);
    preview2.current.setData({
      images: baseUrls,
      change: (_index) => setIndex(_index),
      close: () => setOpen2(false),
    });
  };

  return (
    <div>
      <div onClick={componentsClick2}>Custom Navigation</div>
      <ImagePreview ref={preview2} open={open2}>
        <p className="my-indicator" slot="indicator">
          Page{{ index }}{" "}
        </p>
      </ImagePreview>
    </div>
  );
};
```

## API

### Props

| Attribute | Description    | Type      | Default |
| --------- | -------------- | --------- | ------- |
| open      | Component call | `boolean` | `false` |

### Methods

| Name    | Description                    | Arguments                 |
| ------- | ------------------------------ | ------------------------- |
| setData | Set current value of ImageView | `(data: Options) => void` |

### Type definition

```js
type Options = {
  images: string[] // images array
  startPosition?: number // which means the default show position
  change?: (index: number) => void // custom navigation event
  close?: (index: number) => void // specific component close
};
```

### slot

| Name           | Description       |
| -------------- | ----------------- |
| name=indicator | Custom show pages |
