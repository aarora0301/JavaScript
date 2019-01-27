
var express=require('express');
var app=express();

app.get('/', function(req,res){
    res.send('<b> My first express http server');
});

app.get('/welcome', function(req,res){
    res.send('Http Server created with Express')
});

app.use(function(req,res){res.status(404).send('Sorry route does not exist')});
app.listen(3002,function(){console.log('App listening on port 3002')});
