<template>
  <div class="demo">
    <h2>{{ translate("title.basic") }}</h2>
    <quark-cell-group>
      <quark-cell
        type="primary"
        :title="translate('title.basic')"
        islink
        @click="click"
      ></quark-cell>
    </quark-cell-group>
    <quark-cascade-picker
      :open="open"
      @close="close(0)"
      :title="translate('title.region')"
      @confirm="confirm"
      ref="pickerRef"
      @change="change"
    />
    <h2>{{ translate("title.head") }}</h2>
    <quark-cell-group>
      <quark-cell
        type="primary"
        :title="translate('title.head')"
        islink
        @click="customClick"
      ></quark-cell>
    </quark-cell-group>
    <quark-cascade-picker
      :open="customOpen"
      @close="close(1)"
      ref="customPickerRef"
      bottomhidden
    >
      <div slot="header" class="head-container">
        <span class="cancel" @click="close(1)">{{
          translate("button.cancel")
        }}</span>
        <span class="picker-title">{{ translate("title.region") }}</span>
        <span class="ensure" @click="customConfirm">{{
          translate("button.confirm")
        }}</span>
      </div>
    </quark-cascade-picker>
  </div>
</template>

<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("cascadepicker");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onMounted, onBeforeMount } from "vue";
import "./index";
import Toast from "../toast/index";
import { options } from "preact";

export default createDemo({
  setup() {
    const open = ref(false);
    const customOpen = ref(false);
    const pickerRef = ref(null);
    const customPickerRef = ref(null);
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          title: {
            basic: "基础用法",
            head: "自定义头部",
            region: "请选择地区",
          },
          button: {
            cancel: "取消",
            confirm: "确定",
          },
          options: {
            zhejiang: "浙江",
            hangzhou: "杭州",
            xihu: "西湖区",
            yuhang: "余杭区",
            wenzhou: "温州",
            lucheng: "鹿城区",
            ouhai: "瓯海区",
            fujian: "福建",
            fuzhou: "福州",
            gulou: "鼓楼区",
            taijiang: "台江区",
            xiamen: "厦门",
            siming: "思明区",
            haicang: "海沧区",
          },
          selected: "当前选中：",
        },
        "en-US": {
          title: {
            basic: "Basic Usage",
            head: "Custom Head",
            region: "Please select the region",
          },
          button: {
            cancel: "Cancel",
            confirm: "Confirm",
          },
          options: {
            zhejiang: "Zhejiang",
            hangzhou: "Hangzhou",
            xihu: "Xihu",
            yuhang: "Yuhang",
            wenzhou: "Wenzhou",
            lucheng: "Lucheng",
            ouhai: "Ouhai",
            fujian: "Fujian",
            fuzhou: "Fuzhou",
            gulou: "Gulou",
            taijiang: "Taijiang",
            xiamen: "Xiamen",
            siming: "Siming",
            haicang: "Haicang",
          },
          selected: "Currently selected: ",
        },
      });
    });
    onMounted(() => {
      const DATA = [
        {
          text: `${translate("options.zhejiang")}`,
          children: [
            {
              text: `${translate("options.hangzhou")}`,
              children: [
                { text: `${translate("options.xihu")}` },
                { text: `${translate("options.yuhang")}` },
              ],
            },
            {
              text: `${translate("options.wenzhou")}`,
              children: [
                { text: `${translate("options.lucheng")}` },
                { text: `${translate("options.ouhai")}` },
              ],
            },
          ],
        },
        {
          text: `${translate("options.fujian")}`,
          children: [
            {
              text: `${translate("options.fuzhou")}`,
              children: [
                { text: `${translate("options.gulou")}` },
                { text: `${translate("options.taijiang")}` },
              ],
            },
            {
              text: `${translate("options.xiamen")}`,
              children: [
                { text: `${translate("options.siming")}` },
                { text: `${translate("options.haicang")}` },
              ],
            },
          ],
        },
      ];
      setTimeout(() => {
        //模拟异步获取数据
        const preview = pickerRef.value;
        preview.setColumns(DATA);

        const customPreview = customPickerRef.value;
        customPreview.setColumns(DATA);
      }, 1000);
    });
    const click = () => {
      open.value = true;
    };
    const customClick = () => {
      customOpen.value = true;
    };
    const close = (type) => {
      if (type === 0) {
        open.value = false;
      } else if (type === 1) {
        customOpen.value = false;
      }
    };
    const confirm = ({ detail }) => {
      const values = detail.value
        .map((column) => {
          return column.value;
        })
        .join("，");
      Toast.text(`${values}`);
      open.value = false;
    };
    const customConfirm = () => {
      const customPreview = customPickerRef.value;
      const values = customPreview
        .getValues()
        .map((column) => {
          return column.value;
        })
        .join("，");
      Toast.text(`${values}`);
      customOpen.value = false;
    };
    const change = ({ detail }) => {
      console.log(detail.value, 33333);
    };
    return {
      open,
      customOpen,
      pickerRef,
      customPickerRef,
      click,
      customClick,
      close,
      confirm,
      customConfirm,
      change,
      translate,
    };
  },
});
</script>
<style src="./demo.scss"></style>
