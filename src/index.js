const express = require('express');
const bodyParser = require('body-parser');
const pathParams = require('./helpers/pathParams');
const cleanUrl = require('./helpers/cleanUrl');
const get = require('./helpers/get');

const app = express();

let data = {
  products: [
    {
      id: 1,
      images: [
        {
          id: 1,
          image: 'picture-1.jpg'
        }
      ]
    }
  ]
};

app.set('etag', false);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.removeHeader('X-Powered-By');
  res.removeHeader('ETag');
  next();
});

app.use(function (req, res) {
  const r = {
    method: 'GET',
    url: cleanUrl(req.url),
    pathParams: pathParams(req.url),
    query: req.query,
    body: req.body,
    headers: req.headers
  };


  switch(req.method) {
    case 'GET':
      const response = get(data, r);

      res.status(response.status).json(response.content);
      break;
    case 'POST':
      break;
    case 'PUT':

      break;
    case 'PATCH':

      break;
    case 'DELETE':

      break;
    default:
      console.log('nothing');
  }

  // const url = req.url;
  // const body = req.body;
  // const query = req.query;
  // const headers = req.headers;
  // const method = req.method;

  // console.log('_____________________________________________');

  // console.log(`url = ${JSON.stringify(url)}`);
  // console.log(`body = ${JSON.stringify(body)}`);
  // console.log(`query = ${JSON.stringify(query)}`);
  // console.log(`headers = ${JSON.stringify(headers)}`);
  // console.log(`method = ${JSON.stringify(method)}`);

  // res.json(r);
});

app.listen(8080);
