// scripts/publish.js
const inquirer = require("inquirer");
const globby = require("globby");
const fs = require("fs-extra");
const sh = require("shelljs");
const ora = require("ora");
const cwd = process.cwd();
const { argv } = process;
const version = argv[2];
console.log(version, "argv");
const getPackagePath = () => {
  const packagePaths = globby.sync("../packages", {
    cwd: __dirname,
    onlyDirectories: true,
    deep: 1,
  });
  return packagePaths.map((item) => item.replace("../", ""));
};

const getPackageName = (packagePath) => {
  const jsonResult = fs.readJSONSync(`${cwd}/${packagePath}/package.json`);
  return jsonResult.name;
};

const choosePackage = async (packages) => {
  const answer = await inquirer.prompt({
    type: "list",
    name: "package",
    message: "选择你要发布的包",
    choices: packages,
    default: "packages/quark",
  });
  return answer;
};

const writeQuarkReactVersion = () => {
  const quarkJsonResult = fs.readJSONSync(`${cwd}/packages/quark/package.json`);
  const quarkReactResult = fs.readJSONSync(
    `${cwd}/packages/quark-react/package.json`
  );
  const quarkVersion = quarkJsonResult.version;
  const oldVersion = quarkReactResult.dependencies.quark;
  // if(quarkVersion === oldVersion) {
  //   return console.warn('已是最新版无需更新')
  // }
  const newQuarkReactData = {
    ...quarkReactResult,
    dependencies: {
      ...quarkReactResult.dependencies,
      quark: quarkVersion,
    },
  };
  const writeData = JSON.stringify(newQuarkReactData, null, 2);
  fs.writeFileSync(`${cwd}/packages/quark-react/package.json`, writeData);
  console.warn("已同步最新 quark 版本");
};

const publish = async () => {
  const packages = getPackagePath();
  const { package } = await choosePackage(packages);
  const packageName = getPackageName(package);
  console.log(package, packageName, version);
  if (package && packageName) {
    if (packageName === "quark-react") {
      writeQuarkReactVersion();
    }
    const spinner = ora("loading ~~~~").start();
    try {
      console.log("-----------------------开始发布-------------------------");
      sh.exec(`lerna run release:${version} --scope ${packageName}`);
      sh.cd(package).exec("npm publish");
      spinner.succeed("~~");
    } catch (error) {
      console.log(error, "error");
    }
    spinner.stop();
  } else {
    console.log("没有选择包");
  }
};

publish();
