var express = require('express');
var router = express.Router();
var City = require('../models/master/City');

router.get('/:state',function(req,res,next){
    City.find({state:`${req.params.state}`}).populate({path:'state',populate:{path:'country'}}).exec((err,cities)=>{
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
                message:'fetching cities info success',
                cities:cities
            })
        }
    })
})
router.get('/',function(req,res,next){
    City.find({}).populate({path:'state',populate:{path:'country'}}).exec((err,cities)=>{
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
                message:'fetching cities info success',
                cities:cities
            })
        }
    })
})
router.post('/',(req,res,next)=>{
    var city = new City({
        name:req.body.name,
        state:req.body.state,
        activeStatus:req.body.activeStatus,
        createdOn:new Date(),
        updatedOn:new Date()
    })
    city.save((err,result)=>{
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
                message:'City saved successfully',
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
    City.findByIdAndUpdate(id, {$set:updateObj}, {new: true}, 
    function(err,model) {
        if(!err){
           res.status(200).json({
           data : model
           });
        }
       else{
            res.status(500).json({
            message: "Update city failed"
          })
        }
    }); 
}); 
module.exports = router;