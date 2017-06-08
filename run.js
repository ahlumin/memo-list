var http = require('http');
var path = require('path');
var express = require('express');

const app = express();
app.use('/dist', express.static('dist'));


app.get('/', function(req,res){
    res.sendFile(path.resolve('./index.html'));
});

http.createServer(app).listen(8080, '127.0.0.1', function(){
    console.log('accounting app has been started...')
});
