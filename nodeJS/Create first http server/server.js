
// create first httpserver

var http = require("http");

function start()
{
http.createServer(function(request, response) {
 console.log("Request Received");
 response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8888);
console.log("server has started");
}

exports.start=start;
