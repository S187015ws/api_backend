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
                avaliable: Boolean
            }
        },
        item: {
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

