const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const InterviewSchema = new Schema({

        question:{
            type:String,
            required:true
        },

        answer:{
            type:String,
            required:true         
        }
});

module.exports=Interview=mongoose.model('interview',InterviewSchema); 