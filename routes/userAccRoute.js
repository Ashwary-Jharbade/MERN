const express = require('express')

const useracc = require("../controller/userAccCont")

const useraccroute = express.Router()
useraccroute.post('/useraccount',useracc)

module.exports = useraccroute