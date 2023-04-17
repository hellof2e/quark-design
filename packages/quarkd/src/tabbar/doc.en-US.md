# Tabbar

### Introduce

Used to switch between different pages.

### Install

If use quark-icons, please install: `npm install --save quark-icons`.

```tsx
import "quarkd/lib/tabbar";

// import icons
import "@quarkd/icons/lib/home";
import "@quarkd/icons/lib/user";
import "@quarkd/icons/lib/tel";
```

### Basic Usage

```html
<quark-tabbar>
  <quark-tabbar-item label="home">
    <quark-icon-home slot="icon" size="20" />
  </quark-tabbar-item>
  <quark-tabbar-item label="user">
    <quark-icon-user slot="icon" size="20" />
  </quark-tabbar-item>
  <quark-tabbar-item label="tel">
    <quark-icon-tel slot="icon" size="20" />
  </quark-tabbar-item>
</quark-tabbar>
```

### Match by name

```html
<quark-tabbar value="tel">
  <quark-tabbar-item label="home" name="home">
    <quark-icon-home slot="icon" size="20" />
  </quark-tabbar-item>
  <quark-tabbar-item label="user" name="user">
    <quark-icon-user slot="icon" size="20" />
  </quark-tabbar-item>
  <quark-tabbar-item label="tel" name="tel">
    <quark-icon-tel slot="icon" size="20" />
  </quark-tabbar-item>
</quark-tabbar>
```

### Show Badge

```html
<quark-tabbar value="user">
  <quark-tabbar-item badgecontent="20" label="home">
    <quark-icon-home slot="icon" size="20" />
  </quark-tabbar-item>
  <quark-tabbar-item label="user">
    <quark-icon-user slot="icon" size="20" />
  </quark-tabbar-item>
  <quark-tabbar-item label="tel">
    <quark-icon-tel slot="icon" size="20" />
  </quark-tabbar-item>
</quark-tabbar>
```

### Custom Icon

```html
<quark-tabbar @change="onChange1">
  <quark-tabbar-item badgecontent="20" label="home">
    <img
      slot="icon"
      style="height: 20px;"
      :src="activeIndex === '0' ? img1:img2 "
    />
  </quark-tabbar-item>
  <quark-tabbar-item icon="user" label="user">
    <quark-icon-user slot="icon" size="20" />
  </quark-tabbar-item>
  <quark-tabbar-item icon="tel" label="tel">
    <quark-icon-tel slot="icon" size="20" />
  </quark-tabbar-item>
</quark-tabbar>
<script>
  export default {
    data() {
      return {
        activeIndex: 0,
        img1: "https://m.hellobike.com/resource/helloyun/18625/MJ7Tr_src=http___inews.gtimg.com_newsapp_bt_0_12536239782_641.jpg&refer=http___inews.gtimg.jpeg",
        img2: "https://m.hellobike.com/resource/helloyun/18625/WUu02_img.png",
      };
    },
    methods: {
      onChange1({ detail }) {
        this.activeIndex = detail.value;
      },
    },
    mounted() {},
  };
</script>
```

### Custom Color

```html
<quark-tabbar inactivecolor="#000" activecolor="#ee0a24">
  <quark-tabbar-item label="home">
    <quark-icon-home slot="icon" size="20" />
  </quark-tabbar-item>
  <quark-tabbar-item label="user">
    <quark-icon-user slot="icon" size="20" />
  </quark-tabbar-item>
  <quark-tabbar-item label="tel">
    <quark-icon-tel slot="icon" size="20" />
  </quark-tabbar-item>
</quark-tabbar>
```

### Change Event

```html
<quark-tabbar @change="onChange">
  <quark-tabbar-item label="home">
    <quark-icon-home slot="icon" size="20" />
  </quark-tabbar-item>
  <quark-tabbar-item label="user">
    <quark-icon-user slot="icon" size="20" />
  </quark-tabbar-item>
  <quark-tabbar-item label="tel">
    <quark-icon-tel slot="icon" size="20" />
  </quark-tabbar-item>
</quark-tabbar>
```

```js
onChange({detail}) {
  Toast.text(`currently selected: ${detail.value}`);
}
```

## API

### Quark-tabbar Props

| Attribute     | Description                      | Type      | Default Value |
| ------------- | -------------------------------- | --------- | ------------- |
| fixed         | Whether to fixed bottom          | `boolean` | `true `       |
| inactivecolor | Color of inactive tab item       | `string`  | `#879099`     |
| activecolor   | Color of active tab item         | `string ` | `#0088FF`     |
| value         | name or index of active tab item | `string`  | `0`           |

### Quark-tabbar-item Props

| Attribute    | Description                            | Type     | Default Value |
| ------------ | -------------------------------------- | -------- | ------------- |
| label        | Label name, used to show               | `string` |
| name         | Label value, as the matched identifier | `string` |               |
| badgecontent | Content of the badge                   | `string` |               |

### Quark-tabbar Event

| Event  | Description                      | Callback Arguments                                                |
| ------ | -------------------------------- | ----------------------------------------------------------------- |
| change | Emitted when changing active tab | `{e:{detail: {value: The selected name or index value}}} => void` |

### slots

| Name | Description | Arguments |
| ---- | ----------- | --------- |
| icon | icon        |           |

## CSS Variables

The component provides the following[CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，which can be used to customize styles.Please refer to[Theme customization](#/zh-CN/guide/theme)。

| Name                  | Description         | Default Value                             |
| --------------------- | ------------------- | ----------------------------------------- |
| `--tabbar-z-index`    | tabbar z-index      | `1 `                                      |
| `--tabbar-box-shadow` | tabbar upper shadow | `0px -2px 8px 0px rgba(36, 39, 41, 0.08)` |
| `--tabbar-font-size`  | tabbar font size    | `10px`                                    |
| `--tabbar-height`     | tabbar height       | `56px `                                   |
