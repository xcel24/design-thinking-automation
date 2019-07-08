const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const FeelSchema = new Schema({
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
    feel:{
        type:[String],
        required:true
    }
});



module.exports=Think=mongoose.model('feel',FeelSchema);