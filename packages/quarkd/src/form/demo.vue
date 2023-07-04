<template>
  <div class="demo scoped-form">
    <h2>{{ translate("title.basic") }}</h2>
    <quark-form ref="formRef" labelwidth="70px">
      <quark-form-item
        prop="name"
        :label="translate('label.name')"
        :rules="[{ required: true, message: translate('error.name') }]"
      >
        <quark-field
          v-model="form.name"
          :placeholder="translate('label.name')"
        ></quark-field>
      </quark-form-item>
      <quark-form-item
        prop="password"
        :label="translate('label.password')"
        :rules="[{ required: true, message: translate('error.password') }]"
      >
        <quark-field
          v-model="form.password"
          type="password"
          :placeholder="translate('label.password')"
        />
      </quark-form-item>
    </quark-form>
    <br />
    <div class="flex-box">
      <quark-button type="primary" size="big" @click="submit">
        {{ translate("submit") }}
      </quark-button>
      <quark-button size="big" @click="reset">
        {{ translate("reset") }}
      </quark-button>
    </div>

    <h2>{{ translate("title.rule") }}</h2>
    <quark-form ref="ruleFormRef" labelwidth="70px">
      <quark-form-item
        prop="name"
        :label="translate('label.name')"
        :rules="[
          {
            required: true,
            message: translate('error.errorMsg'),
            pattern: /\w{6}/,
          },
        ]"
      >
        <quark-field :placeholder="translate('placeholders.pattern')" />
      </quark-form-item>
      <quark-form-item
        prop="password"
        :label="translate('label.password')"
        :rules="[{ required: true, validator: validatorPassword }]"
      >
        <quark-field
          value="123456"
          :placeholder="translate('placeholders.validator')"
        />
      </quark-form-item>
      <quark-form-item
        prop="age"
        :label="translate('label.age')"
        :rules="[{ required: true, asyncValidator: asyncValidator }]"
      >
        <quark-field :placeholder="translate('placeholders.asyncValidator')" />
      </quark-form-item>
    </quark-form>
    <br />
    <div class="flex-box">
      <quark-button type="primary" size="big" @click="ruleFormSubmit">
        {{ translate("submit") }}
      </quark-button>
    </div>

    <h2>{{ translate("title.items") }}</h2>
    <quark-form>
      <!-- <quark-form-item
        prop="captcha"
        :label="translate('labels')[3]"
        :rules="[{ required: true, message: '请输入验证码' }]"
      >
        <div slot="label">验证码</div>
        <quark-field />
        <div slot="suffix">
          <quark-button type="primary" size="small">发送验证码</quark-button>
        </div>
      </quark-form-item> -->
      <quark-form-item :label="translate('label.checkbox')">
        <quark-checkbox-group
          :value="formData.checkbox"
          @change="onCheckboxChange"
        >
          <quark-checkbox name="apple">
            {{ translate("enum.apple") }}
          </quark-checkbox>
          <quark-checkbox name="banana">
            {{ translate("enum.banana") }}
          </quark-checkbox>
        </quark-checkbox-group>
      </quark-form-item>
      <quark-form-item :label="translate('label.radio')">
        <quark-radio-group :value="formData.radio" @change="onRadioChange">
          <quark-radio name="square">
            {{ translate("enum.square") }}
          </quark-radio>
          <quark-radio name="circle">
            {{ translate("enum.circle") }}
          </quark-radio>
        </quark-radio-group>
      </quark-form-item>
      <quark-form-item :label="translate('label.switch')">
        <quark-switch :checked="formData.switch"></quark-switch>
      </quark-form-item>
      <quark-form-item :label="translate('label.rate')">
        <quark-rate></quark-rate>
      </quark-form-item>
      <quark-form-item :label="translate('label.stepper')">
        <quark-stepper min="0" max="99" />
      </quark-form-item>
      <quark-form-item :label="translate('label.textarea')">
        <quark-textarea autosize />
      </quark-form-item>
      <quark-form-item :label="translate('label.uploader')">
        <quark-uploader></quark-uploader>
      </quark-form-item>
      <quark-form-item :label="translate('label.picker')" islink>
        <quark-field
          :value="formData.picker"
          readonly
          @click="pickerVisible = true"
        />
        <quark-picker
          :title="translate('pickerTitle')"
          ref="pickerRef"
          :open="pickerVisible"
          @close="close"
          @confirm="confirm"
        />
      </quark-form-item>
    </quark-form>
  </div>
</template>

<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("form");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onMounted, onBeforeMount } from "vue";
import "./index";
import Toast from "../toast";

export default createDemo({
  setup() {
    const formData = ref({
      captcha: "1234",
      checkbox: ["apple"],
      radio: "",
      rate: "",
      stepper: "",
      switch: false,
      textarea: "",
      uploader: [],
      picker: "",
    });
    const form = ref({
      name: "",
      password: "",
    });
    const formRef = ref(null);
    const pickerRef = ref(null);

    onMounted(() => {
      const picker = pickerRef.value;
      picker.setColumns([
        {
          defaultIndex: 0,
          values: translate("cities"),
        },
      ]);
      formRef.value?.setModel(form.value);
    });
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          title: {
            basic: "基础用法",
            rule: "自定义校验规则",
            items: "表单项大全",
          },
          label: {
            name: "姓名",
            password: "密码",
            age: "年龄",
            checkbox: "复选框",
            radio: "单选框",
            switch: "开关",
            rate: "评分",
            stepper: "步进器",
            textarea: "文本域",
            uploader: "文件上传",
            picker: "选择器",
          },
          placeholders: {
            pattern: "正则校验",
            validator: "函数校验",
            asyncValidator: "异步校验",
          },
          cities: ["杭州", "嘉兴", "绍兴", "宁波", "湖州", "千岛湖"],
          submit: "提交",
          reset: "重置",
          error: {
            name: "请输入姓名",
            password: "请输入密码",
            age: "不能小于18岁",
            errorMsg: "请输入正确内容",
            errorPwd: "密码不能为123456",
          },
          pickerTitle: "请选择城市",
          enum: {
            apple: "苹果",
            banana: "香蕉",
            square: "方形",
            circle: "圆形",
          },
        },
        "en-US": {
          title: {
            basic: "Basic Usage",
            rule: "Custom Rules",
            items: "Form Items",
          },
          label: {
            name: "Name",
            password: "Password",
            age: "Age",
            checkbox: "Checkbox",
            radio: "Radio",
            switch: "Swicth",
            rate: "Rate",
            stepper: "Stepper",
            textarea: "Textarea",
            uploader: "Uploader",
            picker: "Picker",
          },
          placeholders: {
            pattern: "Use pattern",
            validator: "Use validator",
            asyncValidator: "Use async validator",
          },
          cities: [
            "Hangzhou",
            "Jiaxing",
            "Shaoxing",
            "Ningbo",
            "Huzhou",
            "Qiandaohu",
          ],
          submit: "Submit",
          reset: "Reset",
          error: {
            name: "Name is required",
            password: "Password is required",
            age: "Must not be younger than 18",
            errorMsg: "Error message",
            errorPwd: "Password can not be 123456",
          },
          pickerTitle: "Please choose city",
          enum: {
            apple: "apple",
            banana: "banana",
            square: "square",
            circle: "circle",
          },
        },
      });
    });

    const submit = () => {
      formRef.value.validate((valid, errorMsg) => {
        console.log("submit", valid, errorMsg);
      });
    };

    const reset = () => {
      formRef.value.resetFields();
    };

    const onCheckboxChange = ({ detail }) => {
      formData.value.checkbox = detail.value;
    };

    const onRadioChange = ({ detail }) => {
      formData.value.radio = detail.value;
    };

    const pickerVisible = ref(false);

    const close = () => {
      pickerVisible.value = false;
    };

    const confirm = ({ detail }) => {
      formData.value.picker = detail.value.map((i) => i.value).join(" ");
      pickerVisible.value = false;
    };

    const validateField = () => {
      formRef.value.validateField(["name", "password"], (errorMsg) => {
        console.log(errorMsg);
      });
    };

    const ruleFormRef = ref(null);
    const ruleForm = ref({
      name: "",
      password: "",
      age: "",
    });

    const ruleFormSubmit = async () => {
      const valid = await ruleFormRef.value.validate();
      console.log(valid);
    };
    const validatorPassword = (rule, val, callback) => {
      if (!val) {
        callback(new Error(translate("error.errorMsg")));
      } else if (val === "123456") {
        callback(new Error(translate("error.errorPwd")));
      } else {
        callback();
      }
    };
    const asyncValidator = (rule, value) => {
      return new Promise((resolve, reject) => {
        if (value < 18) {
          reject(translate("error.age"));
        } else {
          resolve();
        }
      });
    };

    return {
      formRef,
      formData,
      pickerRef,
      translate,
      close,
      confirm,
      onCheckboxChange,
      pickerVisible,
      onRadioChange,
      validateField,
      submit,
      reset,
      form,
      ruleFormRef,
      ruleForm,
      ruleFormSubmit,
      validatorPassword,
      asyncValidator,
    };
  },
});
</script>

<style scoped src="./demo.scss"></style>
