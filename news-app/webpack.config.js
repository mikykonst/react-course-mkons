const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: "./src/main.tsx", // входная точка - исходный файл
  output:{
    path: path.resolve(__dirname, "./public"),     // путь к каталогу выходных файлов - папка public
    publicPath: "/public/",
    filename: "bundle.js"       // название создаваемого файла
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "/"),
    },
    port: 8081,
    open: true
  },
  module:{
    rules:[   //загрузчик для jsx
      {
        test: /\.jsx?$/, // определяем тип файлов
        exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
        loader: "babel-loader",   // определяем загрузчик
        options:{
          presets:[ "@babel/preset-react"]    // используемые плагины
        }
      },
      {
        test: /\.ts(x?)$/,
        exclude: [/node_modules/, /\.test\.tsx?$/],
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.raw\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.css$/,
        exclude: /\.raw\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.join(__dirname, 'postcss.config.js'),
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        resolve: {
          extensions: ['.scss'],
        },
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.join(__dirname, '..', 'news-app', 'src'),
    },
  },
  plugins: [
    // Combine all generated styles into a single bundle.css file
    new MiniCssExtractPlugin({ filename: 'bundle.[hash].css' }),
  ]
}
