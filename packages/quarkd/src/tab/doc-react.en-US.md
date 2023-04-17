# Tab

### Introduce

Used to switch between different content areas.

### Install

```tsx
import { Tabs, TabContent } from "@quarkd/quark-react";
```

### Basic Usage

```html
<Tabs activekey="{1}">
  <TabContent label="tab1"> tab1 content </TabContent>
  <TabContent label="tab2"> tab2 content </TabContent>
  <TabContent label="tab3" disabled> tab3 content </TabContent>
  <TabContent label="tab4"> tab4 content </TabContent>
</Tabs>
```

### Match By Name

```html
<Tabs activekey={'d'}>
  <TabContent label="tab1" name="a">
    tab1 content
  </TabContent>
  <TabContent label="tab2" name="b">
    tab2 content
  </TabContent>
  <TabContent label="tab3" disabled name="c">
    tab3 content
  </TabContent>
  <TabContent label="tab4" name="d">
    tab4 content
  </TabContent>
</Tabs>
```

### Swipe Tabs

Horizontal scrolling is automatically supported when the length exceeds the viewport.

```html
<Tabs>
  <TabContent label="tab1">tab1</TabContent>
  <TabContent label="tab2">tab2</TabContent>
  ...
  <TabContent label="tab10">tab10</TabContent>
</Tabs>
```

### Click Tab Event

```js
export default () => {
  const [activeName, setActiveName] = useState("d");
  const onChange = ({ detail }) => {
    setActiveName(() => detail.name);
    console.log(`current selection: ${detail.label}`);
  };

  return (
    <div className="demo tab-demo">
      <Tabs activekey={activeName} onChange={onChange}>
        <TabContent label="tab1" name="a">
          tab1 content
        </TabContent>
        <TabContent label="tab2" name="b">
          tab2 content
        </TabContent>
        <TabContent label="tab3" disabled name="c">
          tab3 content
        </TabContent>
        <TabContent label="tab4" name="d">
          tab4 content
        </TabContent>
      </Tabs>
    </div>
  );
};
```

### Sticky

In sticky mode, the nav-item will be fixed to top when scroll to top.

```html
<Tabs sticky offsettop="17vw">
  <TabContent label="tab1"> tab1 content </TabContent>
  <TabContent label="tab2"> tab2 content </TabContent>
  <TabContent label="tab3"> tab3 content </TabContent>
  <TabContent label="tab4"> tab4 content </TabContent>
</Tabs>
```

## API

### Tabs props

| Attribute | Description                                                                     | Type                                                     | Default Value |
| --------- | ------------------------------------------------------------------------------- | -------------------------------------------------------- | ------------- |
| activekey | The currently activated tab, corresponding to the `name` in `quark-tab-content` | `string`                                                 | -             |
| sticky    | Whether to use sticky mode                                                      | `boolean`                                                | `false`       |
| offsettop | Sticky offset top , supports vm                                                 | `string`                                                 | `0vw`         |
| linewidth | Width of tab line                                                               | `string`                                                 | `40px`        |
| onChange  | change callback                                                                 | `(e: {detail: { name: string，label: number }}) => void` | -             |

### TabContent props

| Attribute | Description                        | Type      | Default Value |
| --------- | ---------------------------------- | --------- | ------------- |
| label     | tab show name                      | `string`  | -             |
| disabled  | tab Whether to disable tab         | `boolean` | `false`       |
| name      | tab match label(matches activekey) | `string`  | -             |

## CSS Variables

The component provides the following[CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，which can be used to customize styles，Please refer to[Theme customization](#/zh-CN/guide/theme).

| Name                          | Description                                                                   | Default Value                    |
| ----------------------------- | ----------------------------------------------------------------------------- | -------------------------------- |
| `--tab-item-color`            | `tab-item` Font color                                                         | `#5E6266`                        |
| `--tab-item-active-color`     | `tab-item` Active state `active` font color                                   | `#333333`                        |
| `--tab-item-disabled-color`   | `tab-item` Disabled state font color                                          | `#c8c9cc`                        |
| `--tab-item-min-width`        | `tab-item` Minimum width (determines the maximum number of display in a line) | `20vw`(Display up to 5 in a row) |
| `--tab-item-height`           | `tab-item` Height setting                                                     | `44px `                          |
| `--tab-item-font-size`        | `tab-item` Font size                                                          | `16px`                           |
| `--tab-active-line-color`     | `tab-item` active state `underline` color                                     | `#0088ff `                       |
| `--tabs-background-color`     | tabs Background color                                                         | `#ffffff`                        |
| `--tab-item-background-color` | `tab-item` Background color                                                   | `#ffffff `                       |
