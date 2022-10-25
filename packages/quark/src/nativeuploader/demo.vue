<template>
	<div class="demo uploader-demo">
		<h2>{{ translate("basic") }}</h2>
		<div class="flex">
			<quark-native-uploader ref='preview' @click="afterRead" />
		</div>
    <h2>{{ translate("remove") }}</h2>
		<div class="flex">
			<quark-native-uploader ref='preview2' @click="afterRead" @onremove="onremove"/>
		</div>
    <h2>{{ translate("readonly") }}</h2>
		<div class="flex">
			<quark-native-uploader ref='preview3' readonly />
		</div>
	</div>
</template>

<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("uploader");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onMounted, onBeforeMount } from "vue";
import { onBeforeRouteLeave } from "vue-router"
import Toast from "../toast";

export default createDemo({
	setup() {
		const isPreview = ref(false);
		const preview = ref(null);
    const preview2 = ref(null);
    const preview3 = ref(null);
		const previewUrls = [
			"https://img.yzcdn.cn/vant/leaf.jpg",
			"https://m.hellobike.com/resource/helloyun/15697/iWS-0QI6QV.png",
		];
    const successUrl = [
      'https://m.hellobike.com/resource/helloyun/15697/JPjd2_WX20220830-141115.png?x-oss-process=image/quality,q_80', 
      'https://m.hellobike.com/resource/helloyun/15697/Wc4c2_shop.png?x-oss-process=image/quality,q_80'
    ]
		onBeforeMount(() => {
			useTranslate({
				"zh-CN": {
					basic: "基础用法",
          remove: "图片删除",
          readonly: "只读模式"
				},
				"en-US": {
					basic: "Basic Usage",
          remove: "Picture Remove",
          readonly: "readonly"
				},
			});
		});
		onMounted(() => {
      console.log(preview3, '333')
			preview.value.setPreview(previewUrls);
      preview2.value.setPreview(previewUrls);
      preview3.value.setPreview(previewUrls);
		});
    const sleep = (time) => {
      return new Promise(reslove => {
        setTimeout(() => {
          reslove(true)
        }, time)
      })
    }
		const beforeUpload = (files) => {
			const r = files.every((file) => file.type === "image/jpg");
			if (!r) {
				Toast.text(`${translate("toast.format")}`);
				return false;
			}
			return true;
		};
		
    const callNative = async () => {
      const toast = Toast.loading('客户端上传图片中')
      await sleep(1000)
      toast.hide()
      Toast.success('客户端返回数据')
      return Promise.resolve(successUrl)
    }

		const afterRead = async({ detail: data }) => {
      const successData = await callNative();
      const newData = data.concat(successData)
      preview.value.setPreview(newData);
    }

    const onremove = ({ detail: item }) => {
      console.log(item, 'item')
    }
    
    onBeforeRouteLeave(() => {
      const nodes = document.querySelectorAll('quark-image-preview ')
      nodes.forEach(i => i.open = false )
    })

		return {
			isPreview,
			preview,
      preview2,
      preview3,
			afterRead,
			translate,
      onremove
		};
	},
});
</script>
<style src="./demo.scss"></style>
