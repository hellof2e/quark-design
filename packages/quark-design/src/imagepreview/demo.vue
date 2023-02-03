<template>
  <div style="height: 100%">
    <div class="demo dialog-demo">
      <h2>{{ translate("title.basic") }}</h2>
      <quark-cell-group>
        <quark-cell
          type="primary"
          :title="translate('basic.preview')"
          isLink
          @click="baseUse"
        ></quark-cell>
      </quark-cell-group>
      <h2>{{ translate("title.configuration") }}</h2>
      <quark-cell-group>
        <quark-cell
          type="primary"
          :title="translate('configuration.initial')"
          isLink
          @click="baseUse2"
        ></quark-cell>
        <quark-cell
          :title="translate('configuration.sliding')"
          isLink
          @click="swipeChange"
        ></quark-cell>
        <quark-cell
          type="primary"
          :title="translate('configuration.close')"
          isLink
          @click="baseUse3"
        ></quark-cell>
      </quark-cell-group>
      <h2>{{ translate("title.props") }}</h2>
      <quark-cell-group>
        <quark-cell
          :title="translate('props.label')"
          isLink
          @click="componentsClick"
        ></quark-cell>
        <quark-cell
          :title="translate('props.nav')"
          isLink
          @click="componentsClick2"
        ></quark-cell>
      </quark-cell-group>
    </div>
    <quark-image-preview ref="preview1" :open="data.open1" />
    <quark-image-preview ref="preview2" :open="data.open2">
      <p class="my-indicator" slot="indicator">
        {{ translate("page1") }} {{ data.index + 1 }} {{ translate("page2") }}
      </p>
    </quark-image-preview>
  </div>
</template>

<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("imagePreview");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onBeforeMount, onMounted } from "vue";
import { onBeforeRouteLeave } from "vue-router";
import imagePreview from "./index.tsx";
import Toast from "../toast/index";

export default createDemo({
  setup() {
    const data = ref({
      index: 0,
      open1: false,
      open2: false,
    });
    const preview1 = ref(null);
    const preview2 = ref(null);
    const baseUrls = [
      "https://m.hellobike.com/resource/helloyun/15697/iWS-0QI6QV.png",
      "https://m.hellobike.com/resource/helloyun/15697/1V_2oJv02t.png",
      "https://m.hellobike.com/resource/helloyun/15697/Q6t6B_noNetWork.png",
    ];

    const baseUse = () => {
      imagePreview({
        images: baseUrls,
      });
    };

    const baseUse2 = () => {
      imagePreview({
        startPosition: 2,
        images: baseUrls,
      });
    };

    const baseUse3 = () => {
      imagePreview({
        startPosition: 1,
        images: baseUrls,
        close: (index) =>
          Toast.text(`${translate("dialog.close")}${index + 1}`),
      });
    };

    const swipeChange = () => {
      imagePreview({
        startPosition: 1,
        images: baseUrls,
        change: (index) =>
          Toast.text(`${translate("dialog.move")}${index + 1}`),
      });
    };

    const componentsClick = () => {
      data.value.open1 = true;
    };

    const componentsClick2 = () => {
      data.value.open2 = true;
    };
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          title: {
            basic: "基础用法",
            configuration: "传入配置项",
            props: "组件式调用",
          },
          basic: {
            preview: "预览图片",
          },
          configuration: {
            initial: "指定初始位置",
            sliding: "监听滑动事件",
            close: "监听关闭事件",
          },
          props: {
            label: "标签式调用",
            nav: "自定义导航",
          },
          page1: "第",
          page2: "页",
          dialog: {
            move: "当前移动位置",
            close: "当前关闭位置",
          },
        },
        "en-US": {
          title: {
            basic: "Basic Usage",
            configuration: "Configuration Items",
            props: "Component Call",
          },
          basic: {
            preview: "Image Preview",
          },
          configuration: {
            initial: "Initial Position",
            sliding: "Sliding Event",
            close: "Close Event",
          },
          props: {
            label: "Label Call",
            nav: "Custom Navigation",
          },
          page1: "Page",
          page2: "",
          dialog: {
            move: "Current Mobile Location",
            close: "Current Closed Position",
          },
        },
      });
    });
    onMounted(() => {
      preview2.value.setData({
        images: baseUrls,
        change: (index) => (data.value.index = index),
        close: () => (data.value.open2 = false),
      });
      preview1.value.setData({
        images: baseUrls,
        startPosition: 2,
        change: (index) =>
          Toast.text(`${translate("dialog.move")}${index + 1}`),
        close: () => (data.value.open1 = false),
      });
    });
    onBeforeRouteLeave(() => {
      const nodes = document.querySelectorAll("quark-image-preview ");
      nodes.forEach((i) => (i.open = false));
    });
    return {
      data,
      baseUse,
      baseUse2,
      baseUse3,
      swipeChange,
      componentsClick,
      componentsClick2,
      translate,
      preview1,
      preview2,
    };
  },
});
</script>
<style src="./demo.scss"></style>
