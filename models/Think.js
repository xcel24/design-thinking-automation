const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ThinkSchema = new Schema({
    project:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    office:{
        type:String,
        required:true
    },
    think:{
        type:[String],
        required:true
    }
    ,
    feel:{
        type:[String],
        required:true
    }
    ,
    say:{
        type:[String],
        required:true
    }
    ,
    do:{
        type:[String],
        required:true
    }
});



module.exports=Think=mongoose.model('think',ThinkSchema);