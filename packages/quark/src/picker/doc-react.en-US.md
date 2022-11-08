# Picker

### Intro

Users can choose multiple option sets, and there are single-column selection and multi-column selection in Picker, use CascadePicker for cascade selection.

### Install

```tsx
import { Picker,PickerRef } from "@quarkd/quark-react";
```

### Basic Usage
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
    console.log(values);
    setOpen(false);
  };

  useEffect(() => {
    //Simulate async fetch
    setTimeout(() => {
      const { current: pickerCurrent } = pickerRef;
      pickerCurrent.setColumns([
        {
          defaultIndex: 2,
          values: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
        },
        {
          defaultIndex: 0,
          values: ['Morning', 'Afternoon']
        }
      ]);
    }, 1000);
  }, []);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div >
      <div onClick={handleClick}>Basic Usage</div>
      <Picker
        ref={pickerRef}
        title="Please choose time"
        open={open}
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
    </div>
  );
}

```

### Custom Header

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
    console.log(values);
    setOpen(false);
  };

  useEffect(() => {
    // 模拟异步获取数据
    setTimeout(() => {
      const { current: pickerCurrent } = pickerRef;
      pickerCurrent.setColumns([
        {
          defaultIndex: 2,
          values: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
        },
        {
          defaultIndex: 0,
          values: ['Morning', 'Afternoon']
        }
      ]);
    }, 1000);
  }, []);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div >
      <div onClick={handleClick}>Custom Header</div>
      <Picker
        ref={pickerRef}
        bottomhidden
        open={open}
        onClose={handleClose}
      >
        <div slot="header" className="head-container">
          <span className="cancel" onClick={handleClose}>
            Cancel
          </span>
          <span className="picker-title">Please choose city</span>
          <span className="ensure" onClick={handleConfirm}>
            Confirm
          </span>
        </div>
      </Picker>
    </div>
  );
}
```

## API

### Props

| Attribute         | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| open  | Whether to show picker  | `boolean`  | `require`
| title | Title | `string`  | - |
| confirmtext      | Text of the ok button           | `string` | `Confirm`
| bottomhidden  | Whether to show bottom button (use with custom header)  | `boolean` | `false`
| onClose | Emitted when click mask or cancel button. | `() => void`    |  `require ` |
| onConfirm | Emitted when click confirm button.  |  `（e: {detail:{value: SelectColumn[]}}）=> void`   | `require` |
| onChange  | Emitted when current option changed.  | `（e: {detail:{value:  SelectColumn[]}}）=> void`   | - |


### Slot
| Name         | Description                             |
|--------------|----------------------------------|
| name=header  | Custom header              |

### Methods
| Name         | Description                             | Type   |
|--------------|----------------------------------|--------|
| setColumns   | Set current value of Picker	 |  `(columns: PickerColumn[]) => void`   |
| getValues    | Get values selected by Picker, usually used with custom header. |  `（）=> SelectColumn[]`   |

### Type definition

```js
type PickerColumn = {
  values: string[];
  defaultIndex: number;
};

type SelectColumn = {
  value: string
  index: number
};
```

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name                     | Description                                  | Default          |
| ------------------------ | ----------------------------------- | --------------- |
| `--picker-title-font-size` | Title font size | `18px` |
| `--picker-title-color`   | Title font color | ` #242729`  |
| `--picker-title-font-weight`  | Title font weight  |  `500` |
| `--picker-title-font-family`  | Title font family  |  `PingFangSC-Medium, PingFang SC`  |

