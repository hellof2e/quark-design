<template>
  <div class="demo toast-demo">
    <h2>{{ translate("functionCall") }}</h2>
    <div class="quark-cell" @click="handleTextClick">
      <div>Text {{ translate("textTip") }}</div>
      <quark-icon-arrow-right size="20" name="right"></quark-icon-arrow-right>
    </div>
    <div class="quark-cell" @click="handlehorizontalLoadingClick">
      <div>Text {{ translate("horizontalLoadingTip") }}</div>
      <quark-icon-arrow-right size="20" name="right"></quark-icon-arrow-right>
    </div>
    <div class="quark-cell" @click="handleSuccessClick">
      <div>Success {{ translate("successTip") }}</div>
      <quark-icon-arrow-right size="20" name="right"></quark-icon-arrow-right>
    </div>
    <div class="quark-cell" @click="handleErrorClick">
      <div>Error {{ translate("errorTip") }}</div>
      <quark-icon-arrow-right size="20" name="right"></quark-icon-arrow-right>
    </div>
    <div class="quark-cell" @click="handleWarningClick">
      <div>Warning {{ translate("warningTip") }}</div>
      <quark-icon-arrow-right size="20" name="right"></quark-icon-arrow-right>
    </div>
    <div class="quark-cell" @click="handleLoadingClick">
      <div>Loading {{ translate("loadingTip") }}</div>
      <quark-icon-arrow-right size="20" name="right"></quark-icon-arrow-right>
    </div>
    <h2>{{ translate("position") }}</h2>
    <div class="quark-cell" @click="handleTextTopClick">
      <div>{{ translate("top") }}</div>
      <quark-icon-arrow-right size="20" name="right"></quark-icon-arrow-right>
    </div>
    <div class="quark-cell" @click="handleTextBottomClick">
      <div>{{ translate("bottom") }}</div>
      <quark-icon-arrow-right size="20" name="right"></quark-icon-arrow-right>
    </div>
    <h2>{{ translate("closeCallback") }}</h2>
    <div class="quark-cell" @click="cbClick">
      <div>{{ translate("closeCallback") }}</div>
      <quark-icon-arrow-right size="20" name="right"></quark-icon-arrow-right>
    </div>
  </div>
</template>

<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("toast");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onBeforeMount } from "vue";
import QuarkToast from "./index.tsx";
import "@quarkd/icons/lib/arrow-right";

export default createDemo({
  setup() {
    const tag = ref(null);
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          top: "????????????",
          bottom: "????????????",
          position: "Toast ????????????",
          functionCall: "???????????????",
          closeCallback: "?????????????????????",
          textTip: "????????????",
          horizontalLoadingTip: "???????????????????????????",
          successTip: "????????????",
          errorTip: "????????????",
          warningTip: "????????????",
          loadingTip: "????????????",
          networkTip: "?????????????????????????????????",
          executeCallback: "??????????????????",
          close: "???????????????",
        },
        "en-US": {
          top: "Show on top",
          bottom: "Show on bottom",
          position: "Toast position",
          functionCall: "Function Call",
          closeCallback: "Close Callback",
          textTip: "Text Tip",
          successTip: "Success Tip",
          errorTip: "Error Tip",
          warningTip: "Warning Tip",
          loadingTip: "Loading Tip",
          networkTip: "Network failed, please try again later~",
          executeCallback: "Execute Callback",
          close: "Close after three seconds",
        },
      });
    });

    const cbClick = () => {
      QuarkToast.text(`${translate("networkTip")}`, {
        close: () => QuarkToast.text(`${translate("executeCallback")}`),
      });
    };

    const handleTextClick = () => {
      QuarkToast.text(`${translate("networkTip")}`);
    };
    const handleTextTopClick = () => {
      QuarkToast.text(`${translate("networkTip")}`, {
        position: "top",
      });
    };
    const handleTextBottomClick = () => {
      QuarkToast.text(`${translate("networkTip")}`, {
        position: "bottom",
      });
    };

    const handlehorizontalLoadingClick = () => {
      QuarkToast.loading(`${translate("loadingTip")}`, {
        loadingIconDirection: "horizontal",
      });
    };

    const handleSuccessClick = () => {
      QuarkToast.success(`${translate("successTip")}`);
    };

    const handleErrorClick = () => {
      QuarkToast.error(`${translate("errorTip")}`);
    };

    const handleWarningClick = () => {
      QuarkToast.warning(`${translate("warningTip")}`);
    };

    const handleLoadingClick = () => {
      const toast = QuarkToast.loading(`${translate("close")}`, {
        duration: 0,
        size: 40,
      });
      setTimeout(() => {
        toast.hide();
      }, 3000);
    };

    // const tagClick = () => {
    //   tag.value.show = true;
    // };

    return {
      handleTextTopClick,
      handleTextBottomClick,
      tag,
      cbClick,
      handleTextClick,
      handlehorizontalLoadingClick,
      handleSuccessClick,
      handleErrorClick,
      handleWarningClick,
      handleLoadingClick,
      translate,
    };
  },
});
</script>
<style src="./demo.scss"></style>
