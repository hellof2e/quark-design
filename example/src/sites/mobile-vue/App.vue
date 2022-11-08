<template>
	<div v-if="isShow" id="nav">
		<div class="back" @click="goBack">
			<quark-icon-arrow-left name="left"></quark-icon-arrow-left>
		</div>
		{{ title }}
	</div>

	<router-view />
</template>
<script lang="ts">
import {
	defineComponent,
	ref,
	watch,
	computed,
	onMounted,
	onUnmounted,
} from "vue";
import { useRoute, useRouter } from "vue-router";
import { isMobile } from "@/sites/assets/util";
import VConsole from "vconsole";
import connect, { close } from "../../utils/wsClient";
import { initDemoLang } from "@/sites/assets/util/useTranslate";
import "@quarkd/icons/lib/arrow-left";

import EnUSLang from "@/locale/lang/en-US";
import ZhCNLang from "@/locale/lang/zh-CN";
import Locale from "../../../../packages/quark/src/locale";

if (isMobile && import.meta.env.DEV) {
	const vConsole = new VConsole();
}

export default defineComponent({
	name: "app",
	setup() {
		const title = ref("QuarkUI");
		// 获取当前路由
		const route = useRoute();
		const router = useRouter();

		//返回demo页
		const goBack = () => {
			router.back();
		};

		// 是否显示 title
		const isShow = computed(() => {
			return title.value && title.value != "/";
		});

		onMounted(() => {
			if (isMobile && import.meta.env.DEV) {
				connect();
			}

			if (window.location.href.indexOf("en-US") > -1) {
				initDemoLang("en-US");
				Locale.use(new EnUSLang());
			} else {
				initDemoLang("zh-CN");
				Locale.use(new ZhCNLang());
			}
		});

		onUnmounted(() => {
			if (isMobile && import.meta.env.DEV) {
				close();
			}
		});

		// 当前路由发生变化时，调用回调函数
		watch(
			() => route,
			() => {
				// const { origin, hash, pathname } = window.top.location;
				const { hash } = window.top.location;
				if (!isMobile && route.hash != hash) {
					// window.top.location.replace(`${origin}${pathname}#/${route.hash}`);
					title.value = route?.meta?.ComponentName || route.name;
				} else {
					title.value = route?.meta?.ComponentName || route.name;
				}
			},
			{
				immediate: true,
				deep: true,
			}
		);

		return { title, isShow, goBack };
	},
});
</script>

<style lang="scss">
#app {
	background: #fff;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;

	#nav {
		position: fixed;
		z-index: 10;
		left: 0;
		right: 0;
		height: 57px;
		line-height: 57px;
		text-align: center;
		background: #fff;
		font-weight: bold;
		font-size: 20px;
		color: rgba(51, 51, 51, 1);
		box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.07);
		.back {
			position: absolute;
			left: 0;
			height: 100%;
			width: 50px;
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: pointer;
		}
	}

	.demo {
		// height: 100%;
		height: 100vh;
		background: #f5f5f9;
		overflow-x: hidden;
		overflow-y: auto;
		padding: 70px 18px 18px;
		min-height: 668px;

		&.no-padding {
			padding: 57px 0 0 0;
			h2 {
				padding-left: 27px;
			}
		}

		&.bg-w {
			background: #fff;
		}

		&::-webkit-scrollbar {
			width: 0;
			background: transparent;
		}
		> h2 {
			margin-top: 30px;
			margin-bottom: 10px;
			font-size: 14px;
			color: #909ca4;
			padding: 0 10px;
			font-weight: normal;
		}
		> p {
			font-size: 12px;
		}

		.card {
			padding: 25px 18px;
			background: rgba(255, 255, 255, 1);
		}
	}
}
.vue-logo {
	position: absolute;
	z-index: 0;
	width: 50px;
	right: 0;
}
</style>
