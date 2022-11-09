# Uploader

### Intro

Provide upload function

### Install

```tsx
import { Uploader,UploaderRef } "quark-react";
```

### Basic Usage

```tsx
export default () => {
  const afterread = (file) => {
    console.log(file.file.name);
  };
  return <Uploader onAfterread={afterRead} />;
};
```

### Preview File

Preview is enabled by default

```tsx
export default () => {
  const preview = useRef<UploaderRef>(null);
  const previewUrls = [
    "https://img.yzcdn.cn/vant/leaf.jpg",
    "https://m.hellobike.com/resource/helloyun/15697/iWS-0QI6QV.png",
  ];
  useEffect(() => {
    preview.current.setPreview(previewUrls);
  }, []);
  return <Uploader ref={preview} preview />;
};
```

### Max Count

Hide redundant and upload button when the number of uploaded files is more than max count.

```html
<Uploader maxcount="2" preview />
```

### Max Size

Max size(B), 1M can be set to 1024 \* 1024

```tsx
export default () => {
  const oversize = useRef<UploaderRef>(null);

  const oversizeFn = () => {
    console.log("File size cannot exceed 1kB");
  };

  return <Uploader maxsize="1024" ref={oversize} onOversize={oversizeFn} />;
};
```

### Custom Upload Area

```html
<Uploader>
  <div slot="uploader">Upload files</div>
</Uploader>
```

### Before Upload

setBeforeUpload return Boolean, false blocking upload.

```tsx
export default () => {
  const before = useRef<UploaderRef>(null);

  const beforeUpload = (files) => {
    const r = files.every((file) => file.type === "image/jpg");
    if (!r) {
      console.log("Please upload jpg format image");
      return false;
    }
    return true;
  };

  useEffect(() => {
    before.current.setBeforeUpload(beforeUpload);
  }, []);

  return <Uploader preview ref={before} />;
};
```

### Disable Uploader

```html
<Uploader disabled></Uploader>
```

### Read only preview mode

```html
<Uploader preview readonly />
```

## API

### Props

| Attribute   | Description                                            | Type                                     | Default            |
| ----------- | ------------------------------------------------------ | ---------------------------------------- | ------------------ |
| accept      | Accepted file type                                     | `string `                                | `image/*`          |
| multiple    | Whether to enable multiple selection pictures          | `boolean `                               | `true`             |
| preview     | Whether to show preview                                | `boolean`                                | `false`            |
| capture     | Capture, can be set to boolean (call camera directly ) | `false`                                  |
| maxcount    | Max count of image                                     | `string `                                |
| maxsize     | Max size of file                                       | `string `                                | `26214400 （25M）` |
| disabled    | Whether to disabled the upload                         | `boolean `                               | `false`            |
| hidedelete  | Hide delete icon                                       | `boolean`                                | `false`            |
| readonly    | ReadOnly                                               | `boolean`                                | `false`            |
| onAfterread | Emitted when upload files.                             | `（file: file or file[]）=>void`         |                    |
| onOversize  | Emitted when file size over limit, use with maxsize    | `(items: fiel[], maxsize: string)=>void` |                    |

### slot

| Name          | Description             |
| ------------- | ----------------------- |
| name=uploader | Custom upload Component |

### Methods

| methods         | Description                                                       | Type                              |
| --------------- | ----------------------------------------------------------------- | --------------------------------- |
| setBeforeUpload | Before upload, can be used as uploader.setBeforeUpload(fn)        | `(fn: () => boolean) => void`     |
| setPreview      | Initialize preview data, can be used as uploader.setPreview(data) | `(url: string[]) => void`         |
| beforeDelete    | Before delete, can be used as uploader.beforeDelete(fn)           | `(file, {index: number}) => void` |
| closePreview    | close preview modal                                               |                                   |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)， which can be used to customize styles. Please refer to[ConfigProvider component](#/zh-CN/guide/theme)。

| Name                            | Description                             | Default        |
| ------------------------------- | --------------------------------------- | -------------- |
| `--uploader-width`              | Width of upload and preview components  | `93px`         |
| `--uploader-height`             | Height of upload and preview components | `93px`         |
| `--uploader-border-width`       | Border width of upload component        | `1px`          |
| `--uploader-border-color`       | Border color of upload component        | `#E1E6EB`      |
| `--uploader-border-style`       | Style of upload component               | `dashed`       |
| `--uploader-radius`             | Border radius of upload component       | `4px`          |
| `--uploader-margin`             | Bottom right margin of upload component | `6px`          |
| `--uploader-delete-wrap-width`  | Preview delete button width             | `14px `        |
| `--uploader-delete-wrap-height` | Preview delete button height            | `14px`         |
| `--uploader-delete-background`  | Delete component background color       | `rgb(0, 0, 0)` |
| `--uploader-delete-color`       | Delete component icon color             | `#fff`         |
| `--uploader-delete-size`        | Delete component icon size              | `10px`         |
