const Database = require("../database/modex")







console.log(Database)

const randomstring = require("randomstring")

var authTokens = []

const GenerateAuthToken = function() {
    return randomstring.generate(16)
}

//Takes a username and password and authenticates against the database
const authAccount = function(username, password) {
    return new Promise((resolve, reject) => {

        Database.Connect()

        connectToPatchStore
        .then(function(store) {
            store.query("SELECT id FROM ACCOUNTS WHERE username = '" + username + "' AND password = '" + password + "';")
            .then(function(result) {

                if (result.length === 1) {
                    for (let i = 0; i < authTokens.length; i++) {
                        


                        
                    }



                }

                resolve({
                    "err" : false,
                    "auth" : false
                })


                let authToken = GenerateAuthToken()

                let currentTokenPos = -1

                for (let i = 0; i < authTokens.length; i++) {
                    if (authTokens[i].userId === 1) {
                        currentTokenPos = i
                        break;
                    }
                }

                if (currentTokenPos > -1) {
                    console.log("Already authenticated")
                    authTokens.splice(currentTokenPos, 1)
                }

                authTokens.push({
                    "userId" : 1,
                    "authToken" : authToken
                })

                resolve({
                    "authenticated" : result.length == 1,
                    "api_token" : authToken,
                    "ws_token" : "jdgus782nguds"
                })
            })
            .catch(function(err) {
                console.log(err)
            })
        })
        .catch(function(err) {
            console.log(err)
        })
    })
}

//Takes a token and authenticates against the 'authTokens' array
const authToken = function(token) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < authTokens.length; i++) {
            if(authTokens[i].authToken === token) {
                resolve({
                    "err" : false,
                    "auth" : true
                })
            }
        }
        {
            resolve({
                "err" : false,
                "authenticated" : false
            })
        }

    })
}

exports.authAccount = authAccount
exports.authToken = authToken