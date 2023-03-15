# Form

### Intro

Form

### Install

```tsx
import { Form, FormRef } from "@quarkd/quark-react";
```

### Basic Usage

Set value of form items, used with `name` prop.

```tsx
export default () => {
  const form1 = useRef<FormRef>(null);

  useEffect(() => {
    form1.current.setRules([
      { name: "name", required: true },
      { name: "password", required: true, type: "password" },
    ]);
  }, []);

  const submit1 = () => {
    form1.current
      .getValues()
      .then((value) => {
        console.log(value, "22");
      })
      .catch((e) => {
        console.log(e, "e");
        Toast.error(e.message || "请检查表单项");
      });
  };

  return (
    <Form ref={form1}>
      <Field name="name" label="name" />
      <div className="line" />
      <Field type="password" name="password" label="password" />
      <div className="submit-wrap">
        <Button type="primary" onClick={submit1} class="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};
```

### Validate Rules

Only useful for field components, supports required and validator custom events.

```tsx
export default () => {
  const form2 = useRef<FormRef>(null);

  const submit2 = () => {
    form2.current
      .getValues()
      .then((value) => {
        console.log(value, "current form values");
      })
      .catch((e) => {
        Toast.error(e.message);
      });
  };

  useEffect(() => {
    form2.current.setRules([
      {
        name: "age",
        required: true,
        message: "older than 18 years old",
        validator: (value) => value >= 18,
      },
      {
        name: "phone",
        required: true,
        message: "Please enter the correct phone number",
        validator: (value) => /^1[3456789]\d{9}$/g.test(value),
      },
    ]);
  }, []);

  return (
    <From ref={form2}>
      <Field placeholder="Please enter text" name="age" label="age" />
      <div class="line" />
      <Field
        type="number"
        value="123"
        max="11"
        name="phone"
        label="phone number"
      />
      <div class="submit-wrap">
        <div onClick="submit2" class="submit">
          Submit
        </div>
      </div>
    </From>
  );
};
```

### Form Items

```tsx
export default () => {
  const [open, setOpen] = useState(false);
  const [pickerStr, setStr] = useState("Please choose time");
  const form3 = useRef<FormRef>();
  const picker = useRef();

  const submit3 = () => {
    form3.current.getValues().then((value) => {
      Toast.text("Please check form value in the console");
      console.log(value, "current form values");
    });
  };
  const click = () => {
    setOpen(true);
  };
  const close = () => {
    setOpen(false);
  };
  const confirm = ({ detail }) => {
    const datepickerStr = detail.value.map((i) => i.value).join(" ");
    setOpen(false);
    setStr(datepickerStr);
  };

  useEffect(() => {
    picker.current.setColumns([
      {
        defaultIndex: 0,
        values: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      },
      {
        defaultIndex: 1,
        values: ["a.m.", "p.m."],
      },
    ]);
  }, []);
  return (
    <div className="demo scoped-form">
      <Form ref={form3}>
        <Field placeholder="Please enter text" name="field" label="age" />
        <div className="line" />
        <div className="form-item">
          <Textarea name="textarea" />
        </div>
        <div className="form-item">
          <span>Vegetables:</span>
          <div className="right">
            <Checkbox name="checkbox1" shape="square" checked={false}>
              Cucumber
            </Checkbox>
            <Checkbox name="checkbox2" shape="square" checked={false}>
              Ginger
            </Checkbox>
            <div className="line" />
          </div>
        </div>
        <div className="form-item">
          <span>Fruits:</span>
          <RadioGroup name="radio" value="apple">
            <Radio name="apple">Apple</Radio>
            <Radio name="blue">Banana</Radio>
          </RadioGroup>
        </div>
        <div className="line" />
        <div className="form-item">
          <span>Switch on:</span>
          <Switch name="switch" />
        </div>
        <div className="line" />
        <div className="form-item">
          <span>Rate:</span>
          <Rate name="rate" />
        </div>
        <div className="line" />
        <div className="form-item">
          <span>Stepper:</span>
          <Stepper name="step" />
        </div>
        <div className="line" />
        <div className="form-item">
          <span>Uploader:</span>
          <Uploader name="uploader" iconcolor="#ccc" preview />
        </div>
        <div className="line" />
        <div className="form-item">
          <span>Picker</span>
          <Cell title={pickerStr} isLink onClick={click}></Cell>
          <Picker
            ref={picker}
            title="Please choose time"
            name="picker"
            open={open}
            onClose={close}
            onConfirm={confirm}
          />
        </div>
        <div className="line" />
        <div className="submit-wrap">
          <Button type="primary" class="submit" onClick={submit3}>
            Submit
          </Button>
        </div>
      </Form>
      <div className="line" />
    </div>
  );
};
```

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
  validator?: (value: string & number) => boolean; // Custom validator function
};
```
