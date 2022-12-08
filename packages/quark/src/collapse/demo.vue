<template>
  <div class="demo no-padding action-sheet-demo">
    <h2>{{ translate("basic") }}</h2>
    <div>
      <quark-collapse :title="translate('title1')">
        生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。
      </quark-collapse>
      <quark-collapse :title="translate('title2')">
        生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。
      </quark-collapse>
    </div>

    <h2>{{ translate("hideicon") }}</h2>
    <div>
      <quark-collapse :title="translate('title1')" hideicon>
        生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。
      </quark-collapse>
    </div>

    <h2>{{ translate("customTitile") }}</h2>
    <div>
      <quark-collapse :title="translate('title1')">
        <div slot="title">
          <span style="color: blueviolet"
            >{{ translate("title1") }}{{ translate("title1") }}</span
          >
        </div>
        生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。
      </quark-collapse>
    </div>

    <h2>{{ translate("customIcon") }}</h2>
    <div>
      <quark-collapse :title="translate('title1')">
        生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。
        <span slot="icon" class="collapse-icon">🎉🎉🎉</span>
      </quark-collapse>
    </div>
  </div>
</template>

<script>
import { createComponent } from "@/utils/create";
import { onBeforeMount } from "vue";
const { createDemo, translate } = createComponent("collapse");
import { useTranslate } from "@/sites/assets/util/useTranslate";

export default createDemo({
  props: {},
  setup() {
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "基本用法",
          hideicon: "无icon样式",
          customTitile: "自定义标题",
          customIcon: "自定义图标",
          title1: "标题1",
          title2: "标题2",
        },
        "en-US": {
          basic: "Basic Usage",
          hideicon: "Custom Style",
          customTitile: "Custom titile",
          customIcon: "Custom Icon",
          title1: "Title1",
          title2: "Title2",
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
