# Tabbar 底部栏

### 介绍

底部导航栏，用于在不同页面之间进行切换。

### 安装使用

如果使用 `quark-icons`，请先安装：`npm install --save quark-icons`。

```tsx
import { Tabbar, TabbarItem } from "@quarkd/quark-react";

// 引入 icons
import "@quarkd/icons/lib/home";
import "@quarkd/icons/lib/user";
import "@quarkd/icons/lib/tel";
```

### 基础用法

```html
<Tabbar>
  <TabbarItem label="home">
    <quark-icon-home slot="icon" size="20" />
  </TabbarItem>
  <TabbarItem label="user">
    <quark-icon-user slot="icon" size="20" />
  </TabbarItem>
  <TabbarItem label="tel">
    <quark-icon-tel slot="icon" size="20" />
  </TabbarItem>
</Tabbar>
```

### 通过名称匹配

```html
<Tabbar value="tel">
  <TabbarItem label="home" name="home">
    <quark-icon-home slot="icon" size="20" />
  </TabbarItem>
  <TabbarItem label="user" name="user">
    <quark-icon-user slot="icon" size="20" />
  </TabbarItem>
  <TabbarItem label="tel" name="tel">
    <quark-icon-tel slot="icon" size="20" />
  </TabbarItem>
</Tabbar>
```

### 徽标提示

```html
<Tabbar value="user">
  <TabbarItem badgecontent="20" label="home">
    <quark-icon-home slot="icon" size="20" />
  </TabbarItem>
  <TabbarItem label="user">
    <quark-icon-user slot="icon" size="20" />
  </TabbarItem>
  <TabbarItem label="tel">
    <quark-icon-tel slot="icon" size="20" />
  </TabbarItem>
</Tabbar>
```

### 自定义颜色

```html
<Tabbar inactivecolor="#000" activecolor="#ee0a24">
  <TabbarItem label="home">
    <quark-icon-home slot="icon" size="20" />
  </TabbarItem>
  <TabbarItem label="user">
    <quark-icon-user slot="icon" size="20" />
  </TabbarItem>
  <TabbarItem label="tel">
    <quark-icon-tel slot="icon" size="20" />
  </TabbarItem>
</Tabbar>
```

### 自定义图标

```js
export default () => {
  const img1 = "https://m.hellobike.com/resource/helloyun/18625/MJ7Tr_src.jpeg";
  const img2 = "https://m.hellobike.com/resource/helloyun/18625/WUu02_img.png";
  const [activeIndex, setActiveIndex] = useState(0);

  const onChange = ({ detail }) => {
    setActiveIndex(detail.value);
    console.log(`当前选中：${detail.value}`);
  };

  return (
    <div className="demo no-padding scope-list">
      <Tabbar onChange={onChange}>
        <TabbarItem label="home">
          <quark-icon-home slot="icon" size="20" />
        </TabbarItem>
        <TabbarItem icon="user" label="user">
          <img
            slot="icon"
            style={{ height: 20 }}
            src={activeIndex === 1 ? img1 : img2}
          />
        </TabbarItem>
        <TabbarItem label="tel">
          <quark-icon-tel slot="icon" size="20" />
        </TabbarItem>
      </Tabbar>
    </div>
  );
};
```

### 监听切换事件

```html
<Tabbar onChange="{" onChange }>
  <TabbarItem label="home">
    <quark-icon-home slot="icon" size="20" />
  </TabbarItem>
  <TabbarItem label="user">
    <quark-icon-user slot="icon" size="20" />
  </TabbarItem>
  <TabbarItem label="tel">
    <quark-icon-tel slot="icon" size="20" />
  </TabbarItem>
</Tabbar>
```

## API

### Tabbar Props

| 参数          | 说明               | 类型                                                                                      | 默认值    |
| ------------- | ------------------ | ----------------------------------------------------------------------------------------- | --------- |
| fixed         | 是否固定在底部     | `boolean`                                                                                 | `true`    |
| inactivecolor | 未选中颜色         | `string`                                                                                  | `#879099` |
| activecolor   | 选中颜色           | `string`                                                                                  | `#0088FF` |
| value         | 选中的名称或索引值 | `string`                                                                                  | `0`       |
| onChange      | 切换标签时触发     | `{e:{detail: {value: string}}} => void` 当没有 `name` 时返回索引，有 `name` 时返回 `name` | -         |

### TabbarItem Props

| 参数         | 说明                     | 类型     | 默认值 |
| ------------ | ------------------------ | -------- | ------ |
| label        | 标签名称, 用来显示       | `string` | -      |
| name         | 标签值，作为匹配的标识符 | `string` | -      |
| badgecontent | 徽标内容                 | `string` | -      |

### slots

| 名称 | 说明 | 参数 |
| ---- | ---- | ---- |
| icon | 图标 |      |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                  | 说明            | 默认值                                    |
| --------------------- | --------------- | ----------------------------------------- |
| `--tabbar-z-index`    | tabbar z-index  | `1`                                       |
| `--tabbar-box-shadow` | tabbar 上阴影   | `0px -2px 8px 0px rgba(36, 39, 41, 0.08)` |
| `--tabbar-font-size`  | tabbar 文字大小 | `10px`                                    |
| `--tabbar-height`     | tabbar 高度     | `56px`                                    |
