const fs = require('fs');
const url = require('url');
const express = require('express');

const app = express();
const dir = './pages';

app.get('/', (req, res) => {
  const all = JSON.parse(fs.readFileSync(`${dir}/index.json`));
  res.json(all);
});

app.get('/teams', (req, res) => {
  const path = url.parse(req.url).path;
  const data = JSON.parse(fs.readFileSync(`${dir}${path}.json`));
  res.json(data);
});

app.get('/leagues', (req, res) => {
  const path = url.parse(req.url).path;
  const data = JSON.parse(fs.readFileSync(`${dir}${path}.json`));
  res.send(data);
});

app.get('/players', (req, res) => {
  const path = url.parse(req.url).path;
  const data = JSON.parse(fs.readFileSync(`${dir}${path}.json`));
  res.send(data);
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
})