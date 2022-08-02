const http = require('http');
const fs = require('fs');

//  using this to create a server, takes in 2 arguments and callback function that run every time request is made
//  request and response objects
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

// set header content type
res.setHeader('Content-Type', 'text/html');

let path = './views/';
switch(req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/portfolio':
      path += 'portfolio.html';
      res.statusCode = 200;
    case '/about-me':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
    default:
      path += '404.html';
      res.statusCode = 404;
      break;
}

// send an html file
fs.readFile(path, (err, data) => {
    if (err) {
        console.log(err);
        res.end();
    } else {
        res.end(data);
    }
})
});




// listening for the server
server.listen(3000, 'localhost', () => {
    console.log('listening for request on PORT 3000');
});
