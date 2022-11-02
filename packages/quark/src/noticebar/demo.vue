<template>
	<div class="demo no-padding">
		<h2>{{ translate("title.basic") }}</h2>
		<quark-noticebar :text="data.text"></quark-noticebar>

		<h2>{{ translate("title.multiple") }}</h2>
		<quark-noticeBar :text="data.multipleText" :multiple="2"></quark-noticeBar>

		<h2>{{ translate("title.style") }}</h2>
		<quark-noticebar
			:text="data.text"
			color="#1989fa"
			bgcolor="#ecf9ff"
		></quark-noticebar>

		<h2>{{ translate("title.marquee") }}</h2>
		<quark-noticebar>
			<quark-marquee slot="text" :title="data.multipleText"></quark-marquee>
		</quark-noticebar>

		<h2>{{ translate("title.icon") }}</h2>
		<quark-noticebar
			:text="translate('text.content')"
			righthide
			style="margin-bottom: 10px"
		></quark-noticebar>
		<quark-noticebar
			:text="translate('text.content')"
			lefthide
		></quark-noticebar>

		<h2>{{ translate("title.custom") }}</h2>
		<quark-noticebar
			class="noticebar-left-style-setting"
			:text="translate('text.content')"
		>
			<div slot="left">{{ translate("text.left") }}</div>
			<div slot="right">{{ translate("text.right") }}</div>
		</quark-noticebar>

		<quark-noticebar
			class="noticebar-right-style-setting"
			lefthide
			:text="translate('text.error')"
		>
			<span slot="right"
				>{{ translate("text.set")
				}}<quark-icon-arrow-right size="15" name="right"
			/></span>
		</quark-noticebar>

		<h2>{{ translate("title.right") }}</h2>
		<quark-noticebar
			:text="translate('text.rightClick')"
			@rightclick="onRightClick"
		>
		</quark-noticebar>
	</div>
</template>

<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("noticebar");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onBeforeMount } from "vue";
import '@quarkd/icons/lib/arrow-left'
import Toast from "../toast";

export default createDemo({
	setup() {
		const data = ref([]);
		const onRightClick = () => {
			Toast.text(`${translate("text.clickToast")}`);
		};
		onBeforeMount(() => {
			useTranslate({
				"zh-CN": {
					title: {
						basic: "基础用法",
						multiple: "文字行数设置",
						style: "样式设置",
						marquee: "文字超长滚动",
						icon: "图标隐藏",
						custom: "两端自定义",
						right: "右侧事件绑定",
					},
					text: {
						content: "大学之道，在明明德，在亲民，在止于至善。",
						left: "左侧内容",
						right: "右侧内容",
						error: "当前网络不可用，请检查网络设置",
						set: "去设置",
						rightClick: "试着点击一下右箭头",
						multiple:
							"大学的目的，在于显明高尚的品德，在于使人们革除旧习，在于达到善的最高境界。大学的目的，在于显明高尚的品德，在于使人们革除旧习，在于达到善的最高境界。",
						clickToast: "点击测试",
					},
				},
				"en-US": {
					title: {
						basic: "Basic Usage",
						multiple: "Multiple Text",
						style: "Style",
						marquee: "Marquee",
						icon: "Hide Icon",
						custom: "Custom Ends",
						right: "Right Event",
					},
					text: {
						content: "The way of the university is to be bright and virtuous.",
						left: "Left Content",
						right: "Right Content",
						error:
							"Current network is unavailable, please check the network settings",
						set: "Go to Settings",
						rightClick: "Try to click the right arrow",
						multiple:
							"The purpose of a university is to demonstrate noble character, to get rid of old habits, and to reach the highest state of goodness. The purpose of a university is to demonstrate noble character, to get rid of old habits, and to reach the highest state of goodness.",
						clickToast: "Click to test",
					},
				},
			});
			data.value = {
				lefttext: false,
				right: "",
				text: `${translate("text.content")}`,
				multipleText: `${translate("text.multiple")}`,
			};
		});
		return {
			data,
			onRightClick,
			translate,
		};
	},
});
</script>
<style src="./demo.scss"></style>
