# Form 表单

### 介绍

表单

### 安装使用

```tsx
import "quarkd/lib/form";
```

### 基本用法

配合 name 字段，设置表单项的值

```html
<quark-form ref="form1">
  <quark-field name="name" label="姓名"></quark-field>
  <div class="line" />
  <quark-field type="password" name="password" label="密码" />
  <div class="submit-wrap">
    <div @click="submit1" class="submit">提交</div>
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
       console.log(value, '当前表单所有的值');
    }).catch(err => {
        Toast.text(err)
    });
  },
```

### 自定义校验规则

只对 field 组件有用，支持 required 、validator 自定义事件

```html
<quark-form ref="form2">
  <quark-field placeholder="请输入文本" name="age" label="年龄"></quark-field>
  <div class="line" />
  <quark-field type="number" value="123" max="11" name="phone" label="手机号" />
  <div class="submit-wrap">
    <div @click="submit2" class="submit">提交</div>
  </div>
</quark-form>
```

```js
 this.$refs.form2.setRules([
  {
    name: 'age',
    required: true,
    message: '不能小于18岁',
    validator: (value) => value >= 18
  },
  {
    name: 'phone',
    required: true,
    message: '请输正确的手机号',
    validator: (value) => /^1[3456789]\d{9}$/g.test(value)
  }
  ]);

  submit2() {
    this.$refs.form2.submit().then((value) => {
       console.log(value, '当前表单所有的值');
    }).catch(err => {
        Toast.text(err)
    });
  },
```

### 表单项大全

```html
<quark-form ref="form3">
  <quark-field
    placeholder="请输入文本"
    name="field"
    label="年龄"
    :value="field"
  ></quark-field>
  <div class="line" />
  <div class="form-item">
    <quark-textarea name="textarea" :value="textarea" />
  </div>
  <div class="line" />
  <div class="form-item">
    <span>蔬菜:</span>
    <quark-checkbox name="checkbox1" shape="square" :checked="checkbox1"
      >黄瓜</quark-checkbox
    >
    <quark-checkbox name="checkbox2" shape="square" :checked="checkbox2"
      >生姜</quark-checkbox
    >
  </div>
  <div class="line" />
  <div class="form-item">
    <span>水果:</span>
    <quark-radio-group name="radio" :value="radio">
      <quark-radio name="apple">苹果</quark-radio>
      <quark-radio name="blue">香蕉</quark-radio>
    </quark-radio-group>
  </div>
  <div class="line" />
  <div class="form-item">
    <span>开灯:</span>
    <quark-switch name="switch" />
  </div>
  <div class="line" />
  <div class="form-item">
    <span>打分:</span>
    <quark-rate name="rate" />
  </div>
  <div class="line" />
  <div class="form-item">
    <span>步进器:</span>
    <quark-stepper name="step" />
  </div>
  <div class="line" />
  <div class="form-item">
    <span>上传:</span>
    <quark-uploader name="uploader" iconcolor="#ccc" preview />
  </div>
  <div class="line" />
  <div class="form-item">
    <span>picker 选择器</span>
    <quark-cell :title="datepicker" isLink @click="click"></quark-cell>
    <quark-picker
      title="请选择时间"
      ref="pickerRef"
      :open="open"
      @close="close"
      @confirm="confirm"
      name="picker"
    />
  </div>
  <div class="line" />
  <div class="submit-wrap">
    <div class="submit" @click="submit3">提交</div>
  </div>
</quark-form>
```

```js
  submit3() {
      this.$refs.form3.submit().then((value) => {
        Toast.text('请在控制台查看表单值');
        console.log(value, '当前表单所有的值');
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

| 名称     | 说明                               | 类型                          |
| -------- | ---------------------------------- | ----------------------------- |
| submit   | 提交并校验表单获取所有组件的 value | `() => Promise<value: any[]>` |
| setRules | 只对 field 组件有效                | `(rule: Rule[])=>void`        |

### 类型定义

```js
type Rule = {
  name: string // 需要校验的 field 组件的 name 属性
  required?: boolean // 是否必填
  message?: string // 错误信息
  validator?: (value: string | number) => boolean; // 校验规则
};
```
