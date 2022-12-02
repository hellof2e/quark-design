<template>
  <div class="demo no-padding popup-demo">
    <h2>{{ translate("basic") }}</h2>
    <quark-virtuallist
      ref="virtualListRef"
      :itemheight="50"
      :containerheight="500"
      @load="onLoad"
    />
  </div>
</template>

<script>
import { ref, onBeforeMount, onMounted } from "vue";
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("virtuallist");
import "./index";

export default createDemo({
  setup() {
    const list = ref(new Array(100).fill(0).map((_, i) => i + 1));
    const virtualListRef = ref(null);

    const onLoad = () => {
      const len = list.value.length;
      const arr = new Array(100).fill(0).map((_, i) => len + i + 1);
      list.value = list.value.concat(arr);
      virtualListRef.value.setListData(list.value);
    };

    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "基本用法",
        },
        "en-US": {
          basic: "Basic Usage",
        },
      });
    });

    const renderItem = (text) => {
      const div = `
        <div style="height: 50px; line-height: 50px; text-align: center;">${text}</div>
      `;
      return div;
    };

    onMounted(() => {
      virtualListRef.value.setListData(list.value);
      virtualListRef.value.setRenderItem(renderItem);
    });

    return {
      translate,
      virtualListRef,
      onLoad,
    };
  },
});
</script>

<style src="./demo.scss"></style>
