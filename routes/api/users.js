const express = require('express');
const router = express.Router();

//Import Designer Model
const User = require('../../models/Users');


//Defining Routes

//@route GET api/items
// Get all items
//Acess :Public
router.get('/',(req,res)=>{
    User.find()
        .then(user=>res.json(user))
});


// //@route POST api/items
// // Add  items
// //Acess :Public
router.post('/',(req,res)=>{
    const newUser = new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password,
    });
 
    newUser.save().then(user=>res.json(user));
 
 });


 router.get('/:email',(req,res)=>{
    User.findOne({email:req.params.email})
        .then(user=>res.send(user))
        .catch(err=>res.status(404).json({success:false}))
 });

//  //@route DELETE api/items/:id
// // Delete  item
// //Acess :Public
// router.delete('/:id',(req,res)=>{
//     Designer.findById(req.params.id)
//         .then(designer=>designer.remove().then(()=>res.json({success:true})))
//         .catch(err=>res.status(404).json({success:false}))
//  });

 module.exports = router;