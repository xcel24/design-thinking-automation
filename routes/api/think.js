const express = require('express');
const router = express.Router();
const querystring = require('querystring');

router.use(express.json());

//Import Think Model
const Think = require('../../models/Think');


//Defining Routes

//@route GET api/items
// Get all items
//Acess :Public
router.get('/',(req,res)=>{
    Think.find()
        .then(think=>res.json(think))
 
});


//Find One
router.get('/:name',(req,res)=>{
        Think.findOne({name:req.params.name})
        .then(think=>res.send(think))
        .catch(err=>res.status(404).json({success:false}))
 });

//@route POST api/items
// Add  items
//Acess :Public
router.post('/',(req,res)=>{

    console.log(req.body);

    var tempThink = JSON.stringify(req.body.think);
    var tempFeel = JSON.stringify(req.body.feel);
    var tempSay = JSON.stringify(req.body.say);
    var tempDo = JSON.stringify(req.body.do);

    //tempThink = JSON.stringify(tempThink);
  
    //console.log('After Stringify',tempThink);

    tempThink = JSON.parse(tempThink);
    tempFeel = JSON.parse(tempFeel);
    tempSay = JSON.parse(tempSay);
    tempDo = JSON.parse(tempDo);
    //console.log('After Parsing',tempThink);



    const newThink = new Think({
        project:req.body.project,
        name:req.body.name,
        office:req.body.office,
        think:tempThink,
        feel:tempFeel,
        say:tempSay,
        do:tempDo
    });
 
    newThink.save().then(think=>res.json(think));

 
 });

 module.exports = router;
