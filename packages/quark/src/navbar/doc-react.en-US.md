# Navbar

### Intro

Provide navigation function for the page

### Install

```tsx
import { Navbar } from "@quarkd/quark-react"
```

### Basic Usage
```html
<Navbar title="pageTitle"></Navbar>
<Navbar title="leftTitle" closehide className='left'></Navbar>
```

```css
.left {
    text-align: left;
    padding-left: 50px;
  }
```
### Text/Background color settings
```html
<Navbar title="pageTitle" class='bg' righttext="share"></Navbar>
<Navbar title="smallIcon" class='bg2' iconsize='18' righttext="share"></Navbar>
```
```css
.bg {
  background: linear-gradient(to right, #7ec1ff, #2197ff);
  color: #fff;
}
.bg2 {
  background: purple;
  color: #fff;
}
```
### left button customization
```html
<Navbar title="Display left custom icon">
  <div className="icon" slot="left"></div>
</Navbar>
<Navbar title="Show left text">
  <span slot="left">back</span>
</Navbar>
```

### right button customization
```html
 <Navbar title="Show right icon">
    <div className="icon" slot="right"></div>
</Navbar>
<Navbar right="share" title="text display on the right"></Navbar>
```
### Event
```tsx
export default () => {
  const onLeftClick = () => {
    Toast.text('back');
  };

  const onRightClick = () => {
    Toast.text('clear');
  };

  const close = () => {
    Toast.text('close');
  };

  return (
    <Navbar
      right="share"
      title="Click left or right"
      onLeftclick={onLeftClick}
      onRightclick={onRightClick}
      onClose={close}
    />
  )
}
```
### notice：Use within the Hello App

There is a navigation bar by default in the App (return to the +title column)，If you want to use this component, you need to use the client-side ability **hide the native navigation bar**. Take the `vue` project as an example:

HTML ：
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
```

```tsx
useEffect(() => {
  // Android side takes effect
  // Set the topmost status bar to show and hide
  Native.callNative({
    classMap: 'NavBar',
    method: 'setStatusBarColor',
    params: {
      isShowStatusBar: true, // status bar display
      isDarkFont: false, // Status bar font black or white
      colorCode: '#666', // When the status bar is displayed, the background color code
    },
  });
  // Set whether the navigation bar is displayed
  Native.callNative({
    method: 'showNaviBar',
    params: {
      isShow: false,
    },
    classMap: 'NavBar',
  });
}, [])
```

## API

### Props

| props         | Description                             | Type   | DefaultValue           |
|--------------|----------------------------------|--------|------------------|
| title        | Title | `string`                     |
| lefthide      | Whether to hidden left content               | `boolean` | `false`
| closehide      | Whether to hidden the close icon            | `boolean` | `false`
| right      | right node | `string`                   |
| safearea      | Safe zone adaptation | `boolean`                 | `false`
| iconsize      | Default icon size | `string`                   |`24px`
| onLeftclick     | Emitted when the left button is clicked                   |    `() => void `     |
| onRightclick    | Emitted when the right button is clicked               |`() => void`|
| onClose    | close click event               |      `() => void `   |


## CSS Variables

The component provides the following[CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，which can be used to customize styles.Please refer to[ConfigProvider component](#/zh-CN/guide/theme)。

| Name                     | Description                                  | Default Value          |
| ------------------------ | -----------------------------------  | --------------- |
| `--navbar-title-font-weight` | Title font weight                  |         `600`
| `--navbar-title-color` | Title color                          |         `inherit`
| `--navbar-left-padding` | Inner icon left spacing                  |         `16px`
| `--navbar-left-space`    |  Close icon left spacing                  | `40px`
| `--navbar-right-font-size` | Right font size                          |      `inherit`
| `--navbar-right-color`     | Right font color                           |        `inherit`
| `--navbar-right-padding`    |  Inner icon right spacing                            | `16px`
| `--navbar-right-font-weight`    | right font size                     | `inherit`