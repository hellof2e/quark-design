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

    <h2>{{ translate("title.light") }}</h2>
    <div class="demo-buttons">
      <quark-button light type="primary">{{
        translate("type.primary")
      }}</quark-button>
      <quark-button light type="success">{{
        translate("type.success")
      }}</quark-button>
    </div>

    <h2>{{ translate("title.size") }}</h2>
    <div class="demo-buttons">
      <quark-button type="primary" size="large">{{
        translate("size.large")
      }}</quark-button>
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
      <!-- <quark-button type="success" disabled>{{
        translate("title.disabled")
      }}</quark-button> -->
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
    <div class="flex">
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
            type: "按钮类型",
            shape: "按钮形状",
            plain: "朴素按钮",
            light: "浅色按钮",
            disabled: "禁用状态",
            loading: "加载状态",
            icon: "图标按钮",
            size: "按钮尺寸",
          },
          type: {
            default: "默认按钮",
            primary: "主要按钮",
            success: "成功按钮",
            danger: "危险按钮",
            warning: "警告按钮",
          },
          shape: {
            square: "方形按钮",
            round: "小圆角按钮",
          },
          size: {
            large: "特大尺寸",
            big: "大号尺寸",
            normal: "普通尺寸",
            small: "小号尺寸",
          },
          loading: "加载中...",
          click: "点我!",
          like: "喜欢",
          name: "张三",
        },
        "en-US": {
          title: {
            type: "Button Type",
            shape: "Button Shape",
            plain: "Plain Button",
            light: "Light Button",
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
            large: "Large",
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
