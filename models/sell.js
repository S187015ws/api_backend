const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SellSchema = new Schema({
    details: { 
        description: { type: String,required: true },
        price: { type: Number, required: true},
        quanity: { type: Number, required: true}
    },
    item: { type: String, required: true },
    user: { type: String, required: true },
    contact: { type: String, required: true },
    date: { type: Date, default: Date.now }
    },
    { collection: 'SELL' });

SellSchema.pre('save', function(next) {
        this.date = Date.now()
        next()
})

SellSchema.set('toJSON', { virtuals: true });
SellSchema.set('toObject', { virtuals: true});

module.exports = mongoose.model('sell', SellSchema);