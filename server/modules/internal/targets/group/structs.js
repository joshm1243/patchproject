var Groups = {}

module.exports.Groups = Groups


var executor = {

    "el" : [
        {
            "name" : "channel",
            "inst" : [1,2,3,4,5],
            "params" : [
                {
                    "name" : "red",
                    "value_type" : "literal",
                    "value" : 100
                }
            ]
        },

        {
            "name" : "channel",
            "inst" : [5,6,7,8],
            "params" : [
                {
                    "name" : "colour",
                    "value_type" : "target",
                    "target_tar" : "colour_palette",
                    "value_inst" : [1,2,3,4,5]
                }
            ]
        },

        {
            "name" : "group",
            "inst" : [9,10,11,12],
            "params" : [
                {
                    "name" : "intensity",
                    "value_type" : "target",
                    "value_tar" : "intensity_palette",
                    "value_inst" : [1,2,3,4]
                }
            ]
        },

        {
            "name" : "fader",
            "inst" : [13,14,15,16],
            "params" : [
                {
                    "name" : "position",
                    "value_type" : "literal",
                    "value" : 100
                },
            ]
        },

        {
            "name" : "module.dmxout",
            "params" : [
                {
                    "name" : "heart_beat",
                    "value_type" : "literal",
                    "value" : 100
                }
            ]
        },
    ] 
}