const express = require("express")
const app = express()
const path = require("path")
const events = require("events")
const socket = require("socket.io")

const server = app.listen(3000)

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, 'test.html'));
})

const ce = socket(server)

const se = events.EventEmitter()
