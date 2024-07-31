import fse from "fs-extra";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const targetBaseUrl = `${process.cwd()}/site_docs`;

const copyFile = (from, to) => {
  fse
    .copy(from, to)
    .then(() => {
      console.log("success >>>>", to);
    })
    .catch((err) => {
      console.error(err);
    });
};

const removeFile = async (url) => {
  return new Promise((res, rej) => {
    fse.remove(url, (err) => {
      if (err) {
        throw err;
      }
      res(true);
    });
  });
};

const copy = async () => {
  const quarkPath = path.resolve(__dirname, "../packages/quarkd");
  let configPath = path.resolve(__dirname, "../example/src/config.json");
  let configPkgPath = path.resolve(__dirname, `${quarkPath}/package.json`);
  let quarkdDocsConfigPath = `${targetBaseUrl}/config.json`;

  // 判断 site_docs 文件是否存在根路径中
  const existsRoot = await fse.pathExists(targetBaseUrl);

  if (existsRoot) await removeFile(targetBaseUrl);

  // 复制所有组件
  const fromConfig = await fse.readJson(configPath);
  fromConfig.nav.forEach(({ packages }) => {
    packages.forEach((item) => {
      if (item.show) {
        let cmpName = item.name.toLowerCase();
        let reactDocpath = `packages/quarkd/src/${cmpName}/doc-react.zh-CN.md`;
        let reactDocEnPath = `packages/quarkd/src/${cmpName}/doc-react.en-US.md`;

        console.log(reactDocpath, "docpath---------->");
        console.log(reactDocEnPath, "docEnPath---------->");

        // react docs
        fse.readFile(reactDocpath, (err, data) => {
          if (!err) {
            copyFile(
              reactDocpath,
              `${targetBaseUrl}/docs/${cmpName}/doc-react.zh-CN.md`
            );
          }
        });
        fse.readFile(reactDocEnPath, (err, data) => {
          if (!err) {
            copyFile(
              reactDocEnPath,
              `${targetBaseUrl}/docs/${cmpName}/doc-react.en-US.md`
            );
          }
        });
      }
    });
  });

  // 复制 config.json
  const fromPkgConfig = await fse.readJson(configPkgPath);

  const obj = {
    version: "",
    nav: [],
    docs: [],
  };
  fse.outputJSON(quarkdDocsConfigPath, obj, () => {
    const docsConfig = fse.readJson(quarkdDocsConfigPath);
    docsConfig.version = fromPkgConfig.version;
    docsConfig.nav = fromConfig.nav;
    docsConfig.docs = fromConfig.docs;
    docsConfig.demoUrl =
      "https://quark-ecosystem.github.io/quarkd-docs/h5/demo";
    fse
      .writeJson(quarkdDocsConfigPath, docsConfig, {
        spaces: 2,
      })
      .then(() => {
        console.log(`${fromPkgConfig.version} success!`);
      });
  });
};

copy();
