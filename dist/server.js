"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var fs = require("fs");
var path = require("path");
var port = 3000;
var indexPath = path.join(__dirname, '../public/index.html');
var server = http.createServer(function (_, res) {
    fs.readFile(indexPath, function (err, data) {
        if (err) {
            res.statusCode = 500;
            res.end('Error loading index.html');
        }
        else {
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
    });
});
server.listen(port, function () {
    console.log("Server running at http://localhost:".concat(port, "/"));
});
