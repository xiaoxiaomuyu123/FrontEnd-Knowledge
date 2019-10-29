const http = require('http');
var url = require('url');

http.createServer(function(request, response) {
    console.log('request come', request.url);

    response.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'X-Test-Cors',
        'Access-Control-Allow-Methods': 'PUT, POST',
    })

    response.end('456');

    /*
    JSONP 后端的工作：从 url 中解析出 callback，将数据包裹在回调函数里面，发送回客户端
    const callback = url.parse(request.url).query.split('=')[1];

    response.end(`${callback}('123')`) ;

     */
}).listen(8887);

console.log('server listening on 8887 ');