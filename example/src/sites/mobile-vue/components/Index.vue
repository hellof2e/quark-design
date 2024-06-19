<template>
	<div class="index">
		<div class="index-header">
			<img src="../../assets/images/quark-logo.png" alt="" srcset="" />
			<div class="info">
				<h1>Quark</h1>
				<p>面向未来的移动端 UI 组件库</p>
			</div>
		</div>
		<div class="index-components">
			<ol v-for="_nav in nav" :key="_nav">
				<li>{{ _nav.name }}</li>
				<ul>
					<template v-for="_package in _nav.packages" :key="_package">
						<li v-if="_package.show">
							<router-link :to="_package.name.toLowerCase()"
								>{{ _package.name }}&nbsp;&nbsp;{{ _package.cName }}
							</router-link>
							<quark-icon-arrow-right
								size="14px"
								color="#979797"
							></quark-icon-arrow-right>
						</li>
					</template>
				</ul>
			</ol>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import "@quarkd/icons/lib/arrow-right";
import { nav } from "@/config.json";

export default defineComponent({
	name: "doc",
	setup() {
		return reactive({
			nav,
		});
	},
});
</script>

<style lang="scss" scoped>
.index {
	height: 100%;
	width: 100%;
	&-header {
		display: flex;
		align-items: center;
		padding: 0 34px;
		height: 100px;

		> img {
			width: 67px;
			height: 67px;
			margin-right: 18px;
			flex-shrink: 0;
		}

		.info {
			display: flex;
			flex-direction: column;

			h1 {
				height: 48px;
				line-height: 48px;
				font-size: 34px;
				color: rgba(51, 51, 51, 1);
			}

			p {
				height: 18px;
				line-height: 18px;
				font-size: 12px;
				color: rgba(154, 155, 157, 1);
			}
		}
	}

	&-components {
		background: #f7f8fa;
		border-radius: 30px 30px 0 0;
		overflow: hidden;
		padding: 16px 25px 20px;

		> ol {
			margin-bottom: 14px;

			> li {
				line-height: 20px;
				font-size: 14px;
				color: rgba(144, 156, 164, 1);
				margin-bottom: 10px;
			}

			> ul {
				li {
					display: flex;
					align-items: center;
					padding: 0 24px;
					width: auto;
					height: 42px;
					line-height: 42px;
					background: rgba(255, 255, 255, 1);
					border-radius: 22px;
					box-shadow: 0px 1px 4px 0px rgba(102, 102, 102, 0.06);
					margin-bottom: 12px;

					a {
						width: 100%;
						height: 100%;
						font-size: 15px;
						font-weight: bold;
						display: block;
						color: rgba(51, 51, 51, 1);
					}
				}
			}
		}
	}
}
</style>
