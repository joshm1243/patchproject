var Structs = require("./structs.js")


var Intensity = {
    
    "Translate" : function(paletteNumbers) {

        let atomicValues = []
        paletteNumbers.map(function(paletteNumber){
            atomicValues.push(Structs.IntensityPalettes[paletteNumber].params)
        })

        return atomicValues

    }
}

var Colour = {

    "Translate" : function(paletteNumbers) {

        let atomicValues = []

        paletteNumbers.map(function(paletteNumber) {

            atomicValues.push(Structs.ColourPalettes[paletteNumber].params)
        })

        return atomicValues
    }
}

module.exports.Intensity = Intensity
module.exports.Colour = Colour