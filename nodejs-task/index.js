const path = require('path')
const fs = require('fs')
const http = require('http')

//create server with http variable
const server = http.createServer(function(req, res){
   if (req.url === '/' || '/index.html'){ 
    
    let filePath = path.join(__dirname, 'portfolio', 'index.html')
    fs.readFile(filePath, 'utf8', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.end(data)
    })
   }

   if (req.url === '/contact.html'){
    let filePath = path.join(__dirname, 'portfolio', 'contact.html')
    fs.readFile(filePath, 'utf8', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.end(data)
    })
   }

   if (req.url === '/about.html'){
    let filePath = path.join(__dirname, 'portfolio', 'about.html')
    fs.readFile(filePath, 'utf8', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.end(data)
    })
   } 

    
    //  res.end(` `)

});

//create a port
server.listen(5000, '127.0.0.1');

console.log("Server started at port 5000");
