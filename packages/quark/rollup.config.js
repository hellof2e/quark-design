import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import cssVariable from "@quarkd/rollup-plugin-css-variable";
import fs from "fs";
import path from "path";
import postcss from "@quarkd/rollup-plugin-postcss";
import px2vp from "postcss-px-to-viewport";
import filesize from "rollup-plugin-filesize";
import variableMap from "./global-css";

const extensions = [".js", ".ts", ".tsx"];
const packageSrcRoot = path.join(__dirname, "./src");
const componentNames = fs
  // 获取所有文件夹及文件
  .readdirSync(packageSrcRoot, { withFileTypes: true })
  // 筛选出所有文件夹
  .filter((p) => p.isDirectory())
  // 数据预处理
  .map((p) => ({
    path: `${p.name}/index`,
    name: p.name,
  }))
  // 带上package/index.js
  .concat({ path: "index", name: "index" });

/**
 * @type {import('rollup').RollupOptions}
 */
const options = [
  {
    input: "./src/index.ts",
    output: {
      dir: "./umd",
      format: "umd",
      name: "index.mini.js",
    },
    plugins: [
      cssVariable({
        variableMap,
        prefix: "quark-",
      }),
      postcss({
        plugins: [
          px2vp({
            unitToConvert: "px",
            viewportWidth: 375,
            unitPrecision: 5,
            propList: ["*"],
            viewportUnit: "vw",
            fontViewportUnit: "vw",
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: undefined,
            include: undefined,
            landscape: false,
          }),
        ],
        inject: false,
        extensions: [".css"],
      }),
      // css(),
      typescript(),
      commonjs(),
      nodeResolve({
        extensions,
      }),
      babel({
        babelHelpers: "runtime",
        exclude: "node_modules/**",
        extensions,
      }),
      terser(),
    ],
  },
  {
    input: componentNames.reduce((result, p) => {
      result[p.path] = `${packageSrcRoot}/${p.name}`;
      return result;
    }, {}),
    output: {
      dir: "lib",
      chunkFileNames: "[name].js",
      format: "es",
    },
    treeshake: false,
    plugins: [
      cssVariable({
        variableMap,
        prefix: "quark-",
      }),
      postcss({
        plugins: [
          px2vp({
            unitToConvert: "px",
            viewportWidth: 375,
            unitPrecision: 5,
            propList: ["*"],
            viewportUnit: "vw",
            fontViewportUnit: "vw",
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: undefined,
            include: undefined,
            landscape: false,
          }),
        ],
        inject: false,
        extensions: [".css"],
      }),
      // css(),
      typescript(),
      commonjs(),
      nodeResolve({
        extensions,
        // modulesOnly: true, // 为true 表示不对第三方库进行打包
      }),
      babel({
        babelHelpers: "runtime",
        exclude: "node_modules/**",
        extensions,
      }),
      filesize(),
      terser(),
    ],
  },
];

export default options;
