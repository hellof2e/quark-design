# 开发者贡献指南

我们非常欢迎社区的开发者向 Quark Design 做出贡献。在提交贡献之前，请花一些时间阅读以下内容，保证贡献是符合规范并且能帮助到社区。

## 开发配置

- 环境要求： `node >= 16.0.0`, `yarn >= 1.22`

## 开始

如何跑起来（以下操作全在根目录）

```
# 首次开发需要安装依赖和执行link操作
yarn run init (包含了 yarn && yarn run link && cd example && yarn)

# 将文档网站跑起来
yarn run dev
```

## 常见问题

如何清除子项目的缓存？

```
yarn clean
```

Windows 电脑运行 yarn run link 时乱码？

```
// 在 git bash 中执行 yarn run link 命令
```

---------
## 以下内容，核心开发者阅读
##### 命令说明

第一步：
```bash
// 发布所有子包的最后一位版本号如 0.0.1 -> 0.0.2,
yarn run release:patch

// 发布所有子包的中间一位版本号如 0.0.1 -> 0.1.0,
yarn run release:minor

// 发布所有子包的第一位版本号如 0.0.1 -> 1.0.0,
yarn run release:major
```

第二步：
打 tag
```
git push origin --tags
```

然后 github 更新 [release](https://github.com/hellof2e/quark-design/releases/new)
