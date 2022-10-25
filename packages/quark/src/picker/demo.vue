<template>
	<div class="demo">
		<h2>{{ translate("basic") }}</h2>
		<quark-cell-group>
			<quark-cell
				type="primary"
				:title="translate('basic')"
				islink
				@click="click"
			></quark-cell>
		</quark-cell-group>
		<quark-picker
			:open="open"
			@close="close(0)"
			:title="translate('selectedTime')"
			@confirm="confirm"
			ref="pickerRef"
			@change="change"
		/>
		<h2>{{ translate("head") }}</h2>
		<quark-cell-group>
			<quark-cell
				type="primary"
				:title="translate('head')"
				islink
				@click="customClick"
			></quark-cell>
		</quark-cell-group>
		<quark-picker
			:open="customOpen"
			@close="close(1)"
			ref="customPickerRef"
			bottomhidden
		>
			<div slot="header" class="head-container">
				<span class="cancel" @click="close(1)">{{
					translate("custom.cancel")
				}}</span>
				<span class="picker-title">{{ translate("custom.title") }}</span>
				<span class="ensure" @click="customConfirm">{{
					translate("custom.confirm")
				}}</span>
			</div>
		</quark-picker>
	</div>
</template>

<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("picker");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onMounted, onBeforeMount } from "vue";
import "./index";
import Toast from "../toast/index";

export default createDemo({
	setup() {
		const open = ref(false);
		const customOpen = ref(false);
		const pickerRef = ref(null);
		const customPickerRef = ref(null);
		onBeforeMount(() => {
			useTranslate({
				"zh-CN": {
					basic: "基础使用",
					head: "自定义头部",
					selectedTime: "请选择时间",
					custom: {
						cancel: "取消",
						confirm: "确定",
						title: "请选择城市",
					},
					time: ["上午", "下午"],
					values: ["杭州", "嘉兴", "绍兴", "宁波", "湖州", "千岛湖"],
					selected: "当前选中：",
				},
				"en-US": {
					basic: "Basic Usage",
					head: "Custom head",
					selectedTime: "Please select Time",
					custom: {
						cancel: "Cancel",
						confirm: "Confirm",
						title: "Please select city",
					},
					time: ["a.m.", "p.m."],
					values: [
						"Hangzhou",
						"Jiaxing",
						"Shaoxing",
						"Ningbo",
						"Huzhou",
						"Qiandao Lake",
					],
					selected: "Currently Selected: ",
				},
			});
		});
		onMounted(() => {
			setTimeout(() => {
				//模拟异步获取数据
				const preview = pickerRef.value;
				preview.setColumns([
					{
						defaultIndex: 2,
						values: translate("calendaritem.weekdays"),
					},
					{
						defaultIndex: 0,
						values: translate("time"),
					},
				]);
				const customPreview = customPickerRef.value;
				customPreview.setColumns([
					{
						defaultIndex: 0,
						values: translate("values"),
					},
				]);
			}, 1000);
		});
		const click = () => {
			open.value = true;
		};
		const customClick = () => {
			customOpen.value = true;
		};
		const close = (type) => {
			if (type === 0) {
				open.value = false;
			} else if (type === 1) {
				customOpen.value = false;
			}
		};
		const confirm = ({ detail }) => {
			const values = detail.value
				.map((column) => {
					return column.value;
				})
				.join("，");
			Toast.text(`${translate("selected")}${values}`);
			open.value = false;
		};
		const customConfirm = () => {
			const customPreview = customPickerRef.value;
			const values = customPreview
				.getValues()
				.map((column) => {
					return column.value;
				})
				.join("，");
			Toast.text(`${translate("selected")}${values}`);
			customOpen.value = false;
		};
		const change = ({ detail }) => {
			console.log(detail.value, 33333);
		};
		return {
			open,
			customOpen,
			pickerRef,
			customPickerRef,
			click,
			customClick,
			close,
			confirm,
			customConfirm,
			change,
			translate,
		};
	},
});
</script>
<style src="./demo.scss"></style>
