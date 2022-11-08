<template>
	<div class="doc-demo-preview">
		<iframe :src="url" id="quark-demo" frameborder="0"></iframe>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "DocDemoPreview",
	props: {
		url: String,
		type: String,
	},
});
</script>

<style lang="scss">
.doc-demo-preview {
	// height: 667px;
	height: calc(100vh - 300px);
	width: 375px;
	position: absolute;
	right: 30px;
	top: 240px;
	box-shadow: #ebedf0 0 4px 12px;
	border-radius: 12px;
	overflow: hidden;

	&.fixed {
		position: fixed;
		top: 120px;
	}

	iframe {
		height: 100%;
		width: 100%;
	}
}
</style>
