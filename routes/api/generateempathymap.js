const express = require('express');
const router = express.Router();

//Import different Models
const Think = require('../../models/Think');
const Feel = require('../../models/Feel');

//Defining Routes

//@route GET api/items
// Get all thinks items
//Acess :Public
router.get('/think',(req,res)=>{
    Think.find()
        .then(think=>res.json(think))
});

router.get('/feel',(req,res)=>{
    Feel.find()
        .then(feel=>res.json(feel))
});

module.exports = router;