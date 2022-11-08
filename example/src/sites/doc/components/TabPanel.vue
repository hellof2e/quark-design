<template>
	<div v-show="actKey === activeKey">
		<pre>
        <code class="language-html code-padding" v-if="HTMLString">{{HTMLString}}</code>
        <code class="language-css code-padding" v-if="CssString">{{CssString}}</code>
        <code class="language-js code-padding" v-if="JSString">{{JSString}}</code>
      </pre>
	</div>
</template>
<script>
import { ref, inject, onMounted, nextTick } from "vue";
import Hljs from "highlight.js";
export default {
	props: {
		actKey: {
			type: String,
			default: "1",
		},
		label: {
			type: String,
			default: "全部",
		},
		text: {
			type: String,
			default: "",
		},
	},

	setup(props, ctx) {
		onMounted(() => {
			if (!props.text) {
				return;
			}

			const contents = props.text;

			// 截取html,js,css部分美化代码
			let innerHTMLString = "";
			let innerCss = "";
			let innerJS = "";
			let innerHTMLEndIndex = 0;
			let innerJSEndIndex = 0;
			let innerCssEndIndex = 0;

			// html
			let innerHTMLFirstIndex = contents.indexOf("```html");
			if (innerHTMLFirstIndex !== -1) {
				// 存在html
				innerHTMLEndIndex = contents.indexOf("```", innerHTMLFirstIndex + 1);
			}

			innerHTMLString = contents.slice(
				innerHTMLFirstIndex + 7,
				innerHTMLEndIndex
			);
			innerHTMLString = html_beautify(innerHTMLString);

			let innerCssFirstIndex = contents.indexOf("```css");
			if (innerCssFirstIndex !== -1) {
				// 存在html
				innerCssEndIndex = contents.indexOf("```", innerCssFirstIndex + 1);
			}
			innerCss = contents.slice(innerCssFirstIndex + 6, innerCssEndIndex);
			innerCss = css_beautify(innerCss);

			// js
			let innerJSFirstIndex = contents.indexOf("```js");
			if (innerJSFirstIndex !== -1) {
				// 存在js
				innerJSEndIndex = contents.indexOf("```", innerJSFirstIndex + 1);
			}
			innerJS = contents.slice(innerJSFirstIndex + 5, innerJSEndIndex);
			innerJS = js_beautify(innerJS);

			HTMLString.value = innerHTMLString;
			CssString.value = innerCss;
			JSString.value = innerJS;

			nextTick(() => {
				Hljs.highlightAll();
			});
		});

		let activeKey = ref();
		activeKey = inject("activeKey");
		let HTMLString = ref("");
		let JSString = ref("");
		let CssString = ref("");

		return { activeKey, HTMLString, JSString, CssString };
	},
};
</script>
<style scoped lang="scss">
pre {
	margin: 0;
	padding: 0;
}
.code-padding {
	padding: 10px;
	margin: 0;
}
</style>
