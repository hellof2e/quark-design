import sh from "shelljs";

sh.exec(
  "npm run clean &&  lerna bootstrap && lerna run build --scope quark-icons && cd example && npm run build",
  function (code, stdout, stderr) {
    console.log("Exit code:", code);
    console.log("Program output:", stdout);
    console.log("Program stderr:", stderr);
  }
);
