# Dialog 弹窗

### 介绍

模态对话框。

### 安装使用

```tsx
import "quarkd/lib/dialog";
```

### 提示弹窗

通过设置 `type="confirm"` 为提示弹窗

```html
<div @click="open = true">Open Dialog</div>

<quark-dialog
    type="confirm"
    title="标题"
    content="生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。"
    :open="open"
    @confirm="open = false" // 确认按钮回调函数
    @close="open = false" // 关闭按钮回调函数
>
</quark-dialog>
```

### 提示弹窗（没有内容）

不传入 `content` 即可。

```html
<div @click="open = true">Open Dialog</div>

<quark-dialog
  type="confirm"
  title="这是一句话就能说清楚的确认弹窗，所以只有标题"
  oktext="知道了"
  @confirm="open = false" // 确认按钮回调函数
  @close="open = false" // 关闭按钮回调函数
>
</quark-dialog>
```

### 确认弹窗

`type` 默认不传即为确认弹窗。

```html
<div @click="open = true">Open Dialog</div>

<quark-dialog
  :open="open"
  title="标题"
  content="代码是写出来给人看的，附带能在机器上运行"
  @close="open = false"
  @confirm="open = false"
  @cancel="open = false"
>
</quark-dialog>
```

### 确认弹窗（按钮垂直排列）

通过设置属性 `btnvertical`，按钮可垂直排列。

```html
<div @click="open = true">Open Dialog</div>

<quark-dialog
  btnvertical
  :open="open"
  title="标题"
  content="代码是写出来给人看的，附带能在机器上运行"
  @close="open = false"
  @confirm="open = false"
  @cancel="open = false"
>
</quark-dialog>
```

### 自定义标题/footer

通过 `slot='title'` 、`slot='footer'` 设置自定义 title/footer。

```html
<div @click="open = true">Open Dialog</div>

<quark-dialog
  :content="translate('content')"
  :open="open"
  @close="open = false"
>
  <div slot="title">自定义标题</div>
  <div slot="footer">自定义footer</div>
</quark-dialog>
```

### 隐藏 title/footer

通过传入 `notitle`、 `nofooter` 属性隐藏 title/footer。

```html
<div @click="open = true">Open Dialog</div>

<quark-dialog notitle nofooter :open="open">
  代码是写出来给人看的，附带能在机器上运行
</quark-dialog>
```

## API

### Props

| 参数         | 说明                                                                            | 类型               | 默认值    |
| ------------ | ------------------------------------------------------------------------------- | ------------------ | --------- |
| title        | 标题                                                                            | `string`           |
| content      | 内容                                                                            | `string`           |
| oktext       | 确定按钮                                                                        | `string `          | `确定`    |
| canceltext   | 取消按钮                                                                        | `string`           | `取消`    |
| open         | 弹窗状态                                                                        | `boolean `         | `require` |
| zindex       | 弹窗层级                                                                        | `number`           | `999`     |
| type         | 类型                                                                            | `modal`、`confirm` | `modal`   |
| btnvertical  | 按钮是否垂直，默认水平                                                          | `boolean`          | `false`   |
| nofooter     | 是否显示底部                                                                    | `boolean`          | `false`   |
| hideclose    | 是否隐藏右上角关闭按钮                                                          | `boolean`          | `false`   |
| maskclosable | 点击蒙层是否允许关闭                                                            | `boolean`          | `false`   |
| autoclose    | 点击事件是否默认关闭                                                            | `boolean`          | `true`    |
| hide         | autoclose 为 false 时候函数式调用手动让弹窗消失, 满足灵活异步需求 dialog.hide() | `() => void`       |

### Slots

| 名称             | 说明                                   |
| ---------------- | -------------------------------------- |
| slot             | 自定义弹窗 body                        |
| slot name=title  | 自定义标题                             |
| slot name=close  | 自定义关闭图标包括位置、大小、以及类型 |
| slot name=footer | 自定义脚部                             |

### Events

| 名称    | 说明                 | 类型         |
| ------- | -------------------- | ------------ |
| confirm | 确定回调函数         | `() => void` |
| cancel  | 取消回调函数         | `() => void` |
| close   | 点击关闭图标回调函数 | `() => void` |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                           | 说明             | 默认值    |
| ------------------------------ | ---------------- | --------- |
| `--dialog-width`               | 弹框宽度         | `320px`   |
| `--dialog-title-font-size`     | 标题字体大小     |
| `--dialog-title-color`         | 标题字体颜色     | `#242729` |
| `--dialog-title-font-family`   | 标题字体         |
| `--dialog-title-line-height`   | 标题行高         |
| `--dialog-title-font-weight`   | 标题字重         | `700`     |
| `--dialog-content-font-size`   | 内容字体大小     | `14px`    |
| `--dialog-content-color`       | 内容字体颜色     | `#5A6066` |
| `--dialog-content-font-weight` | 内容字重         | `400`     |
| `--dialog-content-font-family` | 内容字体         | `14px`    |
| `--dialog-content-line-height` | 内容行高         | `20px`    |
| `--dialog-btn-border-radius`   | 底部按钮圆角     | `8px`     |
| `--dialog-btn-font-size`       | 底部按钮字体大小 | `16px`    |
| `--dialog-btn-height`          | 底部按钮高度     | `40px`    |
