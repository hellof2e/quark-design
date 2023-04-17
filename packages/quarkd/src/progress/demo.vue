<template>
  <div class="demo">
    <h2>{{ translate("basic") }}</h2>
    <div class="tag-container progress-wrap">
      <div class="wrap">
        <quark-progress value="0"></quark-progress>
      </div>
    </div>
    <h2>{{ translate("showText") }}</h2>
    <div class="tag-container progress-wrap space">
      <quark-progress value="100" showtext></quark-progress>
    </div>
    <h2>{{ translate("customColor") }}</h2>
    <div class="tag-container progress-wrap">
      <quark-progress
        :value="value"
        color="yellowgreen"
        showtext
      ></quark-progress>
      <quark-progress value="20" color="green" showtext></quark-progress>
      <quark-progress
        value="30"
        color="green"
        class="green"
        showtext
      ></quark-progress>
    </div>
    <h2>{{ translate("customStyle") }}</h2>
    <div class="tag-container progress-wrap">
      <quark-progress
        value="90"
        class="auto"
        color="linear-gradient(
        268deg,#fa2c19 0%,#fa3f19 44.59259259%,#fa5919 83.40740741%,#fa6419 100%)"
      >
        <span slot="percent" class="percent">0.9</span>
      </quark-progress>
    </div>
  </div>
</template>

<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("progress");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onMounted, onBeforeMount } from "vue";
import "./index";

export default createDemo({
  setup() {
    const value = ref(10);
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "基础用法",
          showText: "显示字体进度",
          customColor: "自定义颜色/背景色",
          customStyle: "自定义宽度/高度/圆角/显示百分比",
        },
        "en-US": {
          basic: "Basic Usage",
          showText: "Show Progress",
          customColor: "Custom Color/Background Color",
          customStyle: "Custom Width/Height/Round/Percentage",
        },
      });
    });
    onMounted(() => {
      let t = setInterval(() => {
        if (value.value >= 100) clearInterval(t);
        else value.value += 10;
      }, 1000);
    });
    return {
      value,
      translate,
    };
  },
});
</script>

<style scoped>
.tag-container {
  padding: 5px;
  margin-bottom: 30px;
}

.progress-wrap {
  background: #fff;
  padding-right: 32px;
}

quark-progress {
  width: 100%;
  margin: 16px;
  margin-right: 0;
}
.green {
  --progress-box-background: yellowgreen;
  --progress-margin-left: 6px;
}
.auto {
  width: 95%;
  height: 6px;
}
.wrap {
  display: flex;
  align-items: center;
}
.percent {
  color: yellowgreen;
}
</style>
