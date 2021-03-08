// const account = require("./../../internal/patchstore/account")

// function SetRoutes(io) {
//     io.on("connection", socket => {

//         socket.on("disconnect", () => {
//             console.log("HHH")
//         })

//         socket.on("auth", msg => {
//             account.authToken(msg.authToken)
//             .then(function(result){
//                 if (result.authenticated) {
//                     authSockets.push(socket.id)
//                     socket.emit("auth",{
//                         "err" : false,
//                         "auth" : true
//                     })
//                 }
//                 else {
//                     socket.emit("auth",{
//                         "err" : false,
//                         "auth" : false
//                     })
//                 }
//             })
//             .catch(function(err){
//                 console.log(err)
//             })
//         })

//         socket.on("channel", msg => {
//             if (authSockets.includes(socket.id)) {
//                 socket.emit("channel",{"request for" : "channe", "isAuthenticated" : true})
//             }
//             else {
//                 socket.emit("channel",{"request for" : "channel", "isAuthenticated" : false})
//             }
//         })
//     })
// }

// function Setup(server) {
//     const socketio = require('socket.io')
//     const io = socketio(server)
//     SetRoutes(io)
// }

// exports.Setup = Setup