# Picker

### Intro

Users can choose multiple option sets, and there are single-column selection and multi-column selection in Picker, use CascadePicker for cascade selection.

### Install

```tsx
import "quarkd/lib/picker";
```

### Basic Usage

```html
<template>
  <div>
    <h2>Basic Usage</h2>
    <div @click="click">open</div>
    <quark-picker
      ref="pickerRef"
      :open="open"
      title="Please choose time"
      @close="close"
      @confirm="confirm"
      @change="change"
    />
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
      //Simulate async fetch
      const picker = this.$refs.pickerRef;
      picker.setColumns(
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
    click() {
      this.open = true
    },
    close() {
      this.open = false
    },
    confirm({detail}) {
      console.log(detail.value)
      this.open = false
    },
    change({detail}) {
      console.log(detail.value)
    }
  }
};
```

### Custom Header

```html
<template>
  <div>
    <h2>Custom Header</h2>
    <div @click="click">Custom Header</div>
    <quark-picker :open="open" @close="close" ref="pickerRef" bottomhidden>
      <div slot="header" class="head-container">
        <span class="cancel" @click="close">Cancel</span>
        <span class="picker-title">Please choose city</span>
        <span class="ensure" @click="confirm">Confirm</span>
      </div>
    </quark-picker>
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
      //Simulate async fetch
      const picker = this.$refs.pickerRef;
      picker.setColumns(
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
    click() {
      this.open = true
    },
    close() {
      this.open = false
    },
    confirm() {
      const picker = this.$refs.pickerRef;
      const values = picker.getValues()
      console.log(values)
      this.open = false
    },
    change({detail}) {
      console.log(detail.value)
    }
  }
};
```

## API

### Props

| Attribute    | Description                                            | Type      | Default   |
| ------------ | ------------------------------------------------------ | --------- | --------- |
| open         | Whether to show picker                                 | `boolean` | `require` |
| title        | Title                                                  | `string`  | -         |
| confirmtext  | Text of the ok button                                  | `string`  | `Confirm` |
| bottomhidden | Whether to show bottom button (use with custom header) | `boolean` | `false`   |

### Events

| Event   | Description                               | Type                                             |
| ------- | ----------------------------------------- | ------------------------------------------------ |
| close   | Emitted when click mask or cancel button. | `() => void`                                     |
| confirm | Emitted when click confirm button.        | `（e: {detail:{value: SelectColumn[]}}）=> void` |
| change  | Emitted when current option changed.      | `（e: {detail:{value: SelectColumn[]}}）=> void` |

### Slot

| Name        | Description   |
| ----------- | ------------- |
| name=header | Custom header |

### Methods

| Name       | Description                                                     | Type                                |
| ---------- | --------------------------------------------------------------- | ----------------------------------- |
| setColumns | Set current value of Picker                                     | `(columns: PickerColumn[]) => void` |
| getValues  | Get values selected by Picker, usually used with custom header. | `（）=> SelectColumn[]`             |

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

| Name                         | Description       | Default                          |
| ---------------------------- | ----------------- | -------------------------------- |
| `--picker-title-font-size`   | Title font size   | `18px`                           |
| `--picker-title-color`       | Title font color  | ` #242729`                       |
| `--picker-title-font-weight` | Title font weight | `500`                            |
| `--picker-title-font-family` | Title font family | `PingFangSC-Medium, PingFang SC` |
