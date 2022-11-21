<template>
  <div class="demo no-padding">
    <quark-tabs class="quark-tabs" sticky offsettop="17vw">
      <quark-tab-content :label="translate('label.basic')">
        <quark-list
          @load="onLoad1"
          :loading="data.loading1"
          :finished="data.finished1"
          :finishedtext="translate('message.finished')"
        >
          <div slot="content">
            <div v-for="item in data.list1" :key="item" class="list-list">
              {{ item }}
            </div>
          </div>
        </quark-list>
      </quark-tab-content>
      <quark-tab-content :label="translate('label.error')">
        <quark-list
          @load="onLoad2"
          @reload="onLoad2"
          :loading="data.loading2"
          :error="data.error2"
          :errortext="translate('message.error')"
          :finished="data.finished2"
        >
          <div slot="content">
            <div v-for="item in data.list2" :key="item" class="list-list">
              {{ item }}
            </div>
          </div>
        </quark-list>
      </quark-tab-content>
      <quark-tab-content :label="translate('label.custom')">
        <quark-list
          @load="onLoad3"
          :loading="data.loading3"
          :error="data.error3"
          :finished="data.finished3"
        >
          <div slot="content">
            <div v-for="item in data.list3" :key="item" class="list-list">
              {{ item }}
            </div>
          </div>
          <div class="list-text" slot="finished">
            {{ translate("message.custom.finished") }}
          </div>
          <div class="list-text" slot="error">
            {{ translate("message.custom.error") }}
          </div>
          <div class="list-text" slot="loading">
            <quark-loading size="15">{{
              translate("message.custom.loading")
            }}</quark-loading>
          </div>
        </quark-list>
      </quark-tab-content>
      <quark-tab-content :label="translate('label.refresh')">
        <quark-pull-refresh :loading="data.loading4" @refresh="onRefresh">
          <div slot="content" class="pull-content">
            <quark-list
              @load="onLoad4"
              :loading="data.loading4"
              :finished="data.finished4"
              :finishedtext="translate('message.finished')"
            >
              <div slot="content">
                <div v-for="item in data.list4" :key="item" class="list-list">
                  {{ item }}
                </div>
              </div>
            </quark-list>
          </div>
        </quark-pull-refresh>
      </quark-tab-content>
    </quark-tabs>
  </div>
</template>

<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("list");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onBeforeMount } from "vue";

export default createDemo({
  setup() {
    const data = ref({
      list1: [],
      list2: [],
      list3: [],
      list4: [],
      loading1: false,
      loading2: false,
      loading3: false,
      loading4: false,
      finished1: false,
      finished2: false,
      finished3: false,
      finished4: false,
      error1: false,
      error2: false,
      error3: false,
      error4: false,
    });
    const onLoad1 = () => {
      data.value.loading1 = true;
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          data.value.list1.push(data.value.list1.length + 1);
        }
        data.value.loading1 = false;
        if (data.value.list1.length >= 40) {
          data.value.finished1 = true;
        }
      }, 1000);
    };
    const onLoad2 = () => {
      data.value.error2 = false;
      data.value.loading2 = true;
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          data.value.list2.push(data.value.list2.length + 1);
        }
        if (data.value.list2.length === 10) {
          data.value.error2 = true;
        } else {
          data.value.error2 = false;
        }
        data.value.loading2 = false;
        if (data.value.list2.length >= 40) {
          data.value.finished2 = true;
        }
      }, 1000);
    };
    const onLoad3 = () => {
      data.value.loading3 = true;
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          data.value.list3.push(data.value.list3.length + 1);
        }
        data.value.loading3 = false;
        if (data.value.list3.length >= 40) {
          data.value.finished3 = true;
        }
      }, 1000);
    };
    const onLoad4 = () => {
      data.value.loading4 = true;
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          data.value.list4.push(data.value.list4.length + 1);
        }
        data.value.loading4 = false;
        if (data.value.list4.length >= 40) {
          data.value.finished4 = true;
        }
      }, 1000);
    };
    const onRefresh = () => {
      data.value.loading4 = true;
      data.value.list4 = [];
      for (let i = 0; i < 10; i++) {
        data.value.list4.push(data.value.list4.length + 1);
      }
      data.value.finished4 = false;
      onLoad4();
    };
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          label: {
            basic: "基础用法",
            error: "错误提示",
            custom: "自定义提示",
            refresh: "下拉刷新",
          },
          message: {
            finished: "结束提示",
            error: "出错了, 点击重试",
            custom: {
              finished: "自定义的结束提示",
              error: "自定义的错误提示",
              loading: "自定义的加载中...",
            },
          },
        },
        "en-US": {
          label: {
            basic: "Basic",
            error: "Error",
            custom: "Custom",
            refresh: "Refresh",
          },
          message: {
            finished: "Finished Message",
            error: "Something went wrong, please retry",
            custom: {
              finished: "Custom Finished Message",
              error: "Custom Error Message",
              loading: "Custom Loading...",
            },
          },
        },
      });
    });
    return {
      data,
      onLoad1,
      onLoad2,
      onLoad3,
      onLoad4,
      onRefresh,
      translate,
    };
  },
});
</script>
<style>
.list-list {
  padding: 0 16px;
  height: 60px;
  line-height: 60px;
  margin: 0 16px;
  text-align: center;
  border-bottom: 1px solid rgb(235, 237, 240);
}
.list-text {
  font-size: 14px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  box-sizing: border-box;
  color: #879099;
}
</style>
