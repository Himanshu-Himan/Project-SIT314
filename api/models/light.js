const mongoose = require('mongoose');

module.exports = mongoose.model('Light', new mongoose.Schema({
    light_id: Number,
    colour: String,
    floor: Number
}, { collection: 'Light Color' }));