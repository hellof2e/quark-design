<template>
  <div class="demo field-demo">
    <div class="demo-inputs">
      <h2>{{ translate("title.basic") }}</h2>
      <div class="type">
        <quark-field
          :placeholder="translate('basic.placeholder')"
          :label="translate('basic.label1')"
        ></quark-field>
        <div class="line" />
        <quark-field
          type="password"
          value="123456"
          :label="translate('basic.label2')"
        />
        <div class="line" />
        <quark-field
          type="number"
          value="12345678901"
          max="11"
          :label="translate('basic.label3')"
        />
        <div class="line" />
        <quark-field
          :value="translate('basic.value')"
          maxlength="5"
          :label="translate('basic.label4')"
        />
      </div>
      <h2>{{ translate("title.head") }}</h2>
      <div class="type">
        <quark-field :value="translate('head.value')">
          <div slot="label" class="label">
            <p>{{ translate("head.main") }}</p>
            <span>{{ translate("head.subtitle") }}</span>
          </div>
        </quark-field>
        <div class="line" />
        <quark-field
          :placeholder="translate('nohead.placeholder')"
          :value="translate('nohead.value')"
          class="oneLine"
        />
        <div class="line" />
      </div>
      <h2>{{ translate("title.disabled") }}</h2>
      <div class="type">
        <quark-field
          :value="translate('disabled.value')"
          :label="translate('disabled.label')"
          disabled
        />
        <div class="line" />
        <quark-field
          :value="translate('readonly.value')"
          :label="translate('readonly.label')"
          readonly
        />
      </div>
      <h2>{{ translate("title.css") }}</h2>
      <div class="type">
        <quark-field
          class="theme"
          :value="translate('title.css')"
          label="css"
        />
      </div>
      <h2>{{ translate("title.event") }}</h2>
      <quark-field
        :label="translate('title.event')"
        :value="value"
        @change="change"
        @blur="blur"
        @focus="focus"
      />
      <h2>{{ translate("title.required") }}</h2>
      <quark-field
        :placeholder="translate('requiredText.placeholder')"
        :label="translate('requiredText.label')"
        required
        :errormsg="translate('requiredText.error')"
      ></quark-field>
      <quark-field
        :placeholder="translate('requiredPhone.placeholder')"
        :label="translate('requiredPhone.label')"
        id="custom-rule"
        required
      ></quark-field>
    </div>
  </div>
</template>

<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("field");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onMounted, onBeforeMount } from "vue";
import Toast from "../toast";

export default createDemo({
  setup() {
    const value = ref(1);
    const disabled = ref(true);
    const css = ref({
      labelWidth: "100px",
      labelColor: "#ccc",
      labelSize: "16px",
      labelMarginRight: "10px",
      inputColor: "#999",
      inputSize: "12px",
      placeholderColor: "red",
    });
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          title: {
            basic: "????????????",
            head: "???????????????/?????????",
            disabled: "???????????????",
            css: "css ??????",
            event: "??????",
            required: "??????????????????",
          },
          basic: {
            placeholder: "???????????????",
            label1: "??????",
            label2: "??????",
            label3: "??????",
            label4: "??????5??????",
            value: "???????????????",
          },
          head: {
            value: "???????????????",
            main: "?????????",
            subtitle: "?????????????????????",
          },
          nohead: {
            placeholder: "??????label",
            value: "?????????",
          },
          disabled: {
            value: "????????????",
            label: "??????",
          },
          readonly: {
            value: "???????????????",
            label: "??????",
          },
          requiredText: {
            placeholder: "???????????????",
            label: "??????",
            error: "????????????????????????",
          },
          requiredPhone: {
            placeholder: "??????????????????",
            label: "?????????",
            error: "???????????????????????????",
          },
        },
        "en-US": {
          title: {
            basic: "Basic Usage",
            head: "Custom Title",
            disabled: "Disabled & Readonly",
            css: "CSS Style",
            event: "Event",
            required: "Requied Content Setting",
          },
          basic: {
            placeholder: "Please enter text",
            label1: "Text",
            label2: "Password",
            label3: "Number",
            label4: "Up to 5 digits",
            value: "One Two Tree Four Five",
          },
          head: {
            value: "Custom Title",
            main: "Main Title",
            subtitle: "Subtitle",
          },
          nohead: {
            placeholder: "Disable Label",
            value: "No Title",
          },
          disabled: {
            value: "Disabled",
            label: "Disabled",
          },
          readonly: {
            value: "Readonly",
            label: "Readonly",
          },
          requiredText: {
            placeholder: "Please enter text",
            label: "Text",
            error: "Text content cannot be empty",
          },
          requiredPhone: {
            placeholder: "Please enter phone number",
            label: "Phone number",
            error: "Please enter the correct number",
          },
        },
      });
    });
    onMounted(() => {
      const field = document.getElementById("custom-rule");
      field.setRules([
        {
          validator: validatorPhone,
          message: `${translate("requiredPhone.error")}`,
        },
      ]);
    });

    const validatorPhone = (value) => {
      if (!/^1[3456789]\d{9}$/.test(value)) {
        return false;
      }
      return true;
    };

    const change = (e) => {
      value.data = e.detail.value;
      Toast.text(e.detail.value);
    };

    const blur = () => {
      Toast.text("blur");
    };

    const focus = () => {
      Toast.text("focus");
    };

    return {
      value,
      disabled,
      css,
      change,
      blur,
      focus,
      translate,
    };
  },
});
</script>
<style src="./demo.scss"></style>
