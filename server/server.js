//Frameworks
const express = require("express")
const bodyParser = require("body-parser")

const app = express()

const account = require("./routes/api/account/account")

app.use("/",express.static("static"))

app.use(bodyParser.json())
app.use("/api/account", account)

app.listen(5000, () => {
    console.log("Server Started")
})
