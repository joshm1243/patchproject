var events = require("events")

var intEmitter = new events.EventEmitter()
var extEmitter = new events.EventEmitter()

require("./targets/group/modex.js").Setup(intEmitter, extEmitter)
require("./targets/channel/modex.js").Setup(intEmitter, extEmitter)
require("./targets/palette/modex.js").Setup(intEmitter, extEmitter)
require("./executors/button/modex.js").Setup(intEmitter, extEmitter)


intEmitter.emit("colour_palette",{
    "type" : "create",
    "data" : {
        "inst" : [
            {
                "number" : 1,
                "name" : "Purple",
                "params" : {
                    "colour.red" : 255,
                    "colour.blue" : 255
                }
            },

            {
                "number" : 2,
                "name" : "Cyan",
                "params" : {
                    "colour.green" : 255,
                    "colour.blue" : 255
                }
            }
        ]
    }
})

intEmitter.emit("intensity_palette",{
    "type" : "create",
    "data" : {
        "inst" : [
            {
                "number" : 1,
                "name" : "Low",
                "params" : {
                    "intensity" : 10
                }
            },

            {
                "number" : 2,
                "name" : "Med",
                "params" : {
                    "intensity" : 50
                }
            },

            {
                "number" : 3,
                "name" : "High",
                "params" : {
                    "intensity" : 100
                }
            },

            {
                "number": 4,
                "name" : "Max",
                "params" : {
                    "intensity" : 255
                }
            }
        ]
    }
})

intEmitter.emit("group",{
    "type" : "create",
    "data" : {

        "inst" : [
            {
                "number" : 9,
                "name" : "Front Lights",
                "desc" : "Holds the front lights.",
                "channels" : [1,2,9]
            }
        ]
    }
})

intEmitter.emit("group",{
    "type" : "create",
    "data" : {

        "inst" : [
            {
                "number" : 10,
                "name" : "Back Lights",
                "desc" : "Holds the back lights.",
                "channels" : [3,4]
            }
        ]
    }
})

// intEmitter.emit("group",{
//     "type" : "enact",
//     "data" : {
//         "inst" : [9,10],
//         "params" : [
//             {
//                 "name" : "intensity",
//                 "value_type" : "target",
//                 "value_tar" : "intensity_palette",
//                 "value_inst" : [1]
//             }
//         ]
//     }
// })

// intEmitter.emit("channel", {
//     "type" : "enact",
//     "data" : {
//         "inst" : [1,2,5],
//         "params" : [
//             {
//                 "name" : "intensity",
//                 "value_type" : "target",
//                 "value_tar" : "intensity_palette",
//                 "value_inst" : [2,3,4]
//             }
//         ]
//     }
// })

// intEmitter.emit("group", {
//     "type" : "enact",
//     "data" : {
//         "inst" : [9],
//         "params" : [
//             {
//                 "name" : "colour",
//                 "value_type" : "target",
//                 "value_tar" : "colour_palette",
//                 "value_inst" : [1,2]
//             }
//         ]
//     }
// })

intEmitter.emit("button", {
    "type" : "create",
    "inst" : [
        {
            "number" : 1,
            "name" : "Group 9 to colour 1,2",
            "execute" : [
                {
                    "module" : "group",
                    "type" : "enact",
                    "inst" : [9],
                    "params" : [
                        {
                            "name" : "colour",
                            "value_type" : "target",
                            "value_tar" : "colour_palette",
                            "value_inst" : [1,2]
                        }
                    ]
                }
            ]
        }
    ]
})

intEmitter.emit("button", {
    "type" : "create",
    "inst" : [
        {
            "number" : 2,
            "name" : "Group 9,10 to 100",
            "execute" : [
                {
                    "module" : "group",
                    "type" : "enact",
                    "inst" : [9,10],
                    "params" : [
                        {
                            "name" : "intensity",
                            "value_type" : "target",
                            "value_tar" : "intensity_palette",
                            "value_inst" : [1]
                        }
                    ]
                }
            ]
        }
    ]
})

intEmitter.emit("button", {
    "type" : "enact",
    "inst" : [1]
})

intEmitter.emit("button", {
    "type" : "enact",
    "inst" : [2],
})