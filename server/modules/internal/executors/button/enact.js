var Structs = require("./structs.js")

var Setup = function(intEmitter, extEmitter) {
    intEmitter.on("button", function(msg){
        if(msg.type == "enact") {

            msg.inst.map(function(number) {

                Structs.Buttons[number].execute.map(function(execute){
                    
                    intEmitter.emit(execute.module,execute)

                })
            })
        }
    })
}

module.exports.Setup = Setup