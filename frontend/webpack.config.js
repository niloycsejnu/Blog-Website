const path = require('path');

module.exports = {
  entry: './src/index.js', // Your entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Add this to handle both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Use Babel presets for ES6+ and React
          },
        },
      },
      {
        test: /\.css$/, // This tells Webpack to look for .css files
        use: ['style-loader', 'css-loader'], // Apply these loaders for CSS files
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, 'public'),
    port: 8080,
    open: true,
    hot: true,
  },
};
