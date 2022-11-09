<template>
  <div class="demo demo-dialog">
    <!-- 标签用法 start -->
    <h2>{{ translate("basic") }}</h2>
    <quark-cell-group>
      <quark-cell
        type="primary"
        isLink
        :title="translate('alert')"
        @click="open = true"
      ></quark-cell>

      <quark-cell
        type="primary"
        isLink
        :title="translate('alertWithoutContent')"
        @click="open2 = true"
      ></quark-cell>

      <quark-cell
        type="primary"
        isLink
        :title="translate('confirm')"
        @click="open3 = true"
      ></quark-cell>

      <quark-cell
        type="primary"
        isLink
        :title="translate('btnvertical')"
        @click="open6 = true"
      ></quark-cell>
    </quark-cell-group>

    <quark-dialog
      type="confirm"
      :open="open"
      :title="translate('dialogTitle')"
      :content="translate('content')"
      @confirm="open = false"
      @close="open = false"
    >
    </quark-dialog>

    <quark-dialog
      type="confirm"
      :open="open2"
      :title="translate('title')"
      :oktext="translate('okText')"
      @confirm="open2 = false"
      @close="open2 = false"
    >
    </quark-dialog>

    <quark-dialog
      :open="open3"
      :title="translate('dialogTitle')"
      :content="translate('content')"
      @close="open3 = false"
      @confirm="open3 = false"
      @cancel="open3 = false"
    >
    </quark-dialog>

    <quark-dialog
      btnvertical
      :open="open6"
      :title="translate('dialogTitle')"
      :content="translate('content')"
      @close="open6 = false"
      @confirm="open6 = false"
      @cancel="open6 = false"
    >
    </quark-dialog>
    <!-- 标签用法 end -->

    <!-- 自定义title start -->
    <!-- <h2>{{ translate("customTitle") }}</h2> -->
    <h2>Title</h2>
    <quark-cell-group>
      <quark-cell
        islink
        :title="translate('customTitle')"
        @click="open4 = true"
      ></quark-cell>
      <quark-cell
        islink
        :title="translate('noTitle')"
        @click="open5 = true"
      ></quark-cell>
    </quark-cell-group>
    <quark-dialog
      :content="translate('content')"
      :open="open4"
      @confirm="open4 = false"
      @cancel="open4 = false"
      @close="open4 = false"
    >
      <div
        slot="title"
        style="color: red; font-size: 16px; margin-bottom: 14px"
      >
        {{ translate("customTitle") }}
      </div>
    </quark-dialog>

    <quark-dialog
      notitle
      :open="open5"
      :content="translate('content')"
      @confirm="open5 = false"
      @cancel="open5 = false"
      @close="open5 = false"
    >
    </quark-dialog>
    <!-- 自定义title end -->

    <!-- 自定义 footer start -->
    <!-- <h2>{{ translate("customFooter") }}</h2> -->
    <h2>Footer</h2>
    <quark-cell-group>
      <quark-cell
        islink
        :title="translate('customFooter')"
        @click="open8 = true"
      ></quark-cell>
      <quark-cell
        islink
        :title="translate('noFooter')"
        @click="open9 = true"
      ></quark-cell>
    </quark-cell-group>

    <quark-dialog
      :title="translate('dialogTitle')"
      :open="open8"
      @close="open8 = false"
    >
      <div>{{ translate("text") }}</div>
      <div slot="footer" class="custom-footer">
        <quark-button type="primary" @click="open8 = false">{{
          translate("customFooter")
        }}</quark-button>
      </div>
    </quark-dialog>

    <quark-dialog
      nofooter
      :open="open9"
      :title="translate('dialogTitle')"
      :content="translate('content')"
      @confirm="open9 = false"
      @close="open9 = false"
    >
    </quark-dialog>
    <!-- 自定义 footer end -->
  </div>
</template>

<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("dialog");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onBeforeMount } from "vue";
import { onBeforeRouteLeave } from "vue-router";
// import Dialog from "./index.tsx";
// import Toast from "../toast";

export default createDemo({
  setup() {
    // ***** 标签调用
    // 标签-组件调用
    const open = ref(false);
    const open2 = ref(false);
    const open3 = ref(false);
    const open4 = ref(false);
    const open5 = ref(false);
    const open6 = ref(false);
    const open7 = ref(false);
    const open8 = ref(false);
    const open9 = ref(false);

    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "基础用法",
          dialogTitle: "标题",
          alert: "提示弹窗",
          alertWithoutContent: "提示弹窗（没有内容）",
          confirm: "确认弹窗",
          btnvertical: "确认弹窗(按钮垂直排列)",
          basicDialog: "基础弹窗",
          showCloseButton: "隐藏关闭按钮",
          alignLeft: "内容居左对齐",
          customFooter: "Footer 自定义",
          noFooter: "Footer 隐藏",
          title: "这是一句话就能说清楚的确认弹窗，所以只有标题",
          content:
            "生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。",
          text: "代码是写出来给人看的，附带能在机器上运行",
          okText: "知道了",
          customTitle: "Title 自定义",
          noTitle: "Title 隐藏",
        },
        "en-US": {
          basic: "Basic use",
          dialogTitle: "Title",
          alert: "Alert",
          alertWithoutContent: "Alert without content",
          confirm: "Confirm dialog",
          btnvertical: "Confirm dialog（vertical button）",
          basicDialog: "Basic Dialog",
          showCloseButton: "Hide Close Button",
          alignLeft: "Align Content To The Left",
          customFooter: "Custom Footer",
          noFooter: "Not Show Footer ",
          title:
            "This is a confirmation dialog that can be explained clearly in one sentence, so only the title",
          content: "This is a content",
          text: "This is custom body. The code is written for people to see, with the addition of running on the machine",
          okText: "Got it",
          noTitle: "Title hide",
          customTitle: "Custom title",
        },
      });
    });

    onBeforeRouteLeave(() => {
      const quarkDialogs = document.querySelectorAll("quark-dialog");
      quarkDialogs.forEach((i) => (i.open = false));
    });

    return {
      open,
      open2,
      open3,
      open4,
      open5,
      open6,
      open7,
      open8,
      open9,
      translate,
    };
  },
});
</script>
<style src="./demo.scss"></style>
