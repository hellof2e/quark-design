# Toast

### Intro

Black semi-transparent pop-up hint in the middle of the page, used for message notification, loading hint, operation result hint and other scenarios.

### Install

```tsx
import Toast from "quarkd/lib/toast";
```

### Text

```javascript
Toast.text("Network failed, please try again later~");
```

### Text position

use position property，can use `top`、`bottom`, `middle` is default

```javascript
Toast.text("网络失败，请稍后再试~", {
  position: "top",
});
```

### Success

```javascript
Toast.success("Success");
```

### Fail

```javascript
Toast.error("Fail");
```

### Warning

```javascript
Toast.warning("warning");
```

### Loading

```javascript
Toast.loading("Loading");
```

### Toast not disappear

```javascript
Toast.text(msg, {
  duration: 0,
});
```

### Tabbed Call

Custom loading content

```html
<quark-toast type="text" ref="tag">
  <div class="flex">
    <quark-loading type="circular" /> Restoring open orders
  </div>
</quark-toast>
```

### Close Manually

Call the `hide` method.

```tsx
Toast.hide().
// or use ths instance.
const toast = Toast.loading('use in js module');
toast.hide();
```

### Close Callback Function

```tsx
QuarkToast.test("Network failed, please try again later~", {
  close: () => alert("hello"),
});
```

### Singleton

Toast use singleton mode by default, if you need to pop multiple Toast at the same time, you can refer to the following example:

```tsx
Toast.allowMultiple();
const toast1 = Toast.text("first Toast");
const toast2 = Toast.success("second Toast");
toast1.hide();
toast2.hide();
```

## API

### Props

| Methods             | Description         | Attribute                 | Return value                                   |
| ------------------- | ------------------- | ------------------------- | ---------------------------------------------- |
| Toast.text          | Show text toast     | message ｜ `ToastOptions` | toast instance(message supports incoming HTML) |
| Toast.success       | Show success toast  | message ｜ `ToastOptions` | toast instance                                 |
| Toast.error         | Show fail toast     | message ｜ `ToastOptions` | toast instance                                 |
| Toast.warning       | Show warning toast  | message ｜ `ToastOptions` | toast instance                                 |
| Toast.hide          | Close toast         | -                         | void                                           |
| Toast.loading       | Show loading toast  | message ｜ `ToastOptions` | toast instance                                 |
| Toast.allowMultiple | open multiple toast | -                         | toast instance                                 |

### Options

| Attribute            | Description                                                    | Type                       | Default    |
| -------------------- | -------------------------------------------------------------- | -------------------------- | ---------- |
| duration             | Toast duration(ms), won't disappear if value is 0              | `number`                   | `2000ms`   |
| size                 | Custom icon size                                               | `number`                   | `40px`     |
| zIndex               | Custom zIndex                                                  | `number`                   | `9999`     |
| close                | Callback function after close                                  | `() => void`               | -          |
| loadingIconDirection | loading icon display direction, only valid when `type=loading` | `horizontal` or `vertical` | `vertical` |
| position             | Position                                                       | `top` or `bottom`          | `middle`   |

## CSS Variables

| Name                            | Description                   | Default Value                                                                        |
| ------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------ |
| `--toast-min-width`             | Minimum width                 | `120px`                                                                              |
| `--toast-max-width`             | Maximum width                 | `240px`                                                                              |
| `--toast-text-padding`          | Padding                       | `24px 16px`                                                                          |
| `--toast-font-size`             | Font size                     | `14px`                                                                               |
| `--toast-color`                 | Font color                    | `#fff`                                                                               |
| `--toast-loading-bottom`        | bottom margin of loading icon | Vertical loading is `14px`; horizontal loading is `0`                                |
| `--toast-loading-right`         | right margin of loading icon  | Vertical loading is `0`; horizontal loading is `8px`                                 |
| `--toast-position-top-distance` | the text of top distance      | When position is `top`,the value is`20%`.when position is `botton`,the value is`80%` |
