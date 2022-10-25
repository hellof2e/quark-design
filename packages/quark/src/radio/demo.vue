<template>
	<div class="demo radio-demo">
		<h2>{{ translate("title.basic") }}</h2>
		<div class="radio-container">
			<quark-radio-group :value="data.value1" @change="onChange1">
				<quark-radio name="apple" class="first-radio">{{
					translate("group.apple")
				}}</quark-radio>
				<quark-radio name="banana">{{ translate("group.banana") }}</quark-radio>
			</quark-radio-group>
		</div>

		<h2>{{ translate("title.type") }}</h2>
		<div class="radio-container">
			<quark-radio-group :value="data.value2" @change="onChange2">
				<quark-radio name="apple" class="first-radio">{{
					translate("type.round")
				}}</quark-radio>
				<quark-radio name="banana" shape="square">{{
					translate("type.square")
				}}</quark-radio>
			</quark-radio-group>
		</div>

		<h2>{{ translate("title.size") }}</h2>
		<div class="radio-container">
			<quark-radio-group :value="data.value3" @change="onChange3">
				<quark-radio
					name="apple"
					shape="square"
					size="big"
					class="first-radio"
					>{{ translate("size.square") }}</quark-radio
				>
				<quark-radio name="banana" size="big">{{
					translate("size.round")
				}}</quark-radio>
			</quark-radio-group>
		</div>

		<h2>{{ translate("title.disabled") }}</h2>
		<div class="radio-container">
			<quark-radio-group :value="data.value4" @change="onChange4">
				<quark-radio name="apple" :disabled="data.flag" class="first-radio">{{
					translate("disabled.checked")
				}}</quark-radio>
				<quark-radio name="banana" :disabled="data.flag">{{
					translate("disabled.unchecked")
				}}</quark-radio>
			</quark-radio-group>
		</div>
		<div class="radio-container">
			<quark-radio
				:checked="true"
				shape="square"
				disabled
				class="first-radio"
				>{{ translate("disabled.squareChecekd") }}</quark-radio
			>
			<quark-radio :checked="false" shape="square" disabled>{{
				translate("disabled.squareUnchecked")
			}}</quark-radio>
		</div>

		<h2>{{ translate("title.selectedColor") }}</h2>
		<div class="radio-container my-color">
			<quark-radio :checked="true">{{
				translate("title.selectedColor")
			}}</quark-radio>
		</div>
	</div>
</template>

<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("radio");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onBeforeMount } from "vue";
import Quarkradio from "./index.js";

export default createDemo({
	setup() {
		const data = ref({
			value1: "apple",
			value2: "apple",
			value3: "apple",
			value4: "apple",
			flag: true,
		});
		onBeforeMount(() => {
			useTranslate({
				"zh-CN": {
					title: {
						basic: "单选框基础用法",
						type: "单选框形状",
						size: "单选框大小",
						disabled: "单选框禁用状态",
						selectedColor: "单选框选中颜色自定义",
					},
					type: {
						round: "圆形(默认)",
						square: "方形",
					},
					size: {
						round: "圆形(大)",
						square: "方形(大)",
					},
					disabled: {
						checked: "已选-禁用",
						unchecked: "未选-禁用",
						squareChecekd: "方形-已选-禁用",
						squareUnchecked: "方形-未选-禁用",
					},
					group: {
						apple: "苹果",
						banana: "香蕉",
					},
				},
				"en-US": {
					title: {
						basic: "Basic Usage",
						type: "Checkbox Type",
						size: "Checkbox Size",
						disabled: "Disabled Checkbox",
						selectedColor: "Custom Selected Color",
					},
					type: {
						round: "Round(Default)",
						square: "Square",
					},
					size: {
						round: "Round(Big)",
						square: "Square(Big)",
					},
					disabled: {
						checked: "Checked - Disabled",
						unchecked: "Unchecked - Disabled",
						squareChecekd: "Square - Checked -Disabled",
						squareUnchecked: "Square - Unchecked -Disabled",
					},
					group: {
						apple: "Apple",
						banana: "Banana",
					},
				},
			});
		});
		const onChange1 = ({ detail }) => {
			data.value.value1 = detail.value;
		};
		const onChange2 = ({ detail }) => {
			data.value.value2 = detail.value;
		};
		const onChange3 = ({ detail }) => {
			data.value.value3 = detail.value;
		};
		const onChange4 = ({ detail }) => {
			data.value.value4 = detail.value;
		};
		const changeDisable = () => {
			data.value.flag = !data.value.flag;
		};
		return {
			data,
			onChange1,
			onChange2,
			onChange3,
			onChange4,
			changeDisable,
			translate,
		};
	},
});
</script>
<style src="./demo.scss"></style>
