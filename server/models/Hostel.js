const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Hostel = mongoose.model('Hostel',new Schema({
    name:String,
    college: { type: mongoose.Schema.Types.ObjectId, ref: 'College' },
    activeStatus:Boolean,
    createdOn:Date,
    updatedOn:Date
})
)
module.exports = Hostel