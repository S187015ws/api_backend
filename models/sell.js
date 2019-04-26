exports.sellSchema = { 
    type: 'object',
    required: ["details", "item", "user", "contact"],
    properties: {
        details: {
            type: "object",
            required: ["description", "price", "avaliable"],
            properties:{
                description:'string',
                price: 'string',
                quanity: 'integer'
            }
        },
        itemno: {
            type: "string"
        },
        user: {
            type: "string"
        },
        contact: {
            type: "string"
        }
    }
}

