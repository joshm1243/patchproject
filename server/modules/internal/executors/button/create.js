class Button {
    constructor(number, name, desc, execute, fadeTimes) {
        this.number = number 
        this.name = name || "Button " + number
        this.desc = desc || ""
        this.execute = execute
        this.pause = 0
        this.attack = 0
        this.decay = 0
        this.sustain = 0
        this.release = 0
    }
}

var Structs = require("./structs.js")

var Setup = function(intEmitter, extEmitter) {

    intEmitter.on("button", function(msg){

        if(msg.type == "create") {


            msg.inst.map(function(button) {

                if (button.number) {

                    Structs.Buttons[button.number] = new Button(
                        button.number,
                        button.name,
                        button.desc,
                        button.execute
                        
                    )
                }
            })
        }
    })
}



module.exports.Setup = Setup