const UserAcc = require("../models/userAccount")

const addUserAcc = (req,res)=>{
    let useracc = UserAcc({
        name:req.body.name,
        accno:req.body.accno,
        email:req.body.email,
        password:req.body.password,
        major:req.body.major
    })

    useracc.save((err,saved)=>{
        if(err){
            return res.status(400).json({
                message:"failed to add data"
            })
        }
        else{
            return res.status(200).json({
                message:"Data uploaded",
                saved
            })
        }
    })
}

module.exports = addUserAcc