const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {cors: {origin: "*"}})

server.listen('3003', ( req, res)=>{
    console.log('server listening...')
})