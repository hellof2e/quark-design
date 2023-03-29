import sh from "shelljs";

sh.exec(
  "cd example && npm i --legacy-peer-deps && npm run build",
  function (code, stdout, stderr) {
    console.log("Exit code:", code);
    console.log("Program output:", stdout);
    console.log("Program stderr:", stderr);
  }
);
