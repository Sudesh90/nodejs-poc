const http = require('http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    console.log('req ' + req.url);
    let actualUrl = req.url.split('?')[0];
    console.log('actual url ' + actualUrl)

    if (req.url === '/test') {
        // let queryParam = url.parse(req.url, true).query;
        // console.log(`queryParam ${queryParam}`);
        console.log('actualUrl ', req.url);
        console.log('req.url ', req.url);
        // console.log('req.query ',req.query);
    }else{
        res.setHeader('Content-Type','application/json');
        res.end('Hello, World!');
    }

    res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'application/json');
    // res.end('Hello, World!');
    res.end(JSON.stringify({ message: 'Hello, World!' }));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});