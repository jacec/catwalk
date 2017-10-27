
'use strict'

require("./splash").ShowSplash();
var logger = require('./logger.js')
var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('./data/db.json')
var middlewares = jsonServer.defaults()
const diff = require("deep-diff").diff
const yaml = require('js-yaml');

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {

  logger.debug("type:", req.query.type)
  logger.debug("type:", req.url)
  router.db.defaults(req.url)

  var lhs = router.db.get("com.riverbed.cc").value()

  var doc
  if (req.query.type == "yaml") {
    doc = yaml.safeDump(req.body)
    console.log("doc: ", doc)
  }

  var rhs = req.body

  var differences = diff(lhs, rhs);
  if(differences != undefined){
    differences.forEach(function(difference){


    })
  }

  console.log(differences)

  // Continue to JSON Server router
  next()
})

// Use default router
server.use(router)
server.listen(3000, () => {
  logger.info('Catwalk Server is running')
})
