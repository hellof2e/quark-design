# Search 搜索

### 介绍

用于搜索场景的输入框组件。

## 安装

```tsx
import "quarkd/lib/search";
```

## 基本用法

```html
<quark-search value="123"></quark-search>
```

## 圆角

```html
<quark-search shape="round" value="123"></quark-search>
```

### 隐藏取消按钮

```html
<quark-search hideaction></quark-search>
```

### 显示返回按钮

```html
<quark-search showback></quark-search>
```

### 深色模式

```html
<quark-search dark></quark-search>
```

### 插槽

```html
<quark-search hideaction>
  <div slot="action">
    <div>主要按钮</div>
  </div>
</quark-search>
```

### 事件绑定

```html
<quark-search id="search" showback @focus="onFocus" @change="onChange" />
```

```javascript
methods: {
    onBlur({ detail }) {
        console.log(detail.value)
    },
    onChange({ detail }) {
        console.log(detail.value)
    }
}
```

### 自定义样式

```html
<quark-search showback iconcolor="aqua" />
```

```css
/* CSS 省略号展示 */
:quark-search {
  --search-background: linear-gradient(135deg, #667eea, #764ba2);
  --search-action-text-color: aqua;
}
```

## API

### Props

| 参数        | 说明                                             | 类型                 | 默认值             |
| ----------- | ------------------------------------------------ | -------------------- | ------------------ |
| value       | 输入框的值                                       |                      |
| shape       | 搜素框形状                                       | `square` `round`     | `square`           |
| dark        | 深色模式                                         | `boolean`            | `fasle`            |
| showback    | 是否显示返回按钮                                 | `boolean`            | `false`            |
| hideaction  | 隐藏右侧取消按钮                                 | `boolean`            | `false`            |
| actiontext  | 取消按钮文字                                     | `string`             | `取消`             |
| iconcolor   | 返回按钮颜色 深色模式下为白色                    | `string`             | `#242729`          |
| placeholder | 占位提示文字                                     | `string`             | `请输入搜索关键词` |
| maxlength   | 输入的最大字符数                                 | `string` or `number` |
| autofocus   | 是否自动聚焦，iOS 系统不支持该属性               | `boolean`            |
| clearable   | 是否启用清除图标，点击清除图标后会清空输入框     | `boolean`            | `true`             |
| disabled    | 是否禁用输入框                                   | `boolean`            | `fasle`            |
| readonly    | 是否将输入框设为只读状态，只读状态下无法输入内容 | `boolean`            | `fasle`            |

### Event

| 名称   | 说明               | 类型                                   |
| ------ | ------------------ | -------------------------------------- |
| focus  | 输入框聚焦回调函数 | `(e:{detail:{value:string}}) => void ` |
| blur   | 输入框失焦回调函数 | `(e:{detail:{value:string}}) => void ` |
| search | 确定搜索时触发     | `(e:{detail:{value:string}}) => void ` |
| change | 输入框变化回调函数 | `(e:{detail:{value:string}}) => void ` |
| cancel | 取消回调函数       | `() => void `                          |
| back   | 返回回调函数       | `() => void `                          |

### 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                         | 说明                  | 默认值     |
| ---------------------------- | --------------------- | ---------- |
| `--field-font-size`          | 输入框文字大小        | `14px`     |
| `--search-background`        | 搜索框背景色          | `#fff`     |
| `--search-dark-background`   | 深色模式 搜索框背景色 | `#08f`     |
| `--search-action-text-color` | 取消按钮文字颜色      | `#242729 ` |
| `--search-action-font-size`  | 取消按钮文字大小      | `16px `    |
