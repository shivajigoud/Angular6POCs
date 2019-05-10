const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const City = mongoose.model('City',new Schema({
        name:String,
        state: { type: mongoose.Schema.Types.ObjectId, ref: 'State' },
        activeStatus:Boolean,
        createdOn:Date,
        updatedOn:Date
    })
)

module.exports = City;