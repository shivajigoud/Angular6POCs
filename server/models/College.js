const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const College = mongoose.model('College',new Schema({
    name:String,
    addressLine1:String,
    addressLine2:String,
    city: { type: mongoose.Schema.Types.ObjectId, ref: 'City' },
    state: { type: mongoose.Schema.Types.ObjectId, ref: 'State' },
    country: { type: mongoose.Schema.Types.ObjectId, ref: 'Country' },
    activeStatus:Boolean,
    createdOn:Date,
    updatedOn:Date
})
)

module.exports = College;