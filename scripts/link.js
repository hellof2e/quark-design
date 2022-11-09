const sh = require("shelljs");

sh.exec("lerna run build --stream --sort", function (code, stdout, stderr) {
  console.log("Exit code:", code);
  console.log("Program output:", stdout);
  console.log("Program stderr:", stderr);
});
