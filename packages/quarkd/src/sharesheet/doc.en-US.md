# ShareSheet

### Intro

ShareSheet

### Install

```tsx
import ShareSheet from "quarkd/lib/sharesheet";
```

### Basic Usage

```html
<div @click="showShareSheet()">click</div>
```

```js
import ShareSheet from "quarkd/lib/sharesheet";
export default {
  methods: {
    showShareSheet() {
      ShareSheet({
        options: [
          {
            name: "WeChat",
            icon: "https://m.hellobike.com/resource/helloyun/16682/LY3mn00VTX.png",
          },
          {
            name: "WeChat Moments",
            icon: "https://m.hellobike.com/resource/helloyun/16682/QOiMPs9BLj.png",
          },
          {
            name: "QQ",
            icon: "https://m.hellobike.com/resource/helloyun/16682/J4TWX9Jpca.png",
          },
          {
            name: "QQ space",
            icon: "https://m.hellobike.com/resource/helloyun/16682/wG7wG2CHQx.png",
          },
          {
            name: "WeiBo",
            icon: "https://m.hellobike.com/resource/helloyun/16682/vt_vyR3M8I.png",
          },
          {
            name: "QR code",
            icon: "https://m.hellobike.com/resource/helloyun/16682/hvu4xjJpNY.png",
          },
        ],
        select: (index, action) => {},
        cancel: () => {},
        close: () => {},
      });
    },
  },
};
```

### Custom Title Style

```html
<div @click="showShareSheet()">click</div>
```

```js
<script>
import ShareSheet from 'quarkd/lib/sharesheet';
export default {
  methods: {
    showShareSheet() {
      ShareSheet({
        titleColor: 'red',
        titleFontSize: 20,
         options: [
          { name: 'WeChat', icon:  'https://m.hellobike.com/resource/helloyun/16682/LY3mn00VTX.png'},
          { name: 'WeChat Moments', icon:  'https://m.hellobike.com/resource/helloyun/16682/QOiMPs9BLj.png'},
          { name: 'QQ', icon:  'https://m.hellobike.com/resource/helloyun/16682/J4TWX9Jpca.png'},
          { name: 'QQ space', icon:  'https://m.hellobike.com/resource/helloyun/16682/wG7wG2CHQx.png'},
          { name: 'WeiBo', icon:  'https://m.hellobike.com/resource/helloyun/16682/vt_vyR3M8I.png'},
          { name: 'QR code', icon:  'https://m.hellobike.com/resource/helloyun/16682/hvu4xjJpNY.png'},
        ],
        select: (index, action) => {},
        cancel: () => {},
        close: () => {}
      });
    },
 }
}
</script>
```

### Custom Cancel Button Style

```html
<div @click="showShareSheet()">click</div>
```

```js
import ShareSheet from "quarkd/lib/sharesheet";
export default {
  methods: {
    showShareSheet() {
      ShareSheet({
        cancelColor: "red",
        options: [
          {
            name: "WeChat",
            icon: "https://m.hellobike.com/resource/helloyun/16682/LY3mn00VTX.png",
          },
          {
            name: "WeChat Moments",
            icon: "https://m.hellobike.com/resource/helloyun/16682/QOiMPs9BLj.png",
          },
          {
            name: "QQ",
            icon: "https://m.hellobike.com/resource/helloyun/16682/J4TWX9Jpca.png",
          },
          {
            name: "QQ space",
            icon: "https://m.hellobike.com/resource/helloyun/16682/wG7wG2CHQx.png",
          },
          {
            name: "WeiBo",
            icon: "https://m.hellobike.com/resource/helloyun/16682/vt_vyR3M8I.png",
          },
          {
            name: "QR code",
            icon: "https://m.hellobike.com/resource/helloyun/16682/hvu4xjJpNY.png",
          },
        ],
        select: (index, action) => {},
        cancel: () => {},
        close: () => {},
      });
    },
  },
};
```

## API

### Props

| Prop           | Description                  | Type                                      | Default   |
| -------------- | ---------------------------- | ----------------------------------------- | --------- |
| options        | option button                | `Option [] `                              | `require` |
| titleColor     | titleColor                   | `string `                                 | `#969799` |
| titleFontSize  | titleFontSize                | `number `                                 | `14`      |
| cancelColor    | cancel Button Color          | `string`                                  | `#646566` |
| cancelFontSize | cancel Button Text fontSize  | `number `                                 | `16`      |
| zIndex         | z-index                      | `number`                                  | `999`     |
| select         | Option checked callback      | `(index: number, action: Option) => void` |           |
| cancel         | Cancel button click callback | `() => void`                              |           |
| close          | Mask click callback          | `() => void`                              |           |

### The Data Structure Of Option

```js
type Option = {
  name: string,
  icon: string,
};

type ShareSheetParams = {
  options: Option[],
  titleColor?: string,
  titleFontSize?: number,
  cancelColor?: string,
  cancelFontSize?: number,
  select: (index: number, action: Option) => void,
  cancel?: () => void,
  close?: () => void,
  zIndex?: number,
};
```
