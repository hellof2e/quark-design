# NativeUploader 上传组件

### 介绍提供给客户端的上传功能

### 安装使用

```tsx
import "quarkd/lib/nativeuploader";
```

### 基础用法
```html
<quark-native-uploader ref='nativeUpload' />
```
```js
mounted() {
  this.$refs.nativeUpload.
  setPreview(['https://img.yzcdn.cn/vant/leaf.jpg', 'https://img.yzcdn.cn/vant/leaf.jpg');
}
```
### 只读预览模式
```html
<quark-native-uploader  readonly />
```

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| readonly     |  只读模式        | `boolean`   | `false`|
| click     |   上传后回调                  |  `（file: file or file[]）=>void` |

### slot
| 名称         | 说明                             |
|--------------|----------------------------------|
| name=uploader  | 自定义上传组件         |            |


### Methods

| 名称         | 说明                             | 类型   |
|--------------|----------------------------------|--------|
| setPreview     |   初始化预览数据，用法 uploader.setPreview(data)                   |    `(url: string[]) => void`      |
| beforeDelete     |   删除前置，用法 uploader.beforeDelete(fn)                   |    `(file, {index: number}) => void`      |
|closePreview| 手动关闭预览弹窗方法  | |

## 样式变量

组件提供了以下[CSS变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                     | 说明                                  | 默认值          | 
| ------------------------ | -----------------------------------  | --------------- |
| `--uploader-width` | 上传、预览组件的宽度                        |   `93px`
| `--uploader-height` | 上传、预览组件的高度                           |      `93px`|
| `--uploader-border-width` | 上传组件的边框                     |      `1px`  |
| `--uploader-border-color` | 上传组件的边框色                      |    `#E1E6EB`   |
| `--uploader-border-style` | 上传组件的风格                    |      `dashed`  |
| `--uploader-radius` | 上传、预览组件的边框                   |      `4px`  |
| `--uploader-margin` | 上传、预览组件右下间距                  |      `6px`  |
| `--uploader-delete-wrap-width`  | 预览删除按钮宽度                 |      `14px ` |
| `--uploader-delete-wrap-height`  | 预览删除按钮高度                         |      `14px`  |
| `--uploader-delete-background` | 删除组件的背景色                  |   `rgb(0, 0, 0)`  |
| `--uploader-delete-color` | 删除组件图标颜色                 |      `#fff`  |
| `--uploader-delete-size` | 删除组件 图标大小                |      `10px`  |

