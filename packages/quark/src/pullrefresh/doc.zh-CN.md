# PullRefresh 下拉刷新

### 介绍

用于提供下拉刷新的交互操作

### 安装

```tsx
import "quarkd/lib/pullrefresh";
```

### 基础用法

```html
<quark-pull-refresh :loading="loading" @refresh="onFresh">
  <div class="content" slot="content">{{count}}</div>
</quark-pull-refresh>
```

```js
onFresh() {
    this.loading = true;
    setTimeout(() => {
        Toast.success('刷新成功');
        this.loading = false;
        this.count++;
    }, 1000);
},
```

### 深色背景

通过 dark 可以设置下拉时的背景颜色

```html
<quark-pull-refresh dark :loading="loading" @refresh="onFresh">
  <div class="content" slot="content">{{count}}</div>
</quark-pull-refresh>
```

### 自定义提示

通过插槽可以自定义下拉刷新过程中的提示内容

```html
<quark-pull-refresh dark :loading="loading" @refresh="onFresh">
  <div slot="content" class="pull-content">刷新次数: {{count}}</div>
  <div class="refresh-text" slot="pulling">
    <img
      src="https://m.hellobike.com/resource/helloyun/18625/3OOq2_down.svg"
    />下拉提示
  </div>
  <div class="refresh-text" slot="loosing">
    <img
      src="https://m.hellobike.com/resource/helloyun/18625/ImS4S_up.svg"
    />松开立即刷新
  </div>
  <div class="refresh-text" slot="loading">
    <quark-loading size="18">正在刷新数据...</quark-loading>
  </div>
</quark-pull-refresh>
```

## API

### Props

| 参数        | 说明                            | 类型            | 默认值         |
| ----------- | ------------------------------- | --------------- | -------------- |
| dark        | 深色模式 (背景值: #0088FF )     | `boolean`       | `false`        |
| disabled    | 是否禁用                        | `boolean`       | `false`        |
| headheight  | 顶部内容高度/触发下拉刷新的距离 | `string/number` | `96`           |
| loading     | 是否处于加载中状态              | `boolean`       | `false`        |
| pullingtext | 下拉过程提示文案                | `string`        | `下拉即可刷新` |
| loosingtext | 释放过程提示文案                | `string`        | `松开立即刷新` |
| loadingtext | 加载过程提示文案                | `string`        | `加载中...`    |
| textcolor   | 提示文案字体颜色                | `string`        | `#879099`      |

### Event

| 名称    | 说明           | 类型          |
| ------- | -------------- | ------------- |
| refresh | 下拉刷新时触发 | `() => void ` |

### slots

| 名称    | 说明                     |
| ------- | ------------------------ |
| content | 要展示的内容             |
| pulling | 下拉过程中的顶部提示信息 |
| loosing | 释放过程中的顶部提示信息 |
| loading | 加载过程中的顶部提示信息 |
