const path = require('path');
const MiniCssExtract = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    // We can setting that multi entry point and create new folder By change entry name pattern Ex) "sample/bundle": './src/js/app.js'
    bundle: './src/jsx/app.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'assets/js/[name].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/scss'),
        use: [
          MiniCssExtract.loader,
          {
            loader: 'css-loader',
            options: {
              url: true,
              // modules: true,
            },
          },
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
          "sass-loader",
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        include: path.resolve(__dirname, 'src/images'),
        type: 'asset/resource',
        generator:{
          // output setting
          // generate image in public
          filename:'assets/images/[name][ext][query]',
        }
      },
      {
				test: /\.html$/i,
				loader: 'html-loader',
			},
      {
        test: /\.(png|jpe?g|ico|gif|svg)$/i,
        include: path.resolve(__dirname, 'public'),
        type: 'asset/resource',
        generator:{
          // output setting
          // generate image in public
          filename:'[name][ext][query]',
        }
      },
      {
        test: /\.jsx$/,
        include: path.resolve(__dirname, 'src/jsx'),
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env','@babel/react'],
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
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ],
  resolve: {
		alias: {
      // setting read path of image and variable of image path 
      // sass use variable of image path @image
			'@image': path.resolve(__dirname, './src/images/'),
		},
	},
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    }
  }
};