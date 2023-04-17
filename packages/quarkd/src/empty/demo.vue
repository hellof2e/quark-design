<template>
  <div class="demo">
    <h2>{{ translate("basic") }}</h2>
    <quark-empty />

    <h2>{{ translate("desc") }}</h2>
    <quark-empty
      image="https://m.hellobike.com/resource/helloyun/13459/HZco-IyfBe.png"
      :title="translate('title')"
      :desc="translate('order')"
    />

    <h2>{{ translate("image") }}</h2>
    <quark-empty
      image="https://m.hellobike.com/resource/helloyun/13459/UxNf7LpJ2G.png"
    />

    <h2>{{ translate("bottom") }}</h2>
    <quark-empty>
      <div class="outer" slot="footer">{{ translate("return") }} 🎉🎉🎉</div>
    </quark-empty>
  </div>
</template>

<script>
import { onBeforeMount } from "vue";
import { createComponent } from "@/utils/create";
import { useTranslate } from "@/sites/assets/util/useTranslate";
const { createDemo, translate } = createComponent("empty");

export default createDemo({
  setup() {
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "基础用法",
          desc: "描述文字",
          image: "自定义图片",
          bottom: "自定义底部",
          title: "没有历史订单",
          order: "快去下一单吧!",
          return: "自定义底部",
          button: "去下单",
        },
        "en-US": {
          basic: "Basic Usage",
          desc: "Description",
          image: "Custom Image",
          bottom: "Csutom Bottom",
          title: "No Order History",
          order: "Go and Order!",
          return: "Csutom Bottom",
          button: "Go to Order",
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
