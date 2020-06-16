const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const teacherSchema = new Schema({

    mandal: {
        type: String,
        requried: true
    },
    school: {
        type: String,
        requried: true
    },
    name : {
        type: String,
        required: true
    },
    
    designation : {
        type: String,
        required: true
    },
    dob : {
        type: String,
        required: true
    },
    dojs : {
        type: String,
        required: true
    },
    retirementAge : { 
        type: Number,
    },
    dor : {
        type: String,
        required: true
    },
    gender : {
        type: String,
        required : true
    },
    photo : {
        type : String,
        requried: true
    },
    subjects : {
        type : String,
        required: true
    },
    moleone : {
        type : String
    },
    moletwo : {
        type : String
    }
})

module.exports = mongoose.model('Teacher', teacherSchema)