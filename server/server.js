//Frameworks
const express = require("express")
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)

const bodyParser = require("body-parser")

const socketService = require("./modules/services/socket/modex")
socketService.Setup(server)

const accountService = require("./modules/services/account/modex")


const account = require("./routes/api/account/account")

app.use("/",express.static("static"))

app.use(bodyParser.json())

app.use("/api/account", account)

app.use(express.static("./node_modules")); 



server.listen(5000, function(){
    console.log("Server Started")
})