<template>
  <div class="demo no-padding action-sheet-demo">
    <h2>{{ translate("basic") }}</h2>
    <div>
      <quark-collapse :title="translate('title1')">
        {{ translate("content") }}
      </quark-collapse>
      <quark-collapse :title="translate('title2')">
        {{ translate("content") }}
      </quark-collapse>
    </div>

    <h2>{{ translate("openState") }}</h2>
    <div>
      <quark-collapse :title="translate('title')" open>
        {{ translate("content") }}
      </quark-collapse>
    </div>

    <h2>{{ translate("hideicon") }}</h2>
    <div>
      <quark-collapse :title="translate('title')" hideicon>
        {{ translate("content") }}
      </quark-collapse>
    </div>

    <h2>{{ translate("customTitile") }}</h2>
    <div>
      <quark-collapse :title="translate('title')">
        <div slot="title">
          <span style="color: blueviolet"
            >{{ translate("title") }}{{ translate("title") }}</span
          >
        </div>
        {{ translate("content") }}
      </quark-collapse>
    </div>

    <h2>{{ translate("customIcon") }}</h2>
    <div>
      <quark-collapse :title="translate('title')">
        <span slot="icon" class="collapse-icon">🎉🎉🎉</span>
        {{ translate("content") }}
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
          openState: "打开状态",
          hideicon: "无icon样式",
          customTitile: "自定义标题",
          customIcon: "自定义图标",
          title: "标题",
          title1: "标题1",
          title2: "标题2",
          content:
            "生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。",
        },
        "en-US": {
          basic: "Basic Usage",
          openState: "Open State",
          hideicon: "Custom Style",
          customTitile: "Custom titile",
          customIcon: "Custom Icon",
          title: "Title",
          title1: "Title1",
          title2: "Title2",
          content:
            "  Life is far more than spinning around and being busy to the limit. Human experience is far broader and richer than this.",
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
