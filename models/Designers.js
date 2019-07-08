const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const DesignerSchema = new Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    office:{
        type:String,
        required:true
    }
});

module.exports=Designer=mongoose.model('designers',DesignerSchema);