const odbc = require('odbc')

const secrets = require("./../../secrets/stronghold.json")

function AuthAccount(username, password) {
    odbc.connect(secrets["patchstore"].connectionString, (err, connection) => {

        connection.query("", (err, result) => {
            if (err) {console.log(err)}
            else {
                console.log(result)
            }
        })    
    })
}

module.exports = AuthAccount

