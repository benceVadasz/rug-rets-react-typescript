
export let COLORS = [
    {
        "name": "pale leaf",
        "value": "#CCD4BF"
    },
    {
        "name": "burly wood",
        "value": "#E7CBA9"
    },
    {
        "name": "ecru white",
        "value": "#F5F3E7"
    },
    {
        "name": "zombie",
        "value": "#E5DB9C"
    },
    {
        "name": "sea green",
        "value": "#218B82"
    },
    {
        "name": "rajah",
        "value": "#F7CE76"
    },
    {
        "name": "barley",
        "value": "#9C9359"
    },
    {
        "name": "gold",
        "value": "#F4C815"
    },{
        "name": "off-white",
        "value": "#faedcd"
    },{
        "name": "mustard",
        "value": "#e9ff70"
    },{
        "name": "skyblue",
        "value": "#a7bed3"
    },
]

export let saveColor = (name="", value: string) => {
    COLORS = [...COLORS, {"name": name, "value": value}]
}