# ImagePreview

### Intro

Basic image preview function

### Install

```tsx
import imagePreview from "quarkd/lib/imagepreview";
```

### Basic Usage

Image preview

```js
imagePreview({
  images: ["1.png", "2.png", "3.png"],
});
```

### Set Start Position

Specify the image preview position to start. The default is 1.

```js
imagePreview({
  startPosition: 3,
  images: ["1.png", "2.png", "3.png"],
});
```

### Move Event

```js
imagePreview({
  images: ["1.png", "2.png", "3.png"],
  change: (index) => Toast.text(`current location${index + 1}`),
});
```

### Close Event

```js
imagePreview({
  images: ["1.png", "2.png", "3.png"],
  close: (index) => Toast.text(`current close location${index + 1}`),
});
```

### Component Call

```html
<quark-image-preview ref="preview" :open="open" />
```

```js
export default {
  data() {
    return {
      open: false,
    };
  },
  mounted() {
    setTimeout(() => {
      //Simulate async requests
      const preview = this.$refs.preview;
      preview.setData({
        images: ["1.png", "2.png", "3.png"],
        close: () => (this.open = false),
      });
    }, 1000);
  },
  methods: {},
};
```

### Custom Navigation

Display index with change event

```html
<quark-image-preview ref="preview2" :open="open">
  <p class="my-indicator" slot="indicator">Page{{ index }}</p>
</quark-image-preview>
```

```js
export default {
  data() {
    return {
      open: false,
      index: 1,
    };
  },
  mounted() {
    setTimeout(() => {
      //Simulate async requests
      const preview = this.$refs.preview;
      preview2.setData({
        images: ["1.png", "2.png", "3.png"],
        change: (index) => (this.index = index + 1),
        close: () => (this.open = false),
      });
    }, 1000);
  },
};
```

## API

### Props

| Attribute | Description    | Type    | Default |
| --------- | -------------- | ------- | ------- |
| open      | Component call | boolean | `false` |

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
