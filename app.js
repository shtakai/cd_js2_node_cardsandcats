var http,
    fs,
    port
http = require('http');
fs = require('fs');
port = 6789;

var server = http.createServer(function(request, response){
  console.log(`client request url: ${request.url}`);





});

server.listen(port);
console.log(`running in localhost at ${port}`);

