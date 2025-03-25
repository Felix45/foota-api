const fs = require('fs');
const url = require('url');
const http = require('http');

const DIR = './pages';

http.createServer((req, res) => {
  let fileName = url.parse(req.url).path;

  if (fileName === '/') fileName += 'index';

  fs.readFile(`${DIR}${fileName}.json`, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/json' });
      return res.end(JSON.stringify({ error: 'File not found' }));
    }
    res.writeHead(200, { 'Content-Type': 'text/json' });
    res.write(data);
    return res.end();
  });
}).listen(8080);
