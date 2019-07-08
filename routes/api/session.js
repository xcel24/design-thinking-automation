const express = require('express');
const router = express.Router();
const querystring = require('querystring');

router.use(express.json());

//Import Session Model
const Session = require('../../models/Session');


//Defining Routes

//@route GET api/items
// Get all items
//Acess :Public
router.get('/:name/:office',(req,res)=>{
    console.log(req.params.name,req.params.office);
    Session.find({name:req.params.name}).
            where('office').equals(req.params.office)
        .then(session=>res.json(session))
 
});




//@route POST api/items
// Add  items
//Acess :Public
router.post('/',(req,res)=>{

    console.log(req.body);

    var sessionData = JSON.stringify(req.body.data);

    //tempThink = JSON.stringify(tempThink);

    console.log('After Stringify',sessionData);

    sessionData = JSON.parse(sessionData);
    console.log('After Parsing',sessionData);



    const newSession = new Session({
        name:req.body.name,
        office:req.body.office,
        data:sessionData
    });

    newSession.save().then(session=>res.json(session));


});

 module.exports = router;
