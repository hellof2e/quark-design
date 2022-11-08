# 开发者贡献指南

我们非常欢迎社区的开发者向 Quark Design 做出贡献。在提交贡献之前，请花一些时间阅读以下内容，保证贡献是符合规范并且能帮助到社区。

## 开发配置

- 环境要求： `node ^14.17 || >= 16.0.0`, `yarn >=1.22`

## 开始

第一次启动：

```bash
yarn // 安装项目的依赖

yarn run link // 第一次执行需要，互相依赖的软链接

yarn dev // 开始执行工程
```

以后再次启动本工程只需：

```bash
yarn dev

// or
npm run dev
```

## 命令说明（核心维护者发包使用）

```bash
// 发布所有子包的最后一位版本号如 0.0.1 -> 0.0.2,
npm run release:patch

// 发布所有子包的中间一位版本号如 0.0.1 -> 0.1.0,
npm run release:minor

// 发布所有子包的第一位版本号如 0.0.1 -> 1.0.0,
npm run release:major
```

## 提交 commit

整个 Quark Design 仓库遵从 [Angular Style Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)，在输入 commit message 的时候请务必遵从此规范。

Title Format
type(ComponentName?)：commit message

分支管理：

例如：

- docs: fix type in quickstart
- build: optimize build speed
- fix(Button): incorrect style
- feat(Button): add color prop

## 常见问题

如何清楚子项目的缓存？

```
yarn clean
```

Windows 电脑运行 yarn run link 时乱码？

```
// 在 git bash 中执行 yarn run link 命令
```

## 结构

```
├── README.MD
├── demo.html
├── dev.md
├── example
│   ├── Makefile
│   ├── babel.config.js
│   ├── commitlint.config.js
│   ├── compatible.md
│   ├── demoReact.html
│   ├── dist
│   ├── global-css.js
│   ├── package.json
│   ├── scripts
│   ├── siteDist
│   ├── src
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── yarn-error.log
│   └── yarn.lock
├── index.html
├── lerna.json lerna的核心 配置
├── package.json
├── packages 所有子包
│   ├── quark
│   ├── quark-element
│   ├── quark-react
│   ├── quark-reactify
│   ├── quark-icons
│   ├── quark-vscode-extension
│   ├── quark-rollup-plugin-postcss
│   └── quark-rollup-plugin-css-variable
├── scripts 脚本
│   ├── build.js
│   ├── build_demo.js
│   └── dev.js
└── yarn.lock
```
