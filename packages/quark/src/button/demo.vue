<template>
  <div class="demo button-demo">
    <h2>{{ translate("title.type") }}</h2>
    <div class="demo-buttons">
      <quark-button>{{ translate("type.default") }}</quark-button>
      <quark-button type="primary">{{
        translate("type.primary")
      }}</quark-button>
      <quark-button type="success">{{
        translate("type.success")
      }}</quark-button>
      <quark-button type="danger">{{ translate("type.danger") }}</quark-button>
      <quark-button type="warning">{{
        translate("type.warning")
      }}</quark-button>
    </div>

    <h2>{{ translate("title.plain") }}</h2>
    <div class="demo-buttons">
      <quark-button plain type="primary">{{
        translate("type.primary")
      }}</quark-button>
      <quark-button plain type="success">{{
        translate("type.success")
      }}</quark-button>
    </div>

    <h2>{{ translate("title.size") }}</h2>
    <div class="demo-buttons">
      <quark-button type="primary" size="big">{{
        translate("size.big")
      }}</quark-button>
      <quark-button type="primary">{{ translate("size.normal") }}</quark-button>
      <quark-button type="primary" size="small">{{
        translate("size.small")
      }}</quark-button>
    </div>

    <h2>{{ translate("title.disabled") }}</h2>
    <div class="demo-buttons">
      <quark-button type="primary" disabled>{{
        translate("title.disabled")
      }}</quark-button>
      <quark-button type="success" disabled>{{
        translate("title.disabled")
      }}</quark-button>
      <quark-button disabled>{{ translate("title.disabled") }}</quark-button>
    </div>

    <h2>{{ translate("title.shape") }}</h2>
    <div class="demo-buttons">
      <quark-button shape="square" type="danger">{{
        translate("shape.square")
      }}</quark-button>
      <quark-button style="--button-border-radius: 6px" type="primary">{{
        translate("shape.round")
      }}</quark-button>
    </div>

    <h2>{{ translate("title.loading") }}</h2>
    <div class="demo-buttons flex">
      <quark-button loading loadtype="circular" type="danger">{{
        translate("loading")
      }}</quark-button>
      <quark-button loading type="warning">{{
        translate("loading")
      }}</quark-button>
      <quark-button
        @click="changeLoading"
        :loading="isLoading"
        type="success"
        >{{ translate("click") }}</quark-button
      >
    </div>

    <h2>{{ translate("title.icon") }}</h2>
    <div class="demo-buttons">
      <quark-button
        type="danger"
        icon="https://m.hellobike.com/resource/helloyun/16682/Agnve_tel%20(1).png"
        >{{ translate("like") }}</quark-button
      >
      <quark-button
        type="primary"
        icon="https://m.hellobike.com/resource/helloyun/16682/_pay6_setting%20(1).png"
        >{{ translate("name") }}</quark-button
      >
    </div>
  </div>
</template>
<script>
import { onBeforeMount } from "vue";
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("button");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref } from "vue";

export default createDemo({
  setup() {
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          title: {
            type: "????????????",
            shape: "????????????",
            plain: "????????????",
            disabled: "????????????",
            loading: "????????????",
            icon: "????????????",
            size: "????????????",
          },
          type: {
            default: "????????????",
            primary: "????????????",
            success: "????????????",
            danger: "????????????",
            warning: "????????????",
          },
          shape: {
            square: "????????????",
            round: "???????????????",
          },
          size: {
            big: "????????????",
            normal: "????????????",
            small: "????????????",
          },
          loading: "?????????...",
          click: "??????!",
          like: "??????",
          name: "??????",
        },
        "en-US": {
          title: {
            type: "Button Type",
            shape: "Button Shape",
            plain: "Plain Button",
            disabled: "Disabled",
            loading: "Loading",
            icon: "Icon Button",
            size: "Button Size",
          },
          type: {
            default: "Default",
            primary: "Primary",
            success: "Success",
            danger: "Danger",
            warning: "Warning",
          },
          shape: {
            square: "Square",
            round: "Round",
          },
          size: {
            big: "Big",
            normal: "Normal",
            small: "Small",
          },
          loading: "Loading...",
          click: "Click Me!",
          like: "Like",
          name: "Zhang San",
        },
      });
    });
    const isLoading = ref(false);

    const changeLoading = () => {
      isLoading.value = true;
      setTimeout(() => {
        isLoading.value = false;
      }, 2000);
    };

    return {
      translate,
      isLoading,
      changeLoading,
    };
  },
});
</script>
<style src="./demo.scss"></style>
