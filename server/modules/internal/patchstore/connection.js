const odbc = require('odbc')
const modSecrets = require("./../stronghold.json").patchstore
module.exports = odbc.connect(modSecrets.connString)