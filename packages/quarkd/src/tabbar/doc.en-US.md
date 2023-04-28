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
<quark-tabbar @change="onChange">
  <quark-tabbar-item>
    <quark-icon-home size="20" />
    <div>Home</div>
  </quark-tabbar-item>
  <quark-tabbar-item>
    <quark-icon-user size="20" />
    <div>Mine</div>
  </quark-tabbar-item>
  <quark-tabbar-item>
    <quark-icon-tel size="20" />
    <div>Contact</div>
  </quark-tabbar-item>
</quark-tabbar>
```

### No icons

```html
<quark-tabbar @change="onChange">
  <quark-tabbar-item>Home</quark-tabbar-item>
  <quark-tabbar-item>Mine</quark-tabbar-item>
  <quark-tabbar-item>Contact</quark-tabbar-item>
</quark-tabbar>
```

### Active menu

```html
<quark-tabbar active="2">
  <quark-tabbar-item>
    <quark-icon-home size="20" />
    <div>Home</div>
  </quark-tabbar-item>
  <quark-tabbar-item>
    <quark-icon-user size="20" />
    <div>Mine</div>
  </quark-tabbar-item>
  <quark-tabbar-item>
    <quark-icon-tel size="20" />
    <div>Contact</div>
  </quark-tabbar-item>
</quark-tabbar>
```

### Fixed at the bottom

```html
<quark-tabbar fixed>
  <quark-tabbar-item>
    <quark-icon-home size="20" />
    <div>Home</div>
  </quark-tabbar-item>
  <quark-tabbar-item>
    <quark-icon-user size="20" />
    <div>Mine</div>
  </quark-tabbar-item>
  <quark-tabbar-item>
    <quark-icon-tel size="20" />
    <div>Contact</div>
  </quark-tabbar-item>
</quark-tabbar>
```

## API

### Quark-tabbar Props

| Attribute   | Description                      | Type      | Default Value |
| ----------- | -------------------------------- | --------- | ------------- |
| fixed       | Whether to fixed bottom          | `boolean` | `true `       |
| activecolor | Color of active tab item         | `string ` | `#0088FF`     |
| active      | name or index of active tab item | `string`  | `0`           |

### Quark-tabbar Event

| Event  | Description                      | Callback Arguments                                                |
| ------ | -------------------------------- | ----------------------------------------------------------------- |
| change | Emitted when changing active tab | `{e:{detail: {value: The selected name or index value}}} => void` |

## CSS Variables

| Name                    | Description                     | Default Value |
| ----------------------- | ------------------------------- | ------------- |
| `--tabbar-active-color` | The color of the activated menu | `#0088FF`     |
