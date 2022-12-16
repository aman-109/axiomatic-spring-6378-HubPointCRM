const express = require("express");
let router = express.Router();

const userRoute = require("../controller/auth");
const passport = require("../utils/googleOAuth");
const googleRoute = require("../controller/gAuth");
const productRoute = require("../controller/product");

//middleware
const middleware = require("../middlewares/middleware");

router
  .get("/user", userRoute.getUser)
  .post("/user/signup", userRoute.signupUser)
  .post("/user/login", userRoute.loginUser)
  .get("/user/logout", userRoute.logoutUser)
  .get("/user/refresh-token", userRoute.getRefreshToken)
  .get(
    "/user/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  )
  .get(
    "/user/auth/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/login",
      session: false,
    }),
    googleRoute.google
  )
  .get("/products", productRoute.getAllProduct)
  .get("/products/:id", productRoute.getSingleProduct)
  .get("/products/add-product/:id", productRoute.addProd);

module.exports = router;
