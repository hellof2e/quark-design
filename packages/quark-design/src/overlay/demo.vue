<template>
  <div class="demo">
    <h2>{{ translate("basicUsage") }}</h2>
    <quark-cell-group>
      <quark-cell
        type="primary"
        :title="translate('basicUsage')"
        islink
        @click="click"
      ></quark-cell>
    </quark-cell-group>
    <quark-overlay :open="open" @close="closed" />
    <h2>{{ translate("context") }}</h2>
    <quark-cell-group>
      <quark-cell
        type="primary"
        :title="translate('context')"
        islink
        @click="customClick"
      ></quark-cell>
    </quark-cell-group>
    <quark-overlay :open="customOpen" @close="customClosed">
      <div class="content"></div>
    </quark-overlay>
  </div>
</template>

<script>
import "./index";
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("overlay");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onBeforeMount } from "vue";

export default createDemo({
  setup() {
    const open = ref(false);
    const customOpen = ref(false);
    const click = () => {
      open.value = true;
    };
    const customClick = () => {
      customOpen.value = true;
    };
    const closed = () => {
      open.value = false;
    };
    const customClosed = () => {
      customOpen.value = false;
    };
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basicUsage: "基础用法",
          context: "嵌入内容",
        },
        "en-US": {
          basicUsage: "Basic Usage",
          context: "Embedded Content",
        },
      });
    });
    return {
      open,
      customOpen,
      click,
      customClick,
      closed,
      customClosed,
      translate,
    };
  },
});
</script>
<style src="./demo.scss"></style>
