# CascadePicker

### Intro

The cascader component is used for the selection of multi-level data. The typical scene is the selection of provinces and cities.
The data nesting depth of cascading selection needs to be consistent. If some options have no sub-options, you can use an empty string as a placeholder.

### Install

```tsx
import { CascadePicker, CascadePickerRef } from "@quarkd/quark-react";
```

### Basic Usage

```js
const DATA = [
  {
    text: "Zhejiang",
    children: [
      {
        text: "Hangzhou",
        children: [{ text: "West Lake District" }, { text: "Yuhang District" }],
      },
      {
        text: "Wenzhou",
        children: [{ text: "Lucheng District" }, { text: "Ouhai District" }],
      },
    ],
  },
  {
    text: "Fujian",
    children: [
      {
        text: "Fuzhou",
        children: [{ text: "Gulou District" }, { text: "Taijiang District" }],
      },
      {
        text: "Xiamen",
        children: [{ text: "Siming District" }, { text: "Haicang District" }],
      },
    ],
  },
  {
    text: "Beijing",
    children: [
      {
        text: "",
        children: [{ text: "" }],
      },
    ],
  },
];
export default () => {
  const [open, setOpen] = useState(false);
  const pickerRef = useRef < CascadePickerRef > null;

  const handleClose = () => setOpen(false);

  const handleConfirm = ({ detail }) => {
    const values = detail.value
      .map((column) => {
        return column.value;
      })
      .join("，");
    console.log(`Current selected：${values}`);
    setOpen(false);
  };

  useEffect(() => {
    //Simulate async fetch
    setTimeout(() => {
      const { current: pickerCurrent } = pickerRef;
      pickerCurrent.setColumns(DATA);
    }, 1000);
  }, []);

  const handleClick = () => setOpen(true);

  return (
    <div className="demo">
      <div onClick={handleClick}></div>
      <CascadePicker
        title="Please choose"
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
const DATA = [
  {
    text: "Zhejiang",
    children: [
      {
        text: "Hangzhou",
        children: [{ text: "West Lake District" }, { text: "Yuhang District" }],
      },
      {
        text: "Wenzhou",
        children: [{ text: "Lucheng District" }, { text: "Ouhai District" }],
      },
    ],
  },
  {
    text: "Fujian",
    children: [
      {
        text: "Fuzhou",
        children: [{ text: "Gulou District" }, { text: "Taijiang District" }],
      },
      {
        text: "Xiamen",
        children: [{ text: "Siming District" }, { text: "Haicang District" }],
      },
    ],
  },
];
export default () => {
  const [open, setOpen] = useState(false);
  const pickerRef = useRef < CascadePickerRef > null;

  const handleClose = () => setOpen(false);

  const handleConfirm = () => {
    const { current } = pickerRef;
    const values = current
      .getValues()
      .map((column) => {
        return column.value;
      })
      .join("，");
    console.log(values);
    setOpen(false);
  };

  useEffect(() => {
    //Simulate async fetch
    setTimeout(() => {
      const { current: pickerCurrent } = pickerRef;
      pickerCurrent.setColumns(DATA);
    }, 1000);
  }, []);

  const handleClick = () => setOpen(true);

  return (
    <div className="demo">
      <div onClick={handleClick}></div>
      <CascadePicker
        ref={pickerRef}
        title="Please choose"
        open={open}
        bottomhidden
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
      </CascadePicker>
    </div>
  );
};
```

## API

### Props

| Attribute    | Description                                             | Type                                                | Default   |
| ------------ | ------------------------------------------------------- | --------------------------------------------------- | --------- |
| open         | Whether to show Picker                                  | `boolean `                                          | `require` |
| title        | Title                                                   | `string `                                           |
| bottomhidden | Whether to show bottom button (use with custom header） | `boolean`                                           | `false`   |
| onClose      | Emitted when click mask or cancel button.               | `() => void`                                        |
| onConfirm    | Emitted when click confirm button.                      | `（e: {detail:{value: SelectedColumn[]}}）=> void`  |
| onChange     | Emitted when current option changed.                    | `（e: {detail:{value: SelectedColumn[]}}）=> void ` |

### Slot

| Name        | Description   |
| ----------- | ------------- |
| name=header | Custom header |

### Methods

| Name       | Description                                                     | Type                                |
| ---------- | --------------------------------------------------------------- | ----------------------------------- |
| setColumns | Set current value of Picker                                     | `(columns: PickerColumn[]) => void` |
| getValues  | Get values selected by Picker, usually used with custom header. | `（）=> SelectedColumn[]`           |

### Type definition

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

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/zh-CN/guide/theme).

| Name                                | Description       | Default                          |
| ----------------------------------- | ----------------- | -------------------------------- |
| `--cascadepicker-title-font-size`   | Title font size   | `18px`                           |
| `--cascadepicker-title-color`       | Title font color  | ` #242729`                       |
| `--cascadepicker-title-font-weight` | Title font weight | `500`                            |
| `--cascadepicker-title-font-family` | Title font family | `PingFangSC-Medium, PingFang SC` |
