# Form 表单

### 介绍

表单

### 安装使用

```tsx
import "quarkd/lib/form";
import "quarkd/lib/form-item";
```

### 基本用法

配合 prop 字段，设置表单项的值

```html
<quark-form ref="formRef" labelwidth="70px">
  <quark-form-item prop="name" label="姓名">
    <quark-field v-model="form.name" placeholder="姓名" />
  </quark-form-item>
  <quark-form-item prop="password" label="密码">
    <quark-field v-model="form.password" type="password" placeholder="密码" />
  </quark-form-item>
</quark-form>

<div class="flex-box">
  <quark-button type="primary" size="big" @click="submit"> 提交 </quark-button>
  <quark-button size="big" @click="reset"> 重置 </quark-button>
</div>
```

```js
export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
    };
  },
  mounted() {
    this.$refs.formRef.setModel(this.form);
    this.$refs.formRef.setRules({
      name: [{ required: true, message: "请输入姓名" }],
      password: { required: true, message: "请输入密码" },
    });
  },
  methods: {
    submit() {
      this.$refs.formRef.validate((valid, errorMsg) => {
        console.log("submit", valid, errorMsg);
      });
    },
    reset() {
      this.$refs.formRef.resetFields();
    },
  },
};
```

### 自定义校验规则

自定义校验 callback 必须被调用。 更多高级用法可参考 [async-validator](https://github.com/yiminghe/async-validator)。

```html
<quark-form ref="ruleFormRef" labelwidth="70px">
  <quark-form-item prop="name" label="姓名">
    <quark-field placeholder="正则校验" />
  </quark-form-item>
  <quark-form-item prop="password" label="密码">
    <quark-field placeholder="函数校验" />
  </quark-form-item>
  <quark-form-item prop="age" name="年龄">
    <quark-field v-model="ruleForm.age" placeholder="异步校验" />
  </quark-form-item>
</quark-form>

<div class="flex-box">
  <quark-button type="primary" size="big" @click="submit"> 提交 </quark-button>
</div>
```

```js
export default {
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
  data() {
    return {
      ruleForm: {
        name: "",
        password: "",
        age: "",
      },
      rules: {
        name: [{ required: true, pattern: /\w{6}/, message: "请输入正确内容" }],
        password: [{ required: true, validator: validatorPassword }],
        age: [{ required: true, asyncValidator: asyncValidator }]
      }
    }
  },
  mounted() {
    this.$refs.ruleForm.setRules(this.rules);
  },
  methods: {
    async submit() {
      const valid = await this.$refs.ruleForm.validate();
      console.log(valid)
    },
  }
}
```

### 表单项类型

```html
<quark-form>
  <quark-form-item label="复选框">
    <quark-checkbox-group :value="formData.checkbox" @change="onCheckboxChange">
      <quark-checkbox name="apple">苹果</quark-checkbox>
      <quark-checkbox name="banana">香蕉</quark-checkbox>
    </quark-checkbox-group>
  </quark-form-item>
  <quark-form-item label="单选框">
    <quark-radio-group :value="formData.radio" @change="onRadioChange">
      <quark-radio name="square">方形</quark-radio>
      <quark-radio name="circle">圆形</quark-radio>
    </quark-radio-group>
  </quark-form-item>
  <quark-form-item label="开关">
    <quark-switch :checked="formData.switch"></quark-switch>
  </quark-form-item>
  <quark-form-item label="评分">
    <quark-rate></quark-rate>
  </quark-form-item>
  <quark-form-item label="步进器">
    <quark-stepper min="0" max="99" />
  </quark-form-item>
  <quark-form-item label="文本域">
    <quark-textarea autosize />
  </quark-form-item>
  <quark-form-item label="文件上传">
    <quark-uploader></quark-uploader>
  </quark-form-item>
  <quark-form-item label="picker" islink>
    <quark-field
      :value="formData.picker"
      readonly
      @click="pickerVisible = true"
    />
    <quark-picker
      title="请选择城市"
      ref="pickerRef"
      :open="pickerVisible"
      @close="close"
      @confirm="confirm"
    />
  </quark-form-item>
</quark-form>
```

### 使用插槽

```js
export default {
  data() {
    return {
      pickerVisible: false,
      form: {
        checkbox: []
        radio: '',
        switch: false,
        rate: "",
        stepper: "",
        textarea: "",
        uploader: [],
        picker: "",
      },
    }
  },
  mounted() {
    this.$refs.pickerRef.setColumns([
      {
        defaultIndex: 0,
        values: ["杭州", "嘉兴", "绍兴", "宁波", "湖州", "千岛湖"],
      },
    ]);
  },
  methods: {
    onCheckboxChange({ detail }) {
      this.formData.checkbox = detail.value;
    },
    onRadioChange({ detail }) {
      this.formData.radio = detail.value;
    },
    confirm({ detail }) {
      this.form.picker = detail.value.map((i) => i.value).join(" ");
      this.pickerVisible = false;
    },
    close() {
      this.pickerVisible = false;
    }
  }
}
```

## API

### Form Props

| 参数                 | 说明                                     | 类型            | 默认值  |
| -------------------- | ---------------------------------------- | --------------- | ------- |
| validatefirst        | 是否在某一项校验不通过时停止校验         | `boolean`       | `false` |
| hidemessage          | 是否隐藏校验错误信息                     | `boolean`       | `false` |
| hiderequiredasterisk | 是否隐藏必填字段的标签旁边的红色星号     | `boolean`       | `false` |
| labelwidth           | 表单域标签的宽度，例如 '50px'。          | `string`        | -       |
| labelsuffix          | 表单域标签的后缀                         | `string`        |         |
| labelposition        | 表单域标签的位置，则需要设置 label-width | `letf \| right` | `left`  |

### Form Methods

| 名称          | 说明                                                                                                                                                                 | 类型                                                                         |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| validate      | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise | `Function(callback: Function(boolean, object))`                              |
| validateField | 对部分表单字段进行校验的方法                                                                                                                                         | `Function(props: array \| string, callback: Function(errorMessage: string))` |
| resetFields   | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果                                                                                                           |                                                                              |
| clearValidate | 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果                                                             | `Function(props: array \| string)`                                           |
| setModel      | 设置表单数据对象                                                                                                                                                     | `(model: object) => void`                                                    |
| setRules      | 设置表单验证规则                                                                                                                                                     | `(rules: Rules) => void`                                                     |

### FormItem Props

| 参数                 | 说明                                                                         | 类型      | 默认值  |
| -------------------- | ---------------------------------------------------------------------------- | --------- | ------- |
| prop                 | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | `string`  |         |
| label                | 标签文本                                                                     | `string`  | `false` |
| labelwidth           | 表单域标签的的宽度，例如 '50px'。                                            | `string`  |         |
| hidemessage          | 是否隐藏校验错误信息                                                         | `boolean` | `false` |
| hiderequiredasterisk | 是否隐藏必填字段的标签旁边的红色星号                                         | `boolean` | `false` |

### FormItem Slots

| 名称   | 说明             |
| ------ | ---------------- |
| label  | 自定义左侧 label |
| suffix | 自定义右侧后缀   |
