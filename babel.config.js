const plugins = [
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-proposal-export-namespace-from",
  "@babel/plugin-proposal-export-default-from"
]

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins
};