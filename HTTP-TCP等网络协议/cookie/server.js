// 演示 cookie 过期时间

const http = require('http');
const fs = require('fs');

http.createServer(function(request, response) {
    console.log('request come', request.url);

    if(request.url === '/') {
        const html = fs.readFileSync('test.html', 'utf8');
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'Set-Cookie': ["id=123; max-age=2", "abc=456", 'xk=123456']
        })
        response.end(html);
    }

}).listen(3001);

console.log('server listening on 3001 ');