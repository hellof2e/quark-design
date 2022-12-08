<template>
	<doc-header></doc-header>

	<doc-nav></doc-nav>

	<div id="doc-content" class="doc-content">
		<div
			class="doc-content-document"
			:class="{ isComponent: isShow(), full: !isShow() }"
		>
			<div class="doc-content-tabs" v-if="isShow()">
				<div
					class="tab-item"
					:class="{ cur: curKey === item.key }"
					v-for="item in tabs"
					:key="item.key"
					@click="handleTabs(item.key)"
				>
					{{ item.text }}
				</div>
			</div>
			<router-view />
		</div>

		<doc-demo-preview
			v-show="isShow()"
			:url="demoUrl"
			type="vue"
			:class="{ fixed: fixed }"
		></doc-demo-preview>
	</div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, ref } from "vue";
import {
	onBeforeRouteUpdate,
	RouteLocationNormalized,
	useRoute,
	useRouter,
} from "vue-router";
import Header from "@/sites/doc/components/Header.vue";
import Nav from "@/sites/doc/components/Nav.vue";
import DemoPreview from "@/sites/doc/components/DemoPreview.vue";
import { RefData } from "@/sites/assets/util/ref";
import { nav } from "@/config.json";

export default defineComponent({
	name: "doc",
	components: {
		[Header.name]: Header,
		[Nav.name]: Nav,
		[DemoPreview.name]: DemoPreview,
	},
	setup() {
		const docMd = localStorage.getItem("docMd");
		const isZhLang =
			localStorage.getItem("language") === "zh-CN" ? true : false;
		const route = useRoute();
		const router = useRouter();
		const state = reactive({
			fixed: false, // 是否吸顶
			hidden: false, // 是否隐藏
			// 组件名称
			componentName: {
				name: "",
				cName: "",
			},
		});

		const data = reactive({
			demoUrl: "demo.html",
			curKey: docMd,
			tabs: [
				{
					key: "vue",
					text: "vue",
				},
				{
					key: "react",
					text: "react",
				},
			],
		});

		const isShow = () => {
			return !route.path.includes("guide");
		};

		const watchDemoUrl = (router: RouteLocationNormalized) => {
			const { origin, pathname, href } = window.location;
			RefData.getInstance().currentRoute.value = router.name as string;
			let url = `${origin}${pathname}demo.html#${router.path
				.toLocaleLowerCase()
				.split("/")
				.pop()}?lang=${localStorage.getItem("language")}`;
			data.demoUrl = url;
		};

		const watchDocMd = (curKey: string) => {
			const path = route.path;
			if (curKey.includes("react")) {
				router.replace(`${path}-react`);
			} else {
				router.replace(path.substr(0, path.length - 6));
			}
			setTimeout(() => {
				window.location.reload();
			}, 500);
		};

		// react / vue 文档切换
		const handleTabs = (curKey: string) => {
			if (data.curKey == curKey) return;
			data.curKey = curKey;
			localStorage.setItem("docMd", curKey);
			watchDocMd(curKey);
		};

		const isReact = (route: RouteLocationNormalized) => {
			return route.path.indexOf("react") > -1;
		};

		onMounted(async () => {
			componentTitle(route);
			watchDemoUrl(route);
			data.curKey = isReact(route) ? "react" : "vue";
			document.addEventListener("scroll", scrollTitle);

			// 默认 vue 文档
			if (localStorage.getItem("docMd") === null) {
				localStorage.setItem("docMd", "vue");
			}
		});

		const scrollTitle = () => {
			let top = document.documentElement.scrollTop;
			if (top > 127) {
				state.fixed = true;
				if (top < 142) {
					state.hidden = true;
				} else {
					state.hidden = false;
				}
			} else {
				state.fixed = false;
				state.hidden = false;
			}
		};

		// 获得组件名称
		const componentTitle = (to: RouteLocationNormalized) => {
			const routename = to.path.toLocaleLowerCase().split("/").pop() || "";
			state.componentName.name = routename.split("-")[0];
			for (let i = 0; i < nav.length; i++) {
				const activePackage: any = nav[i].packages.find(
					(item: any) => item.name.toLowerCase() == state.componentName.name
				);
				if (activePackage) {
					state.componentName.name = activePackage.name;
					state.componentName.cName = activePackage.cName;
					break;
				}
			}
		};

		onBeforeRouteUpdate((to) => {
			watchDemoUrl(to);
			data.curKey = isReact(to) ? "react" : "vue";
			componentTitle(to);
			document.getElementById("doc-content")?.scrollTo({ top: 0 });
		});

		return {
			...toRefs(state),
			...toRefs(data),
			handleTabs,
			isShow,
			isZhLang,
		};
	},
});
</script>
<style lang="scss" scoped>
.doc {
	&-content {
		height: calc(100vh - 68px);
		overflow: auto;
		margin-left: 290px;
		display: flex;
		flex-direction: column;

		&-document {
			min-height: 800px;
			flex-shrink: 0;
		}

		&-tabs {
			position: absolute;
			right: 475px;
			top: 48px;
			display: flex;
			height: 40px;
			align-items: center;
			justify-content: space-between;
			z-index: 1;
			box-sizing: border-box;
			border-radius: 2px;
			background: #eee;
			box-shadow: rgb(0 0 0 / 15%) 0px 2px 4px;
			&.single {
				padding: 0;
				.tab-item {
					line-height: 40px;
					cursor: auto;
				}
			}
			.tab-item {
				position: relative;
				padding: 0 10px;
				line-height: 36px;
				cursor: pointer;
				font-size: 16px;
				color: #323232;
				text-align: center;
				border-radius: 2px;
				background: #eee;
				&.cur {
					font-weight: bold;
					color: #323232;
					background: #fff;
				}
			}
		}
	}
	&-title {
		width: 100%;
		height: 130px;
		z-index: 2;
		&-position {
			top: 0px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 24px 40px;
			border-bottom: 1px solid #eee;
			background: #fff;
			visibility: visible;
			opacity: 1;
			transition: opacity 0.8s;
			&.fixed {
				width: calc(100% - 290px);
				position: fixed;
				padding: 24px 48px;
				.title {
					font-size: 24px;
					font-weight: bold;
				}
			}
			&.hidden {
				visibility: hidden;
				opacity: 0;
			}
			.title {
				font-size: 40px;
				font-weight: bold;
			}
		}
	}
}
</style>
