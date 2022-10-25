const sh = require('shelljs');
sh
.cd('./example')
.exec('yarn && yarn run dev')
