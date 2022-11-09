# PullRefresh

### Introduce

Used to provide interactive operations for pull-down refresh.

### Install

```tsx
import "quarkd/lib/pullrefresh";
```

### Basic Usage

```html
<quark-pull-refresh :loading="loading" @refresh="onFresh">
  <div class="content" slot="content">{{count}}</div>
</quark-pull-refresh>
```

```js
onFresh() {
  this.loading = true;
  setTimeout(() => {
    Toast.success('Refresh Success');
    this.loading = false;
    this.count++;
  }, 1000);
},
```

### Dark Background

You can set the background color of the drop-down through dark

```html
<quark-pull-refresh dark :loading="loading" @refresh="onFresh">
  <div class="content" slot="content">{{count}}</div>
</quark-pull-refresh>
```

### Custom Tip

Use slots to custom tips.

```html
<quark-pull-refresh dark :loading="loading" @refresh="onFresh">
  <div slot="content" class="pull-content">Refresh Count:{{count}}</div>
  <div class="refresh-text" slot="pulling">
    <img
      src="https://m.hellobike.com/resource/helloyun/18625/3OOq2_down.svg"
    />drop down prompt
  </div>
  <div class="refresh-text" slot="loosing">
    <img
      src="https://m.hellobike.com/resource/helloyun/18625/ImS4S_up.svg"
    />Release to refresh now
  </div>
  <div class="refresh-text" slot="loading">
    <quark-loading size="18">Refreshing data...</quark-loading>
  </div>
</quark-pull-refresh>
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

### Event

| Event   | Description                   | Type          |
| ------- | ----------------------------- | ------------- |
| refresh | Emitted after pulling refresh | `() => void ` |

### slots

| Name    | Description                     |
| ------- | ------------------------------- |
| content | Content to show                 |
| pulling | Content of head when at pulling |
| loosing | Content of head when at loosing |
| loading | Content of head when at loading |
