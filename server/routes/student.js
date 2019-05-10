var express = require('express');
var router = express.Router();
var Student = require('../models/Student');

router.get('/:college',function(req,res,next){
    Student.find({college:`${req.params.college}`}).populate({path:'college'}).exec((err,students)=>{
        if(err){
            res.status(500).json({
                status:-1,
                message:'An error occured',
                error:err
            })
        }
        else{
            res.status(200).json({
                status:0,
                message:'fetching students by college info success',
                students:students
            })
        }
    })
})
router.get('/:college/:id',function(req,res,next){
    Student.findById(`${req.params.id}`).populate({path:'hostel'}).exec((err,student)=>{
        if(err){
            res.status(500).json({
                status:-1,
                message:'An error occured',
                error:err
            })
        }
        else{
            res.status(200).json({
                status:0,
                message:'fetching student by id info success',
                student:student
            })
        }
    })
})
router.get('/',function(req,res,next){
    Student.find({}).exec((err,students)=>{
        if(err){
            res.status(500).json({
                status:-1,
                message:'An error occured',
                error:err
            })
        }
        else{
            res.status(200).json({
                status:0,
                message:'fetching students info success',
                students:students
            })
        }
    })
})
router.post('/',(req,res,next)=>{
    var student = new Student({
        pic:req.body.pic,
        name:req.body.name,
        rollno:req.body.rollno,
        dob:req.body.dob,
        email:req.body.email,
        mobileNumber:req.body.mobileNumber,
        year:req.body.year,
        yearOfJoining:req.body.yearOfJoining,
        college:req.body.college,
        hostel:req.body.hostel,
        activeStatus:req.body.activeStatus,
        createdOn:new Date(),
        updatedOn:new Date()
    })
    student.save((err,result)=>{
        if(err){
            res.status(500).json({
                status:-1,
                message:'An error occured',
                error:err
            })
        }
        else{
            res.status(200).json({
                status:0,
                message:'Student saved successfully',
                result:result
            })
        }
    })
})
router.post('/:id', (req,res,next)=>{
    const id = req.params.id;
    let updateObj={
        ...req.body
    };
    Student.findByIdAndUpdate(id, {$set:updateObj}, {new: true}, 
    function(err,model) {
        if(!err){
           res.status(200).json({
           data : model
           });
        }
       else{
            res.status(500).json({
            message: "Update student failed"
          })
        }
    }); 
}); 
module.exports = router;