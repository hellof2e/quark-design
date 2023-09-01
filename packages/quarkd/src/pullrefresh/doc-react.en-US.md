# PullRefresh

### Introduce

Used to provide interactive operations for pull-down refresh.

### Install

```tsx
import { PullRefresh } from "@quarkd/quark-react";
```

### Basic Usage

```tsx
import { useState } from 'react';
import { PullRefresh } from "@quarkd/quark-react";

export default () => {
  const [loading, setloading] = useState(false);
  const [count, setCount] = useState(0);

  const onload = () => {
    setloading(true);
    setTimeout(() => {
      Toast.success('Refresh Success');
      setloading(false);
      setCount(count++));
    }, 1000);
  };

  rerturn(
    <>
      <PullRefresh dark loading={loading} onRefresh={onload}>
        <div slot="content" className="pull-content">
          Refresh Count: { count }
        </div>
      </PullRefresh>
    </>
  )
}
```

### Dark Background

You can set the background color of the drop-down through dark

```html
<PullRefresh dark loading="{loading}" onRefresh="{onFresh}">
  <div className="content" slot="content">{ count }</div>
</PullRefresh>
```

### Custom Tip

Use slots to custom tips.

```html
<PullRefresh dark loading="{loading}" onRefresh="{onFresh}">
  <div slot="content" className="pull-content">Refresh Count: { count }</div>
  <div className="refresh-text" slot="pulling">
    <img
      src="https://m.hellobike.com/resource/helloyun/18625/3OOq2_down.svg"
    />drop down prompt
  </div>
  <div className="refresh-text" slot="loosing">
    <img
      src="https://m.hellobike.com/resource/helloyun/18625/ImS4S_up.svg"
    />Release to refresh now
  </div>
  <div className="refresh-text" slot="loading">
    <quark-loading size="18">Refreshing data...</quark-loading>
  </div>
</PullRefresh>
```

## API

### Props

| Attribute   | Description                                                | Type            | Default            |
| ----------- | ---------------------------------------------------------- | --------------- | ------------------ |
| dark        | Dark mode (background value: #0088FF )                     | `boolean`       | `false`            |
| disabled    | Whether to disable                                         | `boolean`       | `false`            |
| headheight  | Top content height / distance to trigger pull-down refresh | `string/number` | `96`               |
| loading     | Is it in loading state                                     | `boolean`       | `false`            |
| pullingtext | Pulling text                                               | `string`        | `Pull to refresh`  |
| loosingtext | Loosing text                                               | `string`        | `Loose to refresh` |
| loadingtext | Loading text                                               | `string`        | `Loading...`       |
| textcolor   | Text color                                                 | `string`        | `#879099`          |
| onRefresh   | Emitted after pulling refresh                              | `() => void`    |

### slots

| Name    | Description                     |
| ------- | ------------------------------- |
| content | Content to show                 |
| pulling | Content of head when at pulling |
| loosing | Content of head when at loosing |
| loading | Content of head when at loading |

## CSS Variables

The component provides the following[CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties),which can be used to customize styles. Please refer to[Theme customization](#/zh-CN/guide/theme)。

| Name                          | Description                                                                                                               | Default Value |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `--pull-refresh-bg-light`     | background under light mode                                                                                               | transparent   |
| `--pull-refresh-bg-dark`      | background under dark mode                                                                                                | #0088ff       |
| `--pull-refresh-bg`           | background，will be overridden by `--pull-refresh-bg-light` under light mode and `--pull-refresh-bg-dark` under dark mode | 无            |
| `--pull-refresh-container-bg` | container background                                                                                                      | #fff          |
