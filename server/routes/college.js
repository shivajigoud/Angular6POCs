var express = require('express');
var router = express.Router();
var College = require('../models/College');

router.get('/',function(req,res,next){
    College.find({}).exec((err,colleges)=>{
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
                message:'fetching colleges info success',
                colleges:colleges
            })
        }
    })
})
router.get('/:id',function(req,res,next){
    College.findById(`${req.params.id}`).populate({path:'city',populate:{path:'state',populate:{path:'country'}}}).exec((err,college)=>{
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
                message:'fetching college info success',
                college:college
            })
        }
    })
})
router.get('/:city',function(req,res,next){
    College.find({city:`${req.params.city}`}).populate({path:'city',populate:{path:'state',populate:{path:'country'}}}).exec((err,colleges)=>{
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
                message:'fetching colleges info success',
                colleges:colleges
            })
        }
    })
})
router.post('/',(req,res,next)=>{
    var college = new College({
        name:req.body.name,
        addressLine1:req.body.addressLine1,
        addressLine2:req.body.addressLine2,
        city:req.body.city,
        state:req.body.state,
        country:req.body.country,
        activeStatus:req.body.activeStatus,
        createdOn:new Date(),
        updatedOn:new Date()
    })
    college.save((err,result)=>{
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
                message:'College saved successfully',
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
    console.log(`from college update ${JSON.stringify(updateObj)}`);
    College.findByIdAndUpdate(id, {$set:updateObj}, {new: true}, 
    function(err,model) {
        if(!err){
           res.status(200).json({
           data : model
           });
        }
       else{
            res.status(500).json({
            message: "Update college failed"
          })
        }
    }); 
}); 
module.exports = router;