<template>
  <div class="demo">
    <h2>{{ translate("tipsPosition") }}</h2>
    <div class="quark-tip">
      <quark-tooltip
        placement="top"
        :tips="translate('tips')"
        scrollhidden
        :open="data.top"
        @click="open('top')"
        @close="close('top')"
      >
        <div>{{ translate("topPosition") }}</div>
      </quark-tooltip>
    </div>

    <div class="quark-tip">
      <quark-tooltip
        placement="topleft"
        :tips="translate('tips')"
        scrollhidden
        :open="data.topleft"
        @click="open('topleft')"
        @close="close('topleft')"
      >
        <div>{{ translate("topLeftPosition") }}</div>
      </quark-tooltip>
    </div>

    <div class="quark-tip">
      <quark-tooltip
        placement="topright"
        :tips="translate('tips')"
        scrollhidden
        :open="data.topright"
        @click="open('topright')"
        @close="close('topright')"
      >
        <div>{{ translate("topRightPosition") }}</div>
      </quark-tooltip>
    </div>

    <!-- <div class="tips">
      <quark-tooltip placement="bottom" autoclose scrollhidden tips="气泡文字" :open="bottom" @click="open('bottom')" @close="close('bottom')">
        <div>bottom 位置</div>
      </quark-tooltip>
    </div>

    <div class="tips">
      <quark-tooltip  placement="bottomright" autoclose scrollhidden tips="气泡文字" :open="bottomright" @click="open('bottomright')" @close="close('bottomright')">
        <div>bottom right 位置</div>
      </quark-tooltip>
    </div>
    <div class="tips">
      <quark-tooltip  placement="bottomleft" autoclose scrollhidden tips="气泡文字" :open="bottomleft" @click="open('bottomleft')" @close="close('bottomleft')">
        <div>bottom left 位置</div>
      </quark-tooltip>
    </div> -->

    <!-- <div class="tips">
      <quark-tooltip  placement="left" autoclose scrollhidden tips="气泡文字" :open="left" @click="open('left')" @close="close('left')">
        <div class="left">left 位置</div>
      </quark-tooltip>
    </div>

    <div class="tips">
      <quark-tooltip  placement="lefttop" autoclose scrollhidden tips="气泡文字" :open="lefttop" @click="open('lefttop')" @close="close('lefttop')">
        <div class="left">left top 位置</div>
      </quark-tooltip>
    </div>

    <div class="tips">
      <quark-tooltip  placement="leftbottom" autoclose scrollhidden tips="气泡文字" :open="leftbottom" @click="open('leftbottom')" @close="close('leftbottom')">
        <div class="left">left bottom 位置</div>
      </quark-tooltip>
    </div>

    <div class="tips">
      <quark-tooltip  placement="right" autoclose scrollhidden tips="气泡文字" :open="right" @click="open('right')" @close="close('right')">
        <div class="left">right 位置</div>
      </quark-tooltip>
    </div>

    <div class="tips">
      <quark-tooltip  placement="righttop" autoclose scrollhidden tips="气泡文字" :open="righttop" @click="open('righttop')"  @close="close('righttop')">
        <div class="left">right top 位置</div>
      </quark-tooltip>
    </div>

    <div class="tips">
      <quark-tooltip  placement="rightbottom" autoclose scrollhidden tips="气泡文字"  :open="rightbottom" @click="open('rightbottom')" @close="close('rightbottom')">
        <div class="left">right bottom 位置</div>
      </quark-tooltip>
    </div>
     -->
    <h2>{{ translate("showCloseButton") }}</h2>
    <div class="quark-tip">
      <quark-tooltip
        placement="top"
        closeable
        scrollhidden
        :tips="translate('tips')"
        :open="data.topclose"
        @click="open('topclose')"
        @close="close('topclose')"
      >
        <div>{{ translate("topPosition") }}</div>
      </quark-tooltip>
    </div>

    <h2>{{ translate("setAutoOffTime") }}</h2>
    <div class="quark-tip">
      <quark-tooltip
        placement="top"
        autoclose
        opentime="5000"
        scrollhidden
        :tips="translate('tips')"
        :open="data.autoclose"
        @click="open('autoclose')"
        @close="close('autoclose')"
      >
        <div>{{ translate("topPosition") }}</div>
      </quark-tooltip>
    </div>

    <h2>{{ translate("customStyle:") }}</h2>
    <div class="quark-tip">
      <quark-tooltip
        placement="top"
        autoclose
        closeable
        opentime="5000"
        scrollhidden
        :tips="translate('tips')"
        :open="data.customstyle"
        @click="open('customstyle')"
        @close="close('customstyle')"
        class="custom-tips"
      >
        <div>{{ translate("topPosition") }}</div>
      </quark-tooltip>
    </div>
  </div>
</template>

<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("tooltip");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onBeforeMount } from "vue";

export default createDemo({
  setup() {
    const data = ref({
      top: false,
      topleft: false,
      topright: false,
      bottom: false,
      bottomleft: false,
      bottomright: false,
      left: false,
      lefttop: false,
      leftbottom: false,
      right: false,
      righttop: false,
      rightbottom: false,
      topclose: false,
      autoclose: false,
      customstyle: false,
    });
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          tipsPosition: "Tips 位置（所有支持的位置参见placement 参数）",
          topPosition: "top 位置",
          topLeftPosition: "top left 位置",
          topRightPosition: "top right 位置",
          tips: "气泡文字",
          showCloseButton: "显示关闭按钮",
          setAutoOffTime: "设置自动关闭时间",
          customStyle: "自定义样式",
        },
        "en-US": {
          tipsPosition:
            "Tips Position(See placement parameter for all supported positions)",
          topPosition: "Top Position",
          topLeftPosition: "Top Left Position",
          topRightPosition: "Top Right Position",
          tips: "Bubble Text",
          shoeCloseButton: "Show Close Button",
          setAutoOffTime: "Set auto-off time",
          customStyle: "Custom Style",
        },
      });
    });
    const open = (placement) => {
      data.value[placement] = true;
    };
    const close = (placement) => {
      data.value[placement] = false;
    };
    return {
      data,
      open,
      close,
      translate,
    };
  },
});
</script>

<style src="./demo.scss"></style>
