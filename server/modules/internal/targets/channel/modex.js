var Setup = function(intEmitter, extEmitter) {
    require("./enact.js").Setup(intEmitter, extEmitter)
    require("./sched.js").Setup(intEmitter, extEmitter)
}


module.exports.Setup = Setup