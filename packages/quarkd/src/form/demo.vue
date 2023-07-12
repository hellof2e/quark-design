<template>
  <div class="demo scoped-form">
    <h2>{{ translate("title.basic") }}</h2>
    <quark-form ref="formRef" labelwidth="70px">
      <quark-form-item prop="name" :label="translate('label.name')">
        <quark-field
          v-model="form.name"
          :placeholder="translate('label.name')"
        />
      </quark-form-item>
      <quark-form-item prop="password" :label="translate('label.password')">
        <quark-field
          v-model="form.password"
          type="password"
          :placeholder="translate('label.password')"
        />
      </quark-form-item>
      <quark-form-item prop="other.age" :label="translate('label.age')">
        <quark-field
          v-model="form.other.age"
          :placeholder="translate('label.age')"
        />
      </quark-form-item>
    </quark-form>
    <br />
    <div class="flex-box">
      <quark-button type="primary" size="big" @click="submit(formRef)">
        {{ translate("submit") }}
      </quark-button>
      <quark-button size="big" @click="reset">
        {{ translate("reset") }}
      </quark-button>
    </div>

    <h2>{{ translate("title.rule") }}</h2>
    <quark-form ref="ruleFormRef" labelwidth="90px">
      <quark-form-item prop="name" :label="translate('label.name')">
        <quark-field :placeholder="translate('placeholders.pattern')" />
      </quark-form-item>
      <quark-form-item prop="password" :label="translate('label.password')">
        <quark-field
          value="123456"
          :placeholder="translate('placeholders.validator')"
        />
      </quark-form-item>
      <quark-form-item prop="age" :label="translate('label.age')">
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
    <quark-form ref="formItemsRef">
      <quark-form-item prop="checkbox" :label="translate('label.checkbox')">
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
      <quark-form-item prop="radio" :label="translate('label.radio')">
        <quark-radio-group :value="formData.radio" @change="onRadioChange">
          <quark-radio name="square">
            {{ translate("enum.square") }}
          </quark-radio>
          <quark-radio name="circle">
            {{ translate("enum.circle") }}
          </quark-radio>
        </quark-radio-group>
      </quark-form-item>
      <quark-form-item prop="swich" :label="translate('label.switch')">
        <quark-switch :checked="formData.switch"></quark-switch>
      </quark-form-item>
      <quark-form-item prop="rate" :label="translate('label.rate')">
        <quark-rate></quark-rate>
      </quark-form-item>
      <quark-form-item prop="stepper" :label="translate('label.stepper')">
        <quark-stepper min="0" max="99" />
      </quark-form-item>
      <quark-form-item prop="textarea" :label="translate('label.textarea')">
        <quark-textarea autosize />
      </quark-form-item>
      <quark-form-item prop="uploader" :label="translate('label.uploader')">
        <quark-uploader v-model="formData.uploader" preview></quark-uploader>
      </quark-form-item>
      <quark-form-item prop="picker" :label="translate('label.picker')" islink>
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
    <br />
    <div class="flex-box">
      <quark-button type="primary" size="big" @click="getValues(formItemsRef)">
        {{ translate("submit") }}
      </quark-button>
    </div>

    <h2>{{ translate("title.attrs") }}</h2>
    <quark-form
      ref="formAttrRef"
      labelwidth="60px"
      labelposition="right"
      labelsuffix="："
    >
      <quark-form-item
        prop="name"
        :label="translate('label.name')"
        labelwidth="70px"
      >
        <quark-field
          v-model="attrsForm.name"
          :placeholder="translate('label.name')"
        />
      </quark-form-item>
      <quark-form-item
        prop="password"
        hideasterisk
        :label="translate('label.password')"
        :rules="[{ required: true, message: translate('error.password') }]"
      >
        <quark-field
          v-model="attrsForm.password"
          type="password"
          :placeholder="translate('label.password')"
        />
      </quark-form-item>
      <quark-form-item prop="age" :label="translate('label.age')" hidemessage>
        <quark-field
          v-model="attrsForm.age"
          :placeholder="translate('label.age')"
        />
      </quark-form-item>
    </quark-form>

    <h2>{{ translate("title.slots") }}</h2>
    <quark-form>
      <quark-form-item>
        <div slot="label">
          {{ translate("customLabel") }}
        </div>
        <quark-field />
        <div slot="suffix">
          <quark-button type="primary" size="small">
            {{ translate("search") }}
          </quark-button>
        </div>
      </quark-form-item>
    </quark-form>

    <h2>{{ translate("title.dynamic") }}</h2>
    <quark-form ref="dynamicFormRef">
      <template v-for="(item, index) in dynamicFormData.user" :key="index">
        <quark-form-item
          :label="`${translate('label.name')}${index}`"
          :prop="`user.${index}.name`"
          :rules="[{ required: true, message: translate('error.name') }]"
        >
          <quark-field
            v-model="item.name"
            :placeholder="translate('label.name')"
          />
        </quark-form-item>
        <quark-form-item
          :label="`${translate('label.age')}${index}`"
          :prop="`user.${index}.age`"
          :rules="[{ required: true, message: translate('error.age1') }]"
        >
          <quark-field
            v-model="item.age"
            :placeholder="translate('label.age')"
          />
        </quark-form-item>
        <br />
      </template>
    </quark-form>
    <div class="flex-box">
      <quark-button type="primary" size="big" @click="submit(dynamicFormRef)">
        {{ translate("submit") }}
      </quark-button>
      <quark-button size="big" @click="addDynamicForm">
        {{ translate("add") }}
      </quark-button>
    </div>
  </div>
</template>

<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("form");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onMounted, onBeforeMount } from "vue";
import "./index";

export default createDemo({
  setup() {
    const formData = ref({
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
      other: {
        age: 18,
      },
    });
    const formRef = ref(null);
    const pickerRef = ref(null);

    const ruleFormRef = ref(null);
    const ruleForm = ref({
      name: "",
      password: "",
      age: "",
    });

    const formAttrRef = ref();
    const attrsForm = ref({
      name: "",
      password: "",
      age: "",
    });

    const formItemsRef = ref();

    const dynamicFormData = ref({
      user: [{ name: "", age: "" }],
    });
    const addDynamicForm = () => {
      dynamicFormData.value.user.push({ name: "", age: "" });
    };
    const dynamicRules = {
      name: [{ required: true, message: translate("error.name") }],
      age: [{ required: true, message: translate("error.age1") }],
    };

    onMounted(() => {
      const picker = pickerRef.value;
      picker.setColumns([
        {
          defaultIndex: 0,
          values: translate("cities"),
        },
      ]);
      formRef.value?.setModel(form.value);
      formRef.value?.setRules({
        name: [{ required: true, message: translate("error.name") }],
        password: { required: true, message: translate("error.password") },
        other: {
          age: [{ required: true, message: translate("error.age1") }],
        },
      });

      formItemsRef.value?.setModel(formData.value);

      formAttrRef.value?.setModel(attrsForm.value);
      formAttrRef.value?.setRules({
        name: [{ required: true, message: translate("error.name") }],
        // password: { required: true, message: translate("error.password") },
        age: { required: true, message: translate("error.age1") },
      });

      ruleFormRef.value?.setRules({
        name: [
          {
            required: true,
            message: translate("error.errorMsg"),
            pattern: /\w{6}/,
          },
        ],
        password: [{ required: true, validator: validatorPassword }],
        age: [{ required: true, asyncValidator: asyncValidator }],
      });

      dynamicFormRef.value?.setModel(dynamicFormData.value);
    });
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          title: {
            basic: "基础用法",
            rule: "自定义校验规则",
            items: "表单项类型",
            slots: "使用插槽",
            attrs: "表单属性",
            dynamic: "动态增加表单项",
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
          add: "添加",
          error: {
            name: "请输入姓名",
            password: "请输入密码",
            age1: "请输入年龄",
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
          customLabel: "自定义label",
          search: "搜索",
        },
        "en-US": {
          title: {
            basic: "Basic Usage",
            rule: "Custom Rules",
            items: "Form Items",
            slots: "Use slots",
            attrs: "Form Attributes",
            dynamic: "Add form items dynamically",
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
          add: "Add",
          error: {
            name: "Name is required",
            password: "Password is required",
            age: "Must not be younger than 18",
            age1: "Age is required",
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
          customLabel: "Custom Label",
          search: "Search",
        },
      });
    });

    const submit = (ref) => {
      ref.validate((valid, errorMsg) => {
        console.log("submit", valid, errorMsg);
      });
    };

    const reset = () => {
      formRef.value.resetFields();
    };

    const getValues = (ref) => {
      const values = ref.getValues();
      console.log(values);
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
      formData.value.picker = detail.value.map((i) => i.value).join("");
      pickerVisible.value = false;
    };

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

    const dynamicFormRef = ref();

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
      submit,
      reset,
      form,
      ruleFormRef,
      ruleForm,
      ruleFormSubmit,
      formAttrRef,
      attrsForm,
      formItemsRef,
      getValues,
      addDynamicForm,
      dynamicRules,
      dynamicFormData,
      dynamicFormRef,
    };
  },
});
</script>

<style scoped src="./demo.scss"></style>
