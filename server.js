const http = require('http');

const hostname = 'localhost';
const port = 8080;


const requestListener = function (req, res) {
    res.writeHead(200, { 'Content-type': 'application/json' })
    res.write(JSON.stringify({ "key": "data" }));
    res.end();
}

const server = http.createServer(requestListener);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// var http = require('http');

// var server = http.createServer(function (req, res) {

//     if (req.url == '/data') { //check the URL of the current request
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.write(JSON.stringify({ message: "Hello World" }));
//         res.end();
//     }
// });

// server.listen(5000);

// console.log('Node.js web server at port 5000 is running..')