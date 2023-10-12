<template>
  <div class="demo no-padding action-sheet-demo">
    <h2>{{ translate("basic") }}</h2>
    <quark-dropdown-menu active-color="#f00">
      <quark-dropdown-item title="title1"></quark-dropdown-item>
      <quark-dropdown-item :value="value"></quark-dropdown-item>
      <quark-dropdown-item></quark-dropdown-item>
    </quark-dropdown-menu>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <quark-dropdown-menu direction="up">
      <quark-dropdown-item></quark-dropdown-item>
      <quark-dropdown-item value="1"></quark-dropdown-item>
    </quark-dropdown-menu>

    <h2>{{ translate("customStyle") }}</h2>
  </div>
</template>

<script>
import { createComponent } from "@/utils/create";
import { onBeforeMount, ref } from "vue";
const { createDemo, translate } = createComponent("dropdownmenu");
import { useTranslate } from "@/sites/assets/util/useTranslate";

export default createDemo({
  props: {},
  setup() {
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "基本用法",
          customStyle: "自定义样式",
          title: "带标题",
          cancel: "带取消按钮",
          titleStyle: "标题样式",
          optionStyle: "选项样式",
          cancelStyle: "取消按钮样式",
          options: ["选项一", "选项二", "选项三"],
          titleTxt: "我是标题信息",
          maskClick: "蒙版点击",
        },
        "en-US": {
          basic: "Basic Usage",
          customStyle: "Custom Style",
          title: "Title",
          cancel: "Cancel",
          titleStyle: "Title Style",
          optionStyle: "Option Style",
          cancelStyle: "Cancel Style",
          options: ["Option 1", "Option 2", "Option 3"],
          titleTxt: "Title Message",
          maskClick: "Mask Click",
        },
      });
    });

    const value = ref(1);

    return {
      translate,
      value: value,
    };
  },
});
</script>

<style src="./demo.scss"></style>
