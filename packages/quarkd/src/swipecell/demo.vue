<template>
  <div class="demo no-padding demo-cell">
    <h2>{{ translate("CellTitle.basicUsage") }}</h2>
    <quark-swipe-cell>
      <quark-cell :title="translate('title')" :desc="translate('desc')" />
      <div slot="left">
        <div>quark-swipe-cell__lefe</div>
      </div>
      <div slot="right">
        <div>quark-swipe-cell__right</div>
      </div>
    </quark-swipe-cell>
    <br />
    <!-- <quark-swipe-cell disabled>
      <quark-cell :title="translate('title')" :desc="translate('desc')" />
      <div slot="right">
        <div>quark-swipe-cell__right</div>
      </div>
    </quark-swipe-cell> -->
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
            basicUsage: "基本用法",
            router: "链接跳转",
            icon: "展示图标",
            group: "分组用法",
            custom: "自定义样式，省略号展示",
            right: "自定义右侧描述",
          },
          title: "这是标题",
          desc: "描述文字",
          longTitle: "这是标题非常的长，太长会自动换行的哦",
          longLongTitle:
            "这是标题很长长长长长长长长长长长长长长长长长长长长长长长长",
          router: "路由跳转",
          url: "链接跳转",
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
