const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "index.js",
      clean: true,
    },
    module: {
      rules: [
        // JavaScript/React
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        // CSS with PostCSS (for Tailwind)
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
              },
            },
            "postcss-loader",
          ],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "index.css",
      }),
    ],
    optimization: {
      minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin({
          terserOptions: {
            format: {
              comments: false,
            },
          },
          extractComments: false,
        }),
      ],
    },
    ...(isProduction ? {} : { devtool: "source-map" }),
    // Include React and ReactDOM for compatibility
    externals: {
      react: "React",
      "react-dom": "ReactDOM",
      "@wordpress/element": "wp.element",
    },
  };
};
