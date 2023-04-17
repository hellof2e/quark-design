# Tabbar

### Introduce

Used to switch between different pages.

### Install

If use quark-icons, please install: `npm install --save quark-icons`.

```tsx
import { Tabbar, TabbarItem } from "@quarkd/quark-react";

// import icons
import "@quarkd/icons/lib/home";
import "@quarkd/icons/lib/user";
import "@quarkd/icons/lib/tel";
```

### Basic Usage

```html
<Tabbar>
  <TabbarItem label="home">
    <quark-icon-home slot="icon" size="20" />
  </TabbarItem>
  <TabbarItem label="user">
    <quark-icon-user slot="icon" size="20" />
  </TabbarItem>
  <TabbarItem label="tel">
    <quark-icon-tel slot="icon" size="20" />
  </TabbarItem>
</Tabbar>
```

### Match by name

```html
<Tabbar value="tel">
  <TabbarItem label="home" name="home">
    <quark-icon-home slot="icon" size="20" />
  </TabbarItem>
  <TabbarItem label="user" name="user">
    <quark-icon-user slot="icon" size="20" />
  </TabbarItem>
  <TabbarItem label="tel" name="tel">
    <quark-icon-tel slot="icon" size="20" />
  </TabbarItem>
</Tabbar>
```

### Show Badge

```html
<Tabbar value="user">
  <TabbarItem badgecontent="20" label="home">
    <quark-icon-home slot="icon" size="20" />
  </TabbarItem>
  <TabbarItem label="user">
    <quark-icon-user slot="icon" size="20" />
  </TabbarItem>
  <TabbarItem label="tel">
    <quark-icon-tel slot="icon" size="20" />
  </TabbarItem>
</Tabbar>
```

### Custom Color

```html
<Tabbar inactivecolor="#000" activecolor="#ee0a24">
  <TabbarItem label="home">
    <quark-icon-home slot="icon" size="20" />
  </TabbarItem>
  <TabbarItem label="user">
    <quark-icon-user slot="icon" size="20" />
  </TabbarItem>
  <TabbarItem label="tel">
    <quark-icon-tel slot="icon" size="20" />
  </TabbarItem>
</Tabbar>
```

### Custom Icon

```js
export default () => {
  const img1 = "https://m.hellobike.com/resource/helloyun/18625/MJ7Tr_src.jpeg";
  const img2 = "https://m.hellobike.com/resource/helloyun/18625/WUu02_img.png";
  const [activeIndex, setActiveIndex] = useState(0);

  const onChange = ({ detail }) => {
    setActiveIndex(detail.value);
    console.log(`currently selected：${detail.value}`);
  };

  return (
    <div className="demo no-padding scope-list">
      <Tabbar onChange={onChange}>
        <TabbarItem label="home">
          <quark-icon-home slot="icon" size="20" />
        </TabbarItem>
        <TabbarItem icon="user" label="user">
          <img
            slot="icon"
            style={{ height: 20 }}
            src={activeIndex === 1 ? img1 : img2}
          />
        </TabbarItem>
        <TabbarItem label="tel">
          <quark-icon-tel slot="icon" size="20" />
        </TabbarItem>
      </Tabbar>
    </div>
  );
};
```

### Change Event

```html
<Tabbar onChange="{" onChange }>
  <TabbarItem label="home">
    <quark-icon-home slot="icon" size="20" />
  </TabbarItem>
  <TabbarItem label="user">
    <quark-icon-user slot="icon" size="20" />
  </TabbarItem>
  <TabbarItem label="tel">
    <quark-icon-tel slot="icon" size="20" />
  </TabbarItem>
</Tabbar>
```

## API

### Tabbar Props

| Attribute     | Description                      | Type                                                              | Default Value |
| ------------- | -------------------------------- | ----------------------------------------------------------------- | ------------- |
| fixed         | Whether to fixed bottom          | `boolean`                                                         | `true `       |
| inactivecolor | Color of inactive tab item       | `string`                                                          | `#879099`     |
| activecolor   | Color of active tab item         | `string `                                                         | `#0088FF`     |
| value         | name or index of active tab item | `string`                                                          | `0`           |
| onChange      | Emitted when changing active tab | `{e:{detail: {value: The selected name or index value}}} => void` |

### TabbarItem Props

| Attribute    | Description                            | Type     | Default Value |
| ------------ | -------------------------------------- | -------- | ------------- |
| label        | Label name, used to show               | `string` |
| name         | Label value, as the matched identifier | `string` |               |
| badgecontent | Content of the badge                   | `string` |               |

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
