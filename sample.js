var http = require("http");
var url = require('url');
var fs = require('fs');
var dt = require('./myfirstmodule');

http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.write("The date and time are currently: " + dt.myDateTime());
   //response.write(request.url);

   var q = url.parse(request.url, true).query;
   var txt = q.year + " " + q.month;
  
   // Send the response body as "Hello World"
   response.end(txt);
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');