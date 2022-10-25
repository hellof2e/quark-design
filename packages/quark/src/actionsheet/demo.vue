<template>
	<div class="demo no-padding action-sheet-demo">
		<h2>{{ translate("basic") }}</h2>
		<quark-cell-group>
			<quark-cell
				type="primary"
				@click="showBase"
				:title="translate('basic')"
			></quark-cell>
			<quark-cell
				type="primary"
				@click="showTitle"
				:title="translate('title')"
			></quark-cell>
			<quark-cell
				type="primary"
				@click="showCancel"
				:title="translate('cancel')"
			></quark-cell>
		</quark-cell-group>
		<h2>{{ translate("customStyle") }}</h2>
		<quark-cell-group>
			<quark-cell
				type="primary"
				@click="showTitleCustom"
				:title="translate('titleStyle')"
			></quark-cell>
			<quark-cell
				type="primary"
				@click="showActionCustom"
				:title="translate('optionStyle')"
			></quark-cell>
			<quark-cell
				type="primary"
				@click="showCancelCustom"
				:title="translate('cancelStyle')"
			></quark-cell>
		</quark-cell-group>
	</div>
</template>

<script>
import ActionSheet from "./index";
import QuarkToast from "../toast/index.js";
import { createComponent } from "@/utils/create";
import { onBeforeMount } from "vue";
const { createDemo, translate } = createComponent("actionsheet");
import { useTranslate } from "@/sites/assets/util/useTranslate";

export default createDemo({
	props: {},
	setup() {
		onBeforeMount(() => {
			useTranslate({
				"zh-CN": {
					basic: "基本用法",
					customStyle: "自定义样式",
					title: "带标题",
					cancel: "带取消按钮",
					titleStyle: "标题样式",
					optionStyle: "选项样式",
					cancelStyle: "取消按钮样式",
					options: ["选项一", "选项二", "选项三"],
					titleTxt: "我是标题信息",
					maskClick: "蒙版点击",
				},
				"en-US": {
					basic: "Basic Usage",
					customStyle: "Custom Style",
					title: "Title",
					cancel: "Cancel",
					titleStyle: "Title Style",
					optionStyle: "Option Style",
					cancelStyle: "Cancel Style",
					options: ["Option 1", "Option 2", "Option 3"],
					titleTxt: "Title Message",
					maskClick: "Mask Click",
				},
			});
		});
		const showBase = () => {
			const pop = ActionSheet({
				actions: [
					{ name: `${translate("options")[0]}` },
					{ name: `${translate("options")[1]}` },
					{ name: `${translate("options")[2]}` },
				],
				select: (index, action) => {
					QuarkToast.text(action.name);
				},
			});
		};

		const showTitle = () => {
			const pop = ActionSheet({
				title: `${translate("titleTxt")}`,
				actions: [
					{ name: `${translate("options")[0]}` },
					{ name: `${translate("options")[1]}` },
					{ name: `${translate("options")[2]}` },
				],
				select: (index, action) => {
					QuarkToast.text(action.name);
				},
			});
		};

		const showCancel = () => {
			const pop = ActionSheet({
				title: `${translate("titleTxt")}`,
				actions: [
					{ name: `${translate("options")[0]}` },
					{ name: `${translate("options")[1]}` },
					{ name: `${translate("options")[2]}` },
				],
				cancelText: `${translate("cancel")}`,
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

		const showTitleCustom = () => {
			const pop = ActionSheet({
				title: `${translate("titleTxt")}`,
				titleColor: "red",
				titleFontSize: 20,
				actions: [
					{ name: `${translate("options")[0]}` },
					{ name: `${translate("options")[1]}` },
					{ name: `${translate("options")[2]}` },
				],
				select: (index, action) => {
					QuarkToast.text(action.name);
				},
				close: () => {
					QuarkToast.text(`${translate("maskClick")}`);
				},
			});
		};

		const showActionCustom = () => {
			const pop = ActionSheet({
				title: `${translate("titleTxt")}`,
				actions: [
					{ name: `${translate("options")[0]}`, color: "#999", fontSize: 20 },
					{ name: `${translate("options")[1]}` },
					{ name: `${translate("options")[2]}` },
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
				title: `${translate("titleTxt")}`,
				cancelText: `${translate("cancel")}`,
				actions: [
					{ name: `${translate("options")[0]}` },
					{ name: `${translate("options")[1]}` },
					{ name: `${translate("options")[2]}` },
				],
				cancelTextColor: "red",
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
			translate,
			showBase,
			showTitle,
			showCancel,
			showTitleCustom,
			showActionCustom,
			showCancelCustom,
		};
	},
});
</script>

<style src="./demo.scss"></style>
