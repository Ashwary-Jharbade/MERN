const express = require('express')

const route  = express.Router()

const method1 = require("../controller/example")
const method2 = require("../controller/sum")

route.get('/ex',method1)
route.get('/sum',method2)

module.exports = route