# Form 表单

### 介绍

表单

### 安装使用

```tsx
import "quarkd/lib/form";
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
  <quark-form-item prop="other.age" label="年龄">
    <quark-field v-model="form.other.age" placeholder="年龄" />
  </quark-form-item>
</quark-form>

<div class="flex-box">
  <quark-button type="primary" size="big" @click="submit"> 提交 </quark-button>
  <quark-button size="big" @click="reset">重置</quark-button>
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
      name: [{ required: true, message: "请输入姓名" }],
      password: { required: true, message: "请输入密码" },
      other: {
        age: [{ required: true, message: "请输入年龄" }],
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

### 自定义校验规则

自定义校验 callback 必须被调用。 更多高级用法可参考 [async-validator](https://github.com/yiminghe/async-validator)。

```html
<quark-form ref="formRef" labelwidth="70px">
  <quark-form-item prop="name" label="姓名">
    <quark-field placeholder="正则校验" />
  </quark-form-item>
  <quark-form-item prop="password" label="密码">
    <quark-field v-model="form.password" placeholder="函数校验" />
  </quark-form-item>
  <quark-form-item prop="age" name="年龄">
    <quark-field placeholder="异步校验" />
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
      form: {
        name: "",
        password: "123456",
        age: "",
      },
      rules: {
        name: [
          { required: true, pattern: /\w{6}/, message: "请输入正确内容" }
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

### 表单项类型

```html
<quark-form ref="formRef">
  <quark-form-item label="复选框" prop="checkbox">
    <quark-checkbox-group :value="form.checkbox" @change="onCheckboxChange">
      <quark-checkbox name="apple">苹果</quark-checkbox>
      <quark-checkbox name="banana">香蕉</quark-checkbox>
    </quark-checkbox-group>
  </quark-form-item>
  <quark-form-item label="单选框" prop="radio">
    <quark-radio-group
      :value="form.radio"
      direction="horizontal"
      @change="onRadioChange"
    >
      <quark-radio name="square">方形</quark-radio>
      <quark-radio name="circle">圆形</quark-radio>
    </quark-radio-group>
  </quark-form-item>
  <quark-form-item label="开关" prop="switch">
    <quark-switch :checked="form.switch"></quark-switch>
  </quark-form-item>
  <quark-form-item label="评分" prop="rate">
    <quark-rate></quark-rate>
  </quark-form-item>
  <quark-form-item label="步进器" prop="stepper">
    <quark-stepper min="0" max="99" />
  </quark-form-item>
  <quark-form-item label="文本域" prop="textarea">
    <quark-textarea autosize />
  </quark-form-item>
  <quark-form-item label="文件上传" prop="uploader">
    <quark-uploader preview></quark-uploader>
  </quark-form-item>
  <quark-form-item label="选择器" prop="picker" islink>
    <quark-field :value="form.picker" readonly @click="pickerVisible = true" />
    <quark-picker
      title="请选择城市"
      ref="pickerRef"
      :open="pickerVisible"
      @close="close"
      @confirm="confirm"
    />
  </quark-form-item>
</quark-form>

<div class="flex-box">
  <quark-button type="primary" size="big" @click="getValues">
    提交
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
        values: ["杭州", "嘉兴", "绍兴", "宁波", "湖州", "千岛湖"],
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

### 表单属性

```html
<quark-form
  ref="formRef"
  labelwidth="60px"
  labelposition="right"
  labelsuffix="："
>
  <quark-form-item prop="name" label="姓名" labelwidth="70px">
    <quark-field v-model="form.name" placeholder="姓名" />
  </quark-form-item>
  <quark-form-item
    prop="password"
    label="密码"
    hideasterisk
    :rules="[{ required: true, message: "请输入密码" }]"
  >
    <quark-field type="password" placeholder="密码" />
  </quark-form-item>
  <quark-form-item prop="age" label="年龄" hidemessage>
    <quark-field placeholder="年龄" />
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
      name: [{ required: true, message: "请输入姓名" }],
      age: { required: true, message: "请输入年龄" },
    });
  },
};
```

### 使用插槽

```html
<quark-form>
  <quark-form-item>
    <div slot="label">自定义label</div>
    <quark-field />
    <div slot="suffix">
      <quark-button type="primary" size="small">搜索</quark-button>
    </div>
  </quark-form-item>
</quark-form>
```

### 动态增加表单项

```html
<quark-form ref="dynamicFormRef">
  <template v-for="(item, index) in form.user" :key="index">
    <quark-form-item
      :label="`姓名${index}`"
      :prop="`user.${index}.name`"
      :rules="[{ required: true, message: '请输入姓名' }]"
    >
      <quark-field v-model="item.name" placeholder="姓名" />
    </quark-form-item>
    <quark-form-item
      :label="`年龄${index}`"
      :prop="`user.${index}.age`"
      :rules="[{ required: true, message: '请输入年龄' }]"
    >
      <quark-field v-model="item.age" placeholder="年龄" />
    </quark-form-item>
    <br />
  </template>
</quark-form>
<div class="flex-box">
  <quark-button type="primary" size="big" @click="submit"> 提交 </quark-button>
  <quark-button size="big" @click="addUser">添加</quark-button>
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
