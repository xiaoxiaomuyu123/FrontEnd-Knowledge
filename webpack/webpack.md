

## 一二、安装 webpack，使用 webpack 配置文件

#### webpack 是什么？
webpack 帮助我们管理复杂的前端项目模块

面向对象编程的优点：根据不同的功能进行区分，不同的功能放在不同的文件夹中，方便维护。
但随之而来的缺点就是，一个页面引入多个不同的 JS 文件，导致页面的加载速度变慢。代码出错排查困难。所以就用模块化的方式编写文件，在入口文件内引用其他文件或者模块。但是浏览器不认识这种模块化的语法，就需要 webpack 来翻译。把翻译好的文件默认放在 dist/main.js

webpack 是基于 node 开发出的 一个模块打包工具。可以识别 CommonJS(node)，AMD，CMD，ES6 模块引入机制的打包方式。

#### 全局安装 webpack

```npm install webpack webpack-cli -g```  

这条命令可以进行全局安装，因为是全局安装，在本地的项目都可以用。  

  ```webpack 文件名 ```  用webpack打包文件

但是不推荐这样安装。如果把这个项目打包好发送给别人，如果对方没有安装 webpack，或者版本不一致，就会导致代码无法正常运行。推荐在每个项目的根目录下都安装一个 webpack  

#### 局部安装

```npm install webpack webpack-cli --save-dev```

在项目根目录下输入上面这条命令。安装 webpack-cli 的目的是，可以让我们在命令行内运行 webpack 命令。   

```npx webpack 文件名```   打包文件命令


#### 使用 webpack 的配置文件

引入图片和引入 js 文件的打包方式是完全不一样的。
webpack 的默认配置文件：webpack.config.js

```npx webpack index.js```  
这调命令的意思是让 webpack 打包 index.js 文件。如果不写 index.js ，我们就要自己写 webpack 的配置文件。

```const path = require("path");
module.exports = {
    // 设置 mode 参数。参数值默认是 production，所有代码会被压缩成一行代码，  
    // 参数值还可以设置成 development，就不会被压缩成一行代码。
    mode: "production"
    // 打包的入口文件
    entry : "./index.js",

    // 设置打包的文件放的位置
    output: {

        // 打包好的文件的文件名
        filename : "bundle.js",

        // 打包好文件的文件目录，文件所在的位置，path 引入的是绝对路径，
        // 需要引入 node 里 path 这个核心模块来设置
        // __dirname 值得是 webpack.config.js 所在的绝对路径，
        // 我们现在要把 boundle 和当前文件的绝对路径做一个结合
        // 这样我们就得到了 bundle 这个文件的绝对路径了,bundle 文件目录下有一个bundle.js 打包好的文件
        path: path.resolve(__dirname, "bundle")
    }
}
```
```npx webpack --config a文件名```  
这条命令的意思是，让 webpack 不按照默认的 webpack.config.json 这个文件的配置打包，而是按照 a 文件的配置打包。

利用 模块化 编写的代码，不能直接在浏览器中运行，需要打包工具打包，我们自己写的代码就是源代码，要把这些源代码放在 项目目录的 src 目录下

我们经常用的是 npm run 语句进行打包，不用 npx 命令，那么我们怎么进行配置让 npm run 代替 npx 呢? 打开 项目里面的 package.json 文件，修改 script 对象里面的内容，将原来的内容删除，改成   
```"bundle" ： "webpack"```，  
那么运行的 npm run bundle 就是运行了 npx webpack

## 三、webpack 核心概念

webpack 默认直到如何打包 js 文件，但对于图片文件并不知道怎么打包，需要我们自己配置。在 webpack.config.json 文件中配置 module 对象：  
```const path = require("path");
module.exports = {

    mode: "production"
    entry : "./index.js",
    // 当 webpack 不知道怎么打包模块的时候，就会来 module 对象看一下应该怎么配置
    // 打包图片模块，需要安装 file-loader
    module: {
        rules: [
            {
                test: /\.png|$/,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    }
    output: {

        filename : "bundle.js",


        path: path.resolve(__dirname, "bundle")
    }
}
```   
这样再运行 npm run bundle 或者 npx webpack 就可以把图片也打包成功了。会把打包的图片和 js 文件都放在默认的 dist 文件夹中。也就是说，要想打包图片文件，我们必须要下载 file-loader。使用下载的命令是  
 ```npm install file-loader -D```   
实际上，file-loader 打包的图片最终结果是一个图片的地址。可以去看 webpack 的官方文档查看各种 loader 的使用方法和范围。loader 就是一个打包方案。

#### 使用 loader 打包静态图片资源

如何用 webpack 打包图片的时候，可以改变图片名称。可以在 options 的匹配项里面进行配置     
```
const path = require("path")
module.exports = {
    mode: 'production',
    entry : "./src/index.js",
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        // 配置的图片和之前没有配置的名字和后缀一模一样
                        name:'[name].[ext]',
                        // 当遇到图片文件的时候，会把打包后的文件放在 dist 下的 imgs 文件夹中
                        outputPath: 'imgs/'
                    }
                }
            }
        ]
    },
    output: {
        filename : "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
}
```


#### url-loader

url-loader 可以代替 file-loader 打包。首先先安装 url-loader  
`npm install url-loader -D` 
然后在 webpack.confij.json 文件中，将 file-loader 替换成 url-loader 可以正常打包，图片在网页中也会显示正常，但在 bist 目录下并没有 img 文件，也没有出现打包好的图片文件。这是因为在用 url-loader 打包图片的时候，他会把图片转化成 base64 的字符串，存在 bundle.js 里面，而不是像 file-loader 打包成单独的图片文件。url-loader 这样打包图片的好处是，把图片直接放在打包好的 js 文件中，节省了一次图片的 http 请求，但是如果图片特别大，打包成的 JS 文件也会特别大，那么加载这个 js 文件的时间就会很长，那么就有可能在一开始很长的时间里面，页面什么都显示不出来。所以当图片非常小，只有几k的时候，用url-loader 打包，否则图片很大，就用 file-loader 打包。为了平衡，就在 url-loader 中进行进一步的配置，配置 limit

```
const path = require("path")
module.exports = {
    mode: 'production',
    entry : "./src/index.js",
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        // 配置的图片和之前没有配置的名字和后缀一模一样
                        name:'[name].[ext]',
                        // 当遇到图片文件的时候，会把打包后的文件放在 dist 下的 imgs 文件夹中
                        outputPath: 'imgs/',
                        // 如果图片小于 2048 个字节，就用base64 的打包方式，打包完放在 js 文件里面
                        // 如果图片大于 2048 个字节，就单独打包成图片文件。
                        limit: 2048
                    }
                }
            }
        ]
    },
    output: {
        filename : "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
}

```

#### 使用 loader 打包静态 CSS 资源

打包 css 文件，就要更改 module 里面的配置。要用到 style-loader 和 css-loader，就得安装他们，并在 webpack.config.json 文件的 module 里面的 ues 中进行下面的设置。
```
const path = require("path")
module.exports = {
    mode: 'production',
    // 打包的入口文件
    entry : "./src/index.js",
    // 设置打包的文件放的位置
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        outputPath: 'imgs/',
                        limit: 2048
                    }
                }
            },
            {
                test: /\.css$/,
                // 打包 css 需要两个 use，所以 use 就不能是对象了，要设置成数组。
                use: ['style-loader', 'css-loader']
            }

        ]
    },
    output: {
        filename : "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
}
```

在这里 css-loader 做的工作就是确定几个 css 文件的相互依赖关系，然后将几个 css 文件打包成一段 css 代码，style-loader 就会把刚刚生成的一段 css 代码挂载到页面的 head 中。

#### plugin 插件介绍

使用插件的时候要在 webpack.config.json 文件的开头先进行引用。可以用 commonJS 的引用方式。

##### 1. html-webpack-plugin

html-webpack-plugin 插件的作用：会在打包结束后走动生成一个 html 页面，并把打包生成的 js 文件自动引入到 html 页面中。但是在生成的 html 文件中并没有之前 html 文件里面的入口 id 为 “root” 的 div，就需要对 htmlWebpackPlugin 再次进行配置：

```
// 使用插件之前先引用，后面再进行实例化
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
module.exports = {
    mode: 'production',
    // 打包的入口文件
    entry : "./src/index.js",
    // 设置打包的文件放的位置
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        outputPath: 'imgs/',
                        limit: 2048
                    }
                }
            },
            {
                test: /\.css$/,
                // 打包 css 需要两个 use，所以 use 就不能是对象了，要设置成数组。
                use: ['style-loader', 'css-loader']
            }

        ]
    },
    // 使用 htmlWebpackPlugin 插件，以 src/index.html 打包后自动生成 html。  
    // 此时自动生成的 html 页面也自动的引入了打包后的 js 文件。
    // 使用的时候要实例化这个插件
    plugins: [
       new HtmlWebpackPlugin({template: './src/index.html'})
   ],
    output: {
        filename : "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
}
```

plubins 很像 react 里面的生命周期函数，在一定的时间做某件事情。

##### 2. clean-webpack-plugin

clean-webpack-plugin 不是 webpack 官方的插件，是一个第三方插件，但是安装方法都是一样的。他的作用是在第二次打包的时候，先将 dist 目录删除，然后再进行打包，从新生成 dist 目录。这样保证在第二次打包以后的 dist 文件中不会保留第一次打包时的 js 文件。使用的时候要用解构的方法引入，使用的时候要进行实例化，但是不能传递任何参数。

```
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWepackPlugin} = require("clean-webpack-plugin")
const path = require("path")

module.exports = {
    mode: 'production',

    // 打包的入口文件
    entry : "./src/index.js",

    // 设置打包的文件放的位置
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        outputPath: 'imgs/',
                        limit: 2048
                    }
                }
            },
            {
                test: /\.css$/,

                // 打包 css 需要两个 use，所以 use 就不能是对象了，要设置成数组。
                use: ['style-loader', 'css-loader']
            }

        ]
    },

    // 使用 htmlWebpackPlugin 插件，以 src/index.html 打包后自动生成 html。  
    // 此时自动生成的 html 页面也自动的引入了打包后的 js 文件。
    // 使用的时候要实例化这个插件

    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),

        // CleanWebpackPlugin 这个插件传入的参数是一个数组，
        // 表示在使用 CleanWebpackPlugin 会删除 dist 目录下的所有内容，不传递参数
        new CleanWebpackPlugin()
    ],

    output: {
        filename : "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
}
```

## Entry 与 Output 基础配置

```entry : "./src/index.js"```  是  
```entry : {main: "./src/index.js"}``` 的简写方式。    

如果想要把 index.js 文件打包成两个文件， main.js 和 sub.js，就要把 entry 设置成
```
entry : {
    main: "./src/index.js",
    sub: "./src/index.js"
    }
```
对应的 output 中的 filename 设置成 [name] 占位符。这样打包后的 js 文件就是 前面 entry 设置的关键字 main 和 sub。也就打包成 main.js 和 sub.js 了。
```
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWepackPlugin = require("clean-webpack-plugin")
const path = require("path")

module.exports = {
    mode: 'production',

    // 打包的入口文件
    entry : {
        main: "./src/index.js",
        sub: "./src/index.js"
        }

    // 设置打包的文件放的位置
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        outputPath: 'imgs/',
                        limit: 2048
                    }
                }
            },
            {
                test: /\.css$/,

                use: ['style-loader', 'css-loader']
            }

        ]
    },


    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),

        new CleanWebpackPlugin(['dist'])
    ],

    output: {
        // 不设置 filename，默认打包输出的 js 文件是 main.js
        filename : '[name].js',
        path: path.resolve(__dirname, "dist")
    }
}
```
像上面那样的打包结果，由于 HtmlWebpackPlugin 就会把 main.js 和 sub.js 都放在 index.html 中

#### 在打包好的 index.html 中引入 js 文件的绝对路径。

需求：当我们把 js 文件上传到一个 cdn 服务器中，那么在 index.html 的 script 要像下面这样引入 js 文件：
```
<script src="https://cdn.com/main.js"></script>
```
解决方案：配置 output 的 publicPath
```
output: {
    publicPath: 'https://cdn.com',
    // 不设置 filename，默认打包输出的 js 文件是 main.js
    filename : '[name].js',
    path: path.resolve(__dirname, "dist")
}
```
## SourceMap 的配置

需求：当 js 文件出错时，我们希望浏览器报错的时候直接定位到我们自己编写的源代码的某某个文件，而不是定位到已经打包好的 js 文件中。这就需要设置 SourceMap。设置 devtool：'source-ma'。
```
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWepackPlugin = require("clean-webpack-plugin")
const path = require("path")

module.exports = {
    mode: 'production',
    // 程序出错时，直接定位到源文件
    devtool: 'source-map',
    entry : {
        main: "./src/index.js",
        sub: "./src/index.js"
        }

    module: {
        rules: [
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        outputPath: 'imgs/',
                        limit: 2048
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),

        new CleanWebpackPlugin(['dist'])
    ],

    output: {
        filename : '[name].js',
        path: path.resolve(__dirname, "dist")
    }
}
```
1. 设置成 source-map，dist 目录下会多出一个 main.js.map 文件，里面的内容是对源代码和打包的代码做了一个映射关系，
2. 设置成 inline-source-map，也可以提示源文件的那里出错了。但是 dist 目录下的 main.js.map 没有了。这种打包方式会把映射关系直接写在打包好的 js 文件中。
3. 设置成 cheap-inline-source-map，就会优化打包速度。之前的设置会使得报错的时候提示到源文件的哪一行的哪一列，现在这种 cheap 的设置，只提示到哪一行。适合代码量大的时候的打包方式。并且这种映射关系只管业务代码的映射关系，不管第三方模块的错误。如果想把第三方模块也加入到映射关系中，就再加上 module。
4. 设置成 eval，打包速度是最快的，执行效率快。但是提示错误不全。

综上，如果是在 development 环境中打包，devtool 就设置成 cheap-module-eval-source-map；如果是 production 上线环境中，就配置成 cheap-module-source-map。

### 使用 WebpackDevServer 提升开发效率

需求：只要修改了 src 目录下的源代码，就会自动打包，然后自动运行 html 页面，提升开发效率。
解决方案：
在 package.json 文件中修改 script 对象里面的代码 ```'bundle' : 'webpack'``` 修改成 ```'watch: 'webpack --watch'```。这样打包的时候就可以直接运行 ```npm run watch``` 而不是运行 ```npm run watch```这个时候，只要我们的源代码发生变化，webpack 就会监听到这个变化，自动打包，我们刷新一下页面就可以了。
