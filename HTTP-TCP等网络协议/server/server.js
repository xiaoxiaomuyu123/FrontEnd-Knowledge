const http = require('http');
const fs = require('fs');



http.createServer(function(request, response) {
    // 请求的内容会封装到 request 对象里面
    console.log('request come', request.url);

    // 根据请求的数据，进行返回
    if(request.url === '/') {
        const html = fs.readFileSync('../client/test.html', 'utf8');
        response.writeHead(200, {
            'Content-Type': 'text/html'
        })
        response.end(html)
    }
}).listen(3000);

console.log('server listening on 3000 ');