# Developer Contribution Guide

We are very welcome to the community developers to make contributions to Quark Design. Before submitting a contribution, please take some time to read the following content to ensure that the contribution is in line with the specifications and can help the community.

## Development configuration

- Environment requirements: `node ^14.17 || >= 16.0.0`, `yarn >= 1.22`

## Start

First start:

```bash
yarn run init
yarn run dev
```

After that, just run the following command:

```bash
yarn run dev
```

## Command description (Maintainer release package use)

STEP 1:
```bash
// Publish the last digit version number of all sub-packages, such as 0.0.1 -> 0.0.2,
yarn run release:patch

// Publish the middle digit version number of all sub-packages, such as 0.0.1 -> 0.1.0,
yarn run release:minor

// Publish the first digit version number of all sub-packages, such as 0.0.1 -> 1.0.0,
yarn run release:major
```

STEP 2:

Create tag
```
git tag // First see if the latest tag is generated
git push origin --tags
```

Then github update [release](https://github.com/hellof2e/quark-design/releases/new)

## Submit commit

The entire Quark Design repository follows [Angular Style Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153), please follow this specification when entering the commit message.

Title Format
type(ComponentName?)：commit message

Branch management:

For example:

- docs: fix type in quickstart
- build: optimize build speed
- fix(Button): incorrect style
- feat(Button): add color prop

## Frequently asked questions

How to clear the cache of the sub-project?

```
yarn run clean
```

Garbled characters when running yarn run link on a Windows computer?

```
Execute the yarn run link command in git bash
```

## Structure

```
├── CONTRIBUTING.MD
├── CONTRIBUTING.zh-CN.MD
├── README.MD
├── README.zh-CN.MD
├── demo.html
├── example
│   ├── babel.config.js
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
├── lerna.json lerna's core configuration
├── LICENSE
├── package.json
├── packages All sub-packages
│   ├── quark
│   ├── quark-core
│   ├── quark-react
│   ├── quark-reactify
│   ├── quark-icons
│   ├── vscode-extension
│   ├── quark-rollup-plugin-postcss
│   └── quark-rollup-plugin-css-variable
├── scripts 脚本
    ├── copydocs.js
    ├── dev.js
│   ├── build.js
│   ├── link.js
│   ├── publish.js
│   └── push2io.js
└── yarn.lock
```
