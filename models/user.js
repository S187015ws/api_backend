const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Userschema = new Schema({
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
},
{ collection: 'USER' });

Userschema.set('toJSON', { virtuals: true });
Userschema.set('toObject', { virtuals: true});

module.exports = mongoose.model('user', Userschema);