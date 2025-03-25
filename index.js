const fs   = require('fs');
const url  = require('url');
const http = require('http');

const DIR = './pages';

http.createServer(function(req, res) {
  let fileName = url.parse(req.url).path;

  if(fileName === '/') fileName += "index";
  
  fs.readFile(`${DIR}${fileName}.html`, function(err, data){
    if(err) {
        res.writeHead(404, {"Content-Type":"text/html"});
        return res.end("404 Not Found");
    }
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write(data);
    return res.end();
  });
}).listen(8080);
