# Popupextra

### Intro

Used to display some content.

### Install

```tsx
import "quarkd/lib/popupextra";
```

### Basic Usage

```html
<quark-popupextra
  title="Title"
  subtitle="Subtitle"
  :open="open"
  @close="open = false"
>
  <div class="popup-body">
    <h4 class="">Why We Love Dunhuang</h4>
    <p>Text text text.</p>
  </div>
</quark-popupextra>
```

```jsx
<script>
import 'quarkd/lib/popupextra';

export default {
  data() {
    return {
     open: false,
    }
   },
  methods: {
   showPopup() {
     this.open = true;
   },
 }
}
</script>
```

### Custom Title

Set `slot='title'` to replace `title`.

```html
<quark-popupextra subtitle="Sub title" :open="open" @close="open = false">
  <div slot="title"><span style="color: red">Custom</span>Title</div>

  <div class="popup-body">
    <h4 class="">Why We Love Dunhuang</h4>
    <p>Text text text.</p>
  </div>
</quark-popupextra>
```

### Close popup

```html
<quark-popupextra :open="open" @closed="handleClose()" />

// handleClose this.open = false
```

## API

### Props

| Attribute | Description                                                | Type             | Default   |
| --------- | ---------------------------------------------------------- | ---------------- | --------- |
| open      | Whether to show popup                                      | `boolean`        | `require` |
| title     | Title                                                      | `string`         |
| subtitle  | Subtitle                                                   | `string`         |
| hideclose | Whether to hide the close button in the upper-right corner | `boolean`        | `false`   |
| round     | Whether to use round popup                                 | `boolean`        | `true`    |
| safearea  | Whether to turn on the bottom safe area adaptation         | `boolean`        | `false`   |
| zindex    | Popup level                                                | `number、string` | -         |

### Event

| Name  | Description                  | Type          |
| ----- | ---------------------------- | ------------- |
| close | Emitted when popup is closed | `（）=> void` |

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name                                 | Description          | Default Value                                 |
| ------------------------------------ | -------------------- | --------------------------------------------- |
| `--popup-extra-title-color`          | Title color          | `#242729`                                     |
| `--popup-extra-subtitle-color`       | Subtitle color       | `#879099`                                     |
| `--popup-extra-mask-color`           | Mask color           | `rgba(0, 0, 0, 0.7)`                          |
| `--popup-extra-z-index`              | z-index              | `999`                                         |
| `--popup-extra-max-height`           | Content max-height   | `90%`                                         |
| `--popup-extra-min-height`           | Content min-height   | -                                             |
| `--popup-extra-border-radius`        | Popup border-radius  | `16px`                                        |
| `--popup-extra-title-font-family`    | Title font-family    | `PingFangSC-Medium, PingFang SC, sans-serif`  |
| `--popup-extra-subtitle-font-family` | Subtitle font-family | `PingFangSC-Regular, PingFang SC, sans-serif` |
