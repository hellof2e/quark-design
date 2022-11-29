# CascadePicker

### Intro

The cascader component is used for the selection of multi-level data. The typical scene is the selection of provinces and cities.
The data nesting depth of cascading selection needs to be consistent. If some options have no sub-options, you can use an empty string as a placeholder.

### Install

```tsx
import "quarkd/lib/cascadepicker";
```

### Basic Usage

```html
<template>
  <div>
    <h2>Basic Usage</h2>
    <div @click="click">open</div>
    <quark-cascade-picker
      title="Please choose"
      ref="pickerRef"
      :open="open"
      @close="close"
      @confirm="confirm"
      @change="change"
    />
  </div>
</template>
```

```js
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
            text: 'Zhejiang',
            children: [
              {
                text: 'Hangzhou',
                children: [
                  { text: 'West Lake District' },
                  { text: 'Yuhang District' }
                ],
              },
              {
                text: 'Wenzhou',
                children: [
                  { text: 'Lucheng District' },
                  { text: 'Ouhai District' }
                ],
              },
            ],
          },
          {
            text: 'Fujian',
            children: [
              {
                text: 'Fuzhou',
                children: [
                  { text: 'Gulou District' },
                  { text: 'Taijiang District' }
                ],
              },
              {
                text: 'Xiamen',
                children: [
                  { text: 'Siming District' },
                  { text: 'Haicang District' }
                ],
              },
            ],
          },
          {
            text: 'Beijing',
            children: [
              {
                text: '',
                children: [{ text: '' }],
              },
            ],
          },
        ];
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
    <quark-cascade-picker
      ref="pickerRef"
      :open="open"
      bottomhidden
      @close="close"
    >
      <div slot="header" class="head-container">
        <span class="cancel" @click="close">Cancel</span>
        <span class="picker-title">Please choose city</span>
        <span class="ensure" @click="confirm">Confirm</span>
      </div>
    </quark-cascade-picker>
  </div>
</template>
```

```js
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
            text: 'Zhejiang',
            children: [
              {
                text: 'Hangzhou',
                children: [
                  { text: 'Gulou District' },
                  { text: 'Taijiang District' }
                ],
              },
              {
                text: 'Wenzhou',
                children: [
                  { text: 'Lucheng District' },
                  { text: 'Ouhai District' }
                ],
              },
            ],
          },
          {
            text: 'Fujian',
            children: [
              {
                text: 'Fuzhou',
                children: [
                  { text: 'Gulou District' },
                  { text: 'Taijiang District' }
                ],
              },
              {
                text: 'Xiamen',
                children: [
                  { text: 'Siming District' },
                  { text: 'Haicang District' }
                ],
              },
            ],
          },
          {
            text: 'Beijing',
            children: [
              {
                text: '',
                children: [{ text: '' }],
              },
            ],
          },
        ];
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

| Attribute    | Description                                             | Type       | Default   |
| ------------ | ------------------------------------------------------- | ---------- | --------- |
| open         | Whether to show Picker                                  | `boolean ` | `require` |
| title        | Title                                                   | `string `  |
| bottomhidden | Whether to show bottom button (use with custom header） | `boolean`  | `false`   |

### Events

| Event   | Description                               | Type                                                |
| ------- | ----------------------------------------- | --------------------------------------------------- |
| close   | Emitted when click mask or cancel button. | `() => void`                                        |
| confirm | Emitted when click confirm button.        | `（e: {detail:{value: SelectedColumn[]}}）=> void`  |
| change  | Emitted when current option changed.      | `（e: {detail:{value: SelectedColumn[]}}）=> void ` |

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
