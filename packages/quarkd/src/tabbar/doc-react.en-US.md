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
<QuarkTabbar @change="onChange">
  <QuarkTabbarItem>
    <quark-icon-home size="20" />
    <div>Home</div>
  </QuarkTabbarItem>
  <QuarkTabbarItem>
    <quark-icon-user size="20" />
    <div>Mine</div>
  </QuarkTabbarItem>
  <QuarkTabbarItem>
    <quark-icon-tel size="20" />
    <div>Contact</div>
  </QuarkTabbarItem>
</QuarkTabbar>
```

### No icons

```html
<QuarkTabbar @change="onChange">
  <QuarkTabbarItem>Home</QuarkTabbarItem>
  <QuarkTabbarItem>Mine</QuarkTabbarItem>
  <QuarkTabbarItem>Contact</QuarkTabbarItem>
</QuarkTabbar>
```

### Active menu

```html
<QuarkTabbar val="联系">
  <QuarkTabbarItem>
    <quark-icon-home size="20" />
    <div>Home</div>
  </QuarkTabbarItem>
  <QuarkTabbarItem>
    <quark-icon-user size="20" />
    <div>Mine</div>
  </QuarkTabbarItem>
  <QuarkTabbarItem>
    <quark-icon-tel size="20" />
    <div>Contact</div>
  </QuarkTabbarItem>
</QuarkTabbar>
```

### Fixed at the bottom

```html
<QuarkTabbar fixed>
  <QuarkTabbarItem>
    <quark-icon-home size="20" />
    <div>Home</div>
  </QuarkTabbarItem>
  <QuarkTabbarItem>
    <quark-icon-user size="20" />
    <div>Mine</div>
  </QuarkTabbarItem>
  <QuarkTabbarItem>
    <quark-icon-tel size="20" />
    <div>Contact</div>
  </QuarkTabbarItem>
</QuarkTabbar>
```

## API

### QuarkTabbar Props

| Attribute   | Description                      | Type      | Default Value |
| ----------- | -------------------------------- | --------- | ------------- |
| fixed       | Whether to fixed bottom          | `boolean` | `true `       |
| activecolor | Color of active tab item         | `string ` | `#0088FF`     |
| value       | name or index of active tab item | `string`  | `0`           |

### QuarkTabbar Event

| Event  | Description                      | Callback Arguments                                                |
| ------ | -------------------------------- | ----------------------------------------------------------------- |
| change | Emitted when changing active tab | `{e:{detail: {value: The selected name or index value}}} => void` |
