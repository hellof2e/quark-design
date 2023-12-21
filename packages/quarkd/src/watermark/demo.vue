<template>
  <div class="demo">
    <quark-watermark
      ref="watermark"
      :text="text"
      class="demo-watermark"
      :image="image"
      :width="width"
      :height="height"
      :rotate="rotate"
      :gapx="gapx"
      :gapy="gapy"
    />
    <h2>{{ translate("title.default") }}</h2>
    <div class="demo-buttons">
      <quark-button type="primary" @click="changeText">{{
        translate("button.normal")
      }}</quark-button>
      <quark-button type="primary" @click="changeImage">{{
        translate("button.image")
      }}</quark-button>
      <quark-button type="primary" @click="changeGap">{{
        translate("button.gap")
      }}</quark-button>
      <quark-button type="primary" @click="changeMultiText">{{
        translate("button.multiLine")
      }}</quark-button>
    </div>
  </div>
</template>
<script>
import { onBeforeMount } from "vue";
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("watermark");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref } from "vue";

export default createDemo({
  setup() {
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          title: {
            default: "基础用法",
          },
          button: {
            normal: "文字水印",
            multiLine: "多行水印",
            image: "图片水印",
            gap: "缩小间距",
          },
        },
        "en-US": {
          title: {
            default: "basic usage",
          },
          button: {
            normal: "Text Watermark",
            image: "Image Watermark",
            multiLine: "multiLine Watermark",
            gap: "change gap",
          },
        },
      });
    });

    const watermark = ref(null);

    const image = ref("");

    const text = ref("quark-design");

    const width = ref(120);

    const height = ref(64);

    const rotate = ref(-22);

    const gapx = ref(24);

    const gapy = ref(48);

    const changeText = () => {
      height.value = "64";
      width.value = "120";
      rotate.value = "-22";
      image.value = "";
      if (watermark.value) watermark.value.setText("quark-design");
    };

    const changeImage = () => {
      height.value = 36;
      width.value = 100;
      rotate.value = -12;
      image.value =
        "https://m.hellobike.com/resource/helloyun/16682/o7HKA_image.png?x-oss-process=image/quality,q_80";
    };

    const changeMultiText = () => {
      height.value = 64;
      width.value = 120;
      rotate.value = -22;
      image.value = "";
      if (watermark.value)
        watermark.value.setText(["quark-design", "A component library"]);
    };

    const changeGap = () => {
      gapx.value = 12;
      gapy.value = 24;
    };

    return {
      watermark,
      gapy,
      gapx,
      width,
      height,
      rotate,
      image,
      text,
      translate,
      changeText,
      changeMultiText,
      changeImage,
      changeGap,
    };
  },
});
</script>
<style src="./demo.scss"></style>
