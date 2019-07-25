@[TCL]文章目录

### 安装 webpack，使用 webpack 配置文件

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
