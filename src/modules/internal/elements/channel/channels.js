channels = [
    {
        "assigned" : true,
        "parameters" : {

            "red" : {
                "name" : "red",
                "icon" : "colour",
                "iconColour" : "#FF0000",
                "value" : 20,
                "min" : 0,
                "max" : 255
            },

            "green" : {
                "name" : "green",
                "icon" : "colour",
                "iconColour" : "#00FF00",
                "value" : 20,
                "min" : 0,
                "max" : 255
            },

            "blue" : {
                "name" : "blue",
                "icon" : "colour",
                "iconColour" : "#0000FF",
                "value" : 20,
                "min" : 0,
                "max" : 255
            },
        }
    },
]

keys = []

for (var paramName in channels[0].parameters)
{
    keys.push(channels[0].parameters[paramName])

}

console.log(keys)