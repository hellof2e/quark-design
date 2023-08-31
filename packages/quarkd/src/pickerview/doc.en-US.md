# PickerView Selector View

### Introduction

The PickerView is the content area of the Picker.

### Installation and Usage

```tsx
import "quarkd/lib/pickerview";
```

### Basic Usage

```html
<template>
  <div>
    <h2>Basic Usage</h2>
    <quark-pickerview
      ref="pickerviewRef"
      @change="change"
    />
  </div>
</template>
```

```js
<script>
export default {
  mounted() {
    setTimeout(() => {
      // Simulate asynchronous data fetching
      const pickerView = this.$refs.pickerviewRef;
      pickerView.setColumns(
        [
          {
            defaultIndex: 0,
            values: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
          },
          {
            defaultIndex: 1,
            values: ['Morning', 'Afternoon']
          }
        ]
      )
    }, 1000)
  },
  methods: {
    change({detail}) {
      console.log(detail.value)
    }
  }
};
</script>
```

### Custom Style

```html
<template>
  <div>
    <h2>Custom Style</h2>
    <div @click="click">Custom Header</div>
    <quark-pickerview ref="customPickerRef" class="custom-pickerview" />
  </div>
</template>
```

```js
<script>
export default {
  data() {
    return {
      open: false
    };
  },
  mounted() {
    setTimeout(() => {
      // Simulate asynchronous data fetching
      const picker = this.$refs.customPickerRef;
      picker.setColumns(
        [
          {
            defaultIndex: 0,
            values: ['Zhejiang Province']
          },
          {
            defaultIndex: 2,
            values: ["Hangzhou", "Jiaxing", "Shaoxing", "Ningbo", "Huzhou", "Qiandao Lake"]
          }
        ]
      )
    }, 1000)
  },
  methods: {
    change({detail}) {
      console.log(detail.value, 33333)
    }
  }
};
</script>
```

It is recommended to set all dimensions to multiples of `picker-item-height`.

```css
.custom-pickerview {
  --pickerview-item-height: 44px;
  --pickerview-height: 220px;
  --pickerview-row-top-height: 88px;
  --pickerview-row-bottom-height: 88px;
  --pickerview-current-top: 90px;
}
```

## API

### Events

| Name    | Description         | Type                                               |
| ------- | --------------------| -------------------------------------------------- |
| change  | Picker change callback | `(e: {detail: {value: SelectColumn[]}}) => void`  |

### Methods

| Name       | Description                                  | Type                                 |
| ---------- | ---------------------------------------------| ------------------------------------ |
| setColumns | Used to set the selector data                | `(columns: PickerColumn[]) => void` |
| getValues  | Get the selected data from the picker, usually used when customizing the header | `() => SelectColumn[]`  |

### Type Definitions

```ts
type PickerColumn = {
  values: string[];
  defaultIndex: number; // Default selected
};

type SelectColumn = {
  value: string;
  index: number;
};
```

## Style Variables

The component provides the following [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), which can be used for custom styling. Please refer to [Theme Customization](#/en-US/guide/theme) for usage.

### Note

**When customizing variables, it is recommended to set them to multiples of `picker-item-height`.**
| Variable Name                   | Description          | Default Value        |
| -------------------------------| ---------------------| ---------------------|
| --pickerview-item-height        | Height of each row   | `34px`                |
| --pickerview-height             | Container height     | `170px`               |
| --pickerview-row-top-mask-height| Top transparent mask layer height | `68px`  |
| --pickerview-row-bottom-mask-height| Bottom transparent mask layer height | `68px`|
| --pickerview-border             | Default selected border | `1px solid #eee`     |
| --pickerview-item-font-size     | Font size for each row | `16px`               |
| --pickerview-item-color         | Font color for each row | `#242729`           |
| --pickerview-current-top        | Position of the current selected row, 2x height + top and bottom borders | `70px`|
