const odbc = require('odbc')

const secrets = require("./../../secrets/stronghold.json")

function AuthAccount(username, password) {

    var result = false;

    console.log(odbc.connect(secrets["patchstore"].connectionString, (err, connection) => {

        return connection.query("SELECT COUNT(id) AS NUMBER FROM ACCOUNTS WHERE username = '" + username + "' AND password = '" + password +  "';", (err, result) => {
            if (err) {console.log(err)}
            else {
                if (parseInt(result[0].NUMBER) == 1) {
                    console.log("AA")
                    return true
                }
                else {
                    console.log("HH")
                    return false
                }   
            }
        })
    }))
}

module.exports = AuthAccount

