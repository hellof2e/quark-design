<template>
  <div class="demo scoped-form">
    <h2>{{ translate("title.basic") }}</h2>
    <quark-form ref="form1">
      <!-- <quark-field name="name" :label="translate('labels')[0]"></quark-field> -->
      <quark-form-item prop="name" required :label="translate('labels')[0]">
        <quark-field :value="formData.name"></quark-field>
      </quark-form-item>
      <quark-form-item prop="password" :label="translate('labels')[1]">
        <quark-field :value="formData.password" placeholder="请输入密码" />
      </quark-form-item>
      <quark-form-item prop="captcha" :label="translate('labels')[3]">
        <div slot="label">验证码</div>
        <quark-field :value="formData.captcha" />
        <div slot="suffix">
          <quark-button type="primary" size="small">发送验证码</quark-button>
        </div>
      </quark-form-item>
      <quark-form-item label="复选框" :showerrormessage="showErrorMessage">
        <quark-checkbox
          name="checkbox"
          :checked="formData.checkbox"
          @change="onCheckboxChange"
        >
          复选框
        </quark-checkbox>
      </quark-form-item>
      <quark-form-item prop="picker" label="选择器" islink>
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
    <quark-button type="primary" size="big" @click="submitHandler">
      提交
    </quark-button>
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
      name: "name",
      password: "password",
      captcha: "1234",
      checkbox: "",
      picker: "",
      radio: "",
      rate: "",
      stepper: "",
      switch: "",
      textarea: "",
      uploader: [],
    });
    const form1 = ref(null);
    const pickerRef = ref(null);
    onMounted(() => {
      const picker = pickerRef.value;
      picker.setColumns([
        {
          defaultIndex: 0,
          values: ["杭州", "嘉兴", "绍兴", "宁波", "湖州", "千岛湖"],
        },
      ]);
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

    const submitHandler = () => {
      form1.value.validate(form1.value);
    };

    const onCheckboxChange = ({ detail }) => {
      formData.value.checkbox = detail.value;
    };

    const pickerVisible = ref(false);

    const close = () => {
      pickerVisible.value = false;
    };

    const confirm = ({ detail }) => {
      formData.value.picker = detail.value.map((i) => i.value).join(" ");
      pickerVisible.value = false;
    };

    return {
      formData,
      form1,
      pickerRef,
      translate,
      close,
      confirm,
      submitHandler,
      onCheckboxChange,
      pickerVisible,
    };
  },
});
</script>

<style scoped src="./demo.scss"></style>
