const http = require('http');
const url = require('url');

const app = http.createServer ((request, response) => {
  response.writeHead(200, {'Content-type':'application/json'});
  response.write(JSON.stringify({message: 'Hello world!'}));
  response.end();

  pathName = url.parse(request.url).pathname;
  query = url.parse(request.url).query;

  console.log(`pathName = ${pathName}`);
  console.log(`query = ${query}`);
})

app.listen(8080);
