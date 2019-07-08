const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Items');
const Interview = require('../../models/QuestionAnswers');


//@route GET api/items
// Get all items
//Acess :Public
router.get('/',(req,res)=>{
    Item.find()
        .sort({date:-1})
        .then(items=>res.json(items))
});

//@route GET api/items
// Get all items
//Acess :Public
router.get('/users',(req,res)=>{
    Interview.find()
        .sort({date:-1})
        .then(users=>res.json(users))
});



//@route POST api/items
// Add  items
//Acess :Public
router.post('/',(req,res)=>{
   const newItem = new Item({
       name:req.body.name
   });

   newItem.save().then(item=>res.json(item));

});

//@route POST api/items
// Add  items
//Acess :Public
router.post('/users',(req,res)=>{
    const newInterview = new Interview({
        question:req.body.question,
        answer:req.body.answer
    });
 
    newInterview.save().then(user=>res.json(user));
 
 });



//@route DELETE api/items/:id
// Delete  item
//Acess :Public
router.delete('/:id',(req,res)=>{
    Item.findById(req.params.id)
        .then(item=>item.remove().then(()=>res.json({success:true})))
        .catch(err=>res.status(404).json({success:false}))
 });

 //@route PUT api/items/:id
// Update  item
//Acess :Public
router.put('/:id',(req,res)=>{
    Item.findByIdAndUpdate({_id:req.params.id},req.body)
        .then(()=>res.json({success:true}))
        .catch(err=>res.status(404).json({success:false}))
 });




module.exports = router;