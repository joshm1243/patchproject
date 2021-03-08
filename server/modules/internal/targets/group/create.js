class Group {

    constructor(number, name, desc, channels = []) {
        this.channels = channels
        this.number = number 
        this.name = name || "Group " + number
        this.desc = desc || ""
    }

    AddChannels(channels) {
        channels.map(function(x){
            if (!this.channels.includes(x)) {
                this.channels.push(x)
            }
        }.bind(this))
    }

    RemoveChannels(channels) {
        this.channels = this.channels.filter(x => !channels.includes(x))
    }

    Channels() {
        return this.channels
    }
}

var Structs = require("./structs.js")

var Setup = function(intEmitter, extEmitter) {


    intEmitter.on("group", function(msg){
        if(msg.type == "create") {

            msg.data.inst.map(function(group) {
                

            if (group.number) {

                Structs.Groups[group.number] = new Group(
                    group.number,
                    group.name,
                    group.desc,
                    group.channels
                )
            }

            })

        }
    })



}

module.exports.Setup = Setup
