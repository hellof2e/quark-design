# DropdownMenu

### 介绍

向下弹出的菜单列表。

### 安装使用

```tsx
import {
  DropdownMenu,
  DropdownItem,
  DropdownItemInstance,
} from "@quarkd/quark-react";
```

### 基本用法

```js
export default () => {
  const [value1, setValue1] = useState("0");
  const [value2, setValue2] = useState("a");
  const item1 = useRef < DropdownItemInstance > null;
  const item2 = useRef < DropdownItemInstance > null;

  useEffect(() => {
    item1.current.setOptions([
      { text: "全部商品", value: "0" },
      { text: "新款商品", value: "1 " },
      { text: "活动商品", value: "2 " },
    ]);

    item2.current.setOptions([
      { text: "默认排序", value: "a" },
      { text: "好评排序", value: "b" },
      { text: "销量排序", value: "c" },
    ]);
  }, []);

  return (
    <DropdownMenu>
      <DropdownItem ref={item1} value={value1} />
      <DropdownItem ref={item2} value={value2} />
    </DropdownMenu>
  );
};
```

### 自定义菜单内容

```js
export default () => {
  const [value1, setValue1] = useState("0");
  const item1 = useRef < DropdownItemInstance > null;
  const item2 = useRef < DropdownItemInstance > null;
  const [switch1, setSwitch1] = useState(true);
  const [switch2, setSwitch2] = useState(false);

  const onSwitch1Change = (e) => {
    setSwitch1(() => e.detail.value);
  };

  const onSwitch2Change = (e) => {
    setSwitch2(() => e.detail.value);
  };

  const onConfirm = () => {
    item2.current.toggle();
  };

  useEffect(() => {
    item1.current.setOptions([
      { text: "全部商品", value: "0" },
      { text: "新款商品", value: "1 " },
      { text: "活动商品", value: "2 " },
    ]);
  }, []);

  return (
    <DropdownMenu>
      <DropdownItem ref={item1} value={value1} />
      <DropdownItem ref={item2} title="筛选">
        <quark-cell title="包邮">
          <quark-switch checked={switch1} onChange={onSwitch1Change} />
        </quark-cell>
        <quark-cell title="团购">
          <quark-switch checked={switch2} onChange={onSwitch2Change} />
        </quark-cell>
        <div style="padding: 5px 16px">
          <quark-button type="primary" size="big" onClick={onConfirm}>
            确定
          </quark-button>
        </div>
      </DropdownItem>
    </DropdownMenu>
  );
};
```

### 自定义选中状态颜色

```js
export default () => {
  return (
    <DropdownMenu active-color="#f00">
      <DropdownItem></DropdownItem>
      <DropdownItem></DropdownItem>
    </DropdownMenu>
  );
};
```

### 禁用菜单

```js
export default () => {
  return (
    <DropdownMenu>
      <DropdownItem disabled></DropdownItem>
      <DropdownItem disabled></DropdownItem>
    </DropdownMenu>
  );
};
```

### 向上展开

```js
export default () => {
  return (
    <DropdownMenu direction="up">
      <DropdownItem></DropdownItem>
      <DropdownItem></DropdownItem>
    </DropdownMenu>
  );
};
```

### 横向滚动

```js
export default () => {
  return (
    <DropdownMenu swipe-threshold={4}>
      <DropdownItem></DropdownItem>
      <DropdownItem></DropdownItem>
      <DropdownItem></DropdownItem>
      <DropdownItem></DropdownItem>
      <DropdownItem></DropdownItem>
      <DropdownItem></DropdownItem>
    </DropdownMenu>
  );
};
```

## API

### DropdownMenu Props

| 参数            | 说明                                                             | 类型         | 默认值  |
| --------------- | ---------------------------------------------------------------- | ------------ | ------- |
| active-color    | 菜单标题和选项的选中态颜色                                       | `string`     | `08f`   |
| direction       | 菜单展开方向                                                     | `up`、`down` | `down`  |
| z-index         | 菜单栏 z-index 层级                                              | `number`     | `10`    |
| hide-overlay    | 是否隐藏遮罩层                                                   | `boolean`    | `false` |
| swipe-threshold | 滚动阈值，选项数量超过阈值且总宽度超过菜单栏宽度时，可以横向滚动 | `number`     | `0`     |

### DropdownMenuItem Props

| 参数     | 说明                            | 类型                                         | 默认值         |
| -------- | ------------------------------- | -------------------------------------------- | -------------- |
| value    | 当前选中项对应的 value          | `string`                                     |                |
| title    | 菜单项标题                      | `string`                                     | 当前选中项文字 |
| disabled | 是否禁用菜单                    | `boolean`                                    | `false`        |
| change   | 点击选项导致 `value` 变化时触发 | `e: ({ detail: { value: string } }) => void` |                |
| open     | 打开菜单栏时触发                | `() => void`                                 |                |
| close    | 关闭菜单栏时触发                | `() => void`                                 |                |

### DropdownItem Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 菜单内容 |

### DropdownItem Methods

| 名称   | 说明                                                             | 参数             | 返回值 |
| ------ | ---------------------------------------------------------------- | ---------------- | ------ |
| toggle | 切换菜单展示状态，传 `true` 为显示，`false` 为隐藏，不传参为取反 | `show?: boolean` | -      |

### 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                                           | 默认值    | 说明 |
| ---------------------------------------------- | --------- | ---- |
| `--quark-dropdown-menu-height`                 | `48px`    | -    |
| `--quark-dropdown-menu-title-background-color` | `#fff`    | -    |
| `--quark-dropdown-menu-title-color`            | `#242729` | -    |
| `--quark-dropdown-menu-title-font-size`        | `14px`    | -    |
| `--quark-dropdown-menu-title-padding`          | `8px`     | -    |

### 类型定义

```ts
type DropdownMenuDirection = "down" | "up";

type DropdownMenuProps = {
  zIndex?: number;
  hideOverlay?: boolean;
  activeColor?: string;
  direction?: DropdownMenuDirection;
  swipeThreshold?: number;
};

type DropdownItemProps = {
  value?: string;
  title?: string;
  disabled?: boolean;
};

type DropdownItemOption = {
  text: string;
  value: string;
};
```
