const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Country = mongoose.model('Country',new Schema({
        name:String,
        activeStatus:Boolean,
        createdOn:Date,
        updatedOn:Date
    })
)

module.exports =  Country ;