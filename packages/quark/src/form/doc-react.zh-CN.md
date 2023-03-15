# Form 表单

### 介绍

表单

### 安装使用

```tsx
import { Form, FormRef } from "@quarkd/quark-react";
```

### 基本用法

配合 name 字段，设置表单项的值

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
      <Field name="name" label="姓名" />
      <div className="line" />
      <Field type="password" name="password" label="密码" />
      <div className="submit-wrap">
        <Button type="primary" onClick={submit1} class="submit">
          提交
        </Button>
      </div>
    </Form>
  );
};
```

### 自定义校验规则

只对 field 组件有用，支持 required 、validator 自定义事件

```tsx
export default () => {
  const form2 = useRef<FormRef>(null);

  const submit2 = () => {
    form2.current
      .getValues()
      .then((value) => {
        console.log(value, "22");
      })
      .catch((e) => {
        Toast.error(e.message || "请检查表单项");
      });
  };

  useEffect(() => {
    form2.current.setRules([
      {
        name: "age",
        required: true,
        message: "不能小于18岁",
        validator: (value) => value >= 18,
      },
      {
        name: "phone",
        required: true,
        message: "请输正确的手机号",
        validator: (value) => /^1[3456789]\d{9}$/g.test(value),
      },
    ]);
  }, []);

  return (
    <From ref={form2}>
      <Field placeholder="请输入文本" name="age" label="年龄" />
      <div class="line" />
      <Field type="number" value="123" max="11" name="phone" label="手机号" />
      <div class="submit-wrap">
        <div onClick="submit2" class="submit">
          提交
        </div>
      </div>
    </From>
  );
};
```

### 表单项大全

```tsx
export default () => {
  const [open, setOpen] = useState(false);
  const [pickerStr, setStr] = useState("请选择时间");
  const form3 = useRef<FormRef>();
  const picker = useRef();

  const submit3 = () => {
    form3.current.getValues().then((value) => {
      Toast.text("请在控制台查看表单值");
      console.log(value, "22");
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
        values: ["星期一", "星期二", "星期三", "星期四", "星期五"],
      },
      {
        defaultIndex: 1,
        values: ["上午", "下午"],
      },
    ]);
  }, []);
  return (
    <div className="demo scoped-form">
      <Form ref={form3}>
        <Field placeholder="请输入文本" name="field" label="年龄" />
        <div className="line" />
        <div className="form-item">
          <Textarea name="textarea" />
        </div>
        <div className="form-item">
          <span>蔬菜:</span>
          <div className="right">
            <Checkbox name="checkbox1" shape="square" checked={false}>
              黄瓜
            </Checkbox>
            <Checkbox name="checkbox2" shape="square" checked={false}>
              生姜
            </Checkbox>
            <div className="line" />
          </div>
        </div>
        <div className="form-item">
          <span>水果:</span>
          <RadioGroup name="radio" value="apple">
            <Radio name="apple">苹果</Radio>
            <Radio name="blue">香蕉</Radio>
          </RadioGroup>
        </div>
        <div className="line" />
        <div className="form-item">
          <span>开灯:</span>
          <Switch name="switch" />
        </div>
        <div className="line" />
        <div className="form-item">
          <span>打分:</span>
          <Rate name="rate" />
        </div>
        <div className="line" />
        <div className="form-item">
          <span>步进器:</span>
          <Stepper name="step" />
        </div>
        <div className="line" />
        <div className="form-item">
          <span>上传:</span>
          <Uploader name="uploader" iconcolor="#ccc" preview />
        </div>
        <div className="line" />
        <div className="form-item">
          <span>picker 选择器</span>
          <Cell title={pickerStr} isLink onClick={click}></Cell>
          <Picker
            title="请选择时间"
            ref={picker}
            open={open}
            onClose={close}
            onConfirm={confirm}
            name="picker"
          />
        </div>
        <div className="line" />
        <div className="submit-wrap">
          <Button type="primary" class="submit" onClick={submit3}>
            提交
          </Button>
        </div>
      </Form>
      <div className="line" />
    </div>
  );
};
```

### 方法

| 名称     | 说明                               | 类型                   |
| -------- | ---------------------------------- | ---------------------- |
| submit   | 提交并校验表单获取所有组件的 value | `() => Promise<any[]>` |
| setRules | 只对 field 组件有效                | `(rule: Rule[])=>void` |

### 类型定义

```js
type Rule = {
  name: string // 需要校验的 field 组件的 name 属性
  required?: boolean // 是否必填
  message?: string // 错误信息
  validator?: (value: string & number) => boolean; // 校验规则
};
```
