var jsonServer = require('json-server')
var bodyParser = require('body-parser')
var server = jsonServer.create()
var router = jsonServer.router('db.json')
var middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))

server.get('testUrlGet', function (req, res) {
    res.json({
        //do something
    })
})




server.post('testUrlPost', function (req, res) {

    res.json({
        //do something
    })
})


server.use(router)
server.listen(3005, function () {
    console.log('Mock Server is running')
})
