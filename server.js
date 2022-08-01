const http = require('http');
const fs = require('fs');

//  using this to create a server, takes in 2 arguments and callback function that run every time request is made
//  request and response objects
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

// set header content type
res.setHeader('Content-Type', 'text/html');

// send an html file
fs.readFile('./views/index.html', (err, data) => {
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
