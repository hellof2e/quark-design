<template>
  <div class="demo no-padding">
    <h2>{{ translate("basic") }}</h2>
    <div class="flex">
      <quark-marquee :title="translate('content')"></quark-marquee>
    </div>
    <h2>{{ translate("speed") }}</h2>
    <quark-marquee :title="translate('content')" speed="25"></quark-marquee>
    <br />
    <quark-marquee :title="translate('content')" speed="100"></quark-marquee>
    <h2>{{ translate("pausedExmple.button.title") }}</h2>
    <quark-button
      class="paused-button"
      size="small"
      @click="isPaused.button = true"
    >
      {{ translate("pausedExmple.button.pause") }}
    </quark-button>
    <quark-button
      class="paused-button"
      size="small"
      @click="isPaused.button = false"
    >
      {{ translate("pausedExmple.button.continue") }}
    </quark-button>
    <quark-marquee
      :title="translate('content')"
      :paused="isPaused.button"
    ></quark-marquee>
    <h2>{{ translate("pausedExmple.hover") }}</h2>
    <quark-marquee
      :title="translate('content')"
      :paused="isPaused.hover"
      @mouseover="isPaused.hover = true"
      @mouseleave="isPaused.hover = false"
    ></quark-marquee>
    <h2>{{ translate("pausedExmple.click") }}</h2>
    <quark-marquee
      :title="translate('content')"
      :paused="isPaused.click"
      @click="isPaused.click = !isPaused.click"
    ></quark-marquee>
    <h2>{{ translate("reverse") }}</h2>
    <quark-marquee
      :title="translate('content')"
      :reverse="true"
    ></quark-marquee>
  </div>
</template>

<script>
import { reactive, onBeforeMount } from "vue";
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("marquee");
import { useTranslate } from "@/sites/assets/util/useTranslate";

export default createDemo({
  setup() {
    const isPaused = reactive({
      button: false,
      hover: false,
      click: false,
    });

    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "基础用法",
          speed: "不同速度",
          paused: "暂停",
          pausedExmple: {
            button: {
              title: "控制暂停",
              pause: "暂停",
              continue: "继续",
            },
            hover: "悬浮暂停",
            click: "点击暂停",
          },
          reverse: "反转方向",
          content:
            "2022 年我们见证了很多技术的新发展新变化：低代码的突然爆火、数据库的接连开源、芯片的短缺与自研、训练模型的参数突破",
          alert: {
            return: "返回",
            clear: "清除",
          },
        },
        "en-US": {
          basic: "Basic Usage",
          speed: "Marqueen Speed",
          pausedExmple: {
            button: {
              title: "Control Paused",
              pause: "Pause",
              continue: "Continue",
            },
            hover: "Hover Paused",
            click: "Click Paused",
          },
          reverse: "Reverse Direction",
          content:
            "In 2022, we will witness many new developments and changes in technology: the sudden explosion of low-code, the continuous open source of databases, the shortage of chips and self-research, and the parameter breakthrough of training models",
          alert: {
            return: "Go Back",
            clear: "Clear",
          },
        },
      });
    });
    return {
      isPaused,
      translate,
    };
  },
});
</script>
<style src="./demo.scss"></style>
