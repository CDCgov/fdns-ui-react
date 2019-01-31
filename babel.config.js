const presets = [
  [
    "@babel/preset-react",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
    },
  ],
];

const plugins = [
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-proposal-export-namespace-from",
  "@babel/plugin-proposal-export-default-from"
]

module.exports = { presets, plugins };