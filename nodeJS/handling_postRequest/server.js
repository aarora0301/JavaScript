
var http=require("http");
var url=require("url");

function start(router, handle){

    function onRequest(request,response){

        var postData="";
        var pathName=url.parse(request.url).pathname;
        console.log("Request for  "+ pathName + "received.")

        request.setEncoding("utf8");

        request.addListener("data", function(postDataChunk){
            postData+=postDataChunk;
            console.log("Received post Data chunk '"+postDataChunk +" '.");
        });

        request.addListener("end", function(){
            router.route(handle,pathName,response,postData);
        });
}

     http.createServer(onRequest).listen(8802);
     console.log("Server has started");
}

exports.start=start;