const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, 'src', 'index.tsx'),
  },
  devServer: {
    contentBase: path.resolve('.'),
    publicPath: 'http://0.0.0.0:8080/dist',
    host: '0.0.0.0'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: 'inline-source-map',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'source-map-loader'
      },

      // lint
      {
        test: /\.(ts|tsx)$/,
        enforce: 'pre',
        use: [
          {
            loader: 'tslint-loader',
            options: {}
          }
        ]
      },

      // style
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },

      // font files
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader'
      },

      // svg
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
     }
    ]
  },
  // optimization: {
  //   usedExports: true,
  // },
};
