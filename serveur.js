var http = require("http" );



http.createServer(function (request, response) {

   // Envoi de l'en-tête HTTP

   // Statut HTTP : 200 : OK

   // Type de contenu : text/plain

   response.writeHead(200, {'Content-Type' : 'text/plain'}) ;



   // Envoi du corps de la réponse sous la forme "Hello World" ;

   response.end('<h1>Hello Node!!!!</h1>\n') ;

}).listen(3000) ;

console.log('Server running at http://localhost:3000') ;