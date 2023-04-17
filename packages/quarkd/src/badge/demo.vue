<template>
  <div class="demo demo-badge">
    <h2>{{ translate("independent") }}</h2>
    <div class="badge-container">
      <quark-badge type="dot"></quark-badge>
    </div>
    <div class="badge-container">
      <quark-badge type="round" content="9"></quark-badge>
    </div>
    <div class="badge-container">
      <quark-badge type="label" :content="translate('word')"></quark-badge>
    </div>
    <div class="badge-container">
      <quark-badge
        type="label"
        size="big"
        :content="translate('word2')"
      ></quark-badge>
    </div>

    <h2>{{ translate("type") }}</h2>
    <div class="badge-container">
      <quark-badge type="dot">
        <div class="child"></div>
      </quark-badge>
    </div>
    <div class="badge-container">
      <quark-badge type="round" content="9">
        <div class="child"></div>
      </quark-badge>
    </div>

    <h2>{{ translate("size") }}</h2>
    <div class="badge-container">
      <quark-badge type="dot">
        <div class="child"></div>
      </quark-badge>
    </div>
    <div class="badge-container">
      <quark-badge content="9">
        <div class="child"></div>
      </quark-badge>
    </div>
    <div class="badge-container">
      <quark-badge type="dot" size="big">
        <div class="child"></div>
      </quark-badge>
    </div>
    <div class="badge-container">
      <quark-badge size="big" content="9">
        <div class="child"></div>
      </quark-badge>
    </div>

    <h2>{{ translate("style") }}</h2>
    <div class="badge-container">
      <quark-badge type="label" :content="translate('normal')" size="big">
      </quark-badge>
    </div>
    <div class="badge-container dark">
      <quark-badge
        border
        type="label"
        :content="translate('border')"
        size="big"
      >
      </quark-badge>
    </div>

    <h2>{{ translate("digital") }}</h2>
    <div class="badge-container">
      <quark-badge content="9">
        <div class="child"></div>
      </quark-badge>
    </div>
    <div class="badge-container">
      <quark-badge content="100" max="99">
        <div class="child"></div>
      </quark-badge>
    </div>

    <h2 @click="change">{{ translate("custom") }}</h2>
    <div class="badge-container">
      <quark-badge class="bg-color" :content="num">
        <div class="child"></div>
      </quark-badge>
    </div>
  </div>
</template>

<script>
import { onBeforeMount } from "vue";
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("badge");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref } from "vue";

export default createDemo({
  setup() {
    const num = ref(11);
    const change = () => {
      num.value = num.value + 1;
    };
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          independent: "徽标独立使用",
          word: "文字徽标",
          word2: "最高立减5元",
          type: "徽标类型",
          size: "徽标大小",
          style: "徽标风格",
          digital: "数字徽标",
          custom: "自定义样式-背景色",
          normal: "普通徽标",
          border: "边框徽标",
        },
        "en-US": {
          independent: "Badge Independent Use",
          word: "Word Badge",
          word2: "Up to $5 off",
          type: "Badge Type",
          size: "Badge Size",
          style: "Badge Style",
          digital: "Digital Badge",
          custom: "Custom-Background",
          normal: "Normal Badge",
          border: "Border Badge",
        },
      });
    });
    return {
      num,
      change,
      translate,
    };
  },
});
</script>
<style src="./demo.scss"></style>
