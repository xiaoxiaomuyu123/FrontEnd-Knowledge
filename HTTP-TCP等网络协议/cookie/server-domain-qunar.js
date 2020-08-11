const http = require('http');
const fs = require('fs');

http.createServer(function(request, response) {
    console.log('request come', request.url);
    const host = request.headers.host;
    if(request.url === '/') {
        const html = fs.readFileSync('../client/test-qunar.html', 'utf8');
        if(host === 'cookie.com') {
            response.writeHead(200, {
                'Content-Type': 'text/html',
                'Set-Cookie': ["name=crossSubDomain; domain=cookie.com", "path=/; domain=cookie.com"]
            })
        }
        response.end(html)
    }

}).listen(8888);

console.log('server listening on 8888 ');