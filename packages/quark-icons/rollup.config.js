import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import css from "rollup-plugin-import-css";
import fs from "fs";
import path from "path";

const extensions = [".js", ".ts", ".tsx"];
const packageSrcRoot = path.join(__dirname, "./src/packages");
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
    input: "./src/packages/index.js",
    output: {
      dir: "./umd",
      format: "umd",
      name: "index.mini.js",
    },
    plugins: [
      css(),
      typescript(),
      commonjs(),
      nodeResolve({
        extensions,
      }),
      babel({
        babelHelpers: "runtime",
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
      css(),
      typescript(),
      commonjs(),
      nodeResolve({
        extensions,
        modulesOnly: true,
      }),
      babel({
        babelHelpers: "runtime",
        extensions,
      }),
      terser(),
    ],
  },
];

export default options;
