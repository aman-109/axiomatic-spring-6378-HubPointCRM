const express = require("express");
let router = express.Router();

const userRoute = require("../controller/auth");
const passport = require("../utils/googleOAuth");
const googleRoute=require("../controller/gAuth")

router
  .get("/user", userRoute.getUser)
  .post("/user/signup", userRoute.signupUser)
  .post("/user/login", userRoute.loginUser)
  .get("/user/auth/google",passport.authenticate('google', { scope: ['profile','email'] }))
  .get("/user/auth/google/callback", passport.authenticate('google', { failureRedirect: '/login', session:false }),googleRoute.google)
  
module.exports = router;
