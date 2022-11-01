# Dialog 弹窗

### 介绍

模态对话框。

### 安装使用

```tsx
import { Dialog } from '@quarkd/quark-react';
```
### 基础弹窗
```tsx
export default () => {
  const [open, setOpen] = useState(false)
  const showDialog = () => {
    setOpen(true)
  }

  const handleConfirm = () => {
    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <div onClick={showDialog}>基础弹窗</div>
      <Dialog
        open={open}
        title="基础弹窗"
        onConfirm={handleConfirm}
        onClose={handleClose}
        content="代码是写出来给人看的，附带能在机器上运行"
      >
      </Dialog>
    </div>
  )
}
```
### 次要按钮
```tsx
export default () => {
  const [open, setOpen] = useState(false)
  const showDialog = () => {
    setOpen(true)
  }

  const handleConfirm = () => {
    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <div onClick={showDialog}>次要按钮</div>
      <Dialog
        open={open}
        title="次要按钮"
        btnvertical={true}
        oktext='主要按钮'
        canceltext='次要按钮'
        onConfirm={handleConfirm}
        onClose={handleClose}
        content="弹窗的内容下是两个具体的操作按钮，点击后会跳转到对应的页面，所以需要右上角关闭按钮，让用户可以关闭弹窗"
      >
      </Dialog>
    </div>
  )
}
```

### 无标题弹窗
```tsx
export default () => {
  const [open, setOpen] = useState(false)
  const showDialog = () => {
    setOpen(true)
  }

  const handleConfirm = () => {
    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <div onClick={showDialog}>无标题弹窗</div>
      <Dialog
        open={open}
        onConfirm={handleConfirm}
        onClose={handleClose}
        content="代码是写出来给人看的，附带能在机器上运行"
      >
      </Dialog>
    </div>
  )
}
```


### 自定义 body | Footer | 关闭按钮
```tsx
export default () => {
  const [open, setOpen] = useState(false)

  const showDialog = () => {
    setOpen(true)
  }

  const close = () => {
    setOpen(false)
  }

  return (
    <div>
      <div onClick={showDialog}>自定义 body | Footer | 关闭按钮</div>
      <Dialog
        open={open}
        title="自定义 body | Footer | 关闭按钮"
      >
        <img onclick={close} src="https://m.hellobike.com/resource/helloyun/15697/JPuH-8dD23.png"
          slot="close"
          className="close"
        />
        <div>我是自定义body,代码是写出来给人看的，附带能在机器上运行</div>
        <div slot="footer" className="custom-footer"> 自定义footer </div>
      </Dialog>
    </div>
  )
}
```

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|-------------|----------------------------------|--------|------------------|
| title       | 标题                              | `string`      |
| content     | 内容                              | `string`       |
| oktext      | 确定按钮                          | `string`                   |
| canceltext  | 取消按钮                          | `string`               |
| open        | 弹窗状态                          | `boolean`                |      `false`       |
| zindex      | 弹窗层级                          | `number`                |      `999`       |
| type        | 类型                              | `modal`、`confirm`    | `modal`
| btnvertical | 按钮是否垂直，默认水平               | `boolean`                |      `false`       |
| nofooter    | 是否显示底部                       | `boolean`                |      `false`       |
| hideclose   | 是否隐藏右上角关闭按钮               |` boolean `               |      `false`      |
| maskclosable | 点击蒙层是否允许关闭                 |` boolean `               |      `false`      |
| autoclose   | 点击事件是否默认关闭                 | `boolean`                |   `true`          |
| hide        | autoclose 为 false 时候函数式调用手动让弹窗消失, 满足灵活异步需求 dialog.hide()  |`() => void`|
| onConfirm   | 确定回调函数                       | `() => void`  |
| onCancel    | 取消回调函数                       | `() => void` |
| onClose     | 点击关闭图标回调函数                | `() => void`   |

### Slots
| 名称                | 说明                             |
|--------------------|----------------------------------|
| slot               | 自定义弹窗 body                   |
| slot name=close    | 自定义关闭图标包括位置、大小、以及类型 |
| slot name=footer   | 自定义脚部                        |

## 样式变量

组件提供了以下[CSS变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                             | 说明                       | 默认值        |
| ------------------------------- | -------------------------- | ------------ |
| `--dialog-width`                | 弹框宽度                    | `320px`
| `--dialog-title-font-size`      | 标题字体大小                 |
| `--dialog-title-color`          | 标题字体颜色                 | `#242729`
| `--dialog-title-font-family`    | 标题字体                    |
| `--dialog-title-line-height`    | 标题行高                    |
| `--dialog-title-font-weight`    | 标题字重                    | `700`
| `--dialog-content-font-size`    | 内容字体大小                 | `14px`
| `--dialog-content-color`        | 内容字体颜色                 | `#5A6066`
| `--dialog-content-font-weight`  | 内容字重                    | `400`
| `--dialog-content-font-family`  | 内容字体                    | `14px`
| `--dialog-content-line-height`  | 内容行高                    | `20px`
| `--dialog-btn-border-radius`    | 底部按钮圆角                 | `8px`
| `--dialog-btn-font-size`        | 底部按钮字体大小              | `16px`
| `--dialog-btn-height`           | 底部按钮高度                 | `40px`
