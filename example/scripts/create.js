const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

function removeDir(dir) {
	const files = fs.readdirSync(dir);
	for (let i = 0; i < files.length; i += 1) {
		const newPath = path.join(dir, files[i]);
		const stat = fs.statSync(newPath);
		if (stat.isDirectory()) {
			removeDir(newPath);
		} else {
			fs.unlinkSync(newPath);
		}
	}
	fs.rmdirSync(dir);
}

inquirer
	.prompt([
		{
			type: "input",
			name: "ComponentName",
			message: "please input your component name:",
			validate: function (input) {
				const done = this.async();
				if (!input) {
					done("please input component name!");
					return;
				}

				if (!input.match(/^[a-zA-Z]/)) {
					done("Need to start with a letter");
					return;
				}
				done(null, true);
			},
		},
		{
			type: "input",
			name: "ComponentCName",
			message: "please input your component chinese name:",
			validate: function (input) {
				const done = this.async();
				if (!input) {
					done("please input component chinese name!");
					return;
				}
				done(null, true);
			},
		},
		{
			type: "list",
			name: "Type",
			message: "please select your component type:",
			choices: ["base", "data", "action", "navbar", "form", "business"],
			default: "base",
		},
		{
			type: "input",
			name: "Author",
			message: "please input your component author name:",
			default: "user",
		},
		{
			type: "input",
			name: "Desc",
			message: "please input your component description:",
			default: "this is a description.",
		},
		{
			type: "confirm",
			name: "Overwrite",
			message: "Overwrite the folder if it already exists?",
			default: false,
		},
	])
	.then((answers) => {
		const { ComponentName, ComponentCName, Author, Desc, Type, Overwrite } =
			answers;

		const UpperComponentName =
			ComponentName[0].toUpperCase() +
			ComponentName.substring(1, ComponentName.length);

		const targetDirPath = path.join(
			__dirname,
			`../src/packages/${ComponentName}`
		);

		if (Overwrite) {
			removeDir(targetDirPath);
		}

		if (fs.existsSync(targetDirPath) && !Overwrite) {
			console.log(
				"This component already exists, please delete it manually first!"
			);
			return;
		}

		fs.mkdirSync(targetDirPath);

		const styleCssFile = `.container {
    display: flex;
  }
`;

		const styleScssFile = `
    .quark-cell {
      padding: 13px 16px;
      background: #fff;
      border-radius: 6px;
      box-shadow: 0 1px 7px #edeef1;
      font-size: 14px;
      color: #666;
      margin: 10px 0;
      box-sizing: border-box;
      cursor: pointer;
    }
    `;

		const demoJsxFile = `import { useState, useEffect } from 'react';
    import './demo.scss';

function App() {
  const [title, setTitle] = useState('This is a title');

  return (
    <div className="demo">
      <h2>基础用法</h2>
      <div className="quark-cell">
        <quark-${ComponentName} title={title}></quark-${ComponentName}>
      </div>
    </div>
  );
}

export default App;
`;

		const demoVueFile = `<template>
  <div class="demo">
    <h2>基础用法</h2>
    <div class="quark-cell">
      <quark-${ComponentName} title='This is a title' />
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    return {}
  },
  mounted() {
  },
  methods: {
  }
}
</script>
<style scoped>
  .demo {
    width: 100%;
  }

  .quark-cell {
    padding: 13px 16px;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 1px 7px #edeef1;
    font-size: 14px;
    color: #666;
    margin: 10px 0;
    box-sizing: border-box;
    cursor: pointer;
  }
</style>
`;

		const docMdFile = `# ${ComponentName} ${ComponentCName}

### 介绍

${Desc}

## 安装使用

\`\`\`jsx
import 'quarkd/lib/${ComponentName}';

<quark-card
    title='This is a title'
/>
\`\`\`

组件提供了以下[CSS变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                     | 说明                                  | 默认值          |
| ------------------------ | ----------------------------------- | --------------- |
| --${ComponentName}-height   | 组件高度                          |     120px   |

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| title        | 标题 | String                     |
`;

		const indexTestJs = `import { expect, fixture } from '@open-wc/testing';
import '../../../lib/${ComponentName}';

const data = {
  title: '标题'
}
let el;

describe('<${ComponentName}>', async () => {
  it('element exist', async () => {
    el = await fixture(
        \`<${ComponentName} >
        </${ComponentName}>\`);
    const title = el.shadowRoot.querySelector('#title');
    expect(title).to.exist;
  });
`;

		const indexTsxFile = `import QuarkElement, {
  customElement,
  property
} from '@quarkd/core';
import style from './style.css';

@customElement({
  tag: 'quark-${ComponentName}',
  style,
})
class ${UpperComponentName} extends QuarkElement {
  @property({ observed: true })
  title: string = '';

  render() {
    return (
      <div class="container">
        <div class="title">{this.title}</div>
      </div>
    );
  }
}

export default ${UpperComponentName};
`;

		const FilesList = {
			"style.css": styleCssFile,
			"demo.jsx": demoJsxFile,
			"demo.scss": styleScssFile,
			"demo.vue": demoVueFile,
			"doc.md": docMdFile,
			"index.text.js": indexTestJs,
			"index.tsx": indexTsxFile,
		};

		Object.keys(FilesList).forEach((fileName) => {
			const targetFilePath = path.join(
				__dirname,
				`../src/packages/${ComponentName}/${fileName}`
			);
			fs.writeFileSync(targetFilePath, FilesList[fileName], (err) => {
				if (err) throw err;
				console.log(`The ${targetFilePath} has been created!`);
			});
		});

		const config = JSON.parse(
			fs.readFileSync(path.join(__dirname, "../src/config.json"))
		);

		for (let i = 0; i < config.nav.length; i += 1) {
			if (config.nav[i].enName === Type) {
				config.nav[i].packages.push({
					version: "0.0.1",
					name: UpperComponentName,
					sort: 1,
					cName: ComponentCName,
					type: "component",
					show: true,
					desc: Desc,
					author: Author,
				});
				break;
			}
		}
		// 写入config文件
		const displayData = JSON.stringify(config, null, "\t");
		fs.writeFileSync(path.join(__dirname, "../src/config.json"), displayData);

		// 写入index文件
		const IndexFilePath = path.join(__dirname, "../src/packages/index.js");
		const IndexFile = fs
			.readFileSync(IndexFilePath, "utf8")
			.split(/\r\n|\n|\r/gm);
		const insertIndex = IndexFile.findIndex((item) =>
			item.match(/export default {/g)
		);

		IndexFile.splice(insertIndex + 1, 0, `  ${UpperComponentName},`);
		IndexFile.splice(
			insertIndex - 1,
			0,
			`import ${UpperComponentName} from './${ComponentName}';`
		);

		fs.writeFileSync(IndexFilePath, IndexFile.join("\r\n"));

		console.log(
			`your component ${ComponentName} has been created successfully!`
		);
	});
