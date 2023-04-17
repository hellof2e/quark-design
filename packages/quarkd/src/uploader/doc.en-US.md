# Uploader

### Intro

Provide upload function

### Install

```tsx
import "quarkd/lib/uploader";
```

### Basic Usage

```html
<quark-uploader :preview="false" @afterread="afterRead"></quark-uploader>
```

```js
function afterread(file) {
  console.log(file.file.name);
}
```

### Preview File

Preview is enabled by default

```html
<quark-uploader preview ref="preview"></quark-uploader>
```

```js
mounted() {
  this.$refs.preview.
  setPreview(['https://img.yzcdn.cn/vant/leaf.jpg', 'https://img.yzcdn.cn/vant/leaf.jpg');
}
```

### Max Count

Hide redundant and upload button when the number of uploaded files is more than max count.

```html
<quark-uploader maxcount="2" preview></quark-uploader>
```

### Max Size

Max size(B), 1M can be set to 1024 \* 1024

```html
<quark-uploader maxsize="1024" @oversize="oversize"></quark-uploader>
```

```js
oversize() {
  console.log('File size cannot exceed 1kB')
}
```

### Custom Upload Area

```html
<quark-uploader preview>
  <div slot="uploader">Upload files</div>
</quark-uploader>
```

### Before Upload

By passing in the setBeforeUpload function, get boolean arguments. Returning false means upload is prevented. Supports returning Promise.

```js
mounted() {
  this.$refs.before.setBeforeUpload(this.beforeUpload)
},
beforeUpload(files) {
  const r = files.every(file => file.type === 'image/jpg');
  if(!r) {
    console.log('Please upload jpg format image');
    return false
  };
  return true;
},
```

### Disable Uploader

```html
<quark-uploader preview disabled></quark-uploader>
```

## API

### Props

| Attribute  | Description                                            | Type                                       | Default            |
| ---------- | ------------------------------------------------------ | ------------------------------------------ | ------------------ |
| accept     | Accepted file type                                     | `string`                                   | `image/*`          |
| multiple   | Whether to enable multiple selection pictures          | `boolean`                                  | `true`             |
| preview    | Whether to show preview                                | `boolean`                                  | `false`            |
| capture    | Capture, can be set to boolean (call camera directly ) | `false`                                    |
| maxcount   | Max count of image                                     | `string`                                   |
| maxsize    | Max size of file                                       | `string`                                   | `26214400 （25M）` |
| disabled   | Whether to disabled the upload                         | `boolean`                                  | `false`            |
| hidedelete | Hide delete icon                                       | `boolean`                                  | `false`            |
| readonly   | ReadOnly                                               | `boolean`                                  | `false`            |
| afterread  | Emitted when upload files.                             | `(file: file or file[]) => void`           |                    |
| oversize   | Emitted when file size over limit, use with maxsize    | `(items: fiel[], maxsize: string) => void` |                    |
| onremove   | Emitted when remove files                              |

### slot

| Name        | Description             |
| ----------- | ----------------------- |
| name=loader | Custom upload Component |

### Methods

| methods      | Description                                                        | Type                              |
| ------------ | ------------------------------------------------------------------ | --------------------------------- |
| beforeUpload | Before upload, can be used as uploader.beforeUpload.(fn)           | `(fn: () => boolean) => void`     |
| setPreview   | Initialize preview data, can be used as uploader.setPreview.(data) | `(url: string[]) => void`         |
| beforeDelete | Before delete uploader.beforeDelete(fn)                            | `(file, {index: number}) => void` |
| closePreview | close preview modal                                                |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name                            | Description                             | Default        |
| ------------------------------- | --------------------------------------- | -------------- |
| `--uploader-width`              | Width of upload and preview components  | `93px`         |
| `--uploader-height`             | Height of upload and preview components | `93px`         |
| `--uploader-border-width`       | Border width of upload component        | `1px`          |
| `--uploader-border-color`       | Border color of upload component        | `#E1E6EB`      |
| `--uploader-border-style`       | Style of upload component               | `dashed`       |
| `--uploader-radius`             | Border radius of upload component       | `4px`          |
| `--uploader-margin`             | Bottom right margin of upload component | `6px`          |
| `--uploader-delete-wrap-width`  | Preview delete button width             | `14px`         |
| `--uploader-delete-wrap-height` | Preview delete button height            | `14px`         |
| `--uploader-delete-background`  | Delete component background color       | `rgb(0, 0, 0)` |
| `--uploader-delete-color`       | Delete component icon color             | `#fff `        |
| `--uploader-delete-size`        | Delete component icon size              | `10px`         |
