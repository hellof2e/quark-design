<template>
	<div class="demo skeleton-demo" style="background: #fff">
		<h2>{{ translate("basic") }}</h2>
		<div class="quark-cell base-cell">
			<quark-skeleton :row="2"></quark-skeleton>
		</div>

		<h2>{{ translate("avator") }}</h2>
		<div class="quark-cell base-cell">
			<quark-skeleton title avatar :row="2"></quark-skeleton>
		</div>

		<h2>{{ translate("rowwidths") }}</h2>
		<div class="quark-cell base-cell">
			<quark-skeleton
				title
				avatar
				:row="2"
				rowwidths="100%,20%"
			></quark-skeleton>
		</div>

		<h2>{{ translate("childComponent") }}</h2>
		<quark-switch :checked="data.checked" @change="handleSwitch"></quark-switch>
		<div class="quark-cell base-cell">
			<quark-skeleton title avatar :row="2" :hide="data.hide">
				<div class="demo-preview">
					<img
						src="https://m.hellobike.com/resource/helloyun/13459/BI7jn_quark-logo.png"
						alt=""
					/>
					<div class="demo-content">
						<h3>{{ translate("about") }}</h3>
						<p>{{ translate("des") }}</p>
					</div>
				</div>
			</quark-skeleton>
		</div>
	</div>
</template>
<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("skeleton");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onBeforeMount } from "vue";

export default createDemo({
	setup() {
		const data = ref({
			checked: false,
			hide: false,
		});
		onBeforeMount(() => {
			useTranslate({
				"zh-CN": {
					basic: "基础用法",
					avator: "显示头像、标题",
					rowwidths: "设置宽度",
					childComponent: "显示子组件",
					about: "关于 Quark",
					des: "Quark 是一款基于 Web Components 的跨框架 UI 组件库。",
				},
				"en-US": {
					basic: "Basic Usage",
					avator: "Show Avatar、Title",
					rowwidths: "Set row width",
					childComponent: "Show childComponent",
					about: "About Quark",
					des: "Quark is a cross-frame UI component library based on Web Components.",
				},
			});
		});
		const handleSwitch = (e) => {
			data.value.checked = e.detail.value;
			data.value.hide = e.detail.value;
		};

		return {
			data,
			handleSwitch,
			translate,
		};
	},
});
</script>
<style src="./demo.scss"></style>
