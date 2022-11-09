const { createDefaultConfig } = require("@open-wc/testing-karma");
const merge = require("deepmerge");

module.exports = (config) => {
  config.set(
    merge(createDefaultConfig(config), {
      files: [
        {
          pattern: config.grep ? config.grep : "src/packages/**/*.test.js",
          type: "module",
        },
      ],

      esm: {
        nodeResolve: true,
      },
    })
  );
  return config;
};
