const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CdSchema = new Schema({
    title: { type: String, unique: true, required: true },
    no: { type: String, required: true },
    weight: { type: String, required: true },
    performer: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true }
    },
    { collection: 'CD' });

CdSchema.set('toJSON', { virtuals: true });
CdSchema.set('toObject', { virtuals: true});

module.exports = mongoose.model('cd', CdSchema);

