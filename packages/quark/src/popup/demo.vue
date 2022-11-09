<template>
  <div class="demo no-padding popup-demo">
    <h2>{{ translate("position") }}</h2>
    <quark-cell-group>
      <quark-cell
        islink
        type="primary"
        @click="showTopPopup"
        :title="translate('topPopup')"
      ></quark-cell>
      <quark-cell
        islink
        type="primary"
        @click="showPopup('bottom')"
        :title="translate('bottomPopup')"
      ></quark-cell>
      <quark-cell
        islink
        type="primary"
        @click="showPopup('left')"
        :title="translate('leftPopup')"
      ></quark-cell>
      <quark-cell
        islink
        type="primary"
        @click="showPopup('right')"
        :title="translate('rightPopup')"
      ></quark-cell>
      <quark-cell
        islink
        type="primary"
        @click="showPopup('center')"
        :title="translate('centerPopup')"
      ></quark-cell>
    </quark-cell-group>
    <quark-popup id="popup-top" position="top" :open="open">
      <div>{{ translate("firstLine") }}</div>
      <div>{{ translate("secondLine") }}</div>
      <div>{{ translate("thirdLine") }}</div>
      <div>{{ translate("forthLine") }}</div>
      <div>{{ translate("fifthLine") }}</div>
      <div>{{ translate("sixthLine") }}</div>
    </quark-popup>
    <quark-popup id="popup-left" position="left">
      <div>{{ translate("firstLine") }}</div>
      <div>{{ translate("secondLine") }}</div>
      <div>{{ translate("thirdLine") }}</div>
      <div>{{ translate("forthLine") }}</div>
      <div>{{ translate("fifthLine") }}</div>
      <div>{{ translate("sixthLine") }}</div>
    </quark-popup>
    <quark-popup id="popup-bottom" position="bottom">
      <div>{{ translate("firstLine") }}</div>
      <div>{{ translate("secondLine") }}</div>
      <div>{{ translate("thirdLine") }}</div>
      <div>{{ translate("forthLine") }}</div>
      <div>{{ translate("fifthLine") }}</div>
      <div>{{ translate("sixthLine") }}</div>
    </quark-popup>
    <quark-popup id="popup-right" position="right">
      <div>{{ translate("firstLine") }}</div>
      <div>{{ translate("secondLine") }}</div>
      <div>{{ translate("thirdLine") }}</div>
      <div>{{ translate("forthLine") }}</div>
      <div>{{ translate("fifthLine") }}</div>
      <div>{{ translate("sixthLine") }}</div>
    </quark-popup>
    <quark-popup id="popup-center" position="center">
      <div>{{ translate("firstLine") }}</div>
      <div>{{ translate("secondLine") }}</div>
      <div>{{ translate("thirdLine") }}</div>
    </quark-popup>
    <h2>{{ translate("style") }}</h2>
    <quark-cell-group>
      <quark-cell
        islink
        type="primary"
        @click="showPopup('round')"
        :title="translate('roundStyle')"
      ></quark-cell>
      <quark-cell
        islink
        @click="showPopup('closeable')"
        :title="translate('showCloseTitle')"
      ></quark-cell>
    </quark-cell-group>
    <quark-popup id="popup-round" position="bottom" round>
      <div style="margin-top: 20px" @click="contentClick">
        {{ translate("closePopup") }}
      </div>
      <div>{{ translate("firstLine") }}</div>
      <div>{{ translate("secondLine") }}</div>
      <div>{{ translate("thirdLine") }}</div>
      <div>{{ translate("forthLine") }}</div>
      <div>{{ translate("fifthLine") }}</div>
      <div>{{ translate("sixthLine") }}</div>
    </quark-popup>

    <quark-popup id="popup-closeable" position="bottom" closeable>
      <div>{{ translate("firstLine") }}</div>
      <div>{{ translate("secondLine") }}</div>
      <div>{{ translate("thirdLine") }}</div>
      <div>{{ translate("forthLine") }}</div>
      <div>{{ translate("fifthLine") }}</div>
      <div>{{ translate("sixthLine") }}</div>
    </quark-popup>
  </div>
</template>

<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("popup");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onMounted, onBeforeMount } from "vue";
import QuarkToast from "../toast/index.js";

export default createDemo({
  setup() {
    const open = ref(false);
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          position: "不同位置",
          topPopup: "顶部弹框",
          bottomPopup: "底部弹窗",
          leftPopup: "左侧弹框",
          rightPopup: "右侧弹窗",
          centerPopup: "居中显示",
          firstLine: "第一行",
          secondLine: "第二行",
          thirdLine: "第三行",
          forthLine: "第四行",
          fifthLine: "第五行",
          sixthLine: "第六行",
          style: "样式",
          roundStyle: "圆角样式",
          showCloseTitle: "显示关闭按钮",
          closePopup: "点我关闭弹框",
          tip: "弹层消失回调",
        },
        "en-US": {
          position: "Different Position",
          topPopup: "Top Popup",
          bottomPopup: "Bottom Popup",
          leftPopup: "Left Popup",
          rightPopup: "Right Popup",
          centerPopup: "Center Popup",
          firstLine: "First Line",
          secondLine: "Second Line",
          thirdLine: "Third Line",
          forthLine: "Forth Line",
          fifthLine: "Fifth Line",
          sixthLine: "Six Line",
          style: "Style",
          roundStyle: "Rounded Style",
          showCloseTitle: "Show Close Title",
          closePopup: "Close Popup",
          tip: "Popup layer disappears callback",
        },
      });
    });
    onMounted(() => {
      document.getElementById("popup-top").addEventListener("closed", () => {
        open.value = false;
        QuarkToast.text(`${translate("tip")}`);
      });
    });
    const showTopPopup = () => {
      open.value = true;
    };
    const closed = () => {
      QuarkToast.text(`${translate("tip")}`);
    };
    const contentClick = () => {
      document.getElementById("popup-round").open = false;
    };
    const showPopup = (position) => {
      if (
        ~[
          "bottom",
          "left",
          "right",
          "center",
          "round",
          "closeable",
          "max-content",
        ].indexOf(position)
      ) {
        document.getElementById(`popup-${position}`).open = true;
      }
    };
    return {
      open,
      showTopPopup,
      closed,
      contentClick,
      showPopup,
      translate,
    };
  },
});
</script>

<style src="./demo.scss"></style>
