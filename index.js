var http = require('http');
var goals = require('./Goals');

var ronaldo = goals.createInstance();
ronaldo.goal();
ronaldo.goal();
ronaldo.miss();
ronaldo.miss();
ronaldo.miss();
var log = goals.log();

http.createServer(function(req,res){
    res.writeHead(200);
    console.log("Server is on the terminal!");
    res.write("success");
    res.write(log);
    res.end();
}).listen(8080);
