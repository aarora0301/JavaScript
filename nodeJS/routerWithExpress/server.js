var express=require('express');
var app=express();

app.get('/', function(req,res){
    res.send('My first Http server')
});

app.route('/article')
.get(function(req,res){
    res.send('Get the Article');
})
.post(function(req,res){
    res.send('Add an article');
})
.put(function(req,res){
    res.send('Update the article');
});

//Use regular expressions in routes
app.get(/bat/,function(req,res){
    res.send('/bat')
});

app.use(function(req,res){
    res.status(404).send("Route does not exist");
});

app.listen(3002,function(){
    console.log("app listening on port 3002")
});