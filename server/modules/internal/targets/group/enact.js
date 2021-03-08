var Structs = require("./structs.js")


var Setup = function(intEmitter, extEmitter) {
    intEmitter.on("group", function(msg){
        if(msg.type == "enact") {


            var channels = []
        

            msg.inst.map(function(number) {



                intEmitter.emit("channel", {
                    "type" : "enact",
                    "inst" : Structs.Groups[number].channels,
                    "params" : msg.params
                })

                chnanels = channels.concat()
            })
        }
    })
}

module.exports.Setup = Setup