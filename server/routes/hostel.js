var express = require('express');
var router = express.Router();
var Hostel = require('../models/Hostel');

router.get('/:college',function(req,res,next){
    Hostel.find({college:`${req.params.college}`}).populate('college').exec((err,hostels)=>{
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
                message:'fetching hostels by college info success',
                hostels:hostels
            })
        }
    })
})
router.get('/',function(req,res,next){
    Hostel.find({}).exec((err,hostels)=>{
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
                message:'fetching hostels info success',
                hostels:hostels
            })
        }
    })
})
router.post('/',(req,res,next)=>{
    var hostel = new Hostel({
        name:req.body.name,
        college:req.body.college,
        activeStatus:req.body.activeStatus,
        createdOn:new Date(),
        updatedOn:new Date()
    })
    hostel.save((err,result)=>{
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
                message:'Hostel saved successfully',
                result:result
            })
        }
    })
})
router.post('/:id', (req,res,next)=>{
    const id = req.params.id;
    let updateObj={
        ...req.body
    }
    Hostel.findByIdAndUpdate(id, {$set:updateObj}, {new: true}, 
    function(err,model) {
        if(!err){
           res.status(200).json({
           data : model
           });
        }
       else{
            res.status(500).json({
            message: "Update hostel failed"
          })
        }
    }); 
}); 
module.exports = router;