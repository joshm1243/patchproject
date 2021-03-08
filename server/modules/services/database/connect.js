const odbc = require('odbc')
const serviceSecrets = require("./../stronghold.json").database

//Database connection object
function Connect(){
    return odbc.connect(serviceSecrets.connString)
}

module.exports.Connect = Connect
