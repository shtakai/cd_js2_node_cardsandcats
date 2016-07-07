var http,
    fs,
    port
http = require('http');
fs = require('fs');
port = 7077;

var server = http.createServer(function(request, response){
  console.log(`client request url: ${request.url}`);

  if(request.url === '/cars'){

    // /cars =>
    //  simple html page with few car image in image folder
    fs.readFile('views/car.html', 'utf8', function(error, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }else{
    response.writeHead(404);
    response.end(`not found :O ${request.url}`);
  }





});

server.listen(port);
console.log(`running in localhost at ${port}`);

