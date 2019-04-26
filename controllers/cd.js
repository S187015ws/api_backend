const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL = "mongodb+srv://304CEMe:123abc@cluster0-rmfhf.azure.mongodb.net/test?retryWrites=true";
const DATABASE_NAME = "CDDB"; 
var database, collection

MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        throw error;         
    }         
    database = client.db(DATABASE_NAME);
    collection = database.collection("CD");
    console.log("Connected to `" + DATABASE_NAME + "`!");
}); 