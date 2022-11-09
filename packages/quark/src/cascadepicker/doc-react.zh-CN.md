# CascadePicker 级联选择器

### 介绍

级联选择器，用于多级联动选择，列如地区选择。级联选择的数据嵌套深度需要保持一致，如果部分选项没有子选项，可以使用空字符串进行占位。

### 安装使用

```tsx
import { CascadePicker, CascadePickerRef } from "@quarkd/quark-react";
```

### 基础用法

```js
const DATA = [
  {
    text: "浙江",
    children: [
      {
        text: "杭州",
        children: [{ text: "西湖区" }, { text: "余杭区" }],
      },
      {
        text: "温州",
        children: [{ text: "鹿城区" }, { text: "瓯海区" }],
      },
    ],
  },
  {
    text: "福建",
    children: [
      {
        text: "福州",
        children: [{ text: "鼓楼区" }, { text: "台江区" }],
      },
      {
        text: "厦门",
        children: [{ text: "思明区" }, { text: "海沧区" }],
      },
    ],
  },
];
export default () => {
  const [open, setOpen] = useState(false);
  const pickerRef = useRef < CascadePickerRef > null;

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = ({ detail }) => {
    const values = detail.value
      .map((column) => {
        return column.value;
      })
      .join("，");
    console.log(`当前选中：${values}`);
    setOpen(false);
  };

  useEffect(() => {
    // 模拟异步获取数据
    setTimeout(() => {
      const { current: pickerCurrent } = pickerRef;
      pickerCurrent.setColumns(DATA);
    }, 1000);
  }, []);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div className="demo">
      <div onClick={handleClick}></div>
      <CascadePicker
        title="请选择地区"
        ref={pickerRef}
        open={open}
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
    </div>
  );
};
```

### 自定义头部

```js
const DATA = [
  {
    text: "浙江",
    children: [
      {
        text: "杭州",
        children: [{ text: "西湖区" }, { text: "余杭区" }],
      },
      {
        text: "温州",
        children: [{ text: "鹿城区" }, { text: "瓯海区" }],
      },
    ],
  },
  {
    text: "福建",
    children: [
      {
        text: "福州",
        children: [{ text: "鼓楼区" }, { text: "台江区" }],
      },
      {
        text: "厦门",
        children: [{ text: "思明区" }, { text: "海沧区" }],
      },
    ],
  },
];
export default () => {
  const [open, setOpen] = useState(false);
  const pickerRef = useRef < CascadePickerRef > null;

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    const { current } = pickerRef;
    const values = current
      .getValues()
      .map((column) => {
        return column.value;
      })
      .join("，");
    console.log(`当前选中：${values}`);
    setOpen(false);
  };

  useEffect(() => {
    // 模拟异步获取数据
    setTimeout(() => {
      const { current: pickerCurrent } = pickerRef;
      pickerCurrent.setColumns(DATA);
    }, 1000);
  }, []);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div className="demo">
      <div onClick={handleClick}></div>
      <CascadePicker title="请选择地区" ref={pickerRef} open={open}>
        <div slot="header" className="head-container">
          <span className="cancel" onClick={handleClose}>
            取消
          </span>
          <span className="picker-title">请选择地区</span>
          <span className="ensure" onClick={handleConfirm}>
            确定
          </span>
        </div>
      </CascadePicker>
    </div>
  );
};
```

## API

### Props

| 参数         | 说明                                       | 类型                                                | 默认值    |
| ------------ | ------------------------------------------ | --------------------------------------------------- | --------- |
| open         | picker 是否显示                            | `boolean`                                           | `require` |
| title        | 标题                                       | `string`                                            |           |
| bottomhidden | 是否隐藏底部按钮（通常配合自定义头部使用） | `boolean`                                           | `false`   |
| onClose      | 点击遮罩或者取消按钮                       | `() => void `                                       | `require` |
| onConfirm    | 确定按钮点击回调                           | `（e: {detail:{value: SelectedColumn[]}}）=> void ` | `require` |
| onChange     | picker 改变回调                            | `（e: {detail:{value: SelectedColumn[]}}）=> void`  |           |

### Slot

| 名称        | 说明       |
| ----------- | ---------- |
| name=header | 自定义头部 |

### 方法

| 名称       | 说明                                           | 类型                                |
| ---------- | ---------------------------------------------- | ----------------------------------- |
| setColumns | 用于设置选择器数据                             | `(columns: PickerColumn[]) => void` |
| getValues  | 获取选择器选中的数据，通常配合自定义头部时使用 | `（）=> SelectedColumn[] `          |

### 类型定义

```js
type PickerColumn = {
  text: string;
  children: PickerColumn[];
};

type SelectedColumn = {
  value: string
  index: number
};

```

## 样式变量

组件提供了以下[CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                                | 说明     | 默认值                           |
| ----------------------------------- | -------- | -------------------------------- |
| `--cascadepicker-title-font-size`   | 标题字号 | `18px`                           |
| `--cascadepicker-title-color`       | 标题颜色 | `#242729`                        |
| `--cascadepicker-title-font-weight` | 标题字重 | `500`                            |
| `--cascadepicker-title-font-family` | 标题字体 | `PingFangSC-Medium, PingFang SC` |
