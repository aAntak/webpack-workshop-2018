const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const loadPresets = require("./build-utils/loadPresets");


const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  presets = presets || [];
  return merge(
    {
      mode,
      output: {
        filename: "bundle.js"
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin(), new MiniCssExtractPlugin()],
      module: {
          rules: [
            {
              test: /\.css$/,
              use: [MiniCssExtractPlugin.loader, "css-loader"],
            }
          ]
      }
    },
    modeConfig(mode),
    loadPresets({ mode, presets })
  );
};
