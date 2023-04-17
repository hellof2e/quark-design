<template>
  <div class="demo stepper-demo">
    <h2>{{ translate("basic") }}</h2>
    <div class="quark-cell">
      <quark-stepper :value="value" @change="changeValue" />
    </div>
    <h2>{{ translate("limit") }}</h2>
    <div class="quark-cell">
      <quark-stepper min="5" max="12" />
    </div>
    <h2>{{ translate("steps") }}</h2>
    <div class="quark-cell">
      <quark-stepper steps="2" />
    </div>
    <h2>{{ translate("interger") }}</h2>
    <div class="quark-cell">
      <quark-stepper interger />
    </div>
    <h2>{{ translate("disabled") }}</h2>
    <div class="quark-cell">
      <quark-stepper disabled />
    </div>
    <h2>{{ translate("call") }}</h2>
    <div class="quark-cell">
      <quark-stepper @change="change" />
    </div>
    <h2>{{ translate("css") }}</h2>
    <div class="quark-cell">
      <quark-stepper class="theme" />
    </div>
  </div>
</template>

<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("stepper");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onBeforeMount } from "vue";
import QuarkToast from "../toast/index";

export default createDemo({
  setup() {
    const value = ref(1);
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "基础用法",
          limit: "限制输入范围",
          steps: "步长设置",
          interger: "限制输入整数",
          disabled: "禁用状态",
          call: "变更回调",
          css: "css属性",
        },
        "en-US": {
          basic: "Basic Usage",
          limit: "Limit Input Range",
          steps: "Steps Setting",
          interger: "Interger Limit",
          disabled: "Disabled",
          call: "Change Call",
          css: "CSS Style",
        },
      });
    });
    const changeValue = ({ detail }) => {
      value.value = detail.value;
    };
    const change = ({ detail }) => {
      QuarkToast.text(detail.value);
    };
    const blur = ({ detail }) => {
      QuarkToast.text("blur");
    };
    const focus = ({ detail }) => {
      QuarkToast.text("focus");
    };
    return {
      value,
      changeValue,
      change,
      blur,
      focus,
      translate,
    };
  },
});
</script>
<style src="./demo.scss"></style>
