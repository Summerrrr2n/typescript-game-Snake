//引入一个包
const path = require("path")

//引入html插件
const HTMLWebpackPlugin = require("html-webpack-plugin")

//引入clean插件
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin")

//webpack的所有配置信息写在module.exports中
module.exports = {
  //指定入口文件
  entry: "./src/index.ts",
  //指定打包文件
  output: {
    //指定打包后目录
    path: path.resolve(__dirname, "dist"),
    //指定打包文件名
    filename: "bundle.js",

    environment: {
      //不适用箭头函数
      arrowFunction: false,
      const: false,
    }
  },
  //指定打包时要使用的模块
  module: {
    //指定要加载的规则
    rules: [{
        //test指定的是规则生效的文件
        test: /\.ts$/,
        //使用的loader
        use: [{
            loader: "babel-loader",
            options: {
              //设置预定义环境
              presets: [
                [
                  //指定环境的插件
                  "@babel/preset-env",
                  {
                    //要兼容的目标浏览器
                    targets: {
                      "chrome": "88",
                      "ie": "11"
                    },
                    //指定corejs的版本
                    "corejs": "3",
                    //使用corejs的方式“usage”表示按需加载
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          'ts-loader',
        ],
        //要排除的文件
        exclude: /node_mudules/
      },
      {
        //test指定的是规则生效的文件
        test: /\.less$/,
        //使用的loader
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      browsers: 'last 2 versions'
                    }
                  ]
                ]
              }
            }

          },
          'less-loader',
        ],
      }

    ],

  },
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      //title:"自定义的title"
      template: "./src/index.html"
    }),
  ],
  resolve: {
    extensions: [".ts", ".js"]
  }


}