const http = require('http');
const fs = require('fs');

http.createServer(function(request, response) {
    console.log('request come', request.url);

    const host = request.headers.host;
    console.log('host', host);

    if(request.url === '/') {
        // console.log("访问的路径是 /")
        const html = fs.readFileSync('test.html', 'utf8');
        console.log("进入 / 之后的 host 是：", host);
        if(host === 'a.test.com:8888') {
            // console.log("访问了 a.test.com")
            response.writeHead(200, {
                // 'Content-Type': 'text/html',
                'Content-Type': 'text/html',
                'Set-Cookie': ["id=123", "abc=456; domain=.test.com"]
            })
            response.end(html);
            // response.end('console.log("cookie")')
        } else {
            response.end('console.log("cookie")')
        }
    }

}).listen(8888);

console.log('server-domain server listening on 8888 ');