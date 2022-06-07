const path = require('path');
const MiniCssExtract = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');


module.exports = {
  mode: 'development',
  entry: {
    // We can setting that multi entry point and create new folder By change entry name pattern Ex) "sample/bundle": './src/js/app.js'
    bundle: './src/js/app.js',
    style: './src/scss/style.scss',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'assets/js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/scss'),
        use: [
          MiniCssExtract.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  ["autoprefixer", { grid: true }],
                ],
              },
            },
          },
          "sass-loader"
        ]
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env'],
            }
          }
        ]
        
      }
    ]
  },
  plugins: [
    new MiniCssExtract({
      filename: "assets/css/[name].css"
    }),
    new RemoveEmptyScriptsPlugin(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    }
  }
};