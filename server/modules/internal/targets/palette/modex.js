var Setup = function(intEmitter, extEmitter) {
    require("./create.js").Setup(intEmitter, extEmitter)
}


var Retrieve = require("./retrieve.js")



module.exports.Setup = Setup
module.exports.Intensity = Retrieve.Intensity
module.exports.Colour = Retrieve.Colour