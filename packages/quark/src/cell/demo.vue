<template>
  <div class="demo no-padding demo-cell">
    <h2>{{ translate("CellTitle.basicUsage") }}</h2>
    <quark-cell-group>
      <quark-cell
        :title="translate('title')"
        :desc="translate('desc')"
      ></quark-cell>
      <quark-cell :title="translate('title')" islink></quark-cell>
      <quark-cell
        :title="translate('title')"
        :desc="translate('desc')"
        islink
      ></quark-cell>
      <quark-cell
        :title="translate('longTitle')"
        :desc="translate('desc')"
        islink
      ></quark-cell>
    </quark-cell-group>

    <h2>{{ translate("CellTitle.router") }}</h2>
    <quark-cell-group>
      <quark-cell
        :title="translate('router')"
        to="#/button"
        islink
      ></quark-cell>
      <quark-cell
        :title="translate('url')"
        to="https://baidu.com"
        islink
      ></quark-cell>
    </quark-cell-group>
    <h2>{{ translate("CellTitle.icon") }}</h2>
    <quark-cell-group>
      <quark-cell
        :title="translate('title')"
        :desc="translate('desc')"
        islink
        icon="https://m.hellobike.com/resource/helloyun/18625/WUu02_img.png?x-oss-process=image/quality,q_80"
      ></quark-cell>
    </quark-cell-group>
    <h2>{{ translate("CellTitle.group") }}</h2>
    <quark-cell-group>
      <quark-cell :title="translate('title')"></quark-cell>
      <quark-cell :title="translate('title')"></quark-cell>
    </quark-cell-group>

    <h2>{{ translate("CellTitle.custom") }}</h2>
    <quark-cell
      class="my-cell"
      :title="translate('longLongTitle')"
    ></quark-cell>

    <h2>{{ translate("CellTitle.right") }}</h2>
    <quark-cell :title="translate('title')">
      <div>{{ translate("CellTitle.right") }}</div>
    </quark-cell>
  </div>
</template>
<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("cell");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onBeforeMount } from "vue";

export default createDemo({
  setup() {
    const fruit = ref("apple");
    const onChange = ({ detail }) => {
      fruit.value = detail.value;
    };
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          CellTitle: {
            basicUsage: "????????????",
            router: "????????????",
            icon: "????????????",
            group: "????????????",
            custom: "?????????????????????????????????",
            right: "?????????????????????",
          },
          title: "????????????",
          desc: "????????????",
          longTitle: "??????????????????????????????????????????????????????",
          longLongTitle:
            "???????????????????????????????????????????????????????????????????????????????????????",
          router: "????????????",
          url: "????????????",
        },
        "en-US": {
          CellTitle: {
            basicUsage: "Basic Usage",
            router: "Router",
            icon: "Icon",
            group: "Inset Grouped",
            custom: "Custom Style",
            right: "Right content",
          },
          title: "Cell Title",
          desc: "Description",
          longTitle: "This is a very long title, it will automatically wrap.",
          longLongTitle: "The title is very very very very very very very long",
          router: "Router",
          url: "Url",
        },
      });
    });

    return {
      fruit,
      translate,
      onChange,
    };
  },
});
</script>

<style src="./demo.scss"></style>
