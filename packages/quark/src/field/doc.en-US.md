# Field

### Intro

Input Component

### Install

```tsx
import "quarkd/lib/field";
```

### Basic Usage

```html
<quark-field placeholder="Please enter text" label="label" />
<quark-field type="password" value="123456" label="password" />
<quark-field type="number" value="12345678901" max="11" label="number" />
<quark-field value="12345" maxlength="5" label="up to 5 digits" />
```

### Custom Label

```html
<quark-field value="custom label">
  <div slot="label" class="label">
    <span>Subject</span>
    <span>Subsubject</span>
  </div>
</quark-field>
<quark-field placeholder="disable label" value="no label" class="oneLine" />
```

### Disabled & Readonly

```html
<quark-field value="be disabled" label="disabled" disabled />
<quark-field placeholder="disable label" />
<quark-field value="be readonly" label="readonly" readonly />
```

### Required Fields

```html
<quark-field
  placeholder="Please enter text"
  label="label"
  required
  errormsg="can not be empty"
/>
```

### CSS Style

```html
<quark-field class="theme" value="css style" label="css" />
```

```css
.theme {
  --field-label-width: 100px;
  --field-label-text-color: green;
  --field-label-font-size: 18px;
  --field-label-margin-right: 10px;
  --field-input-text-color: #999;
  --field-input-font-size: 20px;
  --field-placeholder-text-color: red;
  --field-placeholder-font-size: 12px;
  --field-disabled-text-color: #eee;
}
```

### Event

```html
<quark-field
  label="emit blurred event"
  :value="value"
  @change="change"
  @blur="blur"
/>
```

```js
  change(e) {
    this.$data.value = e.detail.value;
  },
  blur() {
    this.$data.value = this.$data.value * 10;
  },
```

### set rules

```html
<quark-field
  placeholder="placeholder"
  label="label"
  id="custom-rule"
></quark-field>
```

```js
<script>
  mounted() {
    const field = document.getElementById('custom-rule');
    field.setRules([
      {
        validator: this.validatorPhone,
        message: 'please input right phone'
      }
    ])
  },
  methods: {
    validatorPhone(value) {
      if (!/^1[3456789]\d{9}$/.test(value)) {
        return false;
      }
      return true;
    }
  }
<script>
```

## API

### Props

| Attribute    | Description                                                                   | Type      | Default |
| ------------ | ----------------------------------------------------------------------------- | --------- | ------- |
| label        | Input description, hide when no value passed. Or can be set to slot = 'label' | `string`  |
| type         | Input type, default is text                                                   | `string`  | `text`  |
| value        | Input value                                                                   | `string`  | -       |
| defaultvalue | Default value                                                                 | `string`  | -       |
| name         | As the identifier when submitting the form                                    | `string`  | -       |
| placeholder  | Default info placeholder                                                      | `string`  | -       |
| min          | Inherit native input properties                                               | `string`  | -       |
| minlength    | Inherit native input properties                                               | `string`  | -       |
| max          | Inherit native input properties                                               | `string`  | -       |
| maxlength    | Inherit native input properties                                               | `string`  | -       |
| disabled     | Whether to disable input                                                      | `boolean` | `false` |
| readonly     | Whether input be readonly                                                     | `boolean` | `false` |
| required     | Whether input value be required                                               | `boolean` | `false` |
| errormsg     | Error text                                                                    | `string`  | -       |

### Event

| Event  | Description                      | Type                                   |
| ------ | -------------------------------- | -------------------------------------- |
| change | Emitted when input value changed | `(e:{detail:{value: string}}) => void` |
| focus  | Emitted when input is focused    | `(e:{detail:{value: string}}) => void` |
| blur   | Emitted when input is blurred    | `(e:{detail:{value: string}}) => void` |

### Method

| Name     | Description                       | Type                     |
| -------- | --------------------------------- | ------------------------ |
| setRules | Used to set form validation rules | `(rule: Rule[]) => void` |

### Type definition

```js
type Rule = {
  message: string, // error message
  validator: (value: string | number) => boolean, // rule
};
```

## CSS Variables

The component provides the following [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties), which can be used to customize styles. Please refer to [ConfigProvider component](#/theme).

| Name                             | Description                  | Default   |
| -------------------------------- | ---------------------------- | --------- |
| `--field-label-width`            | label width                  | `119px`   |
| `--field-label-font-size`        | label font size              | `15px`    |
| `--field-label-text-color`       | label font color             | `#242729` |
| `--field-label-font-weight`      | label font weight            |
| `--field-label-margin-right`     | label right margin           | `12px`    |
| `--field-input-text-color`       | input font color             | `#242729` |
| `--field-input-align`            | input justification          | `left`    |
| `--field-input-font-size`        | input font size              | `15px`    |
| `--field-placeholder-text-color` | input placeholder text color | `#bcc4cc` |
| `--field-placeholder-font-size`  | input placeholder font size  | `15px`    |
| `--field-disabled-text-color`    | disable font color           | `#c8c9cc` |
| `--field-error-font-size`        | error text font size         | `12px`    |
| `--field-error-text-color`       | error text font color        | `#F72626` |
| `--field-error-text-align`       | error text justification     | `left`    |
