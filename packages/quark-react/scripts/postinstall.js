const fs = require('fs-extra');
const path = require('path');
const https = require('https')

const packageRoot = path.join(`${process.cwd()}`, '../../package.json');
function getInfoFromPackage() {
    let packageInfo = fs.readFileSync(packageRoot,'utf8');
    packageInfo = JSON.parse(packageInfo); 

    // 读取 AppName
    const appName = packageInfo['name'] || 'Undefined';
    // 读取 Quark 版本
    const libVersion = packageInfo['dependencies']['quark-react'] || 'Undefined';
    
    return {
        appName,
        libVersion,
        techStack: 'react',
        appDesc: "desc",
    }
}

function postPackageInfo() {
    let packageInfo = undefined;
    try {
        packageInfo = getInfoFromPackage();
    } catch {
        return;
    }
    const data = JSON.stringify({
        ...packageInfo
    })
    const options = {
        hostname: 'fat-123-server.hellobike.cn',
        port: 443,
        path: '/api/v1/createQuark',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': data.length
        }
    }
    const req = https.request(options, res => {
        console.log(`Quark 使用统计上报状态码: ${res.statusCode}`)
        console.log(`Quark 使用文档: https://quark.hellobike.cn/#/`)
        // res.on('data', d => {
        //   process.stdout.write(d)
        // })
    })
      
    req.on('error', error => {
        console.error(error)
    })
    
    req.write(data)
    req.end()
}

postPackageInfo();