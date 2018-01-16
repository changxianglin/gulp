// var http = require('http')
//
// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'})
//
//     res.end('first response\n')
// }).listen(8888)
//
// console.log('http://localhost:8888/')

const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('hello world!')
})

app.get('/user', function(req, res) {
    res.send('can request some data')
})

app.put('/user', function(req, res) {
    res.send('this is method put')
})

app.post('/user', function(req, res) {
    res.send('this is method post')
})

app.get('/user/about', function(req, res) {
    res.send('some url load')
})

const server = app.listen(8080, function() {
    const host = server.address().address
    const port = server.address().port
    console.log('this is app listen at http://%s:%s', host, port)
})