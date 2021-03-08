class Palette {

    constructor(number, name, desc) {
        this.number = number 
        this.name = name || "Palette " + number
        this.desc = desc || ""
    }
}

class IntensityPalette extends Palette {

    constructor(number,name,desc,params) {
        super(number, name, desc)
        this.params = params
    }
}

class ColourPalette extends Palette {
    constructor(number,name,desc,params) {
        super(number, name, desc)
        this.params = params
    }
}

var Structs = require("./structs.js")

var Setup = function(intEmitter, extEmitter) {


    intEmitter.on("intensity_palette", function(msg){
        
        if(msg.type == "create") {

            msg.data.inst.map(function(intensityPalette) {

                if (intensityPalette.number) {

                    Structs.IntensityPalettes[intensityPalette.number] = new IntensityPalette(
                        intensityPalette.number,
                        intensityPalette.name,
                        intensityPalette.desc,
                        intensityPalette.params
                    )
                }
            })
        }
    })

    intEmitter.on("colour_palette", function(msg) {

        if (msg.type == "create") {

            msg.data.inst.map(function(colourPalette) {

                if (colourPalette.number) {
                    
                    Structs.ColourPalettes[colourPalette.number] =  new ColourPalette(
                        colourPalette.number,
                        colourPalette.name,
                        colourPalette.desc,
                        colourPalette.params
                    )
                }
            })
        }
    })
}

module.exports.Setup = Setup

