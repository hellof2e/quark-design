<template>
  <div class="demo no-padding swipe-cell-demo">
    <h2>{{ translate("CellTitle.basicUsage") }}</h2>
    <quark-swipe-cell @open="onOpen" @close="onClose">
      <quark-cell :title="translate('title')" :desc="translate('desc')" />
      <div class="left" slot="left">
        <quark-button type="primary" shape="square">
          {{ translate("buttons.select") }}
        </quark-button>
      </div>
      <div class="right" slot="right">
        <quark-button type="danger" shape="square">
          {{ translate("buttons.del") }}
        </quark-button>
        <quark-button type="primary" shape="square">
          {{ translate("buttons.collect") }}
        </quark-button>
      </div>
    </quark-swipe-cell>
    <h2>{{ translate("CellTitle.custom") }}</h2>
    <quark-swipe-cell>
      <quark-empty
        :title="translate('noData')"
        :desc="translate('addData')"
        type="local"
      />
      <div class="right" slot="right">
        <quark-button type="primary" shape="square">
          {{ translate("buttons.add") }}
        </quark-button>
      </div>
    </quark-swipe-cell>
    <h2>{{ translate("CellTitle.async") }}</h2>
    <quark-swipe-cell ref="asyncSwipeCell">
      <quark-cell :title="translate('title')" :desc="translate('desc')" />
      <div class="right" slot="right">
        <quark-button type="primary" shape="square">
          {{ translate("buttons.del") }}
        </quark-button>
      </div>
    </quark-swipe-cell>
  </div>
</template>
<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("cell");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onBeforeMount, onMounted } from "vue";
import Toast from "../toast/index.js";

export default createDemo({
  setup() {
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          CellTitle: {
            basicUsage: "基本用法",
            custom: "自定义内容",
            async: "异步关闭",
          },
          title: "这是标题",
          desc: "描述文字",
          buttons: {
            del: "删除",
            collect: "收藏",
            select: "选择",
            add: "添加",
          },
          noData: "暂无数据",
          addData: "快去添加数据吧~",
          loading: "请求中",
          deleteSucc: "删除成功",
        },
        "en-US": {
          CellTitle: {
            basicUsage: "Basic Usage",
            custom: "Custom Content",
            async: "Async Close",
          },
          title: "Cell Title",
          desc: "Description",
          buttons: {
            del: "Delete",
            collect: "Collect",
            select: "Select",
            add: "Add",
          },
          noData: "No Data",
          addData: "Go to add data.",
          loading: "loading...",
          deleteSucc: "successfully deleted",
        },
      });
    });

    const onOpen = ({ detail }) => {
      console.log(detail.name, detail.position);
    };

    const onClose = ({ detail }) => {
      console.log(detail.name, detail.position);
    };

    const asyncSwipeCell = ref();

    onMounted(() => {
      asyncSwipeCell.value.setBeforeClose((position) => {
        if (position === "right") {
          return new Promise((resolve) => {
            const toast = Toast.loading(translate("loading"));
            setTimeout(() => {
              toast.hide();
              Toast.success(translate("deleteSucc"));
              resolve(true);
            }, 1000);
          });
        } else {
          return true;
        }
      });

      // asyncSwipeCell.value.open("right");
      // setTimeout(() => {
      //   asyncSwipeCell.value.close();
      // }, 1000);
    });

    return {
      translate,
      onOpen,
      onClose,
      asyncSwipeCell,
    };
  },
});
</script>

<style src="./demo.scss"></style>
