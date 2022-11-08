# Picker 选择器

### 介绍

提供多个选项集合供用户选择，支持单列选择和多列选择，级联选择请使用CascadePicker

### 安装使用

```tsx
import { Picker,PickerRef } from "@quarkd/quark-react";
```

### 基础用法
```js
import { useRef, useState, useEffect } from 'react';
export default () => {

  const [open, setOpen] = useState(false);
  const pickerRef = useRef<PickerRef>(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = ({ detail }) => {
    const values = detail.value
      .map((column) => {
        return column.value;
      })
      .join('，');
    console.log(`当前选中：${values}`);
    setOpen(false);
  };

  useEffect(() => {
    // 模拟异步获取数据
    setTimeout(() => {
      const { current: pickerCurrent } = pickerRef;
      pickerCurrent.setColumns([
        {
          defaultIndex: 2,
          values: ['星期一', '星期二', '星期三', '星期四', '星期五']
        },
        {
          defaultIndex: 0,
          values: ['上午', '下午']
        }
      ]);
    }, 1000);
  }, []);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div >
      <div onClick={handleClick}>基本使用</div>
      <Picker
        title="请选择时间"
        ref={pickerRef}
        open={open}
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
    </div>
  );
}

```

### 自定义头部

```js
import { useRef, useState, useEffect } from 'react';
export default () => {

  const [open, setOpen] = useState(false);
  const pickerRef = useRef<PickerRef>(null);

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
      .join('，');
    console.log(`当前选中：${values}`);
    setOpen(false);
  };

  useEffect(() => {
    // 模拟异步获取数据
    setTimeout(() => {
      const { current: pickerCurrent } = pickerRef;
      pickerCurrent.setColumns([
        {
          defaultIndex: 2,
          values: ['星期一', '星期二', '星期三', '星期四', '星期五']
        },
        {
          defaultIndex: 0,
          values: ['上午', '下午']
        }
      ]);
    }, 1000);
  }, []);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div >
      <div onClick={handleClick}>自定义头部</div>
      <Picker
        ref={pickerRef}
        bottomhidden
        open={open}
        onClose={handleClose}
      >
        <div slot="header" className="head-container">
          <span className="cancel" onClick={handleClose}>
            取消
          </span>
          <span className="picker-title">请选择城市</span>
          <span className="ensure" onClick={handleConfirm}>
            确定
          </span>
        </div>
      </Picker>
    </div>
  );
}
```

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| open        | picker是否显示 | `boolean`             | `require`
| title       | 标题 | `string `                 | 
| confirmtext      | 确定按钮的文字           | `string` | `确认`
| bottomhidden | 是否隐藏底部按钮（通常配合自定义头部使用）           | `boolean` | `false`
| onClose         | 点击遮罩或者取消按钮 |      `() => void`    |  `require ` |
| onConfirm         | 确定按钮点击回调 |      `（e: {detail:{value: SelectColumn[]}}）=> void`   | `require` |
| onChange         | picker 改变回调 |      `（e: {detail:{value:  SelectColumn[]}}）=> void`   | - |



### Slot
| 名称         | 说明                             | 
|--------------|----------------------------------|
| name=header  | 自定义头部              |           

### 方法
| 名称         | 说明                             | 类型   |
|--------------|----------------------------------|--------|
| setColumns         | 用于设置选择器数据 |      `(columns: PickerColumn[]) => void`   |
| getValues         | 获取选择器选中的数据，通常配合自定义头部时使用 |      `（）=> SelectColumn[]`   |

### 类型定义
```js
type PickerColumn = {
  values: string[]
  defaultIndex: number
};

type SelectColumn = {
  value: string
  index: number
};
```
## 样式变量

组件提供了以下[CSS变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                     | 说明                                  | 默认值          | 
| ------------------------ | ----------------------------------- | --------------- |
| `--picker-title-font-size` | 标题字号 | `18px` |   
| `--picker-title-color`   | 标题颜色                         |    `#242729`  |
| `--picker-title-font-weight`       | 标题字重                           |   `500`   |  
| `--picker-title-font-family`       | 标题字体                       |   `PingFangSC-Medium, PingFang SC`   |  

