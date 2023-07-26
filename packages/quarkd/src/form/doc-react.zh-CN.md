# Form 表单

### 介绍

表单

### 安装使用

```tsx
import { Form, FormRef, FormItem } from "@quarkd/quark-react";
```

### 基本用法

配合 prop 字段，设置表单项的值

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
      name: [{ required: true, message: "请输入姓名" }],
      password: { required: true, message: "请输入密码" },
      other: {
        age: [{ required: true, message: "请输入年龄" }],
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
        <FormItem prop="name" label="姓名">
          <Field placoholder="姓名" />
        </FormItem>
        <FormItem prop="password" label="密码">
          <Field placoholder="密码" type="password" />
        </FormItem>
        <FormItem prop="other.age" label="年龄">
          <Field value={form.other.age} placoholder="年龄" />
        </FormItem>
      </Form>
      <div class="flex-box">
        <Button
          type="primary"
          size="big"
          onClick={submit}
        >
          提交
        </Button>
        <Button size="big" onClick={reset}>重置</Button>
      </div>
    </Fragment>
  );
};
```

### 自定义校验规则

自定义校验 callback 必须被调用。 更多高级用法可参考 [async-validator](https://github.com/yiminghe/async-validator)。

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
        callback(new Error("请输入正确内容"));
      } else if (val === "123456") {
        callback(new Error("密码不能为123456"));
      } else {
        callback();
      }
    };
    const asyncValidator = (rule, value) => {
      return new Promise((resolve, reject) => {
        if (value < 18) {
          reject("不能小于18岁");
        } else {
          resolve();
        }
      });
    };
    formRef.current.setRules({
      name: [
        { required: true, pattern: /\w{6}/, message: "请输入正确内容" }
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
        <FormItem prop="name" label="姓名">
          <Field placoholder="正则校验" />
        </FormItem>
        <FormItem prop="password" label="密码">
          <Field
            value={form.password}
            type="password"
            placoholder="函数校验"
          />
        </FormItem>
        <FormItem prop="age" label="年龄">
          <Field  placoholder="异步校验" />
        </FormItem>
      </Form>
      <div class="flex-box">
        <Button
          type="primary"
          size="big"
          onClick={submit}
        >
          提交
        </Button>
      <div/>
    </Fragment>
  );
};
```

### 表单项大全

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
        values: ["杭州", "嘉兴", "绍兴", "宁波", "湖州", "千岛湖"],
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
        <FormItem prop="checkbox" label="复选框">
          <CheckboxGroup value={form.checkbox} onChange="onCheckboxChange">
            <Checkbox name="apple">苹果</Checkbox>
            <Checkbox name="banana">香蕉</Checkbox>
          </CheckboxGroup>
        </FormItem>
        <FormItem prop="radio" label="单选框">
          <RadioGroup
            value={form.radio}
            direction="horizontal"
            onChange="onRadioChange"
          >
            <Radio name="square">方形</Radio>
            <Radio name="circle">圆形</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem prop="switch" label="开关">
          <Switch checked={form.switch} />
        </FormItem>
        <FormItem prop="rate" label="评分">
          <Rate />
        </FormItem>
        <FormItem prop="stepper" label="步进器">
          <Stepper min="0" max="99" />
        </FormItem>
        <FormItem prop="textarea" label="文本域">
          <Textarea autosize />
        </FormItem>
        <FormItem prop="uploader" label="文件上传">
          <Uploader preview />
        </FormItem>
        <FormItem prop="picker" label="选择器" islink>
          <Field value={form.picker} readonly onClick={openPicker}>
          <Picker
            title="请选择城市"
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
          提交
        </Button>
      </div>
    </Fragment>
  );
};
```

### 表单属性

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
      name: [{ required: true, message: "请输入姓名" }],
      age: { required: true, message: "请输入年龄" },
    });
  }, []);

  return (
    <Form
      ref={formRef}
      labelwidth="60px"
      labelposition="right"
      labelsuffix="："
    >
      <FormItem prop="name" label="姓名" labelwidth="70px">
        <Field placeholder="姓名" />
      </FormItem>
      <FormItem
        prop="password"
        label="密码"
        hideasterisk
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Field type="password" placeholder="密码" />
      </FormItem>
      <FormItem prop="age" label="年龄" hidemessage>
        <Field placeholder="年龄" />
      </FormItem>
    </Form>
  );
};
```

### 使用插槽

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
      name: [{ required: true, message: "请输入姓名" }],
      age: { required: true, message: "请输入年龄" },
    });
  }, []);

  return (
    <Form>
      <FormItem>
        <div slot="label">自定义label</div>
        <Field />
        <div slot="suffix">
          <Button type="primary" size="small">
            搜索
          </Button>
        </div>
      </FormItem>
    </Form>
  );
};
```

### 动态增加表单项

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
                label={`姓名${index}`}
                rules={[{ required: true, message: "请输入姓名" }]}
              >
                <Field placeholder="姓名" />
              </FormItem>

              <FormItem
                prop={`user.${index}.age`}
                label={`年龄${index}`}
                rules={[{ required: true, message: "请输入年龄" }]}
              >
                <Field placeholder="年龄" />
              </FormItem>
            </Fragment>
          );
        })}
      </Form>
      <div class="flex-box">
        <Button type="primary" size="big" onClick={submit}>
          提交
        </Button>
        <Button size="big" onClick={addUser}>
          添加
        </Button>
      </div>
    </Fragment>
  );
};
```

## API

### Form Props

| 参数          | 说明                                     | 类型            | 默认值  |
| ------------- | ---------------------------------------- | --------------- | ------- |
| validatefirst | 是否在某一项校验不通过时停止校验         | `boolean`       | `false` |
| hidemessage   | 是否隐藏校验错误信息                     | `boolean`       | `false` |
| hideasterisk  | 是否隐藏必填字段的标签旁边的红色星号     | `boolean`       | `false` |
| labelwidth    | 表单域标签的宽度，例如 '50px'。          | `string`        |         |
| labelsuffix   | 表单域标签的后缀                         | `string`        |         |
| labelposition | 表单域标签的位置，则需要设置 label-width | `letf \| right` | `left`  |

### Form Methods

| 名称          | 说明                                                                                                                                                                                         | 类型                                                                         |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| validate      | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段，若校验通过则返回 model。若不传入回调函数，则会返回一个 promise | `Function(callback: Function(boolean, object))`                              |
| validateField | 对部分表单字段进行校验的方法                                                                                                                                                                 | `Function(props: array \| string, callback: Function(errorMessage: string))` |
| resetFields   | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果                                                                                                                                   |                                                                              |
| clearValidate | 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果                                                                                     | `Function(props: array \| string)`                                           |
| setModel      | 设置表单数据对象                                                                                                                                                                             | `(model: object) => void`                                                    |
| setRules      | 设置表单验证规则                                                                                                                                                                             | `(rules: Rules) => void`                                                     |
| getValues     | 获取表单数据，前提需设置 model                                                                                                                                                               |                                                                              |

### FormItem Props

| 参数         | 说明                                                                                    | 类型      | 默认值  |
| ------------ | --------------------------------------------------------------------------------------- | --------- | ------- |
| prop         | 表单域 model 字段，在使用 validate、resetFields、getValues 方法的情况下，该属性是必填的 | `string`  |         |
| label        | 标签文本                                                                                | `string`  |         |
| rules        | 表单验证规则                                                                            | `object`  |         |
| labelwidth   | 表单域标签的的宽度，例如 '50px'。                                                       | `string`  |         |
| hidemessage  | 是否隐藏校验错误信息                                                                    | `boolean` | `false` |
| hideasterisk | 是否隐藏必填字段的标签旁边的红色星号                                                    | `boolean` | `false` |
| islink       | 是否展示右侧箭头                                                                        | `boolean` | `false` |

### FormItem Slots

| 名称   | 说明             |
| ------ | ---------------- |
| label  | 自定义左侧 label |
| suffix | 自定义右侧后缀   |
