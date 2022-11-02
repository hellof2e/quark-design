# Dialog

### Intro

A modal box pops up on the page.

### Install

```tsx
import { Dialog } from '@quarkd/quark-react';
```
### Basic Usage
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
      <div onClick={showDialog}>Alert</div>
      <Dialog
        open={open}
        title="Title"
        onConfirm={handleConfirm}
        onClose={handleClose}
        content="This is a content"
      >
      </Dialog>
    </div>
  )
}
```
### Secondary button
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
      <div onClick={showDialog}>Secondary button</div>
      <Dialog
        open={open}
        title="Title"
        btnvertical={true}
        oktext='Primary button'
        canceltext='Secondary button'
        onConfirm={handleConfirm}
        onClose={handleClose}
        content="This is a conetnt"
      >
      </Dialog>
    </div>
  )
}
```

### Alert without title
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
      <div onClick={showDialog}>Alert without title</div>
      <Dialog
        open={open}
        onConfirm={handleConfirm}
        onClose={handleClose}
        content="This is a content"
      >
      </Dialog>
    </div>
  )
}
```


### Custom body | Footer | Close button
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
      <div onClick={showDialog}>Custom body | Footer | Close button</div>
      <Dialog
        open={open}
        title="Title"
      >
        <img onclick={close} src="https://m.hellobike.com/resource/helloyun/15697/JPuH-8dD23.png"
          slot="close"
          className="close"
        />
        <div>This is custom body. The code is written for people to see, with the addition of running on the machine</div>
        <div slot="footer" className="custom-footer"> Custom Footer </div>
      </Dialog>
    </div>
  )
}
```
## API

### Props

| Attribute   | Description                      | Type   | Default           |
|-------------|----------------------------------|--------|------------------|
| title       | Title                            | `string` |
| content     | Content                          | `string` |
| oktext      | Confirm button text              | `string` |
| canceltext  | Cancel button text               | `string` |
| open        | Whether to show dialog           | `boolean` | `false` |
| zindex      | Popup level                      | `number`  | `999` |
| type        | Type                             | `modal`、`confirm` | `modal`
| btnvertical | Whether the buttons are arranged vertically | `boolean` | `false` |
| nofooter    | Whether to show footer           | `boolean` | `false` |
| hideclose   | Whether to hide the close button in the upper-right corner |` boolean ` | `false` |
| maskclosable   | Whether the click mask allow to close  |` boolean ` | `false` |
| autoclose   | Whether to close click event     | `boolean` | `true` |
| hide        | When autoclose is false, the functional call manually makes the pop-up window disappear to meet the flexible asynchronous requirements` dialog.hide()`  | `() => void` |
| onConfirm   | Emitted when the confirm button is clicked | `() => void` |
| onCancel    | Emitted when the cancel button is clicked  | `() => void` |
| onClose     | Emitted when Dialog is closed    | `() => void` |

### Slots
| Name               | Description                      |
|--------------------|----------------------------------|
| slot               | Custom body                      |
| slot name=close    | Custom close button              |
| slot name=footer   | Custom footer                    |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name                            | Description               | Default Value |
| ------------------------------- | --------------------------| ------------ |
| `--dialog-width`                | Dialog width              | `320px`
| `--dialog-title-font-size`      | Dialog font size          |
| `--dialog-title-color`          | Title font color          | `#242729`
| `--dialog-title-font-family`    | Title font family         |
| `--dialog-title-line-height`    | Title line height         |
| `--dialog-title-font-weight`    | Title font weight         | `700`
| `--dialog-content-font-size`    | Content font size         | `14px`
| `--dialog-content-color`        | Content font color        | `#5A6066`
| `--dialog-content-font-weight`  | Content font weight       | `400`
| `--dialog-content-font-family`  | Content font family       | `14px`
| `--dialog-content-line-height`  | Content line height       | `20px`
| `--dialog-btn-border-radius`    | Footer button border radius | `8px`
| `--dialog-btn-font-size`        | Footer button font size     | `16px`
| `--dialog-btn-height`           | Footer button height        | `40px`
