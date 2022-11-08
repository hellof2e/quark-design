const fs = require("fs-extra");
const path = require("path");

const packageSrcRoot = path.join(__dirname, "./src");
const typesSrcRoot = path.join(__dirname, "./types");
const libSrcRoot = path.join(__dirname, "./lib");
const componentNames = fs
  // 获取所有文件夹及文件
  .readdirSync(packageSrcRoot, { withFileTypes: true })
  // 筛选出所有文件夹
  .filter((p) => p.isDirectory())
  // 数据预处理
  .map((p) => ({
    path: `${p.name}/index`,
    name: p.name,
  }));

const copy = () => {
  componentNames.forEach((component) => {
    const typePath = `${typesSrcRoot}/src/${component.name}/index.d.ts`;
    const libPath = `${libSrcRoot}/${component.name}/index.d.ts`;
    try {
      fs.copyFileSync(typePath, libPath);
      // console.log(typePath, "复制成功");
    } catch (e) {
      console.log(e, "复制失败");
    }
  });
};

copy();
