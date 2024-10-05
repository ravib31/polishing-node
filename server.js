const http = require('node:http');

http.createServer((req, res) => {
    if(req.url==='/getdata'){
        res.end('Sorry no data here');
    }
    res.end('Hello World\n');
}).listen(3000);