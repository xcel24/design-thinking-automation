const express = require('express');
const router = express.Router();
const querystring = require('querystring');

router.use(express.json());

//Import Think Model
const FinalThink = require('../../models/FinalThink');


//Defining Routes

//@route GET api/items
// Get all items
//Acess :Public
router.get('/',(req,res)=>{
    FinalThink.find()
        .then(finalthink=>res.json(finalthink))
 
});




//@route POST api/items
// Add  items
//Acess :Public
router.post('/',(req,res)=>{

    //console.log('Hello');
    console.log(req.body);

    var tempThink = JSON.stringify(req.body.think);

    tempThink = JSON.stringify(tempThink);
  
    console.log('After Stringify',tempThink);

    tempThink = JSON.parse(tempThink);
    console.log('After Parsing',tempThink);



    const newThink = new FinalThink({
        id:req.body.id,
        name:req.body.name,
        office:req.body.office,
        think:tempThink,
    });
 
    newThink.save().then(finalthink=>res.json(finalthink));

 
 });

 module.exports = router;
