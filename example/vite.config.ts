import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import Markdown from 'vite-plugin-md';
import cssVariable from '@quarkd/rollup-plugin-css-variable';
import typescript from '@rollup/plugin-typescript';
import path from 'path';
import variableMap from './global-css';
const pkg = require('../package.json');
const hljs = require('highlight.js');
// https://highlightjs.org/
const { resolve } = path;

// 发布系统需要区分环境，公司规范
const ENV = process.env.VUE_APP_ENV || 'fat';

// 发布系统每次会自动删除dist文件，所以使用另一个文件夹
const outputDir = path.resolve(__dirname, `../dist/${ENV}/${pkg.version}/`);

const plugins = [
  cssVariable({
    variableMap,
    prefix: 'quark-',
  }),
  vue({
    include: [/\.vue$/, /\.md$/],
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('quark-'),
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
        return ''; // 使用额外的默认转义
      },
    },
  }),
  legacy({
    targets: ['defaults', 'not IE 11'],
  }),
  react({
    jsxRuntime: 'classic',
    babel: {
      // presets: [['@babel/preset-env'], ['@babel/preset-typescript']],
      plugins: [
          [
            '@babel/plugin-proposal-decorators',
            {
              legacy: true
            }
        ],
        "@babel/plugin-proposal-class-properties",
        
      ]
    }
  })
];

// https://vitejs.dev/config/
const rootPtah = resolve(__dirname, '../')
export default defineConfig({
  root: rootPtah,
  base: './',
  server: {
    port: 2022,
    host: '0.0.0.0',
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
  plugins,
  // 打包配置
  build: {
    target: 'es2015',
    outDir: outputDir,
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        mobile: resolve(__dirname, '../demo.html'),
      },
    },
    minify: false
  },
});
