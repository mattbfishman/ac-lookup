var options = [
    {label:"Insect", value:"insect"},
    {label:"Fish", value:"fish"},
    {label:"Misc", value:"misc"}
];

export const fields = [
    {type:"text", label:"Item Name", size:"lg", id:"title"},
    {type:"text", label:"Price", size:"lg", id:"price"},
    {type:"select", label:"Type", size:"md", options: options, id:"type"},
    {type:"button", label:"Add", size:"md"}
];

