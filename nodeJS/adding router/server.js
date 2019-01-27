

var http= require("http");
var url=require("url");

function start(router,requestHandlers){

function onRequest(request, response){
var pathName=url.parse(request.url).pathname;
console.log("pathName:"+pathName);
router.route(requestHandlers,pathName);

console.log("Request for " +pathName + " received");
response.writeHead(200, {"Content-Type" :"text/plain"});
response.write("Hello World");
response.end();}
http.createServer(onRequest).listen(8888);
console.log("Server started");
}

exports.start=start;
