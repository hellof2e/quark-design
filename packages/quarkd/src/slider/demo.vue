<template>
  <div class="demo slider-demo">
    <h2>{{ translate("title1") }}</h2>
    <quark-slider :value="value1" />
    <h2>{{ translate("title2") }}</h2>
    <quark-slider :value="value2" range />
    <h2>{{ translate("title3") }}</h2>
    <quark-slider :value="value3" min="-50" max="50" />
    <h2>{{ translate("title4") }}</h2>
    <quark-slider :value="value4" disabled />
    <h2>{{ translate("title5") }}</h2>
    <quark-slider :value="value5" step="10" />
    <h2>{{ translate("vertical") }}</h2>
    <div class="vertical-container">
      <quark-slider :value="value6" vertical />
    </div>
    <h2>{{ translate("customStyle") }}</h2>
    <quark-slider :value="value7" barHeight="4px" activeColor="#ee0a24" />
    <h2>{{ translate("customButton") }}</h2>
    <quark-slider :value="value8" @change="onValue8Change">
      <div slot="button" class="custom-button">{{ value8 }}</div>
    </quark-slider>
  </div>
</template>
<script>
import { onBeforeMount } from "vue";
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("slider");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref } from "vue";

export default createDemo({
  setup() {
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          text: "当前值：",
          title1: "基础用法",
          title2: "双滑块",
          title3: "指定选择范围",
          title4: "禁用",
          title5: "指定步长",
          vertical: "垂直方向",
          customStyle: "自定义样式",
          customButton: "自定义按钮",
        },
        "en-US": {
          text: "Current value: ",
          title1: "Basic Usage",
          title2: "Dual thumb mode",
          title3: "Range",
          title4: "Disabled",
          title5: "Step size",
          vertical: "Vertical",
          customStyle: "Custom Style",
          customButton: "Custom Button",
        },
      });
    });

    const value1 = ref(50);
    const value2 = ref([20, 60]);
    const value3 = ref(0);
    const value4 = ref(50);
    const value5 = ref(50);
    const value6 = ref(50);
    const value7 = ref(50);
    const value8 = ref(50);
    const value9 = ref([20, 60]);

    const onValue8Change = (e) => {
      value8.value = e.detail.value;
    };

    return {
      translate,
      value1,
      value2,
      value3,
      value4,
      value5,
      value6,
      value7,
      value8,
      value9,
      onValue8Change,
    };
  },
});
</script>
<style src="./demo.scss"></style>
