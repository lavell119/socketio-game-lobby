const nextTurnBtn=document.querySelector('.next-turn')
const joinTableBtn=document.getElementById('join-table-btn')
let socket=io.connect('http://localhost:3003')

//Connection
let connection=()=>{
    window.open("table.html")    
}

let nextTurn=()=>{
    socket.emit('next-turn')
}

let test=()=>{
    socket.emit('test')
}

