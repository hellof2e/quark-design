const presets = [["@babel/preset-env"], ["@babel/preset-typescript"]];
const plugins = [
  ["@babel/plugin-transform-runtime"],
  [
    "@babel/plugin-proposal-decorators",
    {
      legacy: true,
    },
  ],
];

module.exports = { presets, plugins };
