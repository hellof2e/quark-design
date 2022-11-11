# List

### Intro

A list component to show items and control loading status.

### Install

```tsx
import "quarkd/lib/list";
```

### Basic Usage

```html
<quark-list
  @load="onLoad"
  :loading="loading"
  :finished="finished"
  finishedtext="finished text"
>
  <div slot="content">
    <div v-for="item in list" class="list">{{item}}</div>
  </div>
</quark-list>
```

```javascript
data() {
  return {
    list: [],
    loading: false,
    finished: false,
  };
},
methods: {
  onLoad() {
    this.loading = true;
    // Simulate async requests
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        this.list.push(this.list.length + 1);
      }
      this.loading = false;
      if (this.list.length >= 40) {
        this.finished = true;
      }
    }, 1000);
  },
}
```

### Error Text

After loading is error, reloading will be Emitted only when error text clicked.

```html
<quark-list
  @load="onLoad"
  @reload="reload"
  :loading="loading"
  :finished="finished"
  finishedtext="finished text"
  :error="error"
  errortext="Error, click retry"
>
  <div slot="content">
    <div v-for="item in list" class="list">{{item}}</div>
  </div>
</quark-list>
```

```javascript
data() {
  return {
    list: [],
    loading: false,
    finished: false,
    error: false,
  };
},
methods: {
  onLoad() {
    this.loading = true;
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        this.list.push(this.list.length + 1);
      }
      // Simulate emitted error
      if (this.list.length === 10) {
        this.error = true;
      } else {
        this.error = false;
      }
      this.loading = false;
      if (this.list.length >= 40) {
        this.finished = true;
      }
    }, 1000);
  },
  reload() {
    this.error = false;
  }
}
```

### Custom Info

```html
<quark-list
  @load="onLoad"
  :loading="loading"
  :error="error"
  :finished="finished"
>
  <div slot="content">
    <div v-for="item in list" class="list">{{item}}</div>
  </div>
  <div class="list-text" slot="finished">Custom finished text</div>
  <div class="list-text" slot="error">Custom error text</div>
  <div class="list-text" slot="loading">
    <quark-loading size="15"> Custom loading</quark-loading>
  </div>
</quark-list>
```

### PullRefresh

Can be used with `pull-refresh` component.

```tsx
import "quarkd/lib/pull-refresh";
```

```html
<div>
  <quark-pull-refresh :loading="loading" @refresh="onRefresh">
    <div slot="content" class="pull-content">
      <quark-list
        @load="onLoad"
        :loading="loading"
        :finished="finished"
        finishedtext="finished text"
      >
        <div slot="content">
          <div v-for="item in list" class="list-list">{{item}}</div>
        </div>
      </quark-list>
    </div>
  </quark-pull-refresh>
</div>
```

```javascript
data() {
  return {
    list: [],
    loading: false,
    finished: false,
  };
},
methods: {
  onLoad() {
    this.loading = true;
    // Simulate async requests
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        this.list.push(this.list.length + 1);
      }
      this.loading = false;
      if (this.list.length >= 40) {
        this.finished = true;
      }
    }, 1000);
  },
  onRefresh() {
    this.loading = true;
    this.list = [];
    for (let i = 0; i < 10; i++) {
      this.list.push(this.list.length + 1);
    }
    this.loading = false;
  },
}
```

## API

### Props

| Arribute     | Description                                                                                               | Type      | Default      |
| ------------ | --------------------------------------------------------------------------------------------------------- | --------- | ------------ |
| error        | Whether loading is error, the load event will be Emitted only when error text clicked                     | `boolean` | `false`      |
| loading      | Whether to show loading info, the load event will not be Emitted when loading                             | `boolean` | `false`      |
| finished     | Whether loading is finished                                                                               | boolean   | `false`      |
| offset       | The load event will be Emitted when the distance between the scrollbar and the bottom is less than offset | `number`  | `300`        |
| loadingtext  | Loading text                                                                                              | `string`  | `loading...` |
| finishedtext | Finished text                                                                                             | `string`  |              |
| errortext    | Error loaded text                                                                                         | `string`  |              |
| textcolor    | Text font color                                                                                           | `string`  | `#879099`    |

### Event

| Event  | Description                                                                        | Type         |
| ------ | ---------------------------------------------------------------------------------- | ------------ |
| load   | Emitted when the distance between the scrollbar and the bottom is less than offset | `() => void` |
| reload | Emitted when click retry after loading is error                                    | `() => void` |

### slots

| Name     | Description          |
| -------- | -------------------- |
| content  | List content         |
| finished | Custom finished tips |
| error    | Custom error tips    |
| loading  | Custom loading tips  |
