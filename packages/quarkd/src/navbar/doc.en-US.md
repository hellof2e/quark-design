# Navbar

### Intro

Provide navigation function for the page

### Install

```tsx
import "quarkd/lib/navbar";
```

### Basic Usage

```html
<quark-navbar title="pageTitle"></quark-navbar>
<quark-navbar title="leftTitle" closehide class="left"></quark-navbar>
```

```css
.left {
  text-align: left;
  padding-left: 50px;
}
```

### Text/Background color settings

```html
<quark-navbar title="pageTitle" class="bg" righttext="share"></quark-navbar>
<quark-navbar
  title="smallIcon"
  class="bg2"
  iconsize="18"
  righttext="share"
></quark-navbar>
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
<quark-navbar title="Display left custom icon">
  <div class="icon" slot="right"></div>
</quark-navbar>
<quark-navbar title="Show left text">
  <span slot="left">back</span>
</quark-navbar>
```

### right button customization

```html
<quark-navbar title="Show right icon">
  <div class="icon" slot="right"></div>
</quark-navbar>
<quark-navbar right="share" title="text display on the right"></quark-navbar>
```

### Event

```html
<quark-navbar
  right="share"
  title="Click left or right"
  @leftclick="onLeftClick"
  @rightclick="onRightClick"
  @close="close"
>
</quark-navbar>
```

### notice：Use within the Hello App

There is a navigation bar by default in the App (return to the +title column)，If you want to use this component, you need to use the client-side ability **hide the native navigation bar**. Take the `vue` project as an example:

Setting in HTML：

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, viewport-fit=cover"
/>
```

```tsx
mounted(){
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
}
```

## API

### Props

| props     | Description                      | Type      | DefaultValue |
| --------- | -------------------------------- | --------- | ------------ |
| title     | Title                            | `string`  |
| lefthide  | Whether to hidden left content   | `boolean` | `false`      |
| closehide | Whether to hidden the close icon | `boolean` | `false`      |
| right     | right node                       | `string`  |
| safearea  | Safe zone adaptation             | `boolean` | `false`      |
| iconsize  | Default icon size                | `string`  | `24px`       |

### Events

| Event      | Description                              | Type          |
| ---------- | ---------------------------------------- | ------------- |
| leftclick  | Emitted when the left button is clicked  | `() => void ` |
| rightclick | Emitted when the right button is clicked | `() => void`  |
| close      | close click event                        | `() => void`  |

## CSS Variables

The component provides the following[CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，which can be used to customize styles.Please refer to[ConfigProvider component](#/zh-CN/guide/theme)。

| Name                         | Description              | Default Value |
| ---------------------------- | ------------------------ | ------------- |
| `--navbar-title-font-weight` | Title font weight        | `600`         |
| `--navbar-title-color`       | Title color              | `inherit`     |
| `--navbar-left-padding`      | Inner icon left spacing  | `16px`        |
| `--navbar-left-space`        | Close icon left spacing  | `40px`        |
| `--navbar-right-font-size`   | Right font size          | `inherit`     |
| `--navbar-right-color`       | Right font color         | `inherit`     |
| `--navbar-right-padding`     | Inner icon right spacing | `16px`        |
| `--navbar-right-font-weight` | right font size          | `inherit`     |
