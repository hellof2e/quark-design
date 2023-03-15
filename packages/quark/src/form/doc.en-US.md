# Form

### Intro

Form

### Install

```tsx
import "quarkd/lib/form";
```

### Basic Usage

Set value of form items, used with `name` prop.

```html
<quark-form ref="form1">
  <quark-field name="name" label="name"></quark-field>
  <div class="line" />
  <quark-field type="password" name="password" label="password" />
  <div class="submit-wrap">
    <div @click="submit1" class="submit">Submit</div>
  </div>
</quark-form>
```

```js
this.$refs.form1.setRules = ([
  { name: 'name', required: true },
  { name: 'password', required: true, type: 'password' }
]);
submit1() {
  this.$refs.form1.submit().then((value) => {
    console.log(value, 'current form values');
  }).catch(err => {
    Toast.text(err)
  });
},
```

### Validate Rules

Only useful for field components, supports required and validator custom events.

```html
<quark-form ref="form2">
  <quark-field
    placeholder="Please enter text"
    name="age"
    label="age"
  ></quark-field>
  <div class="line" />
  <quark-field
    type="number"
    value="123"
    max="11"
    name="phone"
    label="phone number"
  />
  <div class="submit-wrap">
    <div @click="submit2" class="submit">Submit</div>
  </div>
</quark-form>
```

```js
 this.$refs.form2.setRules([
  {
    name: 'age',
    required: true,
    message: 'older than 18 years old',
    validator: (value) => value >= 18
  },
  {
    name: 'phone',
    required: true,
    message: 'Please enter the correct phone number',
    validator: (value) => /^1[3456789]\d{9}$/g.test(value)
  }
  ]);

  submit2() {
    this.$refs.form2.submit().then((value) => {
      console.log(value, 'current form values');
    }).catch(err => {
      Toast.text(err)
    });
  },
```

### Form Items

```html
<quark-form ref="form3">
  <quark-field
    placeholder="Please enter text"
    name="field"
    label="age"
    :value="field"
  ></quark-field>
  <div class="line" />
  <div class="form-item">
    <quark-textarea name="textarea" :value="textarea" />
  </div>
  <div class="line" />
  <div class="form-item">
    <span>Vegetables:</span>
    <quark-checkbox name="checkbox1" shape="square" :checked="checkbox1"
      >Cucumber</quark-checkbox
    >
    <quark-checkbox name="checkbox2" shape="square" :checked="checkbox2"
      >Ginger</quark-checkbox
    >
  </div>
  <div class="line" />
  <div class="form-item">
    <span>Fruits:</span>
    <quark-radio-group name="radio" :value="radio">
      <quark-radio name="apple">Apple</quark-radio>
      <quark-radio name="blue">Banana</quark-radio>
    </quark-radio-group>
  </div>
  <div class="line" />
  <div class="form-item">
    <span>Switch on:</span>
    <quark-switch name="switch" />
  </div>
  <div class="line" />
  <div class="form-item">
    <span>Rate:</span>
    <quark-rate name="rate" />
  </div>
  <div class="line" />
  <div class="form-item">
    <span>Stepper:</span>
    <quark-stepper name="step" />
  </div>
  <div class="line" />
  <div class="form-item">
    <span>Uploader:</span>
    <quark-uploader name="uploader" iconcolor="#ccc" preview />
  </div>
  <div class="line" />
  <div class="form-item">
    <span>Picker:</span>
    <quark-cell :title="datepicker" isLink @click="click"></quark-cell>
    <quark-picker
      ref="pickerRef"
      title="Please choose time"
      name="picker"
      :open="open"
      @close="close"
      @confirm="confirm"
    />
  </div>
  <div class="line" />
  <div class="submit-wrap">
    <div class="submit" @click="submit3">Submit</div>
  </div>
</quark-form>
```

```js
  submit3() {
      this.$refs.form3.submit().then((value) => {
        Toast.text('Please check form value in the console');
        console.log(value, 'current form values');
      });
    },
    click() {
      this.open = true;
    },
    close() {
      this.open = false;
    },
    confirm({ detail }) {
      this.datepicker = detail.value.map((i) => i.value).join(' ');
      this.open = false;
    }
```

## API

### Method

| Name     | Description                                              | Type                          |
| -------- | -------------------------------------------------------- | ----------------------------- |
| submit   | Submit and validate the form to get all form items value | `() => Promise<value: any[]>` |
| setRules | Only valid for field component                           | `(rule: Rule[])=>void`        |

### Type definition

```js
type Rule = {
  name: string // `Name` prop of field component that needs to be validated
  required?: boolean // Whether to be required
  message?: string // Error text
  validator?: (value: string | number) => boolean; // Custom validator function
};
```
