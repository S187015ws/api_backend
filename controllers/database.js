const CONNECTION_URL = "mongodb+srv://304CEMe:123abc@cluster0-rmfhf.azure.mongodb.net/CDDB";
var mongoose = require("mongoose");
mongoose.connect(CONNECTION_URL, { useCreateIndex: true, useNewUrlParser: true }, (error, client) => {
    if(error) {
        throw error;         
    } 
    console.log("Connected to `" + CONNECTION_URL + "!");
}); 
mongoose.Promise = global.Promise;

module.exports = {
    user: require('../models/user.js'),
    cd: require('../models/cd.js'),
    sell: require('../models/sell.js')
};