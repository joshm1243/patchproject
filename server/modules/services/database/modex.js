
function Query(queryString){

    return new Promise(function (resolve, reject) {
        Connect()
            .then(function(database){
                database.query(queryString)
                .then(function(result){
                    resolve(result)
                })
                .catch(function(err){
                    reject(err)
                })
            })
            .catch(function(err){
                console.log(err)
            })
    })
}

module.exports.Stored = require("./stored")