const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {cors: {origin: "*"}})

server.listen('3003', ( req, res)=>{
    console.log('server listening...')
})


app.set('view engine', 'ejs')
app.use(express.static('public'))

io.on("connection" , (socket) => {
    console.log("User connected: " + socket.id)



})

app.get('/', ( req, res)=>{
    res.render("index")
})