const odbc = require('odbc')

const secrets = require("./../../secrets/stronghold.json")




// function AuthAccount(username, password) {


//     odbc.connect(secrets["patchstore"].connectionString)

//     odbc.connect(secrets["patchstore"].connectionString, (err, connection) => {
//         connection.query("SELECT COUNT(id) AS NUMBER FROM ACCOUNTS WHERE username = '" + username + "' AND password = '" + password +  "';", (err, result) => {
//             if (err) {console.log(err)}
//             else {
//                 if (parseInt(result[0].NUMBER) == 1) {
                    
//                     console.log("AA")
//                     return
//                 }
//                 else {
//                     console.log("HH")
//                     return
//                 }
//             }
//         })
//     })
// }

module.exports = odbc.connect(secrets["patchstore"].connectionString)
