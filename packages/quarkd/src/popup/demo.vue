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
        @click="showBottomPopup"
        :title="translate('bottomPopup')"
      ></quark-cell>
      <quark-cell
        islink
        type="primary"
        @click="showLeftPopup"
        :title="translate('leftPopup')"
      ></quark-cell>
      <quark-cell
        islink
        type="primary"
        @click="showRightPopup"
        :title="translate('rightPopup')"
      ></quark-cell>
      <quark-cell
        islink
        type="primary"
        @click="showCenterPopup"
        :title="translate('centerPopup')"
      ></quark-cell>
    </quark-cell-group>
    <quark-popup
      id="popup-top"
      position="top"
      :open="openTop"
      @close="closeTopPopup"
      @closed="closedTopPopup"
      @opened="openedTopPopup"
    >
      <div>{{ translate("firstLine") }}</div>
      <div>{{ translate("secondLine") }}</div>
      <div>{{ translate("thirdLine") }}</div>
      <div>{{ translate("forthLine") }}</div>
      <div>{{ translate("fifthLine") }}</div>
      <div>{{ translate("sixthLine") }}</div>
    </quark-popup>
    <quark-popup
      id="popup-left"
      position="left"
      :open="openLeft"
      @close="closeLeftPopup"
    >
      <div>{{ translate("firstLine") }}</div>
      <div>{{ translate("secondLine") }}</div>
      <div>{{ translate("thirdLine") }}</div>
      <div>{{ translate("forthLine") }}</div>
      <div>{{ translate("fifthLine") }}</div>
      <div>{{ translate("sixthLine") }}</div>
    </quark-popup>
    <quark-popup
      id="popup-bottom"
      position="bottom"
      :open="openBottom"
      @close="closeBottomPopup"
    >
      <div>{{ translate("firstLine") }}</div>
      <div>{{ translate("secondLine") }}</div>
      <div>{{ translate("thirdLine") }}</div>
      <div>{{ translate("forthLine") }}</div>
      <div>{{ translate("fifthLine") }}</div>
      <div>{{ translate("sixthLine") }}</div>
    </quark-popup>
    <quark-popup
      id="popup-right"
      position="right"
      :open="openRight"
      @close="closeRightPopup"
    >
      <div>{{ translate("firstLine") }}</div>
      <div>{{ translate("secondLine") }}</div>
      <div>{{ translate("thirdLine") }}</div>
      <div>{{ translate("forthLine") }}</div>
      <div>{{ translate("fifthLine") }}</div>
      <div>{{ translate("sixthLine") }}</div>
    </quark-popup>
    <quark-popup
      id="popup-center"
      position="center"
      :open="openCenter"
      @close="closeCenterPopup"
    >
      <div>{{ translate("firstLine") }}</div>
      <div>{{ translate("secondLine") }}</div>
      <div>{{ translate("thirdLine") }}</div>
    </quark-popup>
    <h2>{{ translate("style") }}</h2>
    <quark-cell-group>
      <quark-cell
        islink
        type="primary"
        @click="showRoundPopup"
        :title="translate('roundStyle')"
      ></quark-cell>
      <quark-cell
        islink
        @click="showCloseablePopup"
        :title="translate('showCloseTitle')"
      ></quark-cell>
    </quark-cell-group>
    <quark-popup
      id="popup-round"
      position="bottom"
      round
      :open="openRound"
      @close="closeRoundPopup"
    >
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

    <quark-popup
      id="popup-closeable"
      position="bottom"
      closeable
      round
      :open="openCloseable"
      @close="closeCloseablePopup"
    >
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
    const openCenter = ref(false);
    const openTop = ref(false);
    const openBottom = ref(false);
    const openLeft = ref(false);
    const openRight = ref(false);
    const openRound = ref(false);
    const openCloseable = ref(false);
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
      document.getElementById("popup-top").addEventListener("close", () => {
        open.value = false;
        QuarkToast.text(`${translate("tip")}`);
      });
    });
    const showTopPopup = () => {
      openTop.value = true;
    };
    const showLeftPopup = () => {
      openLeft.value = true;
    };
    const showRightPopup = () => {
      openRight.value = true;
    };
    const showBottomPopup = () => {
      openBottom.value = true;
    };
    const showCenterPopup = () => {
      openCenter.value = true;
    };
    const showRoundPopup = () => {
      openRound.value = true;
    };
    const showCloseablePopup = () => {
      openCloseable.value = true;
    };
    const closeTopPopup = () => {
      openTop.value = false;
    };
    const closedTopPopup = () => {
      console.log("closedTopPopup");
    };
    const openedTopPopup = () => {
      console.log("openedTopPopup");
    };
    const closeLeftPopup = () => {
      openLeft.value = false;
    };
    const closeRightPopup = () => {
      openRight.value = false;
    };
    const closeBottomPopup = () => {
      openBottom.value = false;
    };
    const closeCenterPopup = () => {
      openCenter.value = false;
    };
    const closeRoundPopup = () => {
      openRound.value = false;
    };
    const closeCloseablePopup = () => {
      openCloseable.value = false;
    };
    const contentClick = () => {
      openRound.value = false;
    };
    return {
      openCenter,
      openTop,
      openBottom,
      openLeft,
      openRight,
      openRound,
      openCloseable,
      showTopPopup,
      showLeftPopup,
      showRightPopup,
      showBottomPopup,
      showCenterPopup,
      showRoundPopup,
      showCloseablePopup,
      closeTopPopup,
      closedTopPopup,
      openedTopPopup,
      closeLeftPopup,
      closeRightPopup,
      closeBottomPopup,
      closeCenterPopup,
      closeRoundPopup,
      closeCloseablePopup,
      contentClick,
      translate,
    };
  },
});
</script>

<style src="./demo.scss"></style>
