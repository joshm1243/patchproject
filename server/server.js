//Frameworks
const express = require("express")
const bodyParser = require("body-parser")

//Database

const app = express()

const auth = require("./routes/api/auth")

app.use(bodyParser.json())
app.use("/api/auth", auth)

app.listen(5000, () => {
    console.log("Server Started")
})
