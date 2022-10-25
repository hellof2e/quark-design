<template>
	<div class="demo no-padding action-sheet-demo">
		<h2>{{ translate("basicUsage") }}</h2>
		<quark-cell-group>
			<quark-cell
				islink
				type="primary"
				@click="showBase"
				:title="translate('basicUsage')"
			></quark-cell>
		</quark-cell-group>

		<h2>{{ translate("customStyle") }}</h2>
		<quark-cell-group>
			<quark-cell
				islink
				type="primary"
				@click="showTitleCustom"
				:title="translate('titleStyle')"
			></quark-cell>
			<quark-cell
				islink
				type="primary"
				@click="showCancelCustom"
				:title="translate('cancelButtonStyle')"
			></quark-cell>
		</quark-cell-group>
	</div>
</template>

<script>
import { onBeforeMount } from "vue";
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("sharesheet");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import ActionSheet from "./index";
import QuarkToast from "../toast/index.js";

export default createDemo({
	setup() {
		onBeforeMount(() => {
			useTranslate({
				"zh-CN": {
					basicUsage: "基本使用",
					customStyle: "自定义样式",
					titleStyle: "标题样式",
					cancelButtonStyle: "取消按钮样式",
					options: ["微信", "微信朋友圈", "QQ", "QQ空间", "微博", "二维码"],
					maskClick: "蒙版点击",
					cancel: "取消",
				},
				"en-US": {
					basicUsage: "Basic Usage",
					customStyle: "Custom Style",
					titleStyle: "Title Style",
					cancelButtonStyle: "Cancel Button Style",
					options: [
						"WeChat",
						"WeChat Moments",
						"QQ",
						"QQ Space",
						"WeiBo",
						"QR Code",
					],
					maskClick: "Mask Click",
					cancel: "Cancel",
				},
			});
		});
		const showBase = () => {
			const pop = ActionSheet({
				options: [
					{
						name: `${translate("options")[0]}`,
						icon: "https://m.hellobike.com/resource/helloyun/16682/LY3mn00VTX.png",
					},
					{
						name: `${translate("options")[1]}`,
						icon: "https://m.hellobike.com/resource/helloyun/16682/QOiMPs9BLj.png",
					},
					{
						name: `${translate("options")[2]}`,
						icon: "https://m.hellobike.com/resource/helloyun/16682/J4TWX9Jpca.png",
					},
					{
						name: `${translate("options")[3]}`,
						icon: "https://m.hellobike.com/resource/helloyun/16682/wG7wG2CHQx.png",
					},
					{
						name: `${translate("options")[4]}`,
						icon: "https://m.hellobike.com/resource/helloyun/16682/vt_vyR3M8I.png",
					},
					{
						name: `${translate("options")[5]}`,
						icon: "https://m.hellobike.com/resource/helloyun/16682/hvu4xjJpNY.png",
					},
				],
				select: (index, action) => {
					QuarkToast.text(action.name);
				},
			});
		};
		const showTitleCustom = () => {
			const pop = ActionSheet({
				titleColor: "red",
				titleFontSize: 20,
				options: [
					{
						name: `${translate("options")[0]}`,
						icon: "https://m.hellobike.com/resource/helloyun/16682/LY3mn00VTX.png",
					},
					{
						name: `${translate("options")[1]}`,
						icon: "https://m.hellobike.com/resource/helloyun/16682/QOiMPs9BLj.png",
					},
					{
						name: `${translate("options")[2]}`,
						icon: "https://m.hellobike.com/resource/helloyun/16682/J4TWX9Jpca.png",
					},
				],
				select: (index, action) => {
					QuarkToast.text(action.name);
				},
				close: () => {
					QuarkToast.text(`${translate("maskClick")}`);
				},
			});
		};
		const showCancelCustom = () => {
			const pop = ActionSheet({
				options: [
					{
						name: `${translate("options")[0]}`,
						icon: "https://m.hellobike.com/resource/helloyun/16682/LY3mn00VTX.png",
					},
					{
						name: `${translate("options")[1]}`,
						icon: "https://m.hellobike.com/resource/helloyun/16682/QOiMPs9BLj.png",
					},
				],
				cancelColor: "red",
				select: (index, action) => {
					QuarkToast.text(action.name);
				},
				cancel: () => {
					QuarkToast.text(`${translate("cancel")}`);
				},
				close: () => {
					QuarkToast.text(`${translate("maskClick")}`);
				},
			});
		};
		return {
			showBase,
			showTitleCustom,
			showCancelCustom,
			translate,
		};
	},
});
</script>

<style src="./demo.scss"></style>
