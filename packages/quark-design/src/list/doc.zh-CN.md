# List 列表

### 介绍

用来展示长列表，在列表将要滚动到底部时，触发事件来加载更多列表项。

### 安装使用

```tsx
import "quarkd/lib/list";
```

### 基础用法

```html
<quark-list
  @load="onLoad"
  :loading="loading"
  :finished="finished"
  finishedtext="结束提示"
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
    // 模拟异步请求
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

### 错误提示

在发生错误时, 可以点错误提示信息重新拉取数据

```html
<quark-list
  @load="onLoad"
  @reload="reload"
  :loading="loading"
  :finished="finished"
  finishedtext="结束提示"
  :error="error"
  errortext="出错了, 点击重试"
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
      // 模拟触发error
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

### 自定义提示

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
  <div class="list-text" slot="finished">自定义的结束提示</div>
  <div class="list-text" slot="error">自定义的错误提示</div>
  <div class="list-text" slot="loading">
    <quark-loading size="15"> 自定义的加载中</quark-loading>
  </div>
</quark-list>
```

### 下拉刷新

可以和下拉刷新组件联合使用

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
        finishedtext="结束提示"
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
    // 模拟异步请求
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

| 参数         | 说明                                                       | 类型      | 默认值      |
| ------------ | ---------------------------------------------------------- | --------- | ----------- |
| error        | 是否加载失败，加载失败后点击错误提示可以重新触发 load 事件 | `boolean` | `false`     |
| loading      | 是否处于加载状态，加载过程中不触发 load 事件               | `boolean` | `false`     |
| finished     | 数据是否加载结束                                           | `boolean` | `false`     |
| offset       | 滚动条与底部距离小于 offset 时触发 load 事件               | `number`  | `300`       |
| loadingtext  | 加载过程中的提示文案                                       | `string`  | `加载中...` |
| finishedtext | 加载完成后的提示文案                                       | `string`  |             |
| errortext    | 加载失败后的提示文案                                       | `string`  |             |
| textcolor    | 提示文案字体颜色                                           | `string`  | `#879099`   |

### Event

| 名称   | 说明                               | 类型          |
| ------ | ---------------------------------- | ------------- |
| load   | 滚动条与底部距离小于 offset 时触发 | `() => void ` |
| reload | 发生错误, 点击重试时触发           | `() => void`  |

### slots

| 名称     | 说明                         |
| -------- | ---------------------------- |
| content  | 要展示的内容                 |
| finished | 自定义的结束状态提示内容     |
| error    | 自定义的错误提示内容         |
| loading  | 自定义的加载过程中的提示信息 |
