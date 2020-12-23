const express = require('express')
const userData = require("../controller/userData")

const userRoute = express.Router()

userRoute.get('/userdata',userData)

module.exports = userRoute