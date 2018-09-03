var Country = require('../models/master/Country');
let controller = function(){};
controller.prototype.get = function(req,res,next){
    console.log("coountry get service is called");
    Country.find().exec((err,countries)=>{
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
                message:'success',
                countries:countries
            })
        }
    })
}
controller.prototype.save = function(req,res,next){
    var country = new Country({
        name:req.body.name,
        activeStatus:req.body.activeStatus,
        createdOn:new Date(),
        updatedOn:new Date()
    })
    country.save((err,result)=>{
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
                message:'Country saved successfully',
                result:result
            })
        }
    })
}
controller.prototype.update = function(req,res,next){
    let id = req.params.id;
    let updateObj={
        ...req.body
    }
    Country.findByIdAndUpdate(id, {$set:updateObj}, {new: true}, 
    function(err,model) {
        if(!err){
           res.status(200).json({
           data : model
           });
        }
       else{
            res.status(500).json({
            message: "Update country failed"
          })
        }
    }); 
}
module.exports = new controller();