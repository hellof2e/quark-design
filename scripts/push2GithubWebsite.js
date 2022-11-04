const sh = require('shelljs');
// const fs = require('fs-extra');
// const pkg = require("../package.json");

// const nowPath = `./dist/fat/${pkg.version}`

// const targetPath = '../quark-design.github.io/demo'

// const mkdirPath = (path) => fs.ensureDir(path);

// const copyPath = (nowPath, targetPath) => fs.copy(nowPath, targetPath)

// const start = async() => {
//   try {
//     const res = await fs.pathExists(nowPath)
//     if(res) console.log('demo打包产物存在')
//     else console.log('demo打包产物不存在，请先执行打包命令')
//     await mkdirPath(targetPath)
//     await copyPath(nowPath, targetPath)
//     console.log('复制成功')
//   } catch (error) {
//     console.error(error)
//   }
// }

sh.exec('cd example && npm i --legacy-peer-deps && npm run build',  function(code, stdout, stderr) {
  console.log('Exit code:', code);
  console.log('Program output:', stdout);
  console.log('Program stderr:', stderr);
  // start();
});
