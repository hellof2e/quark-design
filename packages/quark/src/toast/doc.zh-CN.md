# Toast 轻提示

### 介绍

用于轻提示。

### 安装使用

```tsx
import Toast from 'quarkd/lib/toast';
```

### 文字提示
```javascript
Toast.text('网络失败，请稍后再试~');
```

### 成功提示

```javascript
Toast.success('成功提示');
```

### 失败提示

```javascript
Toast.error('失败提示');
```

### 警告提示

```javascript
Toast.warning('警告提示');
```

### 加载提示

```javascript
Toast.loading('加载中');
```

### Toast不消失

```javascript
Toast.text(msg,{
    duration:0
});
```
### 标签式调用
自定义加载内容
```html
<quark-toast type="text" ref='tag'>
  <div class="flex">
  <quark-loading type='circular'/> 正在恢复未完成订单
  </div>
</quark-toast>
```
### 手动关闭

可以手动调用 `hide` 方法关闭提示。
```js
Toast.hide();
// 或者 非单例模式使用
const toast = Toast.loading('在js模块中使用');
toast.hide();
```

### close回调函数

```tsx
QuarkToast.test('网络失败，请稍后再试～', {
    close: () => alert('hello')
});
```
### 单例模式
Toast 默认采用单例模式，即同一时间只会存在一个 Toast，如果需要在同一时间弹出多个 Toast，可以参考下面的示例：
```tsx
Toast.allowMultiple();
const toast1 = Toast.text('第一个 Toast');
const toast2 = Toast.success('第二个 Toast');
toast1.hide();
toast2.hide();
```

## API

### 方法

| 方法名                    | 说明                                                                    | 参数            | 返回值     |
| ------------------------- | ----------------------------------------------------------------------- | --------------- | ---------- |
| Toast.text                | 展示文字提示                                                            |  message｜ `ToastOptions` | toast 实例(message支持传入HTML) |
| Toast.success             | 展示成功提示                                                            | message｜ `ToastOptions`| toast 实例 |
| Toast.error                | 展示失败提示                                                            | message｜ `ToastOptions`| toast 实例 |
| Toast.warning                | 展示警告提示                                                            | message｜ `ToastOptions` | toast 实例 |
| Toast.loading             | 展示加载提示                                                            | message｜ `ToastOptions` | toast 实例 |
| Toast.hide                | 关闭提示                                                                |    |  toast 实例
| Toast.allowMultiple  | 开启同时存在多个 toast | -|  toast 实例



### ToastOptions 数据结构

| 参数         | 说明                             | 类型   |默认值 |
|--------------|----------------------------------|--------| -----|
| duration     | 展示时长(ms)，值为 0 时，toast 不会消失                    |       `number`   | `2000ms` |
| size     |         图标大小         |      ` number`   | `40px` |
| zIndex     |         浮层层级         |       `number`   | `9999` |
| close     |         关闭时的回调函数         |       `()=>void`   | - |
| textWithLoading     |         是否展示文字前面的小 loading 图标，只在 `type='text'` 时生效         |       `boolean`   | `false` |



## 样式变量

| 名称         | 说明                             | 默认值   |
|--------------|----------------------------------|--------|
| `--toast-min-width`     | 最小宽度                       |    `120px`      |
| `--toast-max-width`      | 最大宽度                   |       `240px`   |
| `--toast-text-padding`     | 内间距                     |      `24px 16px`    |
| `--toast-font-size`     | 字体大小                      |        `14px`  |
| `--toast-color`     | 字体颜色                     |       `#fff`  |
| `--toast-mini-loading-right` | 小 loading 图标与文字之间的间隙 | `16px` |
