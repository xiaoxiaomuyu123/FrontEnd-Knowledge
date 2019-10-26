## MongoDB
1. 介绍
    - 关系型数据库：   
    表与表之间存在关系，所有的关系型数据库都要通过 SQL 语句来操控，在操作之前都要设计表结构。
    - 非关系型数据库：   
    非关系型数据库非常灵活，有的非关系型数据库就是 key-value 键值对，但是 MongoDB 是长得最像关系型数据库的非关系型数据库。它有关系型数据库的特点：  
        - 数据库：在 MongoDB 中也叫数据库
        - 数据表：在 MongoDB 中叫集合（数组）
        - 表记录：在 MongoDB 中叫文档对象    

        他也有其他特点：  
        - MongoDB 不需要设计表结构，也就是说可以任意的往里面存数据，没有结构性的说法，非常灵活。存储方式是键值对。类似于json的格式。具有如下的特点：
            - 可以有多个数据库
            - 一个数据库可以有多个集合（表）
            - 一个集合中可以有多个文档（表记录）
        文档结构灵活，没有任何限制
        mongoDB非常灵活，不需要像MYSQL一样先创建数据库、表、设计表结构只需要：当你插入数据的时候，指定往哪个数据库的哪个集合插入即可一切都由mongoDB帮你自动完成建库建表。可以把整个 mongoDB 看成一个大的对象，比如里面有 qq 数据库，淘宝数据库，百度数据库,然后把不同网站的数据存在不同的数据库中，存储不同的信息有不同的集合，比如存储 qq 用户信息，就有一个 user 的集合，这个集合就是一个数组，集合里面存储了不同的用户信息，就是文档。
            ```
            {
                qq:{
                    user: [
                        {name: 'Tom', age: 18},
                        {name: 'Jack', age: 28},
                        {name: 'Marry', age: 18},
                    ],
                    products: [

                    ]
                },
                taobao: {

                },
                baidu: {

                }
             }
             ```   
        - 可以看看菜鸟教程的介绍   


2. 启动和关闭数据库  
    - 启动：  
    MongoDB 默认使用 `mongod` 所处的磁盘符根目录下的 /data/db 作为自己存储数据的目录，所以在第一次启动前，要自己手动建一个这样的目录。我是在 E 盘下 新建了一个 data 文件夹。   
    - 关闭：   
    Ctrl + C 或者直接关闭刚刚敲入`mongod`的控制台。  
    - 修改数据存储的目录可以用  
     `mongod --dbpath=数据存储目录`  
3. 连接和退出，删除数据库  
连接之前一定要保证数据库在开启状态，然后再打开一个控制台，输入下面的命令，才能进行连接可退出数据库的操作
    - 连接数据库：   
    在控制台使用  `mongo` 命令，该命令默认连接本机的 MongoDB 数据库。
    - 退出数据库：  
    在控制台使用  `exit` 命令  
    - 删除集合  
    db.集合名.drop()
    - 删除数据库: 在当前数据库下输入下面的命令 
    db.dropDatabase()
4. 基本命令：  
    - 查看显示所有数据库：  
    `show dbs`
    - 查看当前连接操作的数据库    
    `db`
    - 切换到指定的数据库，如果没有就新建一个这样的数据库  
    `ues 数据库名称`
    -  插入数据
    - 查看数据: 此时数据库的 collection 叫做 Cat  
    `db.cats.find()`
    - 查看多条数据:   
    `it`     
不推荐这样使用，一般推荐用 第三方包 mongoose 来操纵 mongodb

5. 在 node 中如何操作 MongoDB    
    - 使用官方的 MongoDB 包来操纵：  
    https://github.com/mongodb/node-mongodb-native  
    - 使用第三方 mongoose 操纵，基于 mongodb 包再一次进行封装
        - 新建文件，初始化   
        `npm init -y`
        - 安装 mongoose   
        `npm mongoose --save`
        - 连接数据库  
        https://mongoosejs.com/ 新建 js 文件，写入这里的实例代码。
        - 设计 Schema，发布 module
        ```
        // 1. 引入 mongoose 这个包
        const mongoose = require('mongoose');

        // 2. 连接 mongodb 数据库，这里即使 idcast 还没有被创建也没有关系
        // 当插入第一条数据的时候，这个数据库就会被创建了。所以不需要单独创建。
        mongoose.connect('mongodb://localhost:27017/idcast', {useNewUrlParser: true});

        //
        var Schema = mongoose.Schema;

        // 4. 设计集合结构
        // 字段名称就是表结构中的属性名称
        // 约束的目的是保持数据的完整性
        var userSchema = new Schema({
            username : {
                type: String,
                required: true
                },
                password: {
                    type: String,
                    required: true
                },
            email: {
            type: String
            }
            });

        // 5. 将文档结构发布为模型
        // mongoose.model 用来将文档架构发布成模型，
        // 传入的第一个参数  必须是首字母大写的单数名词，表示数据库名称
        //                mongoose 会将首字母大写的名次字符串自动生成小写名词复数的集合名称。
        //                例如这里的 User 最终会变成 users 集合名称。
        // 传入的第二个参数  架构 Schema

        // 返回 模型对象或者说是模型构造函数
        // 如果要生成的集合名称是 users，那么第一个参数就传入 User，其实首字母小写也可以
        // 结果返回的是一个构造函数
        var User = mongoose.model('User', userSchema);

        // 4. 当我们有了构造函数之后，就可以操纵 users 集合里面的数据了（增删改查）
        ```
        - 增加数据：  
        在之前代码的基础上，增加下面的内容
        ```
        // 增加数据
        // 这时仅仅是 new 出来了，还没有被持久化存储
        var admin = new User({
            username: 'admin',
            password: '123456',
            email: 'admin@163.com'
        })

        // 现在进行持久化存储， 可以接受回调函数，分为存储失败和成功两种情况
        admin.save(function(error, result) {
            if(error) {
                console.log('save failed!!');
            } else {
                console.log('save successfully!!');
                console.log(result);
            }
        })
        ```
        第一个控制台用于打开 mongodb 数据库，第二个控制台用于操纵连接数据库。所以在第二个控制台里面输入下面的命令  
        `node 刚刚写入操纵数据库代码的文件名`  
        - 查询数据库中的数据    
        ```
        // 查询所有数据
        User.find(function (error, result) {
            if(error) {
                console.log('查询失败')
            } else {
                console.log(result)
            }
        })


        // 按条件查询
        // 第一个参数设置为查询条件
        User.find({
            username: '张三'
            }, function(err, ret) {
                if (err) {
                    console.log('查询失败') ;
                } else {
                    console.log('查询成功') ;
                    console.log(ret) ;
                }
             }) ;

             // find()无论查询结果又多少，都会讲结果放入一个数组中
             // findOne()只找符合条件的第一个结果
             User.findOne({
                 password: '123456'
             }, function(err, ret) {
                 if (err) {
                     console.log('查询失败') ;
                 } else {
                     console.log('查询成功') ;
                     console.log(ret) ;
                 }
             }) ;


             // 复合条件查询
             User.findOne({
                 username: '张三',
             password: '123456'
             }, function(err, ret) {
                 if (err) {
                     console.log('查询失败') ;
                 } else {
                     console.log('查询成功') ;
                     console.log(ret) ;
                 }
             }) ;

        ```
        在控制台 输入 `ctrl + C` 结束之前的程序，在输入   
        `node 刚刚写入操纵数据库代码的文件名`  
        - 删除数据库中的数据
        ```
        // 删除数据的函数是remove()
        User.remove({
            username: 'curry'
        }, function(err, ret) {
            if (err) {
                console.log('删除失败');
            } else {
                console.log('删除成功');
                // console.log(ret);
            }
        })

        ```
        - 更新数据
        ```
        // 使用findByIdAndUpdate()
        // 第一个参数是id，第二个是要更新的内容，第三个是回调函数
        User.findByIdAndUpdate('5c99f2879c17404128d717c4', {
            password: '8888888'
        }, function(err, ret) {
            if (err) {
                console.log('更新失败') ;
            } else {
                console.log('更新成功') ;
            }
        })

        // 使用findOneAndUpdate()
        User.findOneAndUpdate({
            username: '张三'
        }, {
            username: 'zs',
            password: 'abcedf'
        }, function(err, ret) {
            if (err) {
                console.log('更新失败') ;
            } else {
                console.log('更新成功') ;
            }
        })
        ```  
        注意区分 文档 和 集合。如果 文档叫 user，集合就叫 users，这个很重要。集合的名称后面总是有 s，是复数。
