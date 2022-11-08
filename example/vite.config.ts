import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import Markdown from "vite-plugin-md";
import cssVariable from "@quarkd/rollup-plugin-css-variable";
import typescript from "@rollup/plugin-typescript";
import path from "path";
import variableMap from "./global-css";

// https://highlightjs.org/
const hljs = require("highlight.js");
const { resolve } = path;

const plugins = [
	cssVariable({
		variableMap,
		prefix: "quark-",
	}),
	vue({
		include: [/\.vue$/, /\.md$/],
		template: {
			compilerOptions: {
				isCustomElement: (tag) => tag.startsWith("quark-"),
			},
		},
	}),
	typescript(),
	Markdown({
		// default options passed to markdown-it
		// see: https://markdown-it.github.io/markdown-it/
		markdownItOptions: {
			highlight(str, lang) {
				if (lang && hljs.getLanguage(lang)) {
					try {
						return hljs.highlight(lang, str).value;
					} catch (__) {}
				}
				return ""; // 使用额外的默认转义
			},
		},
	}),
	legacy({
		targets: ["defaults", "not IE 11"],
	}),
	react({
		jsxRuntime: "classic",
		babel: {
			// presets: [['@babel/preset-env'], ['@babel/preset-typescript']],
			plugins: [
				[
					"@babel/plugin-proposal-decorators",
					{
						legacy: true,
					},
				],
				"@babel/plugin-proposal-class-properties",
			],
		},
	}),
];

// https://vitejs.dev/config/
const rootPtah = resolve(__dirname, "../");
export default defineConfig({
	root: rootPtah,
	base: "./",
	server: {
		port: 2022,
		host: "0.0.0.0",
	},
	resolve: {
		alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
	},
	plugins,
	// 打包配置
	build: {
		target: "es2015",
		outDir: "dist",
		cssCodeSplit: true,
		rollupOptions: {
			input: {
				mobile: resolve(__dirname, "../demo.html"),
			},
		},
		minify: false,
	},
	esbuild: {
		define: {
			this: "window",
		},
	},
});
