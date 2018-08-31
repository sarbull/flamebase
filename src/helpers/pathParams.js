module.exports = function(url) {
  return url.split('?')[0]
            .split('/')
            .filter(e => e != '')
            .map(e => {
              if(parseInt(e)) {
                return parseInt(e, 10);
              }

              return e;
            });
}
