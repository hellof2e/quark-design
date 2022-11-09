module.exports = {
  // 自定义CHANGELOG.md的头部标题
  header: `# 更新日志`,
  // 自定义release tag 的信息
  releaseCommitMessageFormat: "chore(release): v{{currentTag}} :tada:",
  /**
   * 自定义commit类型
   * 有哪些类型；s
   * section：控制类型在CHANGELOG.md中的标题是什么
   * hidden：是否将此类型写入CHANGELOG.md
   */
  types: [
    {
      type: "feat",
      section: "🎉 Features",
    },
    {
      type: "feature",
      section: " 🎉 Features",
    },
    {
      type: "fix",
      section: "🐞 Bug Fixes",
    },
    {
      type: "perf",
      section: "🚀 Performance Improvements",
    },
    {
      type: "revert",
      section: "Reverts",
    },
    {
      type: "docs",
      section: "Documentation",
    },
    {
      type: "merge",
      section: "Merge",
    },
    {
      type: "style",
      section: "Styles",
      hidden: true,
    },
    {
      type: "chore",
      section: "Miscellaneous Chores",
      hidden: true,
    },
    {
      type: "refactor",
      section: "🚀 Code Refactoring",
      hidden: true,
    },
    {
      type: "test",
      section: "Tests",
      hidden: true,
    },
    {
      type: "build",
      section: "Build System",
      hidden: true,
    },
    {
      type: "ci",
      section: "Continuous Integration",
      hidden: true,
    },
  ],
  tagPrefix: "quark-reactify@",
  skip: {
    // "bump": true,
    commit: true,
    tag: true,
  },
  scripts: {
    postchangelog: "cp -f CHANGELOG.md ./src/docs",
  },
};
