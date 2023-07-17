# Form

### Intro

Form

### Install

```tsx
import { Form, FormRef, FormItem } from "@quarkd/quark-react";
```

### Basic Usage

Set value of form items, used with `prop` prop.

```tsx
export default () => {
  const [form, setForm] = useState({
    name: '',
    password: '',
    other: {
      age: 18
    }
  });
  const formRef = useRef<FormRef>(null);

  useEffect(() => {
    formRef.setModel(form);
    formRef.current.setRules([
      name: [{ required: true, message: "Name is required" }],
      password: { required: true, message: "Password is required" },
      other: {
        age: [{ required: true, message: "Age is required" }],
      },
    ]);
  }, []);

  const submit = () => {
    formRef.current.validate((valid. res) => {
      console.log("submit", valid, res);
    })
  };

  const reset = () => {
    formRef.current.resetFields();
  };

  return (
    <Fragment>
      <Form ref={formRef}>
        <FormItem prop="name" label="Name">
          <Field placoholder="Name" />
        </FormItem>
        <FormItem prop="password" label="Password">
          <Field placoholder="Password" type="password" />
        </FormItem>
        <FormItem prop="other.age" label="Age">
          <Field value={form.other.age} placoholder="Age" />
        </FormItem>
      </Form>
      <div class="flex-box">
        <Button
          type="primary"
          size="big"
          onClick={submit}
        >
          Submit
        </Button>
        <Button size="big" onClick={reset}>Reset</Button>
      </div>
    </Fragment>
  );
};
```

### Validate Rules

Custom validate callback function must be called. See more advanced usage at [async-validator](https://github.com/yiminghe/async-validator).

```tsx
export default () => {
  const [form, setForm] = useState({
    name: '',
    password: "123456",
    age: 18
  });
  const formRef = useRef<FormRef>(null);

  useEffect(() => {
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
    formRef.current.setRules({
      name: [
        { required: true, pattern: /\w{6}/, message: "Error message" }
      ],
      password: [{ required: true, validator: validatorPassword }],
      age: [{ required: true, asyncValidator: asyncValidator }]
    });
  }, []);

  const submit = async () => {
    const valid = await formRef.current.validate();
    console.log(valid);
  };

  return (
    <Fragment>
      <Form ref={formRef}>
        <FormItem prop="name" label="Name">
          <Field placoholder="Use pattern" />
        </FormItem>
        <FormItem prop="password" label="Password">
          <Field
            value={form.password}
            type="password"
            placoholder="Use validator"
          />
        </FormItem>
        <FormItem prop="age" label="Age">
          <Field  placoholder="Use async validator" />
        </FormItem>
      </Form>
      <div class="flex-box">
        <Button
          type="primary"
          size="big"
          onClick={submit}
        >
          Submit
        </Button>
      <div/>
    </Fragment>
  );
};
```

### Form Items

```tsx
export default () => {
  const formRef = useRef<FormRef>();
  const [open, setOpen] = useState(false);
  const picker = useRef();

  const [form, setForm] = useState({
    checkbox: ["apple"],
    radio: "",
    rate: "",
    stepper: "",
    switch: false,
    textarea: "",
    uploader: [],
    picker: "",
  });
  const openPicker = () => {
    setOpen(true);
  };
  const closePicker = () => {
    setOpen(false);
  };
  const confirm = ({ detail }) => {
    const pickerValue = detail.value.map((i) => i.value).join("");
    setOpen(false);
    setForm({
      ...form,
      picker: pickerValue
    });
  };
  useEffect(() => {
    formRef.setModel(form)
    picker.current.setColumns([
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
  }, []);
  const onCheckboxChange = ({ detail }) => {
    setForm({
      ...form,
      checkbox: detail.value
    })
  };
  const onRadioChange = ({ detail }) => {
    setForm({
      ...form,
      radio: detail.value
    })
  };
  const getValues = () => {
    const values = formRef.getValues();
    console.log(values);
  };
  return (
    <Fragment>
      <Form ref={formRef}>
        <FormItem prop="checkbox" label="Checkbox">
          <CheckboxGroup value={form.checkbox} onChange="onCheckboxChange">
            <Checkbox name="apple">apple</Checkbox>
            <Checkbox name="banana">banana</Checkbox>
          </CheckboxGroup>
        </FormItem>
        <FormItem prop="radio" label="Radio">
          <RadioGroup value={form.radio} onChange="onRadioChange">
            <Radio name="square">square</Radio>
            <Radio name="circle">circle</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem prop="switch" label="Switch">
          <Switch checked={form.switch} />
        </FormItem>
        <FormItem prop="rate" label="Rate">
          <Rate />
        </FormItem>
        <FormItem prop="stepper" label="Stepper">
          <Stepper min="0" max="99" />
        </FormItem>
        <FormItem prop="textarea" label="Textarea">
          <Textarea autosize />
        </FormItem>
        <FormItem prop="uploader" label="Uploader">
          <Uploader preview />
        </FormItem>
        <FormItem prop="picker" label="Picker" islink>
          <Field value={form.picker} readonly onClick={openPicker}>
          <Picker
            title="Please choose city"
            ref={picker}
            open={open}
            onClose={closePicker}
            onConfirm={confirm}
          />
        </FormItem>
      </Form>
      <div class="flex-box">
        <Button
          type="primary"
          size="big"
          onClick={getValues}
        >
          Submit
        </Button>
      </div>
    </Fragment>
  );
};
```

### Form Attributes

```tsx
export default () => {
  const formRef = useRef<FormRef>();
  const [form, setForm] = useState({
    name: "",
    password: "",
    age: "",
  });

  useEffect(() => {
    formRef.setModel(form);
    formRef.setRules({
      name: [{ required: true, message: "Name is required" }],
      age: { required: true, message: "Age is required" },
    });
  }, []);

  return (
    <Form
      ref={formRef}
      labelwidth="60px"
      labelposition="right"
      labelsuffix="："
    >
      <FormItem prop="name" label="Name" labelwidth="70px">
        <Field placeholder="Name" />
      </FormItem>
      <FormItem
        prop="password"
        label="Password"
        hideasterisk
        rules={[{ required: true, message: "Password is required" }]}
      >
        <Field type="password" placeholder="Password" />
      </FormItem>
      <FormItem prop="age" label="Age" hidemessage>
        <Field placeholder="Age" />
      </FormItem>
    </Form>
  );
};
```

### Use slots

```tsx
export default () => {
  const formRef = useRef<FormRef>();
  const [form, setForm] = useState({
    name: "",
    password: "",
    age: "",
  });

  useEffect(() => {
    formRef.setModel(form);
    formRef.setRules({
      name: [{ required: true, message: "Name is required" }],
      age: { required: true, message: "Age is required" },
    });
  }, []);

  return (
    <Form>
      <FormItem>
        <div slot="label">Custom Label</div>
        <Field />
        <div slot="suffix">
          <Button type="primary" size="small">
            Search
          </Button>
        </div>
      </FormItem>
    </Form>
  );
};
```

### Add form items dynamically

```tsx
export default () => {
  const formRef = useRef<FormRef>();
  const [form, setForm] = useState({
    user: [{ name: "", age: "" }],
  });

  useEffect(() => {
    formRef.setModel(form);
  }, []);

  const submit = () => {
    formRef.validate((valid, res) => {
      console.log("submit", valid, res);
    });
  };

  const addUser = () => {
    form.user.push({ name: "", age: "" });
    setForm(form);
  };

  return (
    <Fragment>
      <Form>
        {form.user.map((item, index) => {
          return (
            <Fragment>
              <FormItem
                prop={`user.${index}.name`}
                label={`Name${index}`}
                rules={[{ required: true, message: "Name is required" }]}
              >
                <Field placeholder="Name" />
              </FormItem>

              <FormItem
                prop={`user.${index}.age`}
                label={`Age${index}`}
                rules={[{ required: true, message: "Age is required" }]}
              >
                <Field placeholder="Age" />
              </FormItem>
            </Fragment>
          );
        })}
      </Form>
      <div class="flex-box">
        <Button type="primary" size="big" onClick={submit}>
          Submit
        </Button>
        <Button size="big" onClick={addUser}>
          Add
        </Button>
      </div>
    </Fragment>
  );
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
