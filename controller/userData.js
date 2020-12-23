const mongoose = require('mongoose')
const User = require("../models/userModel")

const userdata = async(req,res)=>{
    let data;
    try{
        data = await User.find()
    }
    catch(err){
        data = {'error':err}
    }
    res.send( data )
}

module.exports = userdata
