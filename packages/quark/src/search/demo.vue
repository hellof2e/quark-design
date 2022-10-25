<template>
	<div class="demo no-padding search-demo">
		<h2>{{ translate("basic") }}</h2>
		<quark-search @change="onChange1">
			<div slot="action">
				<div>{{ translate("toast.cancel") }}</div>
			</div>
		</quark-search>

		<h2>{{ translate("background") }}</h2>
		<quark-search dark showback hideaction></quark-search>

		<h2>{{ translate("color") }}</h2>
		<quark-search
			class="custom-color"
			showback
			hideaction
			iconColor="aqua"
		></quark-search>

		<h2>{{ translate("round") }}</h2>
		<quark-search shape="round">
			<div slot="action">
				<div>{{ translate("toast.cancel") }}</div>
			</div>
		</quark-search>

		<h2>{{ translate("readonly") }}</h2>
		<quark-search readonly>
			<div slot="action">
				<div>{{ translate("toast.cancel") }}</div>
			</div>
		</quark-search>

		<h2>{{ translate("disabled") }}</h2>
		<quark-search disabled>
			<div slot="action">
				<div>{{ translate("toast.cancel") }}</div>
			</div>
		</quark-search>

		<h2>{{ translate("hide") }}</h2>
		<quark-search hideaction :placeholder="translate('hide')"></quark-search>

		<h2>{{ translate("show") }}</h2>
		<quark-search showback>
			<div slot="action">
				<div>{{ translate("toast.cancel") }}</div>
			</div>
		</quark-search>

		<h2>{{ translate("slot") }}</h2>
		<quark-search>
			<div slot="action">
				<div>{{ translate("slot") }}</div>
			</div>
		</quark-search>

		<h2>{{ translate("event") }}</h2>
		<quark-search
			id="search-event"
			showback
			@change="onChange"
			@focus="onFocus"
			@blur="onBlur"
			@search="onSearch"
			@cancel="onCancel"
			@back="onBack"
		>
			<div slot="action">
				<div>{{ translate("toast.cancel") }}</div>
			</div>
		</quark-search>
	</div>
</template>

<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("search");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onMounted, onBeforeMount } from "vue";
import QuarkToast from "../toast/index.js";

export default createDemo({
	setup() {
		const defaultValue = ref("");
		onBeforeMount(() => {
			useTranslate({
				"zh-CN": {
					basic: "基础用法",
					background: "更改输入框内部及外部的背景样式",
					color: "自定义颜色",
					round: "圆角",
					readonly: "只读",
					disabled: "禁用",
					hide: "隐藏取消按钮",
					show: "显示返回按钮",
					slot: "自定义按钮",
					event: "事件绑定",
					toast: {
						cancel: "取消",
						return: "返回",
						empty: "空",
					},
				},
				"en-US": {
					basic: "Basic Usage",
					background: "Change background style",
					color: "Custom Color",
					round: "Round",
					readonly: "Readonly",
					disabled: "Disabled",
					hide: "Hide Cancel Button",
					show: "Show Return Button",
					slot: "Custom Button",
					event: "Event Binding",
					toast: {
						cancel: "Cancel",
						return: "Return",
						empty: "Empty",
					},
				},
			});
		});
		const onChange1 = ({ detail }) => {
			defaultValue.value = detail.value;
		};

		const onChange2 = ({ detail }) => {
			defaultValue.value = detail.value;
			QuarkToast.text(detail.value || `${translate("toast.empty")}`);
		};

		const onChange = ({ detail }) => {
			defaultValue.value = detail.value;
			QuarkToast.text(detail.value || `${translate("toast.empty")}`);
		};

		const onFocus = () => {
			QuarkToast.text("focus");
		};

		const onBlur = () => {
			QuarkToast.text("blur");
		};

		const onSearch = () => {
			QuarkToast.text("search");
		};

		const onCancel = () => {
			QuarkToast.text(`${translate("toast.cancel")}`);
		};

		const onBack = () => {
			QuarkToast.text(`${translate("toast.return")}`);
		};

		return {
			defaultValue,
			onChange1,
			onChange2,
			onChange,
			onFocus,
			onBlur,
			onSearch,
			onCancel,
			onBack,
			translate,
		};
	},
});
</script>
<style src="./demo.scss"></style>
