# Toast

### Intro

Black semi-transparent pop-up hint in the middle of the page, used for message notification, loading hint, operation result hint and other scenarios.

### Install

```tsx
import { Toast }from "@quarkd/quark-react";
```

### Text
```javascript
Toast.text('Network failed, please try again later~');
```

### Success

```javascript
Toast.success('Success');
```

### Fail

```javascript
Toast.error('Fail');
```

### Warning

```javascript
Toast.warning('Warning');
```

### Loading

```javascript
Toast.loading('Loading');
```

### Toast not disappear

```javascript
Toast.text(msg,{
  duration:0
});
```
### Close Manually

Call the `hide` method.
```js
Toast.hide();
// or use ths instance.
const toast = Toast.loading('use in js module');
toast.hide();
```

### Close Callback Function

```tsx
Toast.text('Network failed, please try again later~', {
    close: () => alert('hello')
});
```
### Singleton
Toast use singleton mode by default, if you need to pop multiple Toast at the same time, you can refer to the following example:
```tsx
Toast.allowMultiple();
const toast1 = Toast.text('first Toast');
const toast2 = Toast.success('second Toast');
toast1.hide();
toast2.hide();
```


## API

### Props

| Methods       | Description         | Attribute | Return value   |
|---------------|---------------------|-----------| ---------- |
| Toast.text    | Show text toast     | message   ｜ `ToastOptions` | toast instance(message supports incoming HTML) |
| Toast.success | Show success toast  | message   ｜ `ToastOptions` | toast instance |
| Toast.error   | Show fail toast     | message   ｜ `ToastOptions` | toast instance |
| Toast.warning | Show warning toast  | message   ｜ `ToastOptions` | toast instance |
| Toast.hide    | Close toast         | -         | void            |
| Toast.loading | Show loading toast  | message   ｜ `ToastOptions` | toast instance |
| Toast.allowMultiple | open multiple toast | -   | toast instance  |

### ToastOptions 数据结构

| Attribute | Description                                       | Type       |  Default  |
|-----------|---------------------------------------------------|------------| ----------|
| duration  | Toast duration(ms), won't disappear if value is 0 | `number`   | `2000ms`  |
| size      | Custom icon size                                  | `number`   | `40px`    |
| zIndex    | Custom zIndex                                     | `number`   | `9999`    |
| close     | Callback function after close                     | `()=>void` | -         |
| textWithLoading     |         Whether to display the small loading icon in front of the text, only valid when `type='text'`         |       `boolean`   | `false` |



## CSS Variables

| Name                    | Description                 | Default Value |
|-------------------------|-----------------------------|---------------|
| `--toast-min-width`     | Minimum width               | `120px`       |
| `--toast-max-width`     | Maximum width               | `240px`       |
| `--toast-text-padding`  | Padding                     | `24px 16px`   |
| `--toast-font-size`     | Font size                   | `14px`        |
| `--toast-color`         | Font color                  | `#fff`        |
| `--toast-mini-loading-right` | Space between small loading icon and text | `16px` |
