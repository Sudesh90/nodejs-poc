const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {

    const logMessage = `${Date.now()} Request Received on ${req.url} \n `;
    let jsonObj;
    fs.appendFile('logs.txt', logMessage, (err, data) => {
        jsonObj = {
            message: 'Hello From Server'
        }
    })

    console.log('req.url ', req.url);
    switch (req.url) {
        case '/':
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(jsonObj));
            break;
        case '/about':
            res.end('Hello from about page');
            break;
        default:
            res.end('404 Not Found');
    }

    // res.setHeader('Content-Type', 'application/json');
    // res.end('Hello From HttpServer');
})

myServer.listen(8000, () => {
    console.log('Server Started!');
})