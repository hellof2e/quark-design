# Popover 气泡弹出框

### 介绍

弹出式的气泡菜单。

### 安装

```jsx
import { Popover, PopoverRef } from "@quarkd/quark-react";
```

### 基本使用

当 Popover 弹出时，会基于默认插槽的内容进行定位。

```jsx
export default () => {
  const [open, setOpen] = useState(false);
  const openRef = useRef < PopoverRef > null;
  const actions = [{ text: "选项一" }, { text: "选项二" }, { text: "选项三" }];

  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const { current: lightCurrent } = openRef;
    lightCurrent.setActions(actions);
  }, []);

  return (
    <div className="demo">
      <Popover
        ref={lightRef}
        open={open}
        onClose={handleClose}
        onSelect={({ detail }) => {
          const { action } = detail;
          console.log(action.text);
          handleClose();
        }}
      >
        <div
          className="quark-popover"
          onClick={handleClick}
        >
          基本使用
        </div>
      </Popover>
    </div>
  );
};
```

### 浅色模式

Popover 支持浅色和深色两种风格，默认为深色风格，将 theme 属性设置为 light 可切换为浅色风格。

```html
<Popover theme="light">
  <div class="Popover" @click="click">浅色模式</div>
</Popover>
```

### 展示图标

在 actions 数组中，可以通过 icon 字段来定义选项的图标，支持传入图标链接。

```js
export default () => {
  const [open, setOpen] = useState(false);
  const openRef = useRef < PopoverRef > null;
  const actions = [
    {
      text: "选项一",
      icon: "https:xxx",
    },
    {
      text: "选项二",
      icon: "https:xxx",
    },
    {
      text: "选项三",
    },
  ];

  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const { current: lightCurrent } = openRef;
    lightCurrent.setActions(actions);
  }, []);

  return (
    <div className="demo">
      <Popover
        ref={lightRef}
        open={open}
        onClose={handleClose}
        onSelect={({ detail }) => {
          const { action } = detail;
          console.log(action.text);
          handleClose();
        }}
      >
        <div
          className="quark-popover"
          onClick={handleClick}
        >
          展示图标
        </div>
      </Popover>
    </div>
  );
};
```

### 禁用状态

在 actions 数组中，可以通过 disabled 字段来禁用某个选项。

```js
export default () => {
  const actions = [
    {
      text: "选项一",
      icon: "https:xxx",
      disabled: true,
    },
    {
      text: "选项二",
      icon: "https:xxx",
    },
    {
      text: "选项三",
    },
  ];
  const [open, setOpen] = useState(false);
  const openRef = useRef < PopoverRef > null;

  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const { current: lightCurrent } = openRef;
    lightCurrent.setActions(actions);
  }, []);

  return (
    <div className="demo">
      <Popover
        ref={lightRef}
        open={open}
        onClose={handleClose}
        onSelect={({ detail }) => {
          const { action } = detail;
          console.log(action.text);
          handleClose();
        }}
      >
        <div
          className="quark-popover"
          onClick={handleClick}
        >
          禁用某项
        </div>
      </Popover>
    </div>
  );
};
```

### 弹出位置

通过 placement 属性来控制气泡的弹出位置。

```html
<Popover placement="top">
  <div class="Popover">浅色模式</div>
</Popover>
```

placement 支持以下值：

```js
top           # 顶部中间位置
topleft     # 顶部左侧位置
topright       # 顶部右侧位置
left          # 左侧中间位置
lefttop    # 左侧上方位置
leftbottom      # 左侧下方位置
right         # 右侧中间位置
righttop   # 右侧上方位置
rightbottom     # 右侧下方位置
bottom        # 底部中间位置
bottomleft  # 底部左侧位置
bottomright    # 底部右侧位置
```

### 自定义内容

通过 content 插槽，可以在 Popover 内部放置任意内容。

```html
<Popover>
  <div class="Popover">自定义内容</div>
  <div slot="content" class="popover-content">我是自定义内容</div>
</Popover>
<style>
  .popover-content {
    width: 160px;
    height: 140px;
    background-color: #4a4a4a;
    border-radius: 8px;
    color: white;
  }
</style>
```

### 滚动关闭

通过 scroolhidden 属性来控制当页面滚动时是否关闭。

```html
<Popover scroolhidden>
  <div class="Popover">滚动关闭</div>
</Popover>
```

## API

### Props

| 参数         | 说明                       | 类型                                                                                                                               | 默认值    |
| ------------ | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------- |
| open         | popover 是否显示           | `boolean`                                                                                                                          | `require` |
| placement    | tip 弹出位置               | 支持 `top` `topleft` `topright` `left` `lefttop` `leftbottom` `right` `righttop` `rightbottom` `bottom` `bottomleft` `bottomright` | `bottom`  |
| scroolhidden | 当页面滚动后，是否自动关闭 | `boolean`                                                                                                                          | `false`   |
| zindex       | popover 层级               | `number`                                                                                                                           | `999`     |
| theme        | popover 主题模式           | 支持 `light` `dark`                                                                                                                | `dark`    |
| onClose      | popover 消失回调           | `() => void`                                                                                                                       | `require` |
| onSelect     | popover 选项选中回调       | `(e:{detail:{action: PopoverAction, index: number}}) => void`                                                                      | `require` |

### 方法

| 名称       | 说明                  | 类型                                  |
| ---------- | --------------------- | ------------------------------------- |
| setActions | 用于设置 Popover 选项 | `(actions: PopoverAction[]) => void ` |

### PopoverAction 数据结构

```js
type PopoverAction = {
  text: string,
  icon?: string, // url link
  disabled?: boolean,
};
```

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                           | 说明                                                                                    | 默认值    |
| ------------------------------ | --------------------------------------------------------------------------------------- | --------- |
| `--popover-background-color`   | popover 背景色                                                                          | `#4a4a4a` |
| `--popover-color`              | popover 选项文字颜色                                                                    | `#fff`    |
| `--popover-action-font-size`   | popover 选项文字大小                                                                    | `14px`    |
| `--popover-action-font-weight` | popover 选项文字自重                                                                    | `400`     |
| `--popover-action-line-height` | popover 选项文字行高                                                                    | `1.4`     |
| `--popover-action-height`      | popover 选项高度                                                                        | `44px`    |
| `--popover-hspacing`           | popover 水平内边距                                                                      | `16px`    |
| `--popover-margin-bottom`      | popover 距实际显示元素距离（placement 为 `top`、`topleft`、`topright` 时生效）          | `6px`     |
| `--popover-margin-top`         | popover 距实际显示元素距离（placement 为 `bottom`、`bottomleft`、`bottomright` 时生效） | `6px`     |
| `--popover-margin-right`       | popover 距实际显示元素距离（placement 为 `left`、`lefttop`、`leftbottom` 时生效）       | `16px`    |
| `--popover-margin-left`        | popover 距实际显示元素距离（placement 为 `right`、`righttop`、`rightbottom` 时生效）    | `16px`    |
