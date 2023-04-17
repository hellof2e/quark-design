<template>
  <div class="demo uploader-demo">
    <h2>{{ translate("basic") }}</h2>
    <div class="flex">
      <quark-uploader
        @afterread="(val) => afterRead(val, true)"
        :preview="isPreview"
      />
    </div>
    <h2>{{ translate("preview") }}</h2>
    <div class="flex">
      <quark-uploader
        @afterread="afterRead"
        ref="preview"
        preview
      ></quark-uploader>
    </div>
    <h2>{{ translate("limit") }}</h2>
    <div class="flex">
      <quark-uploader maxcount="2" preview></quark-uploader>
    </div>
    <h2>{{ translate("size") }}</h2>
    <quark-uploader
      maxsize="1024"
      @oversize="oversize"
      ref="oversizeRef"
    ></quark-uploader>
    <h2>{{ translate("custom") }}</h2>
    <div class="flex">
      <quark-uploader preview>
        <quark-button type="primary" slot="uploader" icon="home">{{
          translate("file")
        }}</quark-button>
      </quark-uploader>
    </div>
    <h2>{{ translate("before") }}</h2>
    <quark-uploader preview ref="before"></quark-uploader>
    <h2>{{ translate("disabled") }}</h2>
    <quark-uploader preview :disabled="true"></quark-uploader>
    <h2>{{ translate("previewMode") }}</h2>
    <div class="flex">
      <quark-uploader ref="preview2" preview readonly />
    </div>
  </div>
</template>

<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("uploader");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onMounted, onBeforeMount } from "vue";
import { onBeforeRouteLeave } from "vue-router";
import Toast from "../toast";

export default createDemo({
  setup() {
    const isPreview = ref(false);
    const preview = ref(null);
    const preview2 = ref(null);
    const before = ref(null);
    const oversizeRef = ref(false);
    const previewUrls = [
      "https://m.hellobike.com/resource/helloyun/15697/9VgwC_Screenshot_20220215_191457_com.jingyao.easybike.jpg?x-oss-process=image/quality,q_80",
      "https://m.hellobike.com/resource/helloyun/15697/iWS-0QI6QV.png",
    ];
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "基础用法",
          preview: "文件预览",
          previewMode: "预览模式",
          limit: "限制上传数量",
          size: "限制上传大小",
          custom: "自定义上传样式",
          file: "上传文件",
          before: "上传前置",
          disabled: "禁止上传",
          toast: {
            format: "请上传 jpg 格式图片",
            overSize: "有文件超过1KB了哦",
          },
        },
        "en-US": {
          basic: "Basic Usage",
          preview: "File Preview",
          previewMode: "File Preview Mode",
          limit: "Limit Uploads Number",
          size: "Limit Uploads Size",
          custom: "Custom Upload Style",
          file: "Upload File",
          before: "Before Uploading",
          disabled: "Disabled",
          toast: {
            format: "Please upload image in jpg format",
            overSize: "There are files over 1KB",
          },
        },
      });
    });
    onMounted(() => {
      preview.value.setPreview(previewUrls);
      preview2.value.setPreview(previewUrls);
      before.value.beforeUpload = beforeUpload;
    });
    const sleep = (time) => {
      return new Promise((reslove) => {
        setTimeout(() => {
          reslove(true);
        }, time);
      });
    };
    const beforeUpload = (files) => {
      const r = files.every((file) => file.type === "image/jpg");
      if (!r) {
        Toast.text(`${translate("toast.format")}`);
        return false;
      }
      return true;
    };
    const oversize = ({ detail: { items, maxsize } }) => {
      console.log(items, maxsize);
      Toast.text(`${translate("toast.overSize")}`);
    };
    const uploadAction = async (item) => {
      preview.value.setStatus({
        ...item,
        status: "uploading",
        message: "上传中",
      });
      await sleep(2000);
      preview.value.setStatus({
        ...item,
        status: "done",
      });
      Toast.success("上传成功");
    };
    const afterRead = async ({ detail: file }, isDefault) => {
      if (isDefault) {
        Toast.text(`success: the file is ${file.file.name}`);
        return;
      }
      if (Array.isArray(file)) {
        for (let i = 0; i < file.length; i++) {
          const item = file[i];
          uploadAction(item);
        }
      } else {
        uploadAction(file);
      }
    };
    onBeforeRouteLeave(() => {
      const nodes = document.querySelectorAll("quark-image-preview ");
      nodes.forEach((i) => (i.open = false));
    });
    return {
      isPreview,
      preview,
      preview2,
      before,
      beforeUpload,
      oversize,
      oversizeRef,
      afterRead,
      translate,
    };
  },
});
</script>
<style src="./demo.scss"></style>
