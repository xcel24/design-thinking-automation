const express = require('express');
const router = express.Router();

//Import Designer Model
const Designer = require('../../models/Designers');


//Defining Routes

//@route GET api/items
// Get all items
//Acess :Public
router.get('/',(req,res)=>{
    Designer.find()
        .then(designer=>res.json(designer))
});


//@route POST api/items
// Add  items
//Acess :Public
router.post('/',(req,res)=>{
    const newDesigner = new Designer({
        id:req.body.id,
        name:req.body.name,
        age:req.body.age,
        designation:req.body.designation,
        office:req.body.office
    });
 
    newDesigner.save().then(designer=>res.json(designer));
 
 });

 //@route DELETE api/items/:id
// Delete  item
//Acess :Public
router.delete('/:id',(req,res)=>{
    Designer.findById(req.params.id)
        .then(designer=>designer.remove().then(()=>res.json({success:true})))
        .catch(err=>res.status(404).json({success:false}))
 });

 module.exports = router;