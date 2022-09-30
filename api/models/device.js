const mongoose = require('mongoose');

module.exports = mongoose.model('Device', new mongoose.Schema({
    light_id: Number,
    light_name: String,
    floor_num: Number,
    _Date: Date
}, { collection: 'Building' }));