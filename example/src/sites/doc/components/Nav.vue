<template>
	<div class="doc-nav" :class="{ fixed: fixed }">
		<ol v-for="_nav in nav" :key="_nav">
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
	</div>
</template>

<script lang="ts">
import {
	defineComponent,
	reactive,
	computed,
	onMounted,
	toRefs,
	ref,
} from "vue";
import {
	onBeforeRouteUpdate,
	RouteLocationNormalized,
	useRoute,
	useRouter,
} from "vue-router";
import { RefData } from "@/sites/assets/util/ref";
import { nav, docs } from "@/config.json";

export default defineComponent({
	name: "DocNav",
	setup() {
		const route = useRoute();
		const router = useRouter();
		const state = reactive({
			fixed: false,
			isGuideNav: false,
		});

		const isActive = computed(() => {
			return function (name: string) {
				const currentValue = RefData.getInstance().currentRoute.value;
				const value = currentValue;
				return value == name.toLowerCase();
			};
		});

		const reorder = (packages: any) => {
			return packages.sort(function (x: any, y: any) {
				return x["name"].localeCompare(y["name"]);
			});
		};

		onMounted(() => {
			if (route.name) getIsGuaid(route.path);

			document.addEventListener("scroll", scrollNav);
		});

		const scrollNav = () => {
			let top = document.documentElement.scrollTop;
			if (top > 64) {
				state.fixed = true;
			} else {
				state.fixed = false;
			}
		};

		const getIsGuaid = (name: any) => {
			state.isGuideNav = name.indexOf("guide") > -1 ? true : false;
		};

		onBeforeRouteUpdate((to: any) => {
			let name: any = "";
			if (to) {
				name = to.path;
			} else {
				name = route.path;
			}
			getIsGuaid(name);
		});

		const isZhLang =
			localStorage.getItem("language") === "zh-CN" ? true : false;

		return {
			...toRefs(state),
			isZhLang,
			isActive,
			docMd: localStorage.getItem("docMd"),
			nav: reactive(nav),
			docs: reactive(docs),
			currentRoute: RefData.getInstance().currentRoute,
			reorder,
		};
	},
});
</script>

<style lang="scss">
.doc {
	&-nav {
		position: absolute;
		top: 68px;
		left: 0;
		bottom: 0;
		z-index: 1;
		width: 290px;
		border-right: 1px solid #eee;
		overflow: auto;
		padding-left: 35px;
		padding-top: 35px;
		&.fixed {
			position: fixed;
			top: 0;
			padding-top: 15px;
		}
		ol {
			margin-bottom: 20px;

			&.introduce {
				padding-left: 5px;

				li {
					cursor: pointer;

					&:hover {
						color: #0088ff;
					}
				}
			}

			li {
				font-size: 14px;
				color: var(--themeDark, #333);
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
				li {
					padding-left: 29px;
					cursor: pointer;

					&:hover {
						a {
							color: #0088ff;
						}
					}

					a {
						height: 48px;
						line-height: 48px;
						display: flex;

						&.router-link-active,
						&.active {
							color: #0088ff !important;
						}

						&:hover {
							color: #0088ff;

							&:visited {
								color: #0088ff;
							}
						}

						&:link,
						&:visited {
							color: var(--themeDark, #333);
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
}
</style>
