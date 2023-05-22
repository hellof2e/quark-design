<template>
  <div class="demo tag-demo">
    <h2>{{ translate("basic") }}</h2>
    <div class="tag-container">
      <quark-tag type="danger" size="large">{{ translate("tag") }}</quark-tag>
    </div>
    <div class="tag-container">
      <quark-tag type="warning" size="large">{{ translate("tag") }}</quark-tag>
    </div>
    <div class="tag-container">
      <quark-tag type="success" size="large">{{ translate("tag") }}</quark-tag>
    </div>
    <div class="tag-container">
      <quark-tag type="primary" size="large">{{ translate("tag") }}</quark-tag>
    </div>

    <h2>{{ translate("size") }}</h2>
    <div class="tag-container">
      <quark-tag>{{ translate("tag") }}</quark-tag>
    </div>
    <div class="tag-container">
      <quark-tag size="large">{{ translate("tag") }}</quark-tag>
    </div>

    <h2>{{ translate("plain") }}</h2>
    <div class="tag-container">
      <quark-tag plain size="large" type="danger">
        {{ translate("tag") }}
      </quark-tag>
    </div>
    <div class="tag-container">
      <quark-tag plain size="large" type="warning">
        {{ translate("tag") }}
      </quark-tag>
    </div>
    <div class="tag-container">
      <quark-tag plain size="large" type="success">
        {{ translate("tag") }}
      </quark-tag>
    </div>
    <div class="tag-container">
      <quark-tag plain size="large" type="primary">
        {{ translate("tag") }}
      </quark-tag>
    </div>

    <h2>{{ translate("light") }}</h2>

    <div class="tag-container">
      <quark-tag light size="large" type="danger">
        {{ translate("tag") }}
      </quark-tag>
    </div>
    <div class="tag-container">
      <quark-tag light size="large" type="warning">
        {{ translate("tag") }}
      </quark-tag>
    </div>
    <div class="tag-container">
      <quark-tag light size="large" type="success">
        {{ translate("tag") }}
      </quark-tag>
    </div>
    <div class="tag-container">
      <quark-tag light size="large" type="primary">
        {{ translate("tag") }}
      </quark-tag>
    </div>

    <h2>{{ translate("color") }}</h2>
    <div class="tag-container">
      <quark-tag size="large" color="#ffe1e1" textcolor="#ad0000">
        {{ translate("tag") }}
      </quark-tag>
    </div>
    <div class="tag-container">
      <quark-tag size="large" color="linear-gradient(135deg, #667eea, #764ba2)">
        {{ translate("tag") }}
      </quark-tag>
    </div>
    <!-- <div class="tag-container">
      <quark-tag size="large" color="#7232dd">
        {{ translate("tag") }}
      </quark-tag>
    </div> -->
    <div class="tag-container">
      <quark-tag
        class="custom-border-color"
        plain
        size="large"
        color="#ffe1e1"
        textcolor="#ad0000"
      >
        {{ translate("tag") }}
      </quark-tag>
    </div>

    <h2>{{ translate("round") }}</h2>
    <div class="tag-container">
      <quark-tag size="large" type="primary" round>
        {{ translate("roundTag") }}
      </quark-tag>
    </div>
  </div>
</template>

<script>
import { onBeforeMount } from "vue";
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("sticky");
import { useTranslate } from "@/sites/assets/util/useTranslate";

export default createDemo({
  setup() {
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "基础用法",
          size: "标签大小",
          plain: "空心样式",
          light: "浅色样式",
          color: "自定义颜色",
          round: "圆角标签",
          roundTag: "我是圆角",
          tag: "正",
        },
        "en-US": {
          basic: "Basic Usage",
          size: "Tag Size",
          plain: "Plain Tag",
          light: "Light Tag",
          color: "Custom Color",
          round: "Round Tag",
          roundTag: "Round Tag",
          tag: "Q",
        },
      });
    });
    return {
      translate,
    };
  },
});
</script>
<style src="./demo.scss"></style>
