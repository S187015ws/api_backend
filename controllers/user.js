const db = require('./database.js');
const User = db.user;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.login = function Login(req, res, next){
    authenticate(req.body)
    .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
    .catch(err => next(err));
    
}


async function authenticate({ username, password }) {
    const user = await User.findOne({ username });
    if (user && bcrypt.compareSync(password, user.hash)) {
        const { hash, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({ sub: user.id }, '_secret');
        return {
            ...userWithoutHash,
            token
        };
    }
}


exports.registration = async function AddUser(req, res, next) {
    
    console.log(req.body);
    console.log(req.body.username)
    AaddUser(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

async function AaddUser(Param){
    // unique username
    if (await User.findOne({ username: Param.username })) {
        throw 'Username "' + Param.username + '" is already taken';
    }
    const user = new User();
    user.username = Param.username;
    if (Param.password) {
        user.hash = bcrypt.hashSync(Param.password, 10);
    }

    await user.save();
}

exports.getname = async function AddUser(req, res, next) {
    aGetName(req.body.id)
        .then(name =>  res.json(name))
        .catch(err => next(err));
}

async function aGetName(id){
    console.log(id)
    await User.findById(id, 'name length').exec(callback);
}

exports.getById = function(req, res, next){
    aGetById(req.user.sub)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .then(console.log('Operated User getById'))
        .catch(err => next(err));
}

async function aGetById(id){
    return await User.find('_id').select('-hash');
}

exports.updatePassword = function(req, res, next){
    aPassword(req.user.sub,req.body)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .then(console.log('Operated User Change Password'))
        .catch(err => next(err));
}

async function aPassword(id,{ o, n }){
    const user = await User.findById(id);

    if(bcrypt.compareSync(o, user.hash)){
        if (n) {
            user.hash = bcrypt.hashSync(userParam.password, 10);
        }
    }
    await user.save();
    console.log('User '+ user.username +' password updated!');
}