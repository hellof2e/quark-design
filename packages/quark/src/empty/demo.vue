<template>
	<div class="demo empty-demo">
		<h2>{{ translate("basic") }}</h2>
		<quark-empty />

		<h2>{{ translate("desc") }}</h2>
		<quark-empty :title="translate('title')" :desc="translate('order')" />

		<h2>{{ translate("image") }}</h2>
		<quark-empty
			:desc="translate('order')"
			imagesize="100"
			image="https://m.hellobike.com/resource/helloyun/13459/fkntv_custom-empty-image.png"
		/>

		<h2>{{ translate("bottom") }}</h2>
		<quark-empty :desc="translate('order')" :title="translate('title')">
			<div class="outer" slot="footer">
				<quark-button style="margin-right: 10px">{{
					translate("return")
				}}</quark-button>
				<quark-button type="primary">{{ translate("button") }}</quark-button>
			</div>
		</quark-empty>
	</div>
</template>

<script>
import { onBeforeMount } from "vue";
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("empty");
import { useTranslate } from "@/sites/assets/util/useTranslate";

export default createDemo({
	setup() {
		onBeforeMount(() => {
			useTranslate({
				"zh-CN": {
					basic: "基础用法",
					desc: "描述文字",
					image: "自定义图片",
					bottom: "自定义底部",
					title: "没有历史订单",
					order: "快去下一单吧!",
					return: "返回首页",
					button: "去下单",
				},
				"en-US": {
					basic: "Basic Usage",
					desc: "Description",
					image: "Custom Image",
					bottom: "Csutom Bottom",
					title: "No Order History",
					order: "Go and Order!",
					return: "Back to Home",
					button: "Go to Order",
				},
			});
		});
		return {
			translate,
		};
	},
});
</script>

<style src="./demo.scss"></style>
