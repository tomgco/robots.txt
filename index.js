var fs = require('fs')
  , utils = require('utils')

module.exports = function favicon(path, options){
  options = options || {}
  path = path || __dirname + '/../public/robots.txt'
  var maxAge = options.maxAge || 86400000
    , robots // robots cache

  return function robot(req, res, next){
    if ('/robots.txt' === req.url) {
      if (robots) {
        res.writeHead(200, robots.headers)
        res.end(robots.body)
      } else {
        fs.readFile(path, function(err, buf) {
          if (err) return next(err)
          robots =
            { headers:
              { 'Content-Type': 'text/plain'
              , 'Content-Length': buf.length
              , 'ETag': '"' + utils.md5(buf) + '"'
              , 'Cache-Control': 'public, max-age=' + (maxAge / 1000)
              }
            , body: buf
            }
          res.writeHead(200, robots.headers)
          res.end(robots.body)
        })
      }
    } else {
      next()
    }
  }
}