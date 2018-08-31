const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('etag', false);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.removeHeader('X-Powered-By');
  res.removeHeader('ETag');
  next();
});

app.use(function (req, res) {
  const url = req.url;
  const body = req.body;
  const query = req.query;
  const headers = req.headers;
  const method = req.method;

  console.log(`url = ${JSON.stringify(url)}`);
  console.log(`body = ${JSON.stringify(body)}`);
  console.log(`query = ${JSON.stringify(query)}`);
  console.log(`headers = ${JSON.stringify(headers)}`);
  console.log(`method = ${JSON.stringify(method)}`);


  res.json({message: 'Hello world!'});
});

app.listen(8080);
