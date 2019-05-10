const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const State = mongoose.model('State',new Schema({
    name:String,
    country: { type: mongoose.Schema.Types.ObjectId, ref: 'Country' },
    activeStatus:Boolean,
    createdOn:Date,
    updatedOn:Date
    })
)

module.exports = State;