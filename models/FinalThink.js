const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const FinalThinkSchema = new Schema({
    id:{
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
    },
    key:{
        type:String,
    }
});



module.exports=FinalThink=mongoose.model('finalthink',FinalThinkSchema);