const express = require("express")

const router = express.Router()


router.post("/", (req, res) => {

    console.log(req)

    res.status(201).send({"username entered was" : req.body.username})
})

module.exports = router;