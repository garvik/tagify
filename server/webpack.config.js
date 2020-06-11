const path = require("path");
const nodeExternals = require("webpack-node-externals");
const nodemonPlugin = require("nodemon-webpack-plugin");

const { NODE_ENV = "production" } = process.env;
module.exports = {
  entry: path.join(__dirname, "src/index.ts"),
  devtool: "source-map",
  mode: NODE_ENV,
  target: "node",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    libraryTarget: "commonjs",
  },
  resolve: {
    extensions: [".mjs", ".js", ".ts"],
  },
  module: {
    rules: [
      {
        exclude: [path.resolve(__dirname, "node_modules")],
        test: /\.ts$/,
        use: ["ts-loader"],
      },
    ],
  },
  plugins: [new nodemonPlugin()],
  externals: [
    {
      ...nodeExternals(),
      express: { commonjs: "express" },
    },
    "bufferutil",
    "utf-8-validate",
  ],
};
