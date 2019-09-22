const path = require('path');

module.exports = {
  name: 'penguin-setting',
  mode: 'development', // 실서비스 : production
  devtool: 'eval', // 실서비스 : hidden-source-map
  resolve: {
    extensions: ['.js'],
  },

  entry: { // 입력
    app: ['./javascripts/client'],
  },

  module: { // entry를 읽어서 module을 적용해서 output으로 뺀다.
    rules: [{
      test: /\.js?/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 5% in KR'],
            },
            debug: true,
          }],
        ],
        plugins: [],
      }
    }],
  },
  
  output: { // 출력
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist/',
  },
};