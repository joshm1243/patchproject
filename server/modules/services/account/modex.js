const databaseServices = require("../database/modex")


function CreateAccount(account) {
 
}

function UpdateAccount(account) {

}

function DeleteAccount(account) {

}

CreateAccount()



const connectToPatchStore = require("./connection")
const randomstring = require("randomstring")

var authTokens = []

const GenerateAuthToken = function() {
    return randomstring.generate(10)
}

const authAccount = function(username, password) {
    return new Promise((resolve, reject) => {
        connectToPatchStore
        .then(function(store) {
            store.query("SELECT id FROM ACCOUNTS WHERE username = '" + username + "' AND password = '" + password + "';")
            .then(function(result) {

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

const authToken = function(token) {
    return new Promise((resolve, reject) => {

        for (let i = 0; i < authTokens.length; i++) {
            if(authTokens[i].authToken === token) {
                resolve({
                    "authenticated" : true
                })
            }
        }

        {
            resolve({
                "authenticated" : false
            })
        }

    })
}

exports.authAccount = authAccount
exports.authToken = authToken