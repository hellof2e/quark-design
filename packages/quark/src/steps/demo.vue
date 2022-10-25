<template>
	<div class="demo no-padding steps-demo">
		<h2>{{ translate("title.basic") }}</h2>
		<div class="item-wrap item-horzontal">
			<quark-steps>
				<quark-step status="done" :title="translate('steps.step1')" order="1">
				</quark-step>
				<quark-step status="doing" :title="translate('steps.step2')" order="2">
				</quark-step>
				<quark-step
					status="todo"
					:title="translate('steps.step3')"
					order="3"
				></quark-step>
			</quark-steps>
		</div>

		<h2>{{ translate("title.desc") }}</h2>
		<div class="item-wrap item-horzontal">
			<quark-steps>
				<quark-step
					status="done"
					:title="translate('status.done.title')"
					:content="translate('status.done.content')"
					order="1"
				></quark-step>
				<quark-step
					:status="data.status"
					:title="data.title"
					:content="data.content"
					order="2"
				></quark-step>
				<quark-step
					status="todo"
					:title="translate('status.todo.title')"
					:content="translate('status.todo.content')"
					order="3"
				></quark-step>
			</quark-steps>
		</div>

		<h2>{{ translate("title.vertical") }}</h2>
		<div class="item-wrap">
			<quark-steps direction="vertical">
				<quark-step
					status="done"
					:title="translate('status.done.title')"
					:content="translate('status.done.content')"
					order="1"
				></quark-step>
				<quark-step
					status="doing"
					:title="translate('status.doing.title')"
					:content="translate('status.doing.content')"
					order="2"
				></quark-step>
				<quark-step
					status="todo"
					:title="translate('status.todo.title')"
					:content="translate('status.todo.content')"
					order="3"
				></quark-step>
			</quark-steps>
		</div>
	</div>
</template>
<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("steps");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onMounted, onBeforeMount } from "vue";

export default createDemo({
	setup() {
		const data = ref({
			title: `${translate("status.doing.title")}`,
			content: `${translate("status.doing.content")}`,
			status: "doing",
		});
		onBeforeMount(() => {
			useTranslate({
				"zh-CN": {
					title: {
						basic: "基本用法",
						desc: "标题和描述信息",
						vertical: "竖向步骤条",
					},
					steps: {
						step1: "步骤一",
						step2: "步骤二",
						step3: "步骤三",
					},
					status: {
						done: {
							title: "已完成",
							content: "您的订单已经打包完成，商品已发出",
						},
						todo: {
							title: "未开始",
							content: "收货地址为：杭州市益展商务大厦",
						},
						doing: {
							title: "进行中",
							content: "您的订单正在配送中...",
						},
					},
				},
				"en-US": {
					title: {
						basic: "Basic Usage",
						desc: "Title and Description",
						vertical: "Vertical Steps",
					},
					steps: {
						step1: "Step One",
						step2: "Step Two",
						step3: "Step Three",
					},
					status: {
						done: {
							title: "Finished",
							content:
								"Your order has been packed and the item has been dispatched",
						},
						todo: {
							title: "Not Started",
							content:
								"The delivery address is: 16F, Yizhan Business Building, Hangzhou",
						},
						doing: {
							title: "Processing",
							content: "Your order is being shipped...",
						},
					},
				},
			});
		});
		onMounted(() => {
			setTimeout(() => {
				data.value.title = `${translate("status.done.title")}`;
				data.value.content = `${translate("status.done.content")}`;
				data.value.status = "done";
			}, 5000);
		});
		return {
			data,
			translate,
		};
	},
});
</script>
<style src="./demo.scss"></style>
