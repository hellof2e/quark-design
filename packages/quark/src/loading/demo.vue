<template>
	<div class="demo loading-demo">
		<h2>{{ translate("loadingType") }}</h2>
		<div class="demo-loadings">
			<quark-loading type="circular"></quark-loading>
			<quark-loading></quark-loading>
		</div>

		<h2>{{ translate("customSize") }}</h2>
		<div class="demo-loadings">
			<quark-loading size="20"></quark-loading>
			<quark-loading size="30"></quark-loading>
			<quark-loading size="40"></quark-loading>
		</div>

		<h2>{{ translate("customColor") }}</h2>
		<div class="demo-loadings">
			<quark-loading size="30"></quark-loading>
			<quark-loading size="30" color="green"></quark-loading>
			<quark-loading size="30" color="warning"></quark-loading>
		</div>

		<h2>{{ translate("loadingText") }}</h2>
		<div class="demo-loadings">
			<quark-loading size="30">{{ translate("load") }}</quark-loading>
		</div>

		<h2>{{ translate("vertical") }}</h2>
		<div class="demo-loadings">
			<quark-loading size="30" vertical>{{ translate("load") }}</quark-loading>
		</div>

		<h2>{{ translate("customStyle") }}</h2>
		<div class="demo-loadings">
			<quark-loading size="30" vertical class="custom-text">{{
				translate("load")
			}}</quark-loading>
		</div>
	</div>
</template>

<script>
import { onBeforeMount } from "vue";
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("loading");

export default createDemo({
	setup() {
		onBeforeMount(() => {
			useTranslate({
				"zh-CN": {
					loadingType: "加载类型",
					customSize: "自定义大小",
					customColor: "自定义颜色",
					loadingText: "加载文案",
					vertical: "垂直排列",
					customStyle: "自定义文本样式",
					load: "加载中...",
				},
				"en-US": {
					loadingType: "Loading Type",
					customSize: "Custom Size",
					customColor: "Custom Color",
					loadingText: "Loading Text",
					vertical: "Vertical Layout",
					customStyle: "Custom Text Style",
					load: "loading...",
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
