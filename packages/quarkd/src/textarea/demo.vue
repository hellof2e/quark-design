<template>
  <div class="demo textarea-demo no-padding">
    <h2>{{ translate("basic") }}</h2>
    <quark-textarea v-model="textAreaInput" />

    <h2>{{ translate("count") }}</h2>
    <quark-textarea showcount />

    <h2>{{ translate("limit") }}</h2>
    <quark-textarea showcount maxlength="50" />

    <h2>{{ translate("rows") }}</h2>
    <quark-textarea rows="6" />

    <h2>{{ translate("height") }}</h2>
    <quark-textarea autosize />

    <h2>{{ translate("disabled") }}</h2>
    <quark-textarea disabled />

    <h2>{{ translate("event") }}</h2>
    <quark-textarea
      @input="handleEvent($event, 'input')"
      @blur="handleEvent($event, 'blur')"
      @focus="handleEvent($event, 'focus')"
      @compositionstart="handleEvent($event, 'compositionstart')"
    />

    <h2>{{ translate("custom") }}</h2>
    <quark-textarea showcount class="custom-style" />
  </div>
</template>

<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("textarea");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onBeforeMount } from "vue";
import Toast from "../toast";

export default createDemo({
  setup() {
    const textAreaInput = ref("");
    const handleEvent = (event, type) => {
      Toast.text(`${event.target.value}${type}`);
    };
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "基础用法",
          count: "字数统计",
          limit: "字数限制",
          rows: "指定行数",
          height: "根据内容自动调整高度",
          disabled: "禁用状态",
          event: "触发事件",
          custom: "自定义样式",
        },
        "en-US": {
          basic: "Basic Usage",
          count: "Show Count",
          limit: "Count Limit",
          rows: "Rows Setting",
          height: "Autosize",
          disabled: "Disabled",
          event: "Event Trigger",
          custom: "Custom Style",
        },
      });
    });
    return {
      textAreaInput,
      handleEvent,
      translate,
    };
  },
});
</script>
<style src="./demo.scss"></style>
