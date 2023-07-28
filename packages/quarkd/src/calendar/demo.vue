<template>
  <div class="demo button-demo">
    <h2>{{ translate("title.type") }}</h2>
    <h2>{{ translate("title.basic") }}</h2>
    <quark-cell-group>
      <quark-cell
        type="primary"
        :title="translate('title.type')"
        islink
        @click="visibleHandle('date')"
      ></quark-cell>
    </quark-cell-group>
    <quark-calendar
      ref="datetimePickerRef"
      type="date"
      :title="translate('title.date')"
      :open="dateVisible"
      @close="visibleHandle('date', false)"
      @confirm="(detail) => confirm('date', detail)"
    >
    </quark-calendar>
  </div>
</template>
<script>
import { onBeforeMount } from "vue";
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("calendar");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref } from "vue";

export default createDemo({
  setup() {
    const dateVisible = ref(false);

    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          title: {
            type: "按钮类型",
          },
        },
        "en-US": {
          title: {
            type: "Button Type",
          },
        },
      });
    });
    const isLoading = ref(false);

    const visibleHandle = (type, visible = true) => {
      if (type === "date") {
        dateVisible.value = visible;
      }
    };

    return {
      translate,
      isLoading,
      dateVisible,
      visibleHandle,
    };
  },
});
</script>
<style src="./demo.scss"></style>
