# Steps 步骤条

### 介绍

拆分展示某项流程的步骤，引导用户按流程完成任务或向用户展示当前状态。

### 安装

```tsx
import "quarkd/lib/steps";
```

### 基本用法

```html
<quark-steps>
  <quark-step status="done" title="步骤一" order="1"></quark-step>
  <quark-step status="doing" title="步骤二" order="2"></quark-step>
  <quark-step status="todo" title="步骤三" order="3"></quark-step>
</quark-steps>
```

### 标题和描述信息

```html
<quark-steps>
  <quark-step
    status="done"
    title="已完成"
    order="1"
    content="您的订单已经打包完成，商品已发出"
    >1</quark-step
  >
  <quark-step
    status="doing"
    title="进行中"
    order="2"
    content="您的订单正在配送中"
    >2</quark-step
  >
  <quark-step
    status="todo"
    title="未开始"
    order="3"
    content="收货地址为：杭州市益展商务大厦16F"
    >3</quark-step
  >
</quark-steps>
```

### 竖向步骤条

```html
<quark-steps direction="vertical">
  <quark-step
    status="done"
    title="已完成"
    order="1"
    content="您的订单已经完成，商品已发出"
    >1</quark-step
  >
  <quark-step
    status="doing"
    title="进行中"
    order="2"
    content="您的订单正在配送中"
    >2</quark-step
  >
  <quark-step
    status="todo"
    title="未开始"
    order="3"
    content="收货地址为：杭州市益展商务大厦"
    >3</quark-step
  >
</quark-steps>
```

## API

### Props

#### quark-steps

| 参数      | 说明                              | 类型     | 默认值       |
| --------- | --------------------------------- | -------- | ------------ |
| direction | 显示方向，`horizontal` `vertical` | `string` | `horizontal` |

#### quark-step

| 参数    | 说明                                   | 类型      | 支持 slot        |
| ------- | -------------------------------------- | --------- | ---------------- |
| title   | 流程步骤的标题                         | `string`  | `name = title`   |
| status  | 状态 ，可设置 `done`，`doing`， `todo` | `string`  |
| content | 流程步骤的描述性文字(支持 html 结构)   | `string ` | `name = content` |
| order   | 序号                                   | `string`  | `name = order`   |

### slot

| 参数    | 说明                                 | 类型     | 默认值 |
| ------- | ------------------------------------ | -------- | ------ |
| title   | 标题                                 | `string` |        |
| content | 流程步骤的描述性文字(支持 html 结构) | `string` |        |
| order   | 序号                                 | `string` |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                       | 说明                            | 默认值    |
| -------------------------- | ------------------------------- | --------- |
| `--quark-theme-color`      | 主题色（蓝色）                  | `#0088FF` |
| `--step-title-font-size`   | 标题字体大小                    | `14px`    |
| `--step-title-color`       | 标题字体颜色                    | `#909ca4` |
| `--step-content-font-size` | 内容字体大小                    | `14px`    |
| `--step-content-color`     | 内容字体颜色                    | `#666`    |
| `--steps-base-font-size`   | 用于设置圆形大小 (圆宽高： 2em) | `13px`    |
