const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Student = mongoose.model('Student',new Schema({
    pic:String,
    name:String,
    rollno:String,
    dob:String,
    email:String,
    mobileNumber:String,
    year:String,
    yearOfJoining:String,
    college: { type: mongoose.Schema.Types.ObjectId, ref: 'College' },
    hostel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hostel' },
    activeStatus:Boolean,
    createdOn:Date,
    updatedOn:Date
})
)
module.exports = Student 