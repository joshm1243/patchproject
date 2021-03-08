var Palette = require("./../palette/modex")



var Setup = function(intEmitter, extEmitter) {
    intEmitter.on("channel", function(msg){
        if(msg.type == "enact") {

            console.log("Channels: " + msg.inst)
            
            msg.params.map(function(param) {

                
                if (param.value_type == "literal") {

                } 
                
                else if (param.value_type == "target") {

                    if (param.value_tar == "intensity_palette" && param.name == "intensity") {
                        
                        console.log("Parameter:", param.name)
                        let atomicValues = Palette.Intensity.Translate(param.value_inst)
                        
                        console.log(atomicValues)

                    }
                
                    else if (param.value_tar == "colour_palette") {


                        console.log("Parameter:", param.name)

                        let atomicValues = Palette.Colour.Translate(param.value_inst)
                        
                        console.log(atomicValues)
                        
                    }
                }
            })
        }
    })
}

module.exports.Setup = Setup