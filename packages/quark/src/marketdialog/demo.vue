<template>
	<div class="scope-market demo">
		<h2>{{ translate("basic") }}</h2>
		<quark-cell-group>
			<quark-cell
				islink
				type="primary"
				@click="showDialog()"
				:title="translate('type.basic')"
			></quark-cell>
			<quark-cell
				islink
				type="primary"
				@click="showDialog2()"
				:title="translate('type.irregular')"
			></quark-cell>
		</quark-cell-group>
		<h2>{{ translate("tab") }}</h2>
		<quark-cell-group>
			<quark-cell
				islink
				type="primary"
				@click="showDialog3()"
				:title="translate('type.custom')"
			></quark-cell>
		</quark-cell-group>
		<quark-market-dialog :open="open" @close="close">
			<video v-if="open" controls width="320" slot="market">
				<source
					src="https://m.hellobike.com/resource/helloyun/15697/B_TtZ_big_buck_bunny.mp4"
					type="video/mp4"
				/>
			</video>
		</quark-market-dialog>
	</div>
</template>

<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("marketdialog");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onMounted, onBeforeMount } from "vue";
import { onBeforeRouteLeave } from "vue-router"
import MarketDialog from "./index";

export default createDemo({
	setup() {
		const open = ref(false);
		let value = 0;
		onMounted(() => {
			let t = setInterval(() => {
				if (value >= 100) clearInterval(t);
				else value += 10;
			}, 1000);
		});
		const showDialog = () => {
			MarketDialog({
				url: "https://m.hellobike.com/resource/helloyun/15697/95WGX_i-hb-zyj220904-2-2.jpeg?x-oss-process=image/quality,q_80",
			});
		};
		const showDialog2 = () => {
			MarketDialog({
				url: "https://m.hellobike.com/resource/helloyun/15697/qxlI2_no_network.png",
			});
		};
		const showDialog3 = () => {
			open.value = true;
		};
		const close = () => {
			open.value = false;
		};
		onBeforeMount(() => {
			useTranslate({
				"zh-CN": {
					basic: "基础用法",
					tab: "标签式调用",
					type: {
						basic: "基础弹窗",
						irregular: "不规则弹窗",
						custom: "自定义内容",
					},
				},
				"en-US": {
					basic: "Basic Usage",
					tab: "Tab Call",
					type: {
						basic: "Basic Dialog",
						irregular: "Irregular Dialog",
						custom: "Custom Content",
					},
				},
			});
		});
    onBeforeRouteLeave(() => {
      const nodes = document.querySelectorAll('quark-market-dialog');
      nodes.forEach(i => i.open = false)
    })
		return {
			open,
			showDialog,
			showDialog2,
			showDialog3,
			close,
			translate,
		};
	},
});
</script>

<style src="./demo.scss"></style>
