const mongoose  = require('mongoose')

const userAccInfo = mongoose.Schema({
    name : {
        type:String,
        maxlength:50,
        required:true,
        trim:true
    },
    accno:{
        type:Number,
        unique : true,
        required:true
    },
    email : {
        type:String,
        required:true,
        unique : true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    major:{
        type:Boolean,
        required:true
    }
})

const userAcc = mongoose.model("UserAcountInfo",userAccInfo)

module.exports = userAcc