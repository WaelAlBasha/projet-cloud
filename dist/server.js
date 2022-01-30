"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require('http');
const SystemInfo_1 = require("./SystemInfo");
const hostname = 'localhost';
const port = 8080;
const requestListener = async function (req, res) {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.write(JSON.stringify(await (0, SystemInfo_1.cpu)()));
    res.end();
};
const server = http.createServer(requestListener);
server.listen(port || process.env.PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
//# sourceMappingURL=server.js.map