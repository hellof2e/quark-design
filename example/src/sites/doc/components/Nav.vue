<template>
	<div v-if="isShowSideBar()" class="doc-nav" :class="{ 'fixed-class': fixed }">
		<!-- Doc‘s Switch -->
		<div class="sticky-nav">
			<nav v-if="isShow()">
				<div
					:class="curKey === item.key ? 'sticky-nav-active' : ''"
					:key="item.key"
					v-for="item in tabs"
					@click="handleTabs(item.key)"
				>
					{{ item.text }}
				</div>
			</nav>
		</div>
		<div v-if="isShow()" class="sticky-nav-shadow"></div>

		<!-- Docs' nav -->
		<ol class="side-bar" v-if="isGuideNav">
			<ul>
				<li
					:class="{ active: isActive(_package.name) }"
					v-for="_package in docs.packages"
					:key="_package"
					v-show="_package.show"
				>
					<router-link :to="_package.name.toLowerCase()">
						{{ isZhLang ? _package.cName : _package.name }}
					</router-link>
				</li>
			</ul>
		</ol>

		<!-- Components' nav -->
		<template v-else>
			<ol class="side-bar" v-for="_nav in nav" :key="_nav">
				<li>{{ isZhLang ? _nav.name : _nav.enName }}</li>
				<ul>
					<template
						:class="{ active: isActive(_package.name) }"
						v-for="_package in reorder(_nav.packages)"
						:key="_package"
					>
						<li v-if="_package.show">
							<router-link
								:to="
									docMd === 'vue'
										? _package.name.toLowerCase()
										: `${_package.name.toLowerCase()}-react`
								"
								:class="{ active: isActive(_package.name) }"
							>
								{{ _package.name }}&nbsp;&nbsp;<b v-if="isZhLang">{{
									_package.cName
								}}</b>
							</router-link>
						</li>
					</template>
				</ul>
			</ol>
		</template>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, onMounted, toRefs } from "vue";
import { onBeforeRouteUpdate, useRouter, useRoute } from "vue-router";
import { RefData } from "@/sites/assets/util/ref";
import { nav } from "@/config.json";

const docs = {
	name: "指南",
	enName: "Essentials",
	packages: [
		{
			name: "Introduction",
			cName: "介绍",
			show: true,
		},
		{
			name: "QuickStart",
			cName: "快速上手",
			show: true,
		},
		{
			name: "InternationalAndTheme",
			cName: "国际化/主题",
			show: true,
		},
		{
			name: "Notice",
			cName: "常见问题",
			show: true,
		},
		{
			name: "CHANGELOG",
			cName: "更新日志",
			show: true,
		},
	],
};

export default defineComponent({
	name: "DocNav",
	props: {
		fixed: Boolean,
	},
	setup() {
		const route = useRoute();
		const router = useRouter();
		const state = reactive({
			// fixed: false,
			isGuideNav: false,
		});

		const docMd = localStorage.getItem("docMd");
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

		const isShowSideBar = () => {
			return !route.path.includes("pages");
		};

		const isActive = computed(() => {
			return function (name: string) {
				const currentValue = RefData.getInstance().currentRoute.value;
				const value = currentValue;
				return value == name.toLowerCase();
			};
		});

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

		const handleTabs = (curKey: string) => {
			if (curKey === data.curKey) return;
			data.curKey = curKey;
			localStorage.setItem("docMd", curKey);
			watchDocMd(curKey);
		};

		const reorder = (packages: any) => {
			return packages.sort(function (x: any, y: any) {
				return x["name"].localeCompare(y["name"]);
			});
		};

		onMounted(() => {
			if (route.path) getIsGuaid(route.path);
		});

		const getIsGuaid = (path: string) => {
			state.isGuideNav = path.indexOf("guide") > -1;
		};

		onBeforeRouteUpdate((to: any) => {
			getIsGuaid(to.path);
		});

		return {
			...toRefs(data),
			...toRefs(state),
			isZhLang: localStorage.getItem("language") === "zh-CN",
			isActive,
			docMd: localStorage.getItem("docMd"),
			nav: reactive(nav),
			docs: reactive(docs),
			reorder,
			isShow,
			isShowSideBar,
			handleTabs,
		};
	},
});
</script>

<style lang="scss">
.doc-nav {
	bottom: 0px;
	left: 0px;
	z-index: 10;
	width: 260px;
	position: fixed;
	top: 75px;
	overflow: auto;
	transition: all 150ms;

	&.fixed-class {
		top: 0;
	}
	ol {
		margin-bottom: 20px;
		padding-left: 32px;

		li {
			font-size: 14px;
			font-weight: bold;
			position: relative;

			&.active {
				&::before {
					position: absolute;
					content: "";
					left: 0;
					top: 50%;
					width: 22px;
					margin-top: -5px;
					height: 10px;
					transform: rotate(90deg);
				}
			}
		}

		> ul {
			padding-left: 26px;

			li {
				/* padding-left: 29px; */
				cursor: pointer;

				&:hover {
					a {
						color: #646cff;
					}
				}

				a {
					height: 48px;
					line-height: 48px;
					display: flex;

					&.router-link-active,
					&.active {
						color: #646cff;
					}

					b {
						font-weight: normal;
						font-size: 12px;
					}
				}
			}
		}
	}
}

.sticky-nav {
	padding-top: 1rem;
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	z-index: 1;
	top: 0px;
	position: sticky;
	nav {
		padding-left: 0.25rem;
		padding-right: 0.25rem;
		border-radius: 0.25rem;
		justify-content: space-between;
		align-items: center;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		height: 40px;
		display: grid;
		> div {
			line-height: 2rem;
			font-size: 1rem;
			text-align: center;
			padding-left: 10px;
			padding-right: 10px;
			border-radius: 0.25rem;
			cursor: pointer;
			position: relative;
		}
		.sticky-nav-active {
			color: var(--brand-color);
		}
	}
}

.sticky-nav-shadow {
	padding-left: 2rem;
	padding-right: 2rem;
	top: 56px;
	height: 2rem;
	z-index: 1;
	position: sticky;
}
</style>
