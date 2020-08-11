// 创建最简单的服务器

const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    console.log('request come', request.url);

    // /* 'fs.readFileSync' 同步读取 html 内容，注意一定要设置 'utf-8' 读取，
    //    这样读取的格式才是 字符串不设置的话就读取的时候就是以二进制的方式读取 */
    // const html = fs.readFileSync('../client/test.html', 'utf8');
    // response.writeHead(200, {
    //     /*
    //     设置 'Content-Type': 'text/html'，为的是让浏览器识别成 html，
    //     不设置的话，浏览器会识别成字符串，不过这一句，node 会帮我们默认加上
    //     所以不设置也可以。
    //     如果设置成 'Content-Type': 'text/plain'，浏览器会把文件当成字符串显示出来
    //     */
    //     'Content-Type': 'text/html'
    // })
    // response.end(html);


    // 前端需要在 访问 缓存 'script.js' 文件，所以需要做一个路径判断

    // if (request.url === '/') {
    //     const html = fs.readFileSync('../client/test.html', 'utf-8');
    //     response.writeHead(200, {
    //         'Content-Type': 'text/html'
    //     })
    //     response.end(html);
    // }
    //
    // if (request.url === '/script.js') {
    //     // console.log('script')
    //     response.writeHead (200, {
    //         'Content-Type': 'text/javascript',
    //         'Cache-Control': 'max-age=20'
    //     })
    //     response.end('console.log("script loaded")');
    // }


    //
    if (request.url === '/') {
        const html = fs.readFileSync('../client/test.html', 'utf-8');
        response.writeHead(200, {
            'Content-Type': 'text/html'
        })
        response.end(html);
    }

    if (request.url === '/script.js') {
        console.log(request.headers);
        response.writeHead(200, {
            'Content-Type': 'text/javascript',
            'Cache-Control': 'max-age=200000, no-store',
            'Last-Modified': '123',
            'Etag': '777'
        })
        const etag = request.headers['if-none-match'];
        if(etag === '777') {
            response.writeHead(304, {
                'Content-Type': 'text/javascript',
                'Cache-Control': 'max-age=200000, no-store',
                'Last-Modified': '123',
                'Etag': '777'
            })
            response.end('');
        } else {
            response.writeHead (200, {
                'Content-Type': 'text/javascript',
                'Cache-Control': 'max-age=200000, no-store',
                'Last-Modified': '123',
                'Etag': '777'
            })
            response.end('console.log("script loaded")');
        }
    }

    // 需要监听一个端口，因为所有的服务需要监听一个端口才能访问
}).listen(8888)

/* 在终端 cd 到这个文件目录下，输入 `node 01server.js` 就可以启动服务器
   如果启动成功，会在终端中打印输出下面 console.log 中的 'server listening on 8888'
   内容
 */
console.log('server listening on 8888');

/*
    服务器启动成功以后，打开浏览器，在地址栏输入 `localhost:8888`，就可以看到
    这个服务器返回的 `123` 内容
 */

/*
    模拟跨域：
     目前这个 html 文件是由 8888 服务器启动的，那么如果这个 html 中的 script 标签
     给 8887 服务器发送 ajax 请求，就会涉及到跨域.
     所以需要在 8887 这个服务器中设置 'Access-Control-Origin' header，就可以实现跨域

     其实不管我们有没有设置 'Access-Control-Origin' 这个头，浏览器都会向服务器发送这个请求，
     而且 浏览器在发送请求的时候，浏览器自己不知道这个请求是不是跨域，所以浏览器一定会发送这个请求
     并且接收返回内容，但是当浏览器在接收到的内容中没有看到 'Access-Control-Origin： *'，
     也就是浏览器没有看到 'Access-Control-Origin' 这个头被设置成允许的话，那么浏览器会把这个
     请求返回的内容忽略掉，并且在命令行中报这个错。所以跨域的原理就是，请求已经发送了，内容也返回了，
     只不过浏览器在解析这个返回的内容的时候，发现这是不允许的，所以浏览器帮我们拦截了，这其实是浏览器
     提供的功能。如果在终端的 curl 里面，可以随便发送请求，并没有这个跨域的概念，任何 http 请求都是
     可以返回内容并输出的

 */


