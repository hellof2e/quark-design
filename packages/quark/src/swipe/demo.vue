<template>
	<div class="demo swipe-demo" style="padding-left: 0; padding-right: 0">
		<h2>{{ translate("basic") }}</h2>
		<quark-swipe inactivecolor="#fff">
			<quark-swipe-item>
				<div class="one">1</div>
			</quark-swipe-item>
			<quark-swipe-item>
				<div class="two">2</div>
			</quark-swipe-item>
			<quark-swipe-item>
				<div class="one">3</div>
			</quark-swipe-item>
			<quark-swipe-item>
				<div class="two">4</div>
			</quark-swipe-item>
		</quark-swipe>

		<h2>{{ translate("indicator") }}</h2>
		<quark-swipe type="round" inactivecolor="#fff">
			<quark-swipe-item>
				<div class="one">1</div>
			</quark-swipe-item>
			<quark-swipe-item>
				<div class="two">2</div>
			</quark-swipe-item>
			<quark-swipe-item>
				<div class="one">3</div>
			</quark-swipe-item>
			<quark-swipe-item>
				<div class="two">4</div>
			</quark-swipe-item>
		</quark-swipe>

		<h2>{{ translate("auto") }}</h2>
		<quark-swipe id="quark-swipe-event" autoplay @change="onChange">
			<quark-swipe-item>
				<div class="one">1</div>
			</quark-swipe-item>
			<quark-swipe-item>
				<div class="two">2</div>
			</quark-swipe-item>
			<quark-swipe-item>
				<div class="one">3</div>
			</quark-swipe-item>
			<quark-swipe-item>
				<div class="two">4</div>
			</quark-swipe-item>
		</quark-swipe>

		<h2>{{ translate("settings") }}</h2>
		<quark-swipe :defaultindex="2">
			<quark-swipe-item>
				<div class="one">1</div>
			</quark-swipe-item>
			<quark-swipe-item>
				<div class="two">2</div>
			</quark-swipe-item>
			<quark-swipe-item>
				<div class="one">3</div>
			</quark-swipe-item>
			<quark-swipe-item>
				<div class="two">4</div>
			</quark-swipe-item>
		</quark-swipe>
		<h2>{{ translate("slider") }}</h2>
		<div class="custom-container">
			<quark-swipe class="custom-style">
				<quark-swipe-item>
					<div class="one">1</div>
				</quark-swipe-item>
				<quark-swipe-item>
					<div class="two">2</div>
				</quark-swipe-item>
				<quark-swipe-item>
					<div class="one">3</div>
				</quark-swipe-item>
				<quark-swipe-item>
					<div class="two">4</div>
				</quark-swipe-item>
			</quark-swipe>
		</div>
		<h2>{{ translate("color") }}</h2>
		<quark-swipe activecolor="red">
			<quark-swipe-item>
				<div class="one">1</div>
			</quark-swipe-item>
			<quark-swipe-item>
				<div class="two">2</div>
			</quark-swipe-item>
			<quark-swipe-item>
				<div class="one">3</div>
			</quark-swipe-item>
			<quark-swipe-item>
				<div class="two">4</div>
			</quark-swipe-item>
		</quark-swipe>
		<h2>{{ translate("custom") }}</h2>
		<quark-swipe id="custom-indicator" @change="customChange">
			<quark-swipe-item>
				<div class="one">1</div>
			</quark-swipe-item>
			<quark-swipe-item>
				<div class="two">2</div>
			</quark-swipe-item>
			<quark-swipe-item>
				<div class="one">3</div>
			</quark-swipe-item>
			<quark-swipe-item>
				<div class="two">4</div>
			</quark-swipe-item>
			<div id="indicator" slot="indicators" class="custom-indicator">1 / 4</div>
		</quark-swipe>
	</div>
</template>

<script>
import { onBeforeMount } from "vue";
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("swipe");
import { useTranslate } from "@/sites/assets/util/useTranslate";

export default createDemo({
	setup() {
		onBeforeMount(() => {
			useTranslate({
				"zh-CN": {
					basic: "基本使用",
					indicator: "圆形指示器",
					auto: "自动播放",
					settings: "设置默认选中的swipeItem",
					slider: "自定义滑块大小",
					color: "设置指示器颜色",
					custom: "自定义指示器",
				},
				"en-US": {
					basic: "Basic Usage",
					indicator: "Circular Indicator",
					auto: "Auto PLay",
					settings: "Set Default Swipe Item",
					slider: "Custom Slider Size",
					color: "Set Indicator Color",
					custom: "Custom Indicator",
				},
			});
		});
		const onChange = (e) => {};
		const customChange = (e) => {
			const indicator = document.getElementById("indicator");
			indicator.innerHTML = `${e.detail.index + 1} / 4`;
		};
		return {
			onChange,
			customChange,
			translate,
		};
	},
});
</script>

<style src="./demo.scss"></style>
