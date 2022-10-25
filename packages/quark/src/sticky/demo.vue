<template>
	<div class="demo sticky-demo" style="padding-left: 0; height: 150vh">
		<h2>{{ translate("basic") }}</h2>
		<quark-sticky offsettop="17vw">
			<quark-button type="primary" shape="square">{{
				translate("basic")
			}}</quark-button>
		</quark-sticky>
		<h2>{{ translate("offset") }}</h2>
		<quark-sticky offsettop="45vw">
			<quark-button type="primary" shape="square" style="margin-left: 100px">{{
				translate("offset")
			}}</quark-button>
		</quark-sticky>
	</div>
</template>

<script>
import { onBeforeMount } from "vue";
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("sticky");
import { useTranslate } from "@/sites/assets/util/useTranslate";

export default createDemo({
	setup() {
		onBeforeMount(() => {
			useTranslate({
				"zh-CN": {
					basic: "基础用法",
					offset: "吸顶距离",
				},
				"en-US": {
					basic: "Basic Usage",
					offset: "Offset Top",
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
