<template>
	<div class="demo image-demo">
		<h2>{{ translate("basic") }}</h2>
		<div class="quark-cell base-cell">
			<quark-image
				src="https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg"
			/>
		</div>
		<h2>{{ translate("fit") }}</h2>
		<div class="quark-cell">
			<div class="quark-cell-item">
				<quark-image
					src="https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg"
					fit="contain"
				/>
				<p>contain</p>
			</div>
			<div class="quark-cell-item">
				<quark-image
					src="https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg"
					fit="fill"
				/>
				<p>fill</p>
			</div>
			<div class="quark-cell-item">
				<quark-image
					src="https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg"
					fit="cover"
				/>
				<p>cover</p>
			</div>
			<div class="quark-cell-item">
				<quark-image
					src="https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg"
					fit="none"
				/>
				<p>none</p>
			</div>
			<div class="quark-cell-item">
				<quark-image
					src="https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg"
					fit="scale-down"
				/>
				<p>scale-down</p>
			</div>
		</div>
		<h2>{{ translate("round") }}</h2>
		<div class="quark-cell">
			<quark-image
				src="https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg"
				width="100px"
				height="100px"
				fit="cover"
				round
			/>
		</div>
		<h2>{{ translate("loadingMention") }}</h2>
		<div class="quark-cell">
			<div class="quark-cell-item">
				<quark-image src="" width="100px" height="100px">
					<div slot="error">{{ translate("loading") }}</div>
				</quark-image>
			</div>
			<div class="quark-cell-item">
				<quark-image src="" width="100px" height="100px">
					<div slot="error">
						<quark-loading></quark-loading>
					</div>
				</quark-image>
			</div>
		</div>

		<h2>{{ translate("loadingFail") }}</h2>
		<div class="quark-cell">
			<div class="quark-cell-item">
				<quark-image
					src="https://m.hellobike.com/resource/helloyun"
					width="100"
					height="100"
				/>
			</div>
			<div class="quark-cell-item">
				<quark-image src="/hero.jpg" width="100" height="100">
					<div slot="error">
						<img
							src="https://m.hellobike.com/resource/helloyun/09764/ZYtvcQv7AH.png"
							alt=""
							class="error-img"
						/>
					</div>
				</quark-image>
			</div>
		</div>

		<h2>{{ translate("lazy") }}</h2>
		<div class="quark-cell quark-cell-list" v-for="img in imgList">
			<quark-image :src="img" class="img-box" :key="img" lazy />
		</div>
	</div>
</template>
<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("image");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onBeforeMount } from "vue";

export default createDemo({
	setup() {
		const imgList = ref([
			"https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg",
			"https://m.hellobike.com/resource/helloyun/09764/sbESi_picture-2.jpeg",
			"https://m.hellobike.com/resource/helloyun/09764/uzhnQ_picture-3.jpeg",
			"https://m.hellobike.com/resource/helloyun/09764/1jm2V_picture-4.png",
			"https://m.hellobike.com/resource/helloyun/09764/uzuHB_picture-5.jpeg",
			"https://m.hellobike.com/resource/helloyun/09764/gyy6t_picture-6.jpeg",
		]);
		onBeforeMount(() => {
			useTranslate({
				"zh-CN": {
					basic: "基础用法",
					fit: "填充样式",
					round: "圆形图片",
					loadingMention: "加载中提示",
					loading: "加载中...",
					loadingFail: "加载失败提示",
					lazy: "懒加载",
				},
				"en-US": {
					basic: "Basic Usage",
					fit: "Fit Style",
					round: "Round Image",
					loadingMention: "Loading Mention",
					loading: "Loading...",
					loadingFail: "Fail Mention",
					lazy: "Lazy Load",
				},
			});
		});
		return {
			imgList,
			translate,
		};
	},
});
</script>
<style src="./demo.scss"></style>
