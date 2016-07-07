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
    console.log('-------');
    });
  }else if(request.url === '/stylesheet/style.css'){
    fs.readFile('stylesheets/style.css', 'utf8', function(error, contents){
      response.writeHead(200, {'Content-Type': 'text/css'});
      response.write(contents);
      response.end();
    });
  }else if(request.url ==='/images/car1.png'){
    fs.readFile('images/car1.png', function(error, contents){
      response.writeHead(200, {'Content-Type': 'image/*'});
      response.write(contents);
      response.end();
    });
  }else if(request.url ==='/images/car2.png'){
    fs.readFile('images/car2.png', function(error, contents){
      response.writeHead(200, {'Content-Type': 'image/*'});
      response.write(contents);
      response.end();
    });
  } else if(request.url === '/cats'){

    // /cats =>
    //  simple html page with few cat image in image folder
    fs.readFile('views/cat.html', 'utf8', function(error, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }else if(request.url ==='/images/cat1.jpg'){
    fs.readFile('images/cat1.jpg', function(error, contents){
      response.writeHead(200, {'Content-Type': 'image/*'});
      response.write(contents);
      response.end();
    });
  }else if(request.url ==='/images/cat2.jpg'){
    fs.readFile('images/cat2.jpg', function(error, contents){
      response.writeHead(200, {'Content-Type': 'image/*'});
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

