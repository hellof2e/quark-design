<template>
	<div class="demo toast-demo">
		<h2>{{ translate("functionCall") }}</h2>
		<div class="quark-cell" @click="handleTextClick">
			<div class="nut-cell__title">Text {{ translate("textTip") }}</div>
			<quark-icon-arrow-right size="20" name="right"></quark-icon-arrow-right>
		</div>
		<div class="quark-cell" @click="handleSuccessClick">
			<div class="nut-cell__title">Success {{ translate("successTip") }}</div>
			<quark-icon-arrow-right size="20" name="right"></quark-icon-arrow-right>
		</div>
		<div class="quark-cell" @click="handleErrorClick">
			<div class="nut-cell__title">Error {{ translate("errorTip") }}</div>
			<quark-icon-arrow-right size="20" name="right"></quark-icon-arrow-right>
		</div>
		<div class="quark-cell" @click="handleWarningClick">
			<div class="nut-cell__title">Warning {{ translate("warningTip") }}</div>
			<quark-icon-arrow-right size="20" name="right"></quark-icon-arrow-right>
		</div>
		<div class="quark-cell" @click="handleLoadingClick">
			<div class="nut-cell__title">Loading {{ translate("loadingTip") }}</div>
			<quark-icon-arrow-right size="20" name="right"></quark-icon-arrow-right>
		</div>
		<h2>{{ translate("closeCallback") }}</h2>
		<div class="quark-cell" @click="cbClick">
			<div class="nut-cell__title">{{ translate("closeCallback") }}</div>
			<quark-icon-arrow-right size="20" name="right"></quark-icon-arrow-right>
		</div>
	</div>
</template>

<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("toast");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onBeforeMount } from "vue";
import QuarkToast from "./index.tsx";
import '@quarkd/icons/lib/arrow-right'

export default createDemo({
	setup() {
		const tag = ref(null);
		onBeforeMount(() => {
			useTranslate({
				"zh-CN": {
					functionCall: "函数式调用",
					closeCallback: "关闭后回调函数",
					textTip: "文字提示",
					successTip: "成功提示",
					errorTip: "失败提示",
					warningTip: "警告提示",
					loadingTip: "加载提示",
					networkTip: "网络失败，请稍后再试～",
					executeCallback: "回调函数执行",
					close: "一秒后关闭",
				},
				"en-US": {
					functionCall: "Function Call",
					closeCallback: "Close Callback",
					textTip: "Text Tip",
					successTip: "Success Tip",
					errorTip: "Error Tip",
					warningTip: "Warning Tip",
					loadingTip: "Loading Tip",
					networkTip: "Network failed, please try again later~",
					executeCallback: "Execute Callback",
					close: "Close after a second",
				},
			});
		});
		// QuarkToast.allowMultiple()
		const cbClick = () => {
			QuarkToast.text(`${translate("networkTip")}`, {
				close: () => QuarkToast.text(`${translate("executeCallback")}`),
			});
		};
		const handleTextClick = () => {
			QuarkToast.text(`${translate("networkTip")}`);
		};
		const handleSuccessClick = () => {
			QuarkToast.success(`${translate("successTip")}`);
		};
		const handleErrorClick = () => {
			QuarkToast.error(`${translate("errorTip")}`);
		};
		const handleWarningClick = () => {
			QuarkToast.warning(`${translate("warningTip")}`);
		};
		const handleLoadingClick = () => {
			const toast = QuarkToast.loading(`${translate("close")}`, {
				duration: 0,
				size: 40,
			});
			setTimeout(() => {
				toast.hide();
			}, 3000);
		};
		const tagClick = () => {
			tag.value.show = true;
		};
		return {
			tag,
			cbClick,
			handleTextClick,
			handleSuccessClick,
			handleErrorClick,
			handleWarningClick,
			handleLoadingClick,
			translate,
		};
	},
});
</script>
<style src="./demo.scss"></style>
