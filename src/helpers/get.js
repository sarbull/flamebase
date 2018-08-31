module.exports = function(data, req) {
  let response = {
    status: 200,
    content: undefined
  }

  switch(req.pathParams.length) {
    case 0:
      break;
    case 1:
      response.content = data[req.pathParams[0]]
      break;
    case 2:
      response.content = data[req.pathParams[0]].filter(e => e.id == req.pathParams[1])
                                    .pop();
      break;
    case 3:
      response.content = data[req.pathParams[0]]
                          .filter(e => e.id == req.pathParams[1])
                          .pop()[req.pathParams[2]];
      break;
    case 4:
      response.content = data[req.pathParams[0]].filter(e => e.id == req.pathParams[1])
                                    .pop()[req.pathParams[2]]
                                    .filter(e => e.id == req.pathParams[3])
                                    .pop();

      break;
    default:
      return;
  }

  if (!response.content) {
    response.status = 404;
  }

  return response;
};
