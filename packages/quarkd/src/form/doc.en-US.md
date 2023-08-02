# Form

### Intro

Form

### Install

```tsx
import "quarkd/lib/form";
import "quarkd/lib/form-item";
```

### Basic Usage

Set value of form items, used with `prop` prop.

```html
<quark-form ref="formRef" labelwidth="70px">
  <quark-form-item prop="name" label="Name">
    <quark-field v-model="form.name" placeholder="Name" />
  </quark-form-item>
  <quark-form-item prop="password" label="Password">
    <quark-field
      v-model="form.password"
      type="password"
      placeholder="Password"
    />
  </quark-form-item>
  <quark-form-item prop="other.age" label="Age">
    <quark-field v-model="form.other.age" placeholder="Age" />
  </quark-form-item>
</quark-form>

<div class="flex-box">
  <quark-button type="primary" size="big" @click="submit">
    Submit
  </quark-button>
  <quark-button size="big" @click="reset">Reset</quark-button>
</div>
```

```js
export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
        other: {
          age: 18,
        },
      },
    };
  },
  mounted() {
    this.$refs.formRef.setModel(this.form);
    this.$refs.formRef.setRules({
      name: [{ required: true, message: "Name is required" }],
      password: { required: true, message: "Password is required" },
      other: {
        age: [{ required: true, message: "Age is required" }],
      },
    });
  },
  methods: {
    submit() {
      this.$refs.formRef.validate((valid, res) => {
        console.log("submit", valid, res);
      });
    },
    reset() {
      this.$refs.formRef.resetFields();
    },
  },
};
```

### Validate Rules

Custom validate callback function must be called. See more advanced usage at [async-validator](https://github.com/yiminghe/async-validator).

```html
<quark-form ref="formRef" labelwidth="70px">
  <quark-form-item prop="name" label="Name">
    <quark-field placeholder="Use pattern" />
  </quark-form-item>
  <quark-form-item prop="password" label="Password">
    <quark-field v-model="form.password" placeholder="Use validator" />
  </quark-form-item>
  <quark-form-item prop="age" name="Age">
    <quark-field placeholder="Use async validator" />
  </quark-form-item>
</quark-form>

<div class="flex-box">
  <quark-button type="primary" size="big" @click="submit">
    Submit
  </quark-button>
</div>
```

```js
export default {
  const validatorPassword = (rule, val, callback) => {
    if (!val) {
      callback(new Error("Error message"));
    } else if (val === "123456") {
      callback(new Error("Password can not be 123456"));
    } else {
      callback();
    }
  };
  const asyncValidator = (rule, value) => {
    return new Promise((resolve, reject) => {
      if (value < 18) {
        reject("Must not be younger than 18");
      } else {
        resolve();
      }
    });
  };
  data() {
    return {
      form: {
        name: "",
        password: "",
        age: "",
      },
      rules: {
        name: [
          { required: true, pattern: /\w{6}/, message: "Error message" }
        ],
        password: [{ required: true, validator: validatorPassword }],
        age: [{ required: true, asyncValidator: asyncValidator }]
      }
    }
  },
  mounted() {
    this.$refs.formRef.setRules(this.rules);
  },
  methods: {
    async submit() {
      const valid = await this.$refs.formRef.validate();
      console.log(valid)
    },
  }
}
```

### Form Items

```html
<quark-form ref="formRef">
  <quark-form-item label="Checkbox" prop="checkbox">
    <quark-checkbox-group :value="form.checkbox" @change="onCheckboxChange">
      <quark-checkbox name="apple">apple</quark-checkbox>
      <quark-checkbox name="banana">banana</quark-checkbox>
    </quark-checkbox-group>
  </quark-form-item>
  <quark-form-item label="Radio" prop="radio">
    <quark-radio-group
      :value="form.radio"
      direction="horizontal"
      @change="onRadioChange"
    >
      <quark-radio name="square">square</quark-radio>
      <quark-radio name="circle">circle</quark-radio>
    </quark-radio-group>
  </quark-form-item>
  <quark-form-item label="Switch" prop="switch">
    <quark-switch :checked="form.switch"></quark-switch>
  </quark-form-item>
  <quark-form-item label="Rate" prop="rate">
    <quark-rate></quark-rate>
  </quark-form-item>
  <quark-form-item label="Stepper" prop="stepper">
    <quark-stepper min="0" max="99" />
  </quark-form-item>
  <quark-form-item label="Textarea" prop="textarea">
    <quark-textarea autosize />
  </quark-form-item>
  <quark-form-item label="Uploader" prop="uploader">
    <quark-uploader></quark-uploader>
  </quark-form-item>
  <quark-form-item label="Picker" prop="picker" islink>
    <quark-field :value="form.picker" readonly @click="pickerVisible = true" />
    <quark-picker
      title="Please choose city"
      ref="pickerRef"
      :open="pickerVisible"
      @close="close"
      @confirm="confirm"
    />
  </quark-form-item>
</quark-form>

<div class="flex-box">
  <quark-button type="primary" size="big" @click="getValues">
    Submit
  </quark-button>
</div>
```

```js
export default {
  data() {
    return {
      pickerVisible: false,
      form: {
        checkbox: ["apple"],
        radio: "",
        rate: "",
        stepper: "",
        switch: false,
        textarea: "",
        uploader: [],
        picker: "",
      },
    };
  },
  mounted() {
    this.$refs.formRef.setModel(this.form);
    this.$refs.pickerRef.setColumns([
      {
        defaultIndex: 0,
        values: [
          "Hangzhou",
          "Jiaxing",
          "Shaoxing",
          "Ningbo",
          "Huzhou",
          "Qiandaohu",
        ],
      },
    ]);
  },
  methods: {
    getValues() {
      const values = this.$refs.formRef.getValues();
      console.log(values);
    },
    onCheckboxChange({ detail }) {
      this.form.checkbox = detail.value;
    },
    onRadioChange({ detail }) {
      this.form.radio = detail.value;
    },
    confirm({ detail }) {
      this.form.picker = detail.value.map((i) => i.value).join("");
      this.pickerVisible = false;
    },
    close() {
      this.pickerVisible = false;
    },
  },
};
```

### Form Attributes

```html
<quark-form
  ref="formRef"
  labelwidth="60px"
  labelposition="right"
  labelsuffix="："
>
  <quark-form-item prop="name" label="Name" labelwidth="70px">
    <quark-field v-model="form.name" placeholder="Name" />
  </quark-form-item>
  <quark-form-item
    prop="password"
    label="Password"
    hideasterisk
    :rules="[{ required: true, message: "Password is required" }]"
  >
    <quark-field type="password" placeholder="Password"/>
  </quark-form-item>
  <quark-form-item prop="age" label="Age" hidemessage>
    <quark-field placeholder="Age" />
  </quark-form-item>
</quark-form>
```

```js
export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
        age: "",
      },
    };
  },
  mounted() {
    this.$refs.formRef.setModel(this.form);
    this.$refs.formRef.setRules({
      name: [{ required: true, message: "Name is required" }],
      age: { required: true, message: "Age is required" },
    });
  },
};
```

### Use slots

```html
<quark-form>
  <quark-form-item>
    <div slot="label">Custom Label</div>
    <quark-field />
    <div slot="suffix">
      <quark-button type="primary" size="small">Search</quark-button>
    </div>
  </quark-form-item>
</quark-form>
```

### Add form items dynamically

```html
<quark-form ref="dynamicFormRef">
  <template v-for="(item, index) in form.user" :key="index">
    <quark-form-item
      :label="`Name${index}`"
      :prop="`user.${index}.name`"
      :rules="[{ required: true, message: 'Name is required' }]"
    >
      <quark-field v-model="item.name" placeholder="Name" />
    </quark-form-item>
    <quark-form-item
      :label="`Age${index}`"
      :prop="`user.${index}.age`"
      :rules="[{ required: true, message: 'Age is required' }]"
    >
      <quark-field v-model="item.age" placeholder="Age" />
    </quark-form-item>
    <br />
  </template>
</quark-form>
<div class="flex-box">
  <quark-button type="primary" size="big" @click="submit">
    Submit
  </quark-button>
  <quark-button size="big" @click="addUser">Add</quark-button>
</div>
```

```js
export default {
  data() {
    return {
      form: {
        user: [{ name: "", age: "" }],
      },
    };
  },
  mounted() {
    this.$refs.dynamicFormRef.setModel(this.form);
  },
  methods: {
    submit() {
      this.$refs.dynamicFormRef.validate((valid, res) => {
        console.log("submit", valid, res);
      });
    },
    addUser() {
      this.form.user.push({ name: "", age: "" });
    },
  },
};
```

## API

### Form Props

| Attribute     | Description                                                             | Type         | Default |
| ------------- | ----------------------------------------------------------------------- | ------------ | ------- |
| validatefirst | whether to stop the validation when a rule fails                        | `boolean`    | `false` |
| hidemessage   | whether to hide the error message                                       | `boolean`    | `false` |
| hideasterisk  | whether to hide a red asterisk (star) next to the required field label. | `boolean`    | `false` |
| labelwidth    | width of label, e.g. '50px'.                                            | `string`     |         |
| labelsuffix   | suffix of the label                                                     | `string`     |         |
| labelposition | position of label. `label-width` prop is required                       | `letf/right` | `left`  |

### Form Method

| Name          | Description                                                                                                                                                                                                                                                                                                                      | Type                                                                         |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| validate      | validate the whole form. Takes a callback as a param. After validation, the callback will be executed with two params: a boolean indicating if the validation has passed, and an object containing all fields that fail the validation, if the validation has passed, return the model. Returns a promise if callback is omitted | `Function(callback: Function(boolean, object))`                              |
| validateField | validate one or several form items                                                                                                                                                                                                                                                                                               | `Function(props: array \| string, callback: Function(errorMessage: string))` |
| resetFields   | reset all the fields and remove validation result                                                                                                                                                                                                                                                                                |                                                                              |
| clearValidate | clear validation message for certain fields. The parameter is prop name or an array of prop names of the form items whose validation messages will be removed. When omitted, all fields' validation messages will be cleared                                                                                                     | `Function(props: array \| string)`                                           |
| setModel      | set data of form component.                                                                                                                                                                                                                                                                                                      | `(model: object) => void`                                                    |
| setRules      | set validation rules of form                                                                                                                                                                                                                                                                                                     | `(rules: Rules) => void`                                                     |
| getValues     | get the form data, the premise must be set to set the model                                                                                                                                                                                                                                                                      |                                                                              |

### FormItem Props

| Attribute    | Description                                                                                | Type      | Default |
| ------------ | ------------------------------------------------------------------------------------------ | --------- | ------- |
| prop         | a key of `model`. In the use of validate and resetFields method, the attribute is required | `string`  |         |
| label        | label                                                                                      | `string`  |         |
| rules        | validation rules of form                                                                   | `object`  |         |
| labelwidth   | width of label, e.g. '50px'.                                                               | `string`  |         |
| hidemessage  | whether to hide the error message                                                          | `boolean` | `false` |
| hideasterisk | whether to hide a red asterisk (star) next to the required field label.                    | `boolean` | `false` |
| islink       | whether to show right arrow                                                                | `boolean` | `false` |

### FormItem Slots

| Name   | Description   |
| ------ | ------------- |
| label  | custom label  |
| suffix | custom suffix |
