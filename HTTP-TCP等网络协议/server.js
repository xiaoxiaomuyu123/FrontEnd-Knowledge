const http = require('http');
const fs = require('fs');



http.createServer(function(request, response) {
    console.log('request come', request.url);

    if(request.url === '/') {
        const html = fs.readFileSync('test.html', 'utf8');
        response.writeHead(200, {
            'Content-Type': 'text/html'
        })


        response.end(html)
    }

    if(request.url === '/s.js') {

        response.writeHead(200, {
            'Content-Type': 'text/javascript',
            'cache-control': 'max-age=200'
        })


        response.end('console.log("s.js loaded twice 2")')
    }

}).listen(8888);

console.log('server listening on 8888 ');