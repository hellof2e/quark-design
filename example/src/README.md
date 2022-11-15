## 目录结构
```bash
src
├── README.md
├── config.json // 官网菜单配置，详情见注释 1
├── docs // Quark 纯 Readme 介绍，用于「指南」菜单
├── index.js // 自动生成，源码入口文件
├── packages // 源码
├── shims-vue.d.ts
└── sites // 官网
```
## 注释 1

config.json 为官网菜单配置文件。

```json
{
	// 顶部版本号
	"versions": [
		{
			"name": "1.x",
			"link": "/"
		}
	],

	// 顶部菜单
	"header": [
		{
			"name": "intro,theme,start",
			"cName": "指南",
			"path": "#/intro"
		}
	],

	//   左侧顶部菜单
	"docs": {
		"name": "指南",
		"packages": [
			{
				"name": "intro",
				"cName": "介绍",
				"show": true
			},
			{
				"name": "http://baidu.com", // 可以直接跳转
				"cName": "更新日志",
				"show": true,
				"isLink": true
			}
		]
	},

	//   左侧菜单
	"nav": [
		{
			"name": "基础组件",
			"enName": "base",
			"packages": [
				{
					"version": "0.0.1",
					"name": "Button",
					"sort": 1,
					"cName": "按钮",
					"type": "component",
					"show": true,
					"desc": "按钮用于触发一个操作，如提交表单。",
					"author": "xsf"
				}
			]
		}
	]
}
```
