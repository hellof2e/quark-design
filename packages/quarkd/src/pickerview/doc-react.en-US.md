# Picker Selector

### Introduction

The PickerView is the content area of the Picker.

### Installation and Usage

```tsx
import { Picker, PickerRef } from "@quarkd/quark-react";
```

### Basic Usage

```js
import { useRef, useState, useEffect } from "react";
export default () => {
  const [open, setOpen] = useState(false);
  const pickerRef = useRef < PickerRef > null;

  const handleClose = () => setOpen(false);

  const handleConfirm = ({ detail }) => {
    const values = detail.value
      .map((column) => {
        return column.value;
      })
      .join(", ");
    console.log(`Current selection: ${values}`);
    setOpen(false);
  };

  useEffect(() => {
    // Simulate asynchronous data fetching
    setTimeout(() => {
      const { current: pickerCurrent } = pickerRef;
      pickerCurrent.setColumns([
        {
          defaultIndex: 2,
          values: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        },
        {
          defaultIndex: 0,
          values: ["Morning", "Afternoon"],
        },
      ]);
    }, 1000);
  }, []);

  const handleClick = () => setOpen(true);

  return (
    <div>
      <div onClick={handleClick}>Basic Usage</div>
      <Picker
        title="Select Time"
        ref={pickerRef}
        open={open}
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
    </div>
  );
};
```

### Custom Header

```js
import { useRef, useState, useEffect } from "react";
export default () => {
  const [open, setOpen] = useState(false);
  const pickerRef = useRef < PickerRef > null;

  const handleClose = () => setOpen(false);

  const handleConfirm = () => {
    const { current } = pickerRef;
    const values = current
      .getValues()
      .map((column) => {
        return column.value;
      })
      .join(", ");
    console.log(`Current selection: ${values}`);
    setOpen(false);
  };

  useEffect(() => {
    // Simulate asynchronous data fetching
    setTimeout(() => {
      const { current: pickerCurrent } = pickerRef;
      pickerCurrent.setColumns([
        {
          defaultIndex: 2,
          values: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        },
        {
          defaultIndex: 0,
          values: ["Morning", "Afternoon"],
        },
      ]);
    }, 1000);
  }, []);

  const handleClick = () => setOpen(true);

  return (
    <div>
      <div onClick={handleClick}>Custom Header</div>
      <Picker ref={pickerRef} bottomhidden open={open} onClose={handleClose}>
        <div slot="header" className="head-container">
          <span className="cancel" onClick={handleClose}>
            Cancel
          </span>
          <span className="picker-title">Select City</span>
          <span className="ensure" onClick={handleConfirm}>
            Confirm
          </span>
        </div>
      </Picker>
    </div>
  );
};
```

## API

### Props

| Property        | Description                                                         | Type                                                | Default   |
| --------------- | ------------------------------------------------------------------- | --------------------------------------------------- | --------- |
| open            | Whether the picker is displayed                                     | `boolean`                                           | `require` |
| title           | Title                                                               | `string`                                            |
| confirmtext     | Text for the confirm button                                         | `string`                                            | `Confirm` |
| bottomhidden    | Whether to hide the bottom button (usually used with custom header) | `boolean`                                           | `false`   |
| forbidmaskclick | Whether to prevent mask click                                       | `boolean`                                           | `false`   |
| onClose         | Called when clicking on the mask or cancel button                   | `() => void`                                        | `require` |
| onConfirm       | Confirm button click callback                                       | `(e: { detail: { value: SelectColumn[] }}) => void` | `require` |
| onChange        | Picker change callback                                              | `(e: { detail: { value: SelectColumn[] }}) => void` | -         |

### Slot

| Name        | Description   |
| ----------- | ------------- |
| name=header | Custom Header |

### Methods

| Method     | Description                                                      | Type                                |
| ---------- | ---------------------------------------------------------------- | ----------------------------------- |
| setColumns | Used to set the picker data                                      | `(columns: PickerColumn[]) => void` |
| getValues  | Get the currently selected data, usually used with custom header | `() => SelectColumn[]`              |

### Type Definitions

```js
type PickerColumn = {
  values: string[],
  defaultIndex: number,
};

type SelectColumn = {
  value: string,
  index: number,
};
```

## Style Variables

The component provides the following [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), which can be used for custom styling. Please refer to [Theme Customization](#/en-US/guide/theme) for usage.

| Name                         | Description       | Default Value                    |
| ---------------------------- | ----------------- | -------------------------------- |
| `--picker-title-font-size`   | Title font size   | `18px`                           |
| `--picker-title-color`       | Title color       | `#242729`                        |
| `--picker-title-font-weight` | Title font weight | `500`                            |
| `--picker-title-font-family` | Title font family | `PingFangSC-Medium, PingFang SC` |

---
