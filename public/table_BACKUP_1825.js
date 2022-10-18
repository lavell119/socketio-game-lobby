const nextTurnBtn=document.querySelector('.next-turn')
const joinTableBtn=document.getElementById('join-table-btn')
<<<<<<< HEAD
socket = io.connect('http://localhost:3003')
=======
let socket=io.connect('http://localhost:3003')
>>>>>>> 6ec96320af606721d14ac44ed575991ba2941700

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

