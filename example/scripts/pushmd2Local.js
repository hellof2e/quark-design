
const fse = require('fs-extra');
const path = require('path');
const targetBaseUrl = path.resolve(__dirname, '../../quark-design-docs/src/docs_vue/');

const copyFile = (from, to) => {
  fse
    .copy(from, to)
    .then(() => {
      console.log('success!>', to);
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
  let configPath = `src/config.json`;
  let configPkgPath = `package.json`;
  let quarkuiDocsConfigPath = `${targetBaseUrl}/config.json`;

  // 判断 site_docs 文件是否存在根路径中
  const existsRoot = await fse.pathExists(targetBaseUrl);

  if (existsRoot) await removeFile(`${targetBaseUrl}/docs/`);
  
  // 复制所有组件
  const fromConfig = await fse.readJson(configPath);
  fromConfig.nav.forEach(({ packages }) => {
    console.log(packages, "packages---------->")
    packages.forEach((item) => {
      if (item.show) {
        let cmpName = item.name.toLowerCase();
        let docpath = `src/packages/${cmpName}/doc.zh-CN.md`; // 中文md
        let docEnPath = `src/packages/${cmpName}/doc.en-US.md`; // 英文md
        console.log(docpath, "docpath---------->")
        console.log(docEnPath, "docEnPath---------->")
        fse.readFile(docpath, (err, data) => {
          if (!err) {
            copyFile(docpath, `${targetBaseUrl}/docs/${cmpName}/doc.zh-CN.md`);
          }
        });
        fse.readFile(docEnPath, (err, data) => {
          if (!err) {
            copyFile(docEnPath, `${targetBaseUrl}/docs/${cmpName}/doc.en-US.md`);
          }
        });
      }
    });
  });

  // 复制 config.json
  const fromPkgConfig = await fse.readJson(configPkgPath);

  const obj = {
    version: '',
    nav: [],
    docs: []
  };
  fse.outputJSON(quarkuiDocsConfigPath, obj, () => {
    const docsConfig = fse.readJson(quarkuiDocsConfigPath);
    docsConfig.version = fromPkgConfig.version;
    docsConfig.nav = fromConfig.nav;
    docsConfig.docs = fromConfig.docs;
    docsConfig.demoUrl = '/#';
    fse
      .writeJson(quarkuiDocsConfigPath, docsConfig, {
        spaces: 2
      })
      .then(() => {
        console.log(`${fromPkgConfig.version} success!`);
      });
  });
};

copy();
