const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const SessionSchema = new Schema({

        name:{
            type:String,
            required:true
        },

        office:{
            type:String,
            required:true,
        },

        data:{
            type:[String],
            required:true
        }
});

module.exports=Session=mongoose.model('session',SessionSchema); 