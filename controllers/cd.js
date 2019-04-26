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
    console.log("Connected to `" + DATABASE_NAME + ".CD`!");
}); 

exports.cdlist = function (req,res) {
    collection.find().toArray(function(err, docs){
    if(!err){
        res.send(docs);
    } 
    })
}


exports.addcd = function (req,res) {
    collection.insertOne(req.body, function(err) {
        if(!err){
            res.status(201).send({"status": 201, "description": "Data input successfully"})
        }
    })
}


exports.editcd = function (req, res) {
    collection.findOneAndUpdate({no: req.body.no},{$set: req.body},{}, function(err){
        if(!err){
            res.status(201).send({"status": 201, "description": "Data updated successfully"})
        }
    })
}

exports.rmcd = function (req,res) {

    collection.find({no: req.body.no}, function(err){
        if(!err){
            collection.deleteOne({no: req.body.no}, function(err){
                if(!err){
                    res.status(201).send({"status": 201, "description": "Data removed successfully"})
                }
            })
        }
    })
    
}
