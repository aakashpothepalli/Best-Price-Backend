const {socketFunctions} = require("./socketFunctions")
const {expressFunctions} = require('./expressFunctions')
const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())
const body_parser = require('body-parser');

// parse JSON (application/json content-type)
app.use(body_parser.json());

var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}

io.on('connection', function (socket) { 
    socketFunctions(socket)
});

expressFunctions(app)


server.listen(port, () => console.log(`working on ${port}`) )
