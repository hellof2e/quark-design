<template>
  <div class="demo scoped-form">
    <h2>{{ translate("title.basic") }}</h2>
    <quark-form
      ref="formRef"
      labelwidth="50px"
      labelposition="right"
      labelsuffix=":"
    >
      <quark-form-item
        prop="name"
        :label="translate('labels')[0]"
        :rules="[{ required: true, message: '请输入姓名' }]"
      >
        <quark-field placeholder="请输入姓名"></quark-field>
      </quark-form-item>
      <quark-form-item
        prop="password"
        :label="translate('labels')[1]"
        :rules="[{ required: true, message: '请输入密码' }]"
      >
        <quark-field placeholder="请输入密码" />
      </quark-form-item>
    </quark-form>
    <br />
    <div class="flex-box">
      <quark-button type="primary" size="big" @click="validateField">
        提交
      </quark-button>
    </div>
    <h2>{{ translate("title.basic") }}</h2>
    <quark-form ref="form1">
      <quark-form-item
        prop="name.a"
        :label="translate('labels')[0]"
        :rules="[{ required: true, message: '请输入姓名' }]"
      >
        <quark-field v-model="formData.name.a"></quark-field>
      </quark-form-item>
      <quark-form-item
        prop="password"
        :label="translate('labels')[1]"
        :rules="[{ required: true, message: '请输入密码' }]"
      >
        <quark-field v-model="formData.password" placeholder="请输入密码" />
      </quark-form-item>
      <quark-form-item
        prop="captcha"
        :label="translate('labels')[3]"
        :rules="[{ required: true, message: '请输入验证码' }]"
      >
        <div slot="label">验证码</div>
        <quark-field />
        <div slot="suffix">
          <quark-button type="primary" size="small">发送验证码</quark-button>
        </div>
      </quark-form-item>
      <quark-form-item
        prop="checkbox"
        label="复选框"
        :rules="[{ required: true, message: '请选择复选框' }]"
      >
        <quark-checkbox-group
          :value="formData.checkbox"
          @change="onCheckboxChange"
        >
          <quark-checkbox name="apple">苹果</quark-checkbox>
          <quark-checkbox name="banana">香蕉</quark-checkbox>
        </quark-checkbox-group>
      </quark-form-item>
      <quark-form-item
        prop="radio"
        label="单选框"
        :rules="[{ required: true, message: '请选择单选框' }]"
      >
        <quark-radio-group :value="formData.radio" @change="onRadioChange">
          <quark-radio name="apple">方形</quark-radio>
          <quark-radio name="banana">圆形</quark-radio>
        </quark-radio-group>
      </quark-form-item>
      <quark-form-item
        prop="switch"
        label="开关"
        :rules="[{ required: true, message: '请选择' }]"
      >
        <quark-switch :checked="formData.switch"></quark-switch>
      </quark-form-item>
      <quark-form-item
        prop="rate"
        label="评分"
        :rules="[{ required: true, message: '请选择' }]"
      >
        <quark-rate></quark-rate>
      </quark-form-item>
      <quark-form-item
        prop="stepper"
        label="步进器"
        :rules="[{ required: true, message: '请选择' }]"
      >
        <quark-stepper min="5" max="12" />
      </quark-form-item>
      <quark-form-item
        prop="textarea"
        label="文本域"
        :rules="[{ required: true, message: '请选择' }]"
      >
        <quark-textarea showcount autosize />
      </quark-form-item>
      <quark-form-item
        prop="uploader"
        label="文件上传"
        :rules="[{ required: true, message: '请选择' }]"
      >
        <quark-uploader preview ref="uploadRef"></quark-uploader>
      </quark-form-item>
      <quark-form-item
        prop="picker"
        label="选择器"
        islink
        :rules="[{ required: true, message: '请选择' }]"
      >
        <quark-field
          :value="formData.picker"
          readonly
          @click="pickerVisible = true"
        ></quark-field>
        <quark-picker
          title="请选择时间"
          ref="pickerRef"
          :open="pickerVisible"
          @close="close"
          @confirm="confirm"
        />
      </quark-form-item>
    </quark-form>
    <br />
    <div class="flex-box">
      <quark-button type="primary" size="big" @click="submitHandler">
        提交
      </quark-button>
      <quark-button size="big" @click="resetHandler"> 重置 </quark-button>
    </div>
  </div>
</template>

<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("form");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onMounted, onBeforeUnmount, onBeforeMount } from "vue";
import "./index";
import Toast from "../toast";

export default createDemo({
  setup() {
    const formData = ref({
      name: {
        a: "b",
      },
      password: "password",
      captcha: "1234",
      checkbox: ["apple"],
      radio: "",
      rate: "",
      stepper: "",
      switch: "",
      textarea: "",
      uploader: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
      ],
      picker: "绍兴",
    });
    const formRef = ref(null);
    const form1 = ref(null);
    const pickerRef = ref(null);
    const uploadRef = ref(null);

    onMounted(() => {
      const picker = pickerRef.value;
      picker.setColumns([
        {
          defaultIndex: 0,
          values: ["杭州", "嘉兴", "绍兴", "宁波", "湖州", "千岛湖"],
        },
      ]);
      const uploader = uploadRef.value;
      uploader.setPreview([
        "https://img.yzcdn.cn/vant/leaf.jpg",
        "https://img.yzcdn.cn/vant/leaf.jpg",
      ]);

      const form1Ref = form1.value;
      form1Ref.setModel(formData.value);
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          title: {
            basic: "基础用法",
            rule: "自定义校验规则",
            items: "表单项大全",
          },
          labels: ["姓名", "密码", "年龄", "手机号"],
          vegetable: "蔬菜:",
          vegetables: ["黄瓜", "生姜"],
          fruit: "水果:",
          fruits: ["苹果", "香蕉"],
          items: ["开灯:", "打分:", "步进器:", "上传:", "picker 选择器:"],
          placeholder: "请输入文本",
          submit: "提交",
          error: {
            timePicker: "请选择时间",
            age: "不能小于18岁",
            name: "请输入姓名",
            phone: "请输入正确的手机号",
            formItem: "请检查表单项",
            items: "当前表单所有的值",
            console: "请在控制台查看表单值",
          },
          time: ["上午", "下午"],
        },
        "en-US": {
          title: {
            basic: "Basic Usage",
            rule: "Custom Rules",
            items: "Form Items",
          },
          labels: ["Name", "Password", "Age", "Phone"],
          vegetable: "Vegetables:",
          vegetables: ["Cucumber", "Ginger"],
          fruit: "Fruit:",
          fruits: ["Apple", "Banana"],
          items: ["Switch:", "Rate:", "Stepper:", "Upload:", "Picker:"],
          placeholder: "Please enter text",
          submit: "Submit",
          error: {
            timePicker: "Please select time",
            age: "Must not be younger than 18",
            phone: "please enter a valid phone number",
            formItem: "Please check the form item",
            items: "All values of the current form",
            console: "Please check the form value in the console",
            name: "Please input name",
          },
          time: ["a.m.", "p.m."],
        },
      });
    });

    const submitHandler = async () => {
      form1.value.validate((valid, errorMsg) => {
        console.log("submitHandler", valid, errorMsg);
      });

      // const valid = await form1.value.validate();
      // console.log(valid);
    };

    const resetHandler = () => {
      form1.value.resetFields();
    };

    const onCheckboxChange = ({ detail }) => {
      console.log("onCheckboxChange", detail.value, formData.value);
      formData.value.checkbox = detail.value;
    };

    const onRadioChange = ({ detail }) => {
      console.log("onRadioChange", detail.value, formData.value);
      formData.value.radio = detail.value;
    };

    const pickerVisible = ref(false);

    const close = () => {
      pickerVisible.value = false;
    };

    const confirm = ({ detail }) => {
      console.log(formData.value);
      formData.value.picker = detail.value.map((i) => i.value).join(" ");
      pickerVisible.value = false;
    };

    const validateField = () => {
      formRef.value.validateField(["name", "password"], (errorMsg) => {
        console.log(errorMsg);
      });
    };

    return {
      formRef,
      formData,
      form1,
      pickerRef,
      translate,
      close,
      confirm,
      submitHandler,
      onCheckboxChange,
      pickerVisible,
      resetHandler,
      onRadioChange,
      uploadRef,
      validateField,
    };
  },
});
</script>

<style scoped src="./demo.scss"></style>
