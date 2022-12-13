const express = require('express')
let router = express.Router()


const userRoute=require("../controller/dummy")

router
.get("/user",userRoute.getUser)




module.exports=router