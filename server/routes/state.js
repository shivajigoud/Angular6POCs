var express = require('express');
var router = express.Router();
var State = require('../models/master/State');

router.get('/:country',function(req,res,next){
    State.find({country:`${req.params.country}`}).populate('country').exec((err,states)=>{
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
                message:'fetching states info success',
                states:states
            })
        }
    })
})
router.get('/',function(req,res,next){
    State.find({}).populate('country').exec((err,states)=>{
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
                message:'fetching states info success',
                states:states
            })
        }
    })
})
router.post('/',(req,res,next)=>{
    var state = new State({
        name:req.body.name,
        country:req.body.country,
        activeStatus:req.body.activeStatus,
        createdOn:new Date(),
        updatedOn:new Date()
    })
    state.save((err,result)=>{
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
                message:'State saved successfully',
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
    State.findByIdAndUpdate(id, {$set:updateObj}, {new: true}, 
    function(err,model) {
        if(!err){
           res.status(200).json({
           data : model
           });
        }
       else{
            res.status(500).json({
            message: "Update state failed"
          })
        }
    }); 
}); 
module.exports = router;