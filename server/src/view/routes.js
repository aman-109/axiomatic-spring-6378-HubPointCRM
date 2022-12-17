const express = require("express");
let router = express.Router();

const userRoute = require("../controller/auth");
const passport = require("../utils/googleOAuth");
const googleRoute = require("../controller/gAuth");
const facebookRoute = require("../controller/fAuth");
const productRoute = require("../controller/product");

//middleware
const middleware = require("../middlewares/middleware");

router
  .get("/user", userRoute.getUser)
  .post("/user/signup", userRoute.signupUser)
  .post("/user/login", userRoute.loginUser)
  .get("/user/logout", userRoute.logoutUser)
  .post("/user/verify-otp", userRoute.verifyEmail)
  .post("/user/reset-password", userRoute.forgetPassword)
  .get("/user/refresh-token", userRoute.getRefreshToken)
  .get(
    "/user/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  )
  .get(
    "/user/auth/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/user/login",
      session: false,
    }),
    googleRoute.google
  )
  .get(
    "/user/auth/facebook",
    passport.authenticate("facebook")
  )
  .get(
    "/user/auth/facebook/callback",
    passport.authenticate('facebook', { failureRedirect: '/user/login',session:false}),
    facebookRoute.facebook
  )
  .get("/products",  productRoute.getAllProduct)
  .get("/products/:id", productRoute.getSingleProduct);

module.exports = router;
