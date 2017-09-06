var http = require('http');

var server = http.createServer(function(request, response) {
    console.log("Recieved request");
    response.write("hurrah");
    response.end();
})

server.listen(8080);