const db = require('./database.js');
const User = db.user;
const Sell = db.sell;


exports.selllist = function(req, res, next){
    aCdlist()
        .then(cds => res.json(cds))
        .then(console.log('Operated get Cd List'))
        .catch(err => next(err));
}

async function aCdlist(){      
    return await Cd.find()
}


exports.cdlist = function(req, res, next){
    aCdlist()
        .then(cds => res.json(cds))
        .then(console.log('Operated get Cd List'))
        .catch(err => next(err));
}

async function aCdlist(){      
    return await Cd.find()
}


exports.selling = function (req,res) {
    collection.find().toArray(function(err, docs){
    if(!err)
        res.send(docs);
    })
} 
      
    
exports.addsell = function (req,res) {
    collection.insertOne(req.body, function(err) {
        if(!err){
            res.status(201).send({"status": 201, "description": "Data input successfully"})
        }
    })
}


exports.editsell = function (req, res) {
    collection.findOneAndUpdate({item:req.body.item,user:req.body.user},{$set:req.body},{}, function(err){
        if(!err){
            res.status(201).send({"status": 201, "description": "Data updated successfully"})
        }
    })
}

exports.rmsell = function (req,res) {
    collection.deleteOne({item:req.body.item,user:req.body.user}, function(err){
        if(!err){
            res.status(201).send({"status": 201, "description": "Data removed successfully"})
        }
    })
}