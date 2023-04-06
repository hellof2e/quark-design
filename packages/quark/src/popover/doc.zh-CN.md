# Popover 气泡弹出框

### 介绍

弹出式的气泡菜单。

### 安装

```tsx
import "quarkd/lib/popover";
```

### 基本使用

当 Popover 弹出时，会基于默认插槽的内容进行定位。

```html
<quark-popover ref="popoverRef" :open="open" @close="close" @select="select">
  <div class="quark-popover" @click="click">基本使用</div>
</quark-popover>
```

```js
<script>
export default {
  el: 'demo',
  data() {
    return {
      open: false
    };
  },
  mounted() {
    this.$refs.popoverRef.setActions(
      [{
        text: '选项一'
      }, {
        text: '选项二'
      }, {
        text: '选项三'
      }])
  },
  methods: {
    select({detail}) {
      const {action, index} = detail
      this.open = false;
    },
    click() {
      this.open = true;
    },
    close() {
      this.open = false;
    }
  }
};
</script>
```

### 浅色模式

Popover 支持浅色和深色两种风格，默认为深色风格，将 theme 属性设置为 light 可切换为浅色风格。

```html
<quark-popover
  theme="light"
  ref="popoverRef"
  :open="open"
  @close="close"
  @select="select"
>
  <div class="quark-popover" @click="click">浅色模式</div>
</quark-popover>
```

```js
<script>
  const actions =
  export default {
    el: 'demo',
    data() {
      return {
        open: false
      };
    },
  mounted() {
    this.$refs.popoverRef.setActions(
      [{
        text: '选项一'
      }, {
        text: '选项二'
      }, {
        text: '选项三'
      }])
  },
  methods: {
    select({detail}) {
      const {action, index} = detail
      this.open = false;
    },
    click() {
      this.open = true;
    },
    close() {
      this.open = false;
    }
  }
};
</script>
```

### 展示图标

在 actions 数组中，可以通过 icon 字段来定义选项的图标，支持传入图片链接。

```html
<quark-popover ref="popoverRef" :open="open" @close="close" @select="select">
  <div class="quark-popover" @click="click">展示图标</div>
</quark-popover>
```

```js
<script>
  const actions =
  export default {
    el: 'demo',
    data() {
      return {
        open: false
      };
    },
  mounted() {
    this.$refs.popoverRef.setActions(
      [{
        text: '选项一',
        icon: 'https:xxx'
      }, {
        text: '选项二',
        icon: 'https:xxx'
      }, {
        text: '选项三'
      }])
  },
  methods: {
    select({detail}) {
      const {action, index} = detail
      this.open = false;
    },
    click() {
      this.open = true;
    },
    close() {
      this.open = false;
    }
  }
};
</script>
```

### 禁用状态

在 actions 数组中，可以通过 disabled 字段来禁用某个选项。

```html
<quark-popover ref="popoverRef" :open="open" @close="close" @select="select">
  <div class="quark-popover" @click="click">禁用状态</div>
</quark-popover>
```

```js
<script>
  const actions =
  export default {
    el: 'demo',
    data() {
      return {
        open: false
      };
    },
  mounted() {
    this.$refs.popoverRef.setActions(
      [{
        text: '选项一',
        disabled: true
      }, {
        text: '选项二',
        icon: 'https:xxx'
      }, {
        text: '选项三'
      }])
  },
  methods: {
    select({detail}) {
      const {action, index} = detail
      this.open = false;
    },
    click() {
      this.open = true;
    },
    close() {
      this.open = false;
    }
  }
};
</script>
```

### 弹出位置

通过 placement 属性来控制气泡的弹出位置。

```html
<quark-popover placement="top">
  <div class="quark-popover" @click="click">浅色模式</div>
</quark-popover>
```

placement 支持以下值：

```tsx
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
<quark-popover :open="open" @close="close" @select="select">
  <div class="quark-popover" @click="click">自定义内容</div>
  <div slot="content" class="popover-content" @click="close">
    我是自定义内容
  </div>
</quark-popover>
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

```js
<script>
  const actions =
  export default {
    el: 'demo',
    data() {
      return {
        open: false
      };
    },
  methods: {
    click() {
      this.open = true;
    },
    close() {
      this.open = false;
    }
  }
};
</script>
```

### 滚动关闭

通过 scrollhidden 属性来控制当页面滚动时是否关闭。

```html
<quark-popover
  scrollhidden
  ref="popoverRef"
  :open="open"
  @close="close"
  @select="select"
>
  <div class="quark-popover" @click="click">滚动关闭</div>
</quark-popover>
```

```js
<script>
  const actions =
  export default {
    el: 'demo',
    data() {
      return {
        open: false
      };
    },
  mounted() {
    this.$refs.popoverRef.setActions(
      [{
        text: '选项一',
      }, {
        text: '选项二',
        icon: 'https:xxx'
      }, {
        text: '选项三'
      }])
  },
  methods: {
    select({detail}) {
      const {action, index} = detail
      this.open = false;
    },
    click() {
      this.open = true;
    },
    close() {
      this.open = false;
    }
  }
};
</script>
```

## API

### Props

| 参数         | 说明                       | 类型                                                                                                                               | 默认值   |
| ------------ | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | -------- |
| open         | popover 是否显示           | `boolean`                                                                                                                          | `false`  |
| placement    | tip 弹出位置               | 支持 `top` `topleft` `topright` `left` `lefttop` `leftbottom` `right` `righttop` `rightbottom` `bottom` `bottomleft` `bottomright` | `bottom` |
| scrollhidden | 当页面滚动后，是否自动关闭 | `boolean`                                                                                                                          | `false`  |
| zindex       | popover 层级               | ` number`                                                                                                                          | `999`    |
| theme        | popover 主题模式           | 支持 `light` `dark`                                                                                                                | `dark`   |

### Events

| 名称   | 说明                 | 类型                                                           |
| ------ | -------------------- | -------------------------------------------------------------- |
| close  | popover 消失回调     | ` () => void`                                                  |
| select | popover 选项选中回调 | ` (e:{detail:{action: PopoverAction, index: number}}) => void` |

### 方法

| 名称       | 说明                  | 类型                                 |
| ---------- | --------------------- | ------------------------------------ |
| setActions | 用于设置 Popover 选项 | `(actions: PopoverAction[]) => void` |

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

| 名称                           | 说明                                                                              | 默认值    |
| ------------------------------ | --------------------------------------------------------------------------------- | --------- |
| `--popover-background-color`   | popover 背景色                                                                    | `#4a4a4a` |
| `--popover-color`              | popover 选项文字颜色                                                              | `#fff`    |
| `--popover-action-font-size`   | popover 选项文字大小                                                              | `14px`    |
| `--popover-action-font-weight` | popover 选项文字自重                                                              | `400`     |
| `--popover-action-line-height` | popover 选项文字行高                                                              | `1.4`     |
| `--popover-action-height`      | popover 选项高度                                                                  | `44px`    |
| `--popover-hspacing`           | popover 水平内边距                                                                | `16px`    |
| `--popover-margin-bottom`      | popover 距实际显示元素距离（placement 为 top、topleft、topright 时生效）          | `6px`     |
| `--popover-margin-top`         | popover 距实际显示元素距离（placement 为 bottom、bottomleft、bottomright 时生效） | `6px`     |
| `--popover-margin-right`       | popover 距实际显示元素距离（placement 为 left、lefttop、leftbottom 时生效）       | `16px`    |
| `--popover-margin-left`        | popover 距实际显示元素距离（placement 为 right、righttop、rightbottom 时生效）    | `16px`    |
