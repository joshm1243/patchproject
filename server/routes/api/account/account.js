const express = require("express")
const userAuth = require("../../../databases/patchstore/accounts")

const router = express.Router()

router.post("/auth/", (req, res) => {

    let username = req.body.username
    let password = req.body.password

    userAuth
        .then(conn => {
            conn.query("SELECT COUNT(id) AS NUMBER FROM ACCOUNTS WHERE username = '" + username + "' AND password = '" + password +  "';")
            .then(result => {

                if (result[0].NUMBER == 1) {
                    res.status(201).send({
                        "err" : false,
                        "success" : true,
                        "ws_url" : "http://127.0.0.1/ws/7v16y5jubatvzk8ozf5f/",
                        "api_token" : "8bn80qnvdj0"
                    })
                }
                else {
                    res.status(201).send({
                        "err" : false,
                        "success" : false
                    })
                }
            })
            .catch(err => {

                res.status(201).send({
                    "err" : true,
                    "errcode" : "DB002"
                })
            })
        })
        .catch(err => {
            res.status(201).send({
                "err" : true,
                "errcode" : "DB001"
            })
        })
})

module.exports = router;