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

    <h2>{{ translate("iconhide") }}</h2>
    <div>
      <quark-collapse :title="translate('title')" iconhide>
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
        <span slot="icon" class="collapse-icon">ððð</span>
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
          basic: "åºæ¬ç¨æ³",
          openState: "æå¼ç¶æ",
          iconhide: "æ iconæ ·å¼",
          customTitile: "èªå®ä¹æ é¢",
          customIcon: "èªå®ä¹å¾æ ",
          title: "æ é¢",
          title1: "æ é¢1",
          title2: "æ é¢2",
          content:
            "çå½è¿ä¸æ­¢è¿è½´è½¬åå¿å°æéï¼äººç±»çä½éªè¿æ¯è¿è¾½éãä¸°å¯å¾å¤ã",
        },
        "en-US": {
          basic: "Basic Usage",
          openState: "Open State",
          iconhide: "Custom Style",
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
