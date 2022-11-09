<template>
  <div class="demo switch-demo" style="background-color: #fff">
    <h2>{{ translate("basic") }}</h2>
    <quark-switch
      :checked="data.checked1"
      @change="handleChange1"
    ></quark-switch>

    <h2>{{ translate("disabled") }}</h2>
    <quark-switch disabled></quark-switch>
    <quark-switch disabled checked></quark-switch>

    <h2>{{ translate("size") }}</h2>
    <quark-switch
      @change="handleChange2"
      :checked="data.checked2"
      size="20"
    ></quark-switch>

    <h2>{{ translate("color") }}</h2>
    <quark-switch
      @change="handleChange3"
      :checked="data.checked3"
      color="red"
    ></quark-switch>
  </div>
</template>

<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("switch");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onBeforeMount } from "vue";
import "./index.tsx";

export default createDemo({
  setup() {
    const data = ref({
      checked1: false,
      checked2: true,
      checked3: true,
    });
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "基本用法",
          disabled: "禁用状态",
          size: "自定义大小",
          color: "自定义颜色",
        },
        "en-US": {
          basic: "Basic Usage",
          disabled: "Disabled",
          size: "Custom Size",
          color: "Custom Color",
        },
      });
    });
    const handleChange1 = (e) => {
      console.log("current value is:", e.detail.value);
      data.value.checked1 = e.detail.value;
    };

    const handleChange2 = (e) => {
      console.log("current value is:", e.detail.value);
      data.value.checked2 = !data.value.checked2;
    };

    const handleChange3 = (e) => {
      console.log("current value is:", e.detail.value);
      data.value.checked3 = e.detail.value;
    };

    return {
      data,
      handleChange1,
      handleChange2,
      handleChange3,
      translate,
    };
  },
});
</script>
<style src="./demo.scss"></style>
