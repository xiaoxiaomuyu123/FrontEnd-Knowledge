const http = require('http')

http.createServer(function(request, response) {
    console.log('response come', request.url);

    response.writeHead(200, {
        // 'Access-Control-Allow-Origin': '*'
        'Access-Control-Allow-Origin': 'http://localhost:8888',
        'Access-Control-Allow-Methods': 'POST, GET, PUT',

        /* 表示允许上面的这种方式进行跨域的最长时间，也就是 1000 秒内，不需要发送预请求进行
           验证了，直接发送请求就好
         */
        'Access-Control-Max-Age': '1000'
    })


    response.end('123');
}).listen(8887);

console.log('server listening on 8887')