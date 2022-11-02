# Developer Contribution Guide

We are very welcome to the community developers to make contributions to Quark Design. Before submitting a contribution, please take some time to read the following content to ensure that the contribution is in line with the specifications and can help the community.

## Development configuration

- Environment requirements: `node ^14.17 || >= 16.0.0`, `yarn >=1.22`

## Start

First start:

```bash
yarn run bootstrap // Install the dependencies of the sub-project

yarn run link // First execution, mutual dependency soft link

npm run dev // Start executing the project
```

After that, just run the following command:

```bash
npm run dev
```

## Command description (core maintainer release package use)

```
release:patch: Publish the last digit version number of all sub-packages, such as 0.0.1 -> 0.0.2,
release:minor: Publish the middle digit version number of all sub-packages, such as 0.0.1 -> 0.1.0,
release:major: Publish the first digit version number of all sub-packages, such as 0.0.1 -> 1.0.0,
```

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
npm run clean
```

## Structure

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
├── lerna.json lerna's core configuration
├── package.json
├── packages All sub-packages
│   ├── quark
│   ├── quark-element
│   ├── quark-react
│   ├── quark-reactify
│   ├── quark-icons
│   ├── quark-vscode-extension
│   ├── quark-rollup-plugin-postcss
│   └── quark-rollup-plugin-css-variable
├── scripts Scripts for the project
│   ├── build.js
│   ├── build_demo.js
│   └── dev.js
└── yarn.lock
```
