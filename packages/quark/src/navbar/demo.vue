<template>
  <div class="demo no-padding navbar-demo">
    <h2>{{ translate("basic") }}</h2>
    <quark-navbar :title="translate('title')"></quark-navbar>
    <quark-navbar
      :title="translate('leftTitle')"
      closehide="true"
      class="left"
    ></quark-navbar>

    <h2>{{ translate("background") }}</h2>
    <quark-navbar
      class="bg"
      :title="translate('title')"
      :right="translate('rightTitle')"
      safearea="true"
    ></quark-navbar>
    <quark-navbar
      class="bg2"
      :title="translate('iconTitle')"
      :right="translate('rightTitle')"
      iconsize="18"
    ></quark-navbar>

    <h2>{{ translate("left") }}</h2>
    <quark-navbar :title="translate('title')">
      <span slot="left" class="left-wrap">
        <quark-icon-user size="24" name="user" />
      </span>
    </quark-navbar>
    <quark-navbar :title="translate('title')">
      <span slot="left">{{ translate("return") }}</span>
    </quark-navbar>

    <h2>{{ translate("right") }}</h2>
    <quark-navbar :title="translate('title')">
      <quark-icon-arrow-right size="20" name="user" slot="right" />
    </quark-navbar>
    <quark-navbar
      :right="translate('rightTitle')"
      :title="translate('title')"
    ></quark-navbar>
    <h2>{{ translate("event") }}</h2>
    <quark-navbar
      :right="translate('rightTitle')"
      :title="translate('close')"
      @leftclick="onLeftClick"
      @rightclick="onRightClick"
      @close="close"
    ></quark-navbar>
  </div>
</template>

<script>
import { onBeforeMount } from "vue";
import Toast from "../toast";
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("navbar");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import "@quarkd/icons/lib/arrow-right";
import "@quarkd/icons/lib/user";

export default createDemo({
  setup() {
    const onLeftClick = () => {
      Toast.text(`${translate("clicked")}`);
    };

    const onRightClick = () => {
      Toast.text(`${translate("clicked")}`);
    };

    const close = () => {
      Toast.text(`${translate("closed")}`);
    };
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "????????????",
          background: "??????/??????????????????",
          left: "?????????????????????",
          right: "?????????????????????",
          title: "????????????",
          leftTitle: "?????????",
          rightTitle: "??????",
          iconTitle: "????????????",
          event: "????????????",
          close: "????????????????????????",
          return: "??????",
          clicked: "??????",
          closed: "??????",
        },
        "en-US": {
          basic: "Basic Usage",
          background: "Background Color",
          left: "Custom Left Button",
          right: "Csutom Right Button",
          title: "Page Title",
          leftTitle: "Left Title",
          rightTitle: "Share",
          iconTitle: "Small Icon",
          event: "Event Binding",
          close: "Click event and close",
          return: "Return",
          clicked: "Clicked",
          closed: "Close",
        },
      });
    });
    return {
      onLeftClick,
      onRightClick,
      close,
      translate,
    };
  },
});
</script>
<style src="./demo.scss"></style>
