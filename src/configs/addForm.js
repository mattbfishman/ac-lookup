var options = [
    {label:"Bug", value:"bug"},
    {label:"Fish", value:"fish"},
    {label:"Misc", value:"Misc"}
];

export const fields = [
    {type:"text", label:"Item Name", size:"lg"},
    {type:"text", label:"Price", size:"lg"},
    {type:"select", label:"Type", size:"md", options: options},
    {type:"button", label:"Add", size:"md"}
];

