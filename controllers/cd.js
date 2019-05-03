const db = require('./database.js');
const Cd = db.cd;


exports.cdlist = function(req, res, next){
    aCdlist()
        .then(cds => res.json(cds))
        .then(console.log('Operated get Cd List'))
        .catch(err => next(err));
}

async function aCdlist(){      
    return await Cd.find()
}

exports.addcd = function (req,res, next) {
    aAddcd(req.body)
        .then(() => res.json({}))
        .then(console.log('New CD added'))
        .catch(err => next(err));
}

async function aAddcd(Param){
    if (await Cd.findOne({ title: Param.title })) {
        throw 'This CD is already created.';
    }
    await Cd.save();
}

exports.editcd = function (req, res, next) {
    aUpdate(req.params.id, req.body)
        .then(() => res.json({}))
        .then(console.log('CD update is completed!'))
        .catch(err => next(err));
}

async function findCdByID(id){
    return await Cd.findById(id);
}

async function aUpdate (id, Param){
    const cd = await findCdByID(id);

    if(!cd) throw 'CD not found';
    if(cd.title !== Param.title && await Cd.findOne({title: Param.title})){
        throw 'This CD is already created.'
    }

    Object.assign(cd, Param);

    await Cd.save();
}
exports.rmcd = function (req,res,next) {
    aRmcd(req.body.id)
    .then(() => res.json({}))
    .then(console.log('Removed'))   
    .catch(err => next(err));
}

async function aRmcd(id){
    await Cd.findByIdAndRemove(id);
}

