const path = require("path");
// Импортируем пакет path
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  plugins: [
    new ESLintPlugin({
      extensions: ['.js', '.jsx'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                namedExport: false,
              },
            },
          },
        ],
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "url-loader",
        },
      },
      {
        test: /\.(woff|woff2)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".css"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  devServer: {
    static: path.join(__dirname, "./dist"),
    compress: true,
    port: 3000,
  },
};
