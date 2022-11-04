const sh = require('shelljs');

sh.exec('cd example && npm run build',  function(code, stdout, stderr) {
  console.log('Exit code:', code);
  console.log('Program output:', stdout);
  console.log('Program stderr:', stderr);
});
