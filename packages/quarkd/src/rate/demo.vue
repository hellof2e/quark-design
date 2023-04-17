<template>
  <div class="demo scope-rate">
    <h2>{{ translate("basic") }}</h2>
    <div class="tag-container">
      <quark-rate defaultvalue="1"></quark-rate>
    </div>
    <h2>{{ translate("selectedColor") }}</h2>
    <div class="tag-container">
      <quark-rate defaultvalue="2" activecolor="#ffd21e"></quark-rate>
    </div>
    <h2>{{ translate("disabled") }}</h2>
    <div class="tag-container">
      <quark-rate defaultvalue="2" disabled></quark-rate>
    </div>
    <h2>{{ translate("readonly") }}</h2>
    <div class="tag-container">
      <quark-rate defaultvalue="2" readonly></quark-rate>
    </div>
    <h2>{{ translate("event") }}</h2>
    <div class="tag-container">
      <quark-rate :value="rate" @change="handleChange"></quark-rate>
    </div>
    <h2>{{ translate("imageIcon") }}</h2>
    <div class="tag-container">
      <quark-rate
        defaultvalue="2"
        imgicon="https://quark-design.hellobike.com/assets/quark-logo.7fd50e67.png"
      >
      </quark-rate>
    </div>
  </div>
</template>

<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("rate");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onMounted, onBeforeMount } from "vue";
import QuarkRate from "./index.js";
import Toast from "../toast";

export default createDemo({
  setup() {
    const rate = ref(2);
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "基础用法",
          selectedColor: "自定义选中颜色",
          disabled: "禁用状态",
          readonly: "只读状态",
          event: "监听 change 事件",
          imageIcon: "图片icon",
        },
        "en-US": {
          basic: "Basic Usage",
          selectedColor: "Custom Selected Color",
          disabled: "Disabled",
          readonly: "Readonly",
          event: "Listen to change event",
          imageIcon: "image icon",
        },
      });
    });
    onMounted(() => {
      setTimeout(() => {
        rate.value = 3;
      }, 2000);
    });
    const handleChange = (e) => {
      Toast.text(e.detail.value);
    };
    return {
      rate,
      handleChange,
      translate,
    };
  },
});
</script>

<style scoped src="./demo.scss"></style>
