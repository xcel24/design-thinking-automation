const express = require('express');
const router = express.Router();
const querystring = require('querystring');

router.use(express.json());

//Import Think Model
const Feel = require('../../models/Feel');


//Defining Routes

//@route GET api/items
// Get all items
//Acess :Public
router.get('/',(req,res)=>{
    Feel.find()
        .then(feel=>res.json(feel))
 
});




//@route POST api/items
// Add  items
//Acess :Public
router.post('/',(req,res)=>{

    console.log(req.body);

    var tempFeel = JSON.stringify(req.body.feel);

    //tempThink = JSON.stringify(tempThink);
  
    //console.log('After Stringify',tempThink);

    tempFeel = JSON.parse(tempFeel);
    //console.log('After Parsing',tempThink);



    const newFeel = new Feel({
        id:req.body.id,
        name:req.body.name,
        office:req.body.office,
        feel:tempFeel
    });
 
    newFeel.save().then(feel=>res.json(feel));

 
 });

 module.exports = router;
