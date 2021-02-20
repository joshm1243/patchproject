channels = [
    {
        "red" : {
            "address" : 1,
            "start" : 0,
            "end" : 255
        },

        "green" : {
            "address" : 2,
            "start" : 0,
            "end" : 255
        },

        "blue" : {
            "address" : 3,
            "start" : 0,
            "end" : 255
        }
    },
]


message = {
    "type" : "set",
    "data" : {
        "channels" : [1,2,3,4,5],
        "parameters" : [
            {
                "name" : "red",
                "value" : 255
            },

            {
                "name" : "green",
                "value" : 255
            }
        ]
    }
}
