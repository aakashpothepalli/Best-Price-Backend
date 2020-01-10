module.exports.socketFunctions =  function (socket) {

    socket.on('start',(res)=>{
        socket.emit('start',socket.id)
    })
    socket.on('cart',res=>{
        console.log(`socket ${socket.id} is connected`)
        socket.emit('cart','you are '+socket.id)
    })
    socket.on('cartcount',res=>{
        socket.emit('cartcount',2)
    })

}