# Tab 标签组件

### 介绍

选项卡。

### 安装使用

```tsx
import { Tabs, TabContent } from "@quarkd/quark-react";
```

### 基础用法

```html
<Tabs activekey="{1}">
  <TabContent label="tab1"> tab1 content </TabContent>
  <TabContent label="tab2"> tab2 content </TabContent>
  <TabContent label="tab3" disabled> tab3 content </TabContent>
  <TabContent label="tab4"> tab4 content </TabContent>
</Tabs>
```

### 深色默模式

```html
<Tabs dark activekey="{1}">
  <TabContent label="tab1"> tab1 content </TabContent>
  <TabContent label="tab2"> tab2 content </TabContent>
  <TabContent label="tab3" disabled> tab3 content </TabContent>
  <TabContent label="tab4"> tab4 content </TabContent>
</Tabs>
```

### 通过名称匹配

```html
<Tabs activekey={'d'}>
  <TabContent label="tab1" name="a">
    tab1 content
  </TabContent>
  <TabContent label="tab2" name="b">
    tab2 content
  </TabContent>
  <TabContent label="tab3" disabled name="c">
    tab3 content
  </TabContent>
  <TabContent label="tab4" name="d">
    tab4 content
  </TabContent>
</Tabs>
```

### 横向滚动

长度超过自动支持横向滚动。

```html
<Tabs>
  <TabContent label="tab1">tab1</TabContent>
  <TabContent label="tab2">tab2</TabContent>
  ...
  <TabContent label="tab10">tab10</TabContent>
</Tabs>
```

### 切换事件

```js
export default () => {
  const [activeName, setActiveName] = useState("d");
  const onChange = ({ detail }) => {
    setActiveName(() => detail.name);
    console.log(`当前选择: ${detail.label}`);
  };

  return (
    <div className="demo tab-demo">
      <Tabs activekey={activeName} onChange={onChange}>
        <TabContent label="tab1" name="a">
          tab1 content
        </TabContent>
        <TabContent label="tab2" name="b">
          tab2 content
        </TabContent>
        <TabContent label="tab3" disabled name="c">
          tab3 content
        </TabContent>
        <TabContent label="tab4" name="d">
          tab4 content
        </TabContent>
      </Tabs>
    </div>
  );
};
```

### 收缩布局

通过 shrink 属性可以开启收缩布局，开启后，所有的标签会向左侧收缩对齐。

```html
<Tabs shrink>
  <TabContent label="tab1"> tab1 content </TabContent>
  <TabContent label="tab2"> tab2 content </TabContent>
  <TabContent label="tab3"> tab3 content </TabContent>
  <TabContent label="tab4"> tab4 content </TabContent>
</Tabs>
```

```css
:root {
  --tab-item-shrink-width: 60px;
  --tab-item-shrink-padding: 4px;
}
```

### 吸顶效果

nav-item 在滚动时固定在屏幕上方

```html
<Tabs sticky offsettop="17vw">
  <TabContent label="tab1"> tab1 content </TabContent>
  <TabContent label="tab2"> tab2 content </TabContent>
  <TabContent label="tab3"> tab3 content </TabContent>
  <TabContent label="tab4"> tab4 content </TabContent>
</Tabs>
```

## API

### Tabs props

| 方法名    | 说明                                            | 类型      | 默认值  |
| --------- | ----------------------------------------------- | --------- | ------- |
| activekey | 当前激活的 tab，对应到 `TabContent` 中的 `name` | `string`  | -       |
| sticky    | 是否吸顶                                        | `boolean` | `false` |
| dark      | 深色模式                                        | `boolean` | `false` |
| offsettop | 吸顶时与顶部的距离(单位: vw)                    | `string`  | `0vw`   |
| linewidth | 下划线宽                                        | string    | `40px`  |
| shrink    | 是否开启左侧收缩布局                            | `boolean` | `false` |

| onChange | change 回调函数 | `(e: {detail: { name: string，label: number }}) => void` | - |

### TabContent props

| 方法名   | 说明                            | 类型      | 默认值  |
| -------- | ------------------------------- | --------- | ------- |
| label    | tab 显示名称                    | `string`  | -       |
| disabled | tab 禁用状态                    | `boolean` | `false` |
| name     | tab 匹配名称(和 activekey 匹配) | `string`  | -       |

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                          | 说明                                      | 默认值                    |
| ----------------------------- | ----------------------------------------- | ------------------------- |
| `--tab-item-color`            | `tab-item` 字体颜色                       | `#5E6266`                 |
| `--tab-item-active-color`     | `tab-item` 激活态`active`字体颜色         | `#333333`                 |
| `--tab-item-disabled-color`   | `tab-item` 禁用状态字体颜色               | `#c8c9cc`                 |
| `--tab-item-min-width`        | `tab-item` 最小宽度(决定一行最多展示几个) | `20vw`(一行最多展示 5 个) |
| `--tab-item-height`           | `tab-item` 高度设置                       | `44px `                   |
| `--tab-item-font-size`        | `tab-item` 字体大小                       | `16px`                    |
| `--tab-active-line-color`     | `tab-item` 激活态`下划线`颜色             | `#0088ff `                |
| `--tabs-background-color`     | tabs 背景色                               | `#ffffff`                 |
| `--tab-item-background-color` | `tab-item` 背景色                         | `#ffffff `                |
| `--tab-item-shrink-width`     | 收缩布局下`tab-item`宽度                  | `auto`                    |
| `--tab-item-shrink-padding`   | 收缩布局下`tab-item`左右`padding`         | `0`                       |
