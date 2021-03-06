const http = require('http');
import { all_result } from './SystemInfo'

const hostname = 'localhost';
var port = 8080;



const requestListener = async function (req, res) {
    if (req.url === '/api/v1/sysinfo') {
        var json = JSON.stringify(await all_result())
        res.writeHead(200, { 'Content-type': 'application/json' })
        res.write(json);
        res.end();
    }
    else {
        res.writeHead(200, { 'Content-type': 'application/json' })
        res.write("Page not found (404)");
    }

}

const server = http.createServer(requestListener);
server.listen(process.env.PORT || port);


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