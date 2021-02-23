const express = require("express")
const userAuth = require("./../../databases/patchstore/accounts")

const router = express.Router()

router.post("/", (req, res) => {
    if(userAuth(req.body.username,req.body.password)) {
        res.status(201).send({"success" : true})
    }
    else {
        res.status(201).send({"success" : false})
    }
})

module.exports = router;