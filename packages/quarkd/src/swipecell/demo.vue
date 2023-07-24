<template>
  <div class="demo no-padding swipe-cell-demo">
    <h2>{{ translate("CellTitle.basicUsage") }}</h2>
    <quark-swipe-cell
      ref="swipeCellRef"
      @click="onClick"
      @open="onOpen"
      @close="onClose"
    >
      <quark-cell :title="translate('title')" :desc="translate('desc')" />
      <div class="left" slot="left">
        <quark-button type="primary" shape="square" @click="leftClick">
          选择
        </quark-button>
      </div>
      <div class="right" slot="right">
        <quark-button type="danger" shape="square"> 删除 </quark-button>
        <quark-button type="primary" shape="square"> 收藏 </quark-button>
      </div>
    </quark-swipe-cell>
    <br />
    <quark-swipe-cell>
      <quark-empty title="暂无数据" desc="快去添加数据吧~" type="local" />
      <div class="right" slot="right">
        <quark-button type="primary" shape="square">添加</quark-button>
      </div>
    </quark-swipe-cell>
  </div>
</template>
<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("cell");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onBeforeMount, onMounted } from "vue";

export default createDemo({
  setup() {
    const onClick = ({ detail }) => {
      // console.log(1111, detail);
    };
    const leftClick = () => {
      // console.log("left click");
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

    const onOpen = ({ detail }) => {
      // console.log("opened", detail.position);
    };

    const onClose = ({ detail }) => {
      // console.log("closed", detail.position);
    };

    const swipeCellRef = ref();
    onMounted(() => {
      swipeCellRef.value.setBeforeClose((position) => {
        switch (position) {
          case "left":
          case "cell":
          case "outside":
            return true;
          case "right":
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve(true);
              }, 500);
            });
        }
      });
    });
    return {
      translate,
      onClick,
      leftClick,
      onOpen,
      onClose,
      swipeCellRef,
    };
  },
});
</script>

<style src="./demo.scss"></style>
