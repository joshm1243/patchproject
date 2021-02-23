const express = require("express")
const account = require("./../../../modules/internal/patchstore/account")


const router = express.Router()

router.post("/auth/", (req, res) => {

    account.authAccount(req.body.username,req.body.password)
        .then(function(result) {
            if (result.authenticated) {
                res.status(201).send({
                    "err" : false,
                    "authenticated" : true,
                    "ws_url" : "/ws/7v16y5jubatvzk8ozf5f/",
                    "api_token" : result.api_token,
                    "timeout" : 300000
                })
            }
            else {
                res.status(201).send({
                    "err" : false,
                    "success" : false
                })
            }
        })
        .catch(function(err) {
            console.log(err)
        })
})


router.post("/", (req, res) => {

    account.authToken(req.body.authToken)
        .then(function(result){
            res.status(201).send(result)
        })
        .catch(function(err){
            console.log(err)
        })

})

module.exports = router;