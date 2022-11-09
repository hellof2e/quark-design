<template>
  <div class="demo no-padding">
    <quark-tabs>
      <quark-tab-content :label="translate('darkBackground')">
        <quark-pull-refresh dark :loading="data.loading2" @refresh="onFresh2">
          <div slot="content" class="pull-content">
            {{ translate("refreshCount") }}: {{ data.count2 }}
          </div>
        </quark-pull-refresh>
      </quark-tab-content>
      <quark-tab-content :label="translate('lightBackground')">
        <quark-pull-refresh :loading="data.loading1" @refresh="onFresh1">
          <div slot="content" class="pull-content">
            {{ translate("refreshCount") }}: {{ data.count1 }}
          </div>
        </quark-pull-refresh>
      </quark-tab-content>
      <quark-tab-content :label="translate('customContent')">
        <quark-pull-refresh :loading="data.loading3" @refresh="onFresh3">
          <div slot="content" class="pull-content">
            {{ translate("refreshCount") }}: {{ data.count3 }}
          </div>
          <div class="refresh-text" slot="pulling">
            <img
              src="https://m.hellobike.com/resource/helloyun/18625/3OOq2_down.svg"
            />{{ translate("tip") }}
          </div>
          <div class="refresh-text" slot="loosing">
            <img
              src="https://m.hellobike.com/resource/helloyun/18625/ImS4S_up.svg"
            />{{ translate("constantRefresh") }}
          </div>
          <div class="refresh-text" slot="loading">
            <quark-loading size="18">{{
              translate("refreshing")
            }}</quark-loading>
          </div>
        </quark-pull-refresh>
      </quark-tab-content>
    </quark-tabs>
  </div>
</template>

<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("pullrefresh");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onBeforeMount } from "vue";
import Toast from "../toast/index";

export default createDemo({
  setup() {
    const data = ref({
      loading1: false,
      loading2: false,
      loading3: false,
      count1: 0,
      count2: 0,
      count3: 0,
    });
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          darkBackground: "深色背景",
          lightBackground: "浅色背景",
          customContent: "自定义内容",
          tip: "下拉提示",
          constantRefresh: "松开立即刷新",
          refreshing: "正在刷新数据...",
          refreshCount: "刷新次数",
          refreshSuccess: "刷新成功",
        },
        "en-US": {
          darkBackground: "Dark Background",
          lightBackground: "Light Background",
          customContent: "Custom Content",
          tip: "Drop Down Prompt",
          constantRefresh: "Release To Refresh Now",
          refreshing: "Refreshing...",
          refreshCount: "Number Of Refreshes ",
          refreshSuccess: "Refresh Success",
        },
      });
    });
    const onFresh1 = () => {
      data.value.loading1 = true;
      setTimeout(() => {
        Toast.success(`${translate("refreshSuccess")}`);
        data.value.loading1 = false;
        data.value.count1++;
      }, 1000);
    };
    const onFresh2 = () => {
      data.value.loading2 = true;
      setTimeout(() => {
        Toast.success(`${translate("refreshSuccess")}`);
        data.value.loading2 = false;
        data.value.count2++;
      }, 1000);
    };
    const onFresh3 = () => {
      data.value.loading3 = true;
      setTimeout(() => {
        Toast.success(`${translate("refreshSuccess")}`);
        data.value.loading3 = false;
        data.value.count3++;
      }, 1000);
    };
    return {
      data,
      onFresh1,
      onFresh2,
      onFresh3,
      translate,
    };
  },
});
</script>
<style scoped>
.pull-content {
  padding: 16px;
  height: 475px;
}
.refresh-text {
  font-size: 14px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 16px;
  box-sizing: border-box;
  color: #879099;
}
.refresh-text img {
  width: 20px;
  height: 20px;
  margin-right: 4px;
}
</style>
